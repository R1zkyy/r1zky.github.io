import React from 'react';

const Achievements = () => {
    return (
        <section className="dossier-section" data-section-id="ACH.CLASSIFIED">
            <div className="section-narrative">
                <span className="narrative-log">PERFORMANCE EVALUATION. // RECORDING ELITE-CLASS RECOGNITIONS AND METRICS.</span>
                <span className="narrative-count">TOTAL RECORDS: [2]</span>
            </div>
            <h2 className="bracket-header"><span>ACHIEVEMENTS</span>_LOG</h2>

            <div className="data-card">
                <div className="data-card-header">
                    <div>
                        <h3 className="data-card-title">BEST SOCIAL TECHNOLOGY DEVELOPMENT PROGRAM AWARD</h3>
                        <span className="badge">AWARD</span>
                        <span className="badge cyan">IEEE INDONESIA SECTION</span>
                    </div>
                </div>
            </div>

            <div className="data-card">
                <div className="data-card-header">
                    <div>
                        <h3 className="data-card-title">FINALIS PENS ELITE</h3>
                        <span className="badge">FINALIST</span>
                        <span className="badge cyan">KATEGORI MASTER OF CEREMONY (MC)</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
