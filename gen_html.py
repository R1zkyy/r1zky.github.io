import json
with open('media_list.json', 'r') as f:
    files = json.load(f)

html = '<html><body style="background: white; padding: 50px;"><h1>Certificates Index</h1>'
for i, name in enumerate(files):
    path = f'file:///C:/Users/Unknown/.gemini/antigravity/brain/faf9e029-48c6-4475-aad6-6023e1f9ce73/{name}'
    html += f'<div style="margin-bottom: 50px; font-family: sans-serif;"><h2>Index {i}: {name}</h2><img src="{path}" height="400" style="border: 2px solid #ccc;"/></div>'
html += '</body></html>'

with open('inspect.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('Generated inspect.html')
