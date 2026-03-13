import React from 'react';

const Experience = () => {
    const divisions = {
        "PROJECT LEADER": [
            {
                role: "Ketua Pelaksana",
                event: "International Webinar 'Unlock Global Potential...'",
                date: "18 Oktober 2025",
                details: ["Memimpin jalannya acara taraf internasional", "Koordinasi dengan stakeholder dan pembicara global"]
            },
            {
                role: "PIC",
                event: "Career Roadmap: Navigating the AI Engineering Landscape",
                date: "27 Februari 2026",
                details: ["Person-in-Charge of the career roadmap event", "Organized speakers, rundown, and event flow"]
            },
            {
                role: "PIC",
                event: "Data Science 101: Taking Your First Steps in the World of Data",
                date: "6 Maret 2026",
                details: ["Person-in-Charge of the data science 101 event", "Organized speakers, rundown, and event flow"]
            },
            {
                role: "PIC",
                event: "GCP Automation: Let the Cloud Do It For You",
                date: "13 Maret 2026",
                details: ["Person-in-Charge of the GCP Automation event", "Organized speakers, rundown, and event flow"]
            }
        ],
        "MASTER OF CEREMONY (MC)": [
            {
                role: "Master of Ceremony",
                event: "Navigasi Karir",
                date: "Juni 2025",
                details: ["Memandu acara dan menjaga interaksi peserta"]
            },
            {
                role: "Master of Ceremony",
                event: "LKMM TD PENS 2025",
                date: "Mei 2025",
                details: ["Memandu acara resmi mahasiswa tingkat dasar", "Menjaga antusiasme peserta"]
            }
        ],
        "EVENT DIVISION": [
            {
                role: "Stage Director",
                event: "Reuni 40th SMPN 2 Surabaya",
                date: "7 Desember 2025",
                details: ["Mengatur jalannya panggung dan acara", "Koordinasi dengan pengisi acara"]
            },
            {
                role: "Sound Director",
                event: "SSHM RUN 2025",
                date: "1-3 Agustus 2025",
                details: ["Bertanggung jawab atas kualitas audio sepanjang acara", "Manajemen perlengkapan sound system"]
            },
            {
                role: "Timekeeper",
                event: "Berbagi Kebahagiaan 2025 FKMPI Jatim",
                date: "Maret 2025",
                details: ["Memastikan timeline acara berjalan sesuai rundown"]
            },
            {
                role: "Lighting Director, Skenario, LPJ",
                event: "Pre-Competition Concert PENS Students Choir",
                date: "Agustus 2024",
                details: ["Desain pencahayaan panggung", "Penyusunan naskah acara dan Laporan Pertanggungjawaban"]
            },
            {
                role: "Liaison Officer (LO)",
                event: "LKMM Pra Tingkat Dasar",
                date: "Oktober 2024",
                details: ["Mendampingi peserta selama kegiatan", "Memastikan kebutuhan peserta terpenuhi"]
            }
        ],
        "HEALTH DIVISION": [
            {
                role: "Anggota Divisi Kesehatan",
                event: "Surabaya Fun Run 2025",
                date: "2025",
                details: ["Memberikan pertolongan pertama pada peserta lari", "Manajemen pos kesehatan"]
            }
        ],
        "SAFETY DIVISION": [
            {
                role: "Anggota Divisi Keamanan",
                event: "Chibicon 9",
                date: "Desember 2025",
                details: ["Mengendalikan massa dan alur pengunjung", "Menjaga ketertiban area event"]
            },
            {
                role: "Anggota Divisi Keamanan",
                event: "Chibicon! 7",
                date: "Juni 2025",
                details: ["Mengendalikan massa dan alur pengunjung", "Menjaga ketertiban area event"]
            }
        ]
    };

    return (
        <section className="dossier-section" data-section-id="EXP.DIVISIONS">
            <h2 className="bracket-header"><span>FIELD</span>_EXPERIENCE</h2>

            {Object.entries(divisions).map(([divisionName, events], idx) => (
                <div className="division-section" key={idx}>
                    <h3 className="division-header">DIV.{divisionName}</h3>

                    <div className="division-events">
                        {events.map((exp, index) => (
                            <div className="event-item" key={index}>
                                <div className="event-meta">
                                    <div className="event-date">{exp.date}</div>
                                    <div className="event-role">{exp.role}</div>
                                </div>
                                <div className="event-body">
                                    <h4>{exp.event}</h4>
                                    <ul>
                                        {exp.details.map((detail, dIdx) => (
                                            <li key={dIdx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Experience;
