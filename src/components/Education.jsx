import React from 'react';

const Education = () => {
    return (
        <section className="dossier-section" data-section-id="EDU.RECORD">
            <div className="section-narrative">
                <span className="narrative-log">PERSONNEL TRAINING. // EXTRACTING ACADEMIC CALIBRATION LOGS.</span>
                <span className="narrative-count">TOTAL RECORDS: [3]</span>
            </div>
            <h2 className="bracket-header"><span>EDUCATION</span>_LOG</h2>

            <div className="data-card">
                <div className="data-card-header">
                    <div>
                        <h3 className="data-card-title">POLITEKNIK ELEKTRONIKA NEGERI SURABAYA (PENS)</h3>
                        <span className="badge">DIPLOMA</span>
                        <span className="badge cyan">TEKNIK MEKATRONIKA</span>
                    </div>
                    <div className="data-card-date">
                        SEMESTER 6 - CURRENT
                    </div>
                </div>
            </div>

            <div className="data-card">
                <div className="data-card-header">
                    <div>
                        <h3 className="data-card-title">SMK MIGAS CEPU</h3>
                        <span className="badge">VOCATIONAL</span>
                        <span className="badge">ELEKTRONIKA INDUSTRI</span>
                    </div>
                    <div className="data-card-date">
                        2020 - 2023
                    </div>
                </div>
            </div>

            <div className="data-card">
                <div className="data-card-header">
                    <div>
                        <h3 className="data-card-title">SMPN 2 SIDOARJO</h3>
                        <span className="badge">JUNIOR HIGH</span>
                    </div>
                    <div className="data-card-date">
                        2017 - 2020
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
