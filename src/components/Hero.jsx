import React from 'react';

const Hero = () => {
  return (
    <section className="dossier-section" data-section-id="SYS.INIT">
      <div className="bracket-header glitch" data-text="M. RIZKY PRATAMA">
        M. RIZKY <span>PRATAMA</span>
      </div>
      
      <div className="data-card">
        <div className="data-card-header">
          <div>
            <h3 className="data-card-title">SUBJECT CLASSIFICATION</h3>
            <span className="badge">STUDENT</span>
            <span className="badge cyan">MECHATRONICS ENGINEERING</span>
          </div>
          <div className="data-card-date">
            LOCATION: CANDI SIDOARJO, JATIM, ID<br/>
            STATUS: ACTIVE / SEMESTER 6
          </div>
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <p style={{ marginBottom: '10px' }}>
            <strong>[PROFILE_SUMMARY]</strong> Mahasiswa semester 6 jurusan Mekatronika di Politeknik Elektronika Negeri Surabaya (PENS) dengan pengalaman luas dalam kepanitiaan acara baik di dalam maupun di luar kampus.
          </p>
          <ul className="data-list">
            <li><strong>CONTACT.EMAIL:</strong> mrizky2pratama3@gmail.com</li>
            <li><strong>CONTACT.PHONE:</strong> +6288217776891</li>
            <li><strong>SKILL.CORE:</strong> Kerjasama tim, Manajemen Waktu, Kepemimpinan, Kreativitas, Komunikasi Efektif, Berpikir Kritis, Inovasi, Problem Solving</li>
            <li><strong>LANGUAGE:</strong> Indonesia (NATIVE), Inggris (KIO English Exam: 82.5)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
