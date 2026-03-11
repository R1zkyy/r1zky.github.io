const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;

let code = fs.readFileSync('src/App.jsx', 'utf8');

const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx']
});

function parseDate(dStr) {
    if (!dStr) return 0;
    if (/Present|CURRENT/i.test(dStr)) return Date.now() + 10000000000;
    const yearMatch = dStr.match(/\b(20\d{2})\b/);
    let year = yearMatch ? parseInt(yearMatch[1], 10) : 0;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let month = 0;
    for (let i = 0; i < months.length; i++) {
        if (dStr.includes(months[i])) { month = i; break; }
    }
    if (year) return new Date(year, month, 1).getTime();
    return 0;
}

function getPropValue(objExpr, propName) {
    const prop = objExpr.properties.find(p => p.key && p.key.name === propName);
    if (!prop) return null;
    if (prop.value.type === 'StringLiteral') return prop.value.value;
    return null;
}

// 1. Sort arrays
traverse(ast, {
    VariableDeclarator(path) {
        const name = path.node.id.name;
        if (['PROJECTS', 'ACHIEVEMENTS', 'ORGS', 'INTERNSHIPS'].includes(name)) {
            if (path.node.init.type === 'ArrayExpression') {
                const elements = path.node.init.elements;
                elements.sort((a, b) => {
                    let dateProp = ['PROJECTS', 'ACHIEVEMENTS'].includes(name) ? 'date' : 'period';
                    let aDate = getPropValue(a, dateProp);
                    let bDate = getPropValue(b, dateProp);
                    return parseDate(aDate) - parseDate(bDate);
                });
            }
        }
        if (name === 'DIVISIONS') {
            if (path.node.init.type === 'ArrayExpression') {
                path.node.init.elements.forEach(div => {
                    const eventsProp = div.properties.find(p => p.key && p.key.name === 'events');
                    if (eventsProp && eventsProp.value.type === 'ArrayExpression') {
                        eventsProp.value.elements.sort((a, b) => {
                            let aDate = getPropValue(a, 'date');
                            let bDate = getPropValue(b, 'date');
                            return parseDate(aDate) - parseDate(bDate);
                        });
                    }
                });
            }
        }
    }
});

// Generate code back (which might mess up formatting, so we ONLY use AST for generating the arrays back, OR we just let Babel regenerate the whole file and then we'll format it with eslint or prettier).
let sortedCode = generator(ast, { retainLines: false }).code;
fs.writeFileSync('src/App.jsx.temp', sortedCode);
