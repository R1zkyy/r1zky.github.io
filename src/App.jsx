import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import imgFinalisMc from './assets/finalis-mc.png';
import imgMcFpc from './assets/mc-fpc.jpg';
import imgMcFpwp from './assets/mc-fpwp.jpg';
import imgLkmmTd from './assets/lkmm-td.jpg';
import imgMcKarir from './assets/mc_karir_final.jpg';

// ─── DATA ────────────────────────────────────────────────────────────────────

const DIVISIONS = [
  {
    tag: '01', name: 'Project Leader',
    events: [
      {
        role: 'Project Leader (Ketua Pelaksana)',
        title: 'International Webinar — "Unlock Global Potential: Experience Studying on a Prestigious Campus with International Students"',
        date: 'Oct 18, 2025',
        details: ['Led an international-scale webinar event', 'Coordinated stakeholders & global speakers'],
        img: '/certs/unlock_global.jpg',
        imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } }
      },
      {
        role: 'PIC',
        title: 'Career Roadmap: Navigating the AI Engineering Landscape',
        date: 'Feb 27, 2026',
        details: ['Person-in-Charge of the career roadmap event', 'Organized speakers, rundown, and event flow'],
        img: '/certs/career_roadmap.jpg',
        imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } }
      },
      {
        role: 'PIC',
        title: 'Data Science 101: Taking Your First Steps in the World of Data',
        date: 'Mar 6, 2026',
        details: ['Person-in-Charge of the data science 101 event', 'Organized speakers, rundown, and event flow'],
        img: '/certs/data_science.jpg',
        imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } }
      }
    ]
  },
  {
    tag: '02', name: 'Master of Ceremony',
    events: [
      { role: 'MC', title: 'PKKMB × TECHNOGEAR 2024', date: 'Aug 12–17, 2024', details: ['Facilitated official student orientation event'], img: '/certs/mc_pkkmb.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center top' } } },
      { role: 'MC', title: 'Serah Terima Jabatan Mekatronika 2024/2025', date: 'Sep 19, 2024', details: ['Hosted the official handover ceremony for Mekatronika student leadership 2024/2025'], img: '/certs/mc_sertijab.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center top' } } },
      { role: 'MC', title: 'FPWP Mekatronika 2024', date: 'Oct 4, 2024', details: ['Hosted FPWP (Ekspresi Kreasi Teknik Mekatronika) event'], img: imgMcFpwp, imgOptions: { hoverPop: true } },
      { role: 'MC', title: 'LKMM TD PENS 2025', date: 'May 15–17, 2025', details: ['Hosted official student leadership training', 'Maintained participant engagement'], img: imgLkmmTd, imgOptions: { hoverPop: true } },
      { role: 'MC', title: 'Navigasi Karir', date: 'Jun 14, 2025', details: ['Facilitated a career navigation event & audience interaction'], img: imgMcKarir, imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'MC', title: 'Final Project Competition 2025', date: 'Jul 1–3, 2025', details: ['Hosted the main stage for final project presentations', 'Guided audience through 3-day competition'], img: imgMcFpc, imgOptions: { hoverPop: true } }
    ]
  },
  {
    tag: '03', name: 'Event Division',
    events: [
      { role: 'Operator', title: 'Final Project Competition 2024', date: 'Jul 9–11, 2024', details: ['Operated technical event systems', 'Coordinated event flow with the committee'], img: '/certs/fpc2024_photo.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center top' } } },
      { role: 'Lighting Director, Scenario & LPJ', title: 'Pre-Competition Concert — PENS Students Choir (Surabaya World Choir Festival 2024)', date: 'Aug 31, 2024', details: ['Designed stage lighting', 'Wrote event scenario and final accountability report (LPJ)'], img: '/certs/final_upload4.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'Timekeeper', title: 'Berbagi Kebahagiaan 2025 — FKMPI Jawa Timur', date: 'Mar 25, 2025', details: ['Ensured event timeline adhered precisely to the rundown'], img: null },

      { role: 'Sound Director', title: 'SSHM RUN 2025', date: 'Aug 1–3, 2025', details: ['Managed audio quality & sound system for the run event'], img: '/certs/sshm_run_photo.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center top' } } },
      { role: 'Stage Director', title: 'Reuni 40th SMPN 2 Surabaya', date: 'Dec 7, 2025', details: ['Managed stage flow & show timing', 'Coordinated performers & crew'], img: '/certs/reuni_smpn2.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center top' } } }
    ]
  },
  {
    tag: '04', name: 'Equipment Division',
    events: [
      { role: 'Equipment Staff', title: 'Chibicon!', date: 'Apr 20–21, 2024', details: ['Managed equipment setup, logistics & teardown for the event'], img: '/certs/chibicon1_photo.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center top' } } },
      { role: 'Equipment Staff', title: 'Flutter Fusion Conference — The Vibe: Connection and Community', date: 'Feb 21, 2026', details: ['Managed equipment setup and logistics for the Flutter community conference'], img: '/certs/flutter_fusion.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center top' } } }
    ]
  },
  {
    tag: '05', name: 'Health Division',
    events: [
      {
        role: 'Health Division Member', title: 'Surabaya Fun Run 2025', date: 'Oct 5, 2025',
        details: ['Provided first aid for run participants', 'Managed medical post operations'], img: '/certs/fun_run_photo.jpg',
        imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } }
      }
    ]
  },
  {
    tag: '06', name: 'Safety Division',
    events: [
      { role: 'Safety Division Member', title: 'Chibicon! 7', date: 'Jun 21–22, 2025', details: ['Crowd & visitor flow control', 'Maintained event area order'], img: '/certs/chibicon7_photo.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center top' } } },
      { role: 'Safety Division Member', title: 'Chibicon 9', date: 'Dec 27–28, 2025', details: ['Crowd & visitor flow control', 'Maintained event area order'], img: '/certs/chibicon9_photo.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } }
    ]
  },
  {
    tag: '07', name: 'Liaison Officer',
    events: [
      { role: 'Liaison Officer', title: 'LKMM Pra Tingkat Dasar', date: 'Oct 25–27, 2024', details: ['Accompanied & assisted participants throughout the event'], img: '/certs/lkmm_pra_td_photo.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } }
    ]
  },
  {
    tag: '08', name: 'Certificates',
    events: [
      { role: 'Equipment Staff', title: 'Chibicon!', date: 'Apr 20–21, 2024', details: [], img: '/certs/chibicon_1.png', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'Operator', title: 'Final Project Competition 2024', date: 'Jul 9–11, 2024', details: [], img: '/certs/fpc_2024.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'MC', title: 'PKKMB × TECHNOGEAR 2024', date: 'Aug 12–17, 2024', details: [], img: '/certs/pkkmb_technogear.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'Lighting Director, Scenario & LPJ', title: 'Pre-Competition Concert — PENS Students Choir', date: 'Aug 31, 2024', details: [], img: '/certs/pre_comp.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'Liaison Officer', title: 'LKMM Pra Tingkat Dasar', date: 'Oct 25–27, 2024', details: [], img: '/certs/lkmm_pra_td.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'Timekeeper', title: 'Berbagi Kebahagiaan 2025 — FKMPI Jawa Timur', date: 'Mar 25, 2025', details: [], img: '/certs/berbagi_kebahagiaan.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'MC', title: 'Navigasi Karir', date: 'Jun 14, 2025', details: [], img: '/certs/navigasi_karir.png', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'Safety Division Member', title: 'Chibicon! 7', date: 'Jun 21–22, 2025', details: [], img: '/certs/chibicon_7.png', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'Event Staff', title: 'Final Project Competition 2025', date: 'Jul 1–3, 2025', details: [], img: '/certs/fpc_2025.png', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'Project Leader (Ketua Pelaksana)', title: 'International Webinar IEEE', date: 'Oct 18, 2025', details: [], img: '/certs/ieee_webinar.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'Safety Division Member', title: 'Chibicon 9', date: 'Dec 27–28, 2025', details: [], img: '/certs/chibicon_9.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
      { role: 'Sound Director', title: 'SSHMRun 2025', date: 'Aug 1–3, 2025', details: [], img: '/certs/sshm_run.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } }
    ]
  },
  {
    tag: '09', name: 'Design',
    events: [
      {
        role: 'Design', title: 'Digital Design', date: '', details: [], img: null,
        links: [
          { label: 'View Process 1 ↗', url: 'https://www.instagram.com/p/COF5M3AJ-VX/embed/' },
          { label: 'View Process 2 ↗', url: 'https://www.instagram.com/p/CT0526CJDXN/embed/' },
          { label: 'View Process 3 ↗', url: 'https://www.instagram.com/p/DVI6WuPE5iF/embed/' }
        ]
      },
      {
        role: 'Design', title: 'Product Design', date: '', details: [], img: null,
        links: [
          { label: 'View Details 1 ↗', url: 'https://www.instagram.com/p/DRUOkcSE0Ut/embed/' },
          { label: 'View Details 2 ↗', url: 'https://www.instagram.com/p/DVN3pEsk3K-/embed/' },
          { label: 'View Details 3 ↗', url: 'https://www.instagram.com/p/DVSnrYwE7EY/embed/' }
        ]
      }
    ]
  }
];

const PROJECTS = [
  { title: 'CNC-Based Project', date: 'Feb–May 2024', desc: 'Precision component design using CNC technology with WinMax & CAD/CAM.', tech: 'Winmax, CNC Haas Mill VF3', color: 'c-steel', icon: '⚙️', img: '/certs/cnc_based.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
  { title: 'Scoring Board', date: 'Aug–Dec 2024', desc: 'Electronic scoring board with dual 7-segment displays and potentiometer-based score control, housed in a transparent acrylic enclosure. Designed for real-time score tracking in competition events.', tech: 'Electronics, PCB Design, Acrylic Fabrication', color: 'c-steel', icon: '🎯', img: '/certs/scoring_board.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
  { title: 'Workshop 3D: Making Urban Toys', date: 'Sept–Oct 2024', desc: '3D design & printing workshop focused on crafting urban-themed toys.', tech: 'Blender', color: 'c-lime', icon: '🎮', img: '/certs/workshop_3d.png', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
  { title: 'CNC Machine Control System', date: 'Dec 2024', desc: 'Innovative CNC machine control system integrated with Autodesk Inventor.', tech: 'Autodesk Inventor', color: 'c-dark', icon: '💻', img: '/certs/cnc_machine.png', imgOptions: { hoverPop: true, style: { objectFit: 'contain', objectPosition: 'center', background: '#e8f0fb' } } },
  { title: 'RTSS — Robot Tangan Satu Sendi', date: 'Feb–May 2025', desc: 'Single-joint robotic arm system simulated and designed for mechanical analysis and control.', tech: 'Proteus, Inventor', color: 'c-steel', icon: '🤖', img: '/certs/final_upload3.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
  { title: 'PID Analog', date: 'May–Jun 2025', desc: 'Analog PID-based DC motor speed control system. Maintains motor speed at setpoint by adjusting input voltage using Proportional-Integral-Derivative control.', tech: 'Proteus, Inventor', color: 'c-lime', icon: '🔧', img: '/certs/pid_analog.png', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
  { title: 'CNC Plotter', date: 'Aug–Dec 2025', desc: 'Computer-controlled 2D plotting machine that draws patterns on paper, plastic, or PCB using G-code from digital designs.', tech: 'Visual Studio Code, Inventor', color: 'c-dark', icon: '✏️', img: '/certs/final_upload1.png', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } },
  { title: 'Balancing Bot', date: 'Aug–Dec 2025', desc: 'Self-balancing robot utilizing PID control and sensor fusion for real-time dynamic balance.', tech: 'Inventor, Eagle, Proteus', color: 'c-steel', icon: '🤖', img: '/certs/final_upload2.png', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center' } } }
];

const ACHIEVEMENTS = [
  {
    eyebrow: 'PENS ELITE Competition',
    title: 'Finalist — Master of Ceremony Category',
    org: 'Politeknik Elektronika Negeri Surabaya',
    accent: false, icon: '🎤',
    img: imgFinalisMc,
    href: 'https://www.instagram.com/p/DRl-B1jEjSC/?hl=id&img_index=7',
    imgOptions: { hoverPop: true, style: { objectPosition: '70% 30%' } }
  },
  {
    eyebrow: 'Kampung Inggris Online',
    title: 'Very Good — English Skill',
    org: 'LKP Kampung Inggris Online',
    accent: false, icon: '🎓',
    img: '/certs/new_cert5.png',
    imgOptions: { hoverPop: true, style: { objectPosition: 'center', objectFit: 'cover' } }
  }
];

const ORGS = [
  { name: 'IEEE Student Branch PENS', role: 'Program & Activities', period: '2025 – 2026', href: 'https://www.instagram.com/ieeesbpens/?hl=id' },
  { name: 'GDGoC PENS', role: 'Event Manager', period: '2025 – 2026', href: 'https://www.instagram.com/gdgoc.pens/?hl=id' },
  { name: 'Komunitas Sahabat Bahasa PENS', role: 'Daily Operations Committee Staff', period: '2025 – 2027', href: 'https://www.instagram.com/sahabatbahasapens/?hl=id' },
  { name: 'BluAmbassador East Java', role: 'Member', period: '2025 – 2027', href: 'https://www.instagram.com/blubybcadigital/?hl=id' }
];

const INTERNSHIPS = [
  { company: 'PT Semen Indonesia (Persero) Tbk.', role: 'Maintenance Division — Praktik Kerja Lapangan', period: 'Jul – Sep 2022', desc: 'Sertifikat PKL · No. 0000796/HM.10/STF/50056664/2000/10.2022 · Tuban, 24 Oktober 2022', href: null, img: '/certs/sig_cert.jpg', imgOptions: { hoverPop: true, style: { objectFit: 'cover', objectPosition: 'center top' } } },
  { company: 'PT PAL Indonesia', role: 'Design Division', period: 'Jan – May 2026', desc: null, href: null }
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function PhotoSlot({ src, alt = '', className = '', imgOptions }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const handleScroll = () => {
      setIsHovered(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered]);

  const popVisible = isHovered && imgOptions?.hoverPop;

  return (
    <div
      className={`photo-slot ${className} ${imgOptions?.hoverPop ? 'has-zoom' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {src
        ? (
          <>
            <img src={src} alt={alt} className="photo-slot-img" style={imgOptions?.style || {}} />
            {imgOptions?.hoverPop && popVisible && ReactDOM.createPortal(
              <div className="photo-hover-pop is-visible">
                <img src={src} alt={alt} />
              </div>,
              document.body
            )}
          </>
        )
        : (
          <div className="photo-slot-empty" aria-label="Photo placeholder">
            <span className="photo-slot-icon">📷</span>
            <span className="photo-slot-label">Photo</span>
          </div>
        )
      }
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.documentElement.style.setProperty('--mouse-x', x);
      document.documentElement.style.setProperty('--mouse-y', y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="ambient-glow glow-1" aria-hidden="true" />
      <div className="ambient-glow glow-2" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      {/* ── HEADER ── */}
      <header className="header">
        <div className="header-brand">
          <span className="header-brand-dot" />
          R1ZKY
        </div>
        <nav className="header-nav">
          {[['Profile', '#profile'], ['Network', '#network'], ['Experience', '#experience'], ['Projects', '#projects'], ['Achievements', '#achievements'], ['Internship', '#internship']].map(([l, h]) => (
            <a key={l} href={h} className="header-nav-link">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="header-cta">Contact</a>
      </header>

      {/* ── HERO + PROFILE ── */}
      <section className="hero-profile" id="profile">
        <div className="hp-photo-col">
          <img className="hp-photo" src="/rizky.jpg" alt="M. Rizky Pratama" />
          <div className="hp-photo-overlay" />

          {/* Marathon-style Infographic HUD */}
          <div className="hp-hud-infographic">
            <div className="hud-line">
              <span className="hud-label">GRID ::</span>
              <span className="hud-value">X42 DELTA</span>
            </div>
            <div className="hud-line">
              <span className="hud-label">TRACEPOINT:</span>
              <span className="hud-value">TAU CETI IV</span>
            </div>
            <div className="hud-divider"></div>
            <div className="hud-line">
              <span className="hud-label">SYS.PULSE:</span>
              <span className="hud-value">ACTIVE</span>
            </div>
            <div className="hud-line">
              <span className="hud-label">N4-V03</span>
              <span className="hud-value">9B-XD</span>
            </div>
          </div>
        </div>

        {/* Right: identity + profile cards */}
        <div className="hp-content">
          <div className="hp-identity">
            <p className="hero-tag">Mechatronics · PENS · 6th Semester</p>
            <h1 className="hero-name">
              M. Rizky<br /><em>Pratama</em>
            </h1>
            <div className="hero-subtitle">
              <span><strong>Location</strong><b>Candi Sidoarjo, ID</b></span>
              <span><strong>Degree</strong><b>D4 Mechatronics Engineering</b></span>
              <span><strong>Status</strong><b>Active — 6th Semester</b></span>
            </div>
          </div>

          <div className="hp-profile-cards">
            {/* Bio card — label inside at top */}
            <div className="hp-card">
              <div className="section-number" style={{ marginBottom: '10px', fontSize: '0.65rem' }}>01 // PROFILE</div>
              <p className="profile-bio">
                6th-semester Mechatronics student at PENS with extensive experience in event organizing
                — from Project Leader and MC to Event, Safety, and Health divisions — at both local and international scale.
              </p>
              {/* Contact details in a 2-col info grid */}
              <div className="profile-data-grid" style={{ marginTop: '16px' }}>
                <div className="profile-datum"><span className="profile-datum-label">Full Name</span><span className="profile-datum-value">M. Rizky Pratama</span></div>
                <div className="profile-datum"><span className="profile-datum-label">Email</span><span className="profile-datum-value">mrizky2pratama3@gmail.com</span></div>
                <div className="profile-datum"><span className="profile-datum-label">Location</span><span className="profile-datum-value">Candi, Sidoarjo, East Java</span></div>
              </div>
            </div>


            {/* Skills card */}
            <div className="hp-card hp-card-accent">
              <div className="hp-card-accent-label">CORE SKILLS</div>
              <div className="skills-row" style={{ marginTop: 0 }}>
                {['Leadership', 'Time Management', 'Teamwork', 'Communication', 'Critical Thinking', 'Problem Solving', 'Creativity', 'Innovation'].map(s => (
                  <span key={s} className="skill-chip skill-chip-dark">{s}</span>
                ))}
              </div>
            </div>

            {/* Education card */}
            <div className="hp-card">
              <div className="section-number" style={{ marginBottom: '10px', fontSize: '0.65rem' }}>EDU.RECORD</div>
              <div className="edu-list">
                {[
                  { school: 'Politeknik Elektronika Negeri Surabaya', abbr: 'PENS', major: 'D4 Mechatronics Engineering', year: 'CURRENT' },
                  { school: 'SMK Migas Cepu', abbr: null, major: 'Industrial Electronics', year: '2020–2023' },
                  { school: 'SMPN 2 Sidoarjo', abbr: null, major: 'Junior High School', year: '2017–2020' }
                ].map((e, i) => (
                  <div key={i} className="edu-item">
                    <div className="edu-school">{e.school}{e.abbr && <span className="edu-abbr"> ({e.abbr})</span>}</div>
                    <div className="edu-meta"><span>{e.major}</span><b>{e.year}</b></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NETWORK ── */}
      <section className="section" id="network">
        <div className="section-number">02 // NETWORK</div>
        <h2 className="section-title">Organizations &<br /><em>Affiliations</em></h2>
        <div className="org-grid">
          {ORGS.map((o, i) => {
            const Inner = (
              <>
                <div className="org-period">{o.period}</div>
                <div className="org-name">{o.name}</div>
                <div className="org-role">{o.role}</div>
                {o.href && <span className="org-link-label">Visit ↗</span>}
              </>
            );
            return o.href
              ? <a key={i} href={o.href} target="_blank" rel="noopener noreferrer" className="org-card org-card-link">{Inner}</a>
              : <div key={i} className="org-card">{Inner}</div>;
          })}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="section" id="experience">
        <div className="section-number">03 // EXPERIENCE</div>
        <h2 className="section-title">Field<br /><em>Experience</em></h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {DIVISIONS.filter(div => div.tag !== '09').map((div, di) => (
            <div key={di} className="div-block">
              <div className="div-header">
                <span className="div-num">{div.tag}</span>
                <span className="div-name">{div.name}</span>
              </div>
              <div className="event-cards-row">
                {div.events.map((ev, ei) => (
                  <div key={ei} className="event-card">
                    <div className="event-card-hatch" />
                    <PhotoSlot src={ev.img} alt={ev.title} className="event-card-photo" imgOptions={ev.imgOptions} />
                    {ev.date && <div className="event-card-date">{ev.date}</div>}
                    <div className="event-card-role">{ev.role}</div>
                    <div className="event-card-title">{ev.title}</div>
                    <div className="event-card-details">
                      <ul>{ev.details.map((d, idx) => <li key={idx}>{d}</li>)}</ul>
                    </div>
                    {ev.href && (
                      <a href={ev.href} target="_blank" rel="noopener noreferrer" className="event-card-link-btn">
                        Visit Link ↗
                      </a>
                    )}
                    {ev.links && ev.links.length > 0 && (
                      <div className="event-card-links">
                        {ev.links.map((link, lidx) => (
                          <a key={lidx} href={link.url} target="_blank" rel="noopener noreferrer" className="event-card-link-btn dict">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section" id="projects">
        <div className="section-number">04 // PROJECTS</div>
        <h2 className="section-title">Work &<br /><em>Projects</em></h2>
        <div className="project-row">
          {PROJECTS.map((p, i) => (
            <div key={i} className="project-card">
              <div className={`project-visual ${p.color}`}>
                <div className="project-visual-corner" />
                {p.img
                  ? <PhotoSlot src={p.img} alt={p.title} className="project-visual-img" imgOptions={p.imgOptions} />
                  : <>
                    <span className="pv-title">{p.title}</span>
                    <span className="pv-icon">{p.icon}</span>
                    <div className="project-photo-placeholder">
                      <span>📷</span><span className="photo-slot-label">Photo</span>
                    </div>
                  </>
                }
              </div>
              <div className="project-info">
                <span className="project-date">{p.date}</span>
                <span className="project-title" style={{ fontSize: '1.2rem', fontWeight: 600, display: 'block', marginTop: '0.2rem', marginBottom: '0.4rem', color: 'var(--text-1)' }}>{p.title}</span>
                <span className="project-desc">{p.desc}</span>
                <span className="project-tech">{p.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESIGN ── */}
      <section className="section" id="design">
        <div className="section-number">05 // DESIGN</div>
        <h2 className="section-title">Creative<br /><em>Design</em></h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {DIVISIONS.find(d => d.tag === '09')?.events?.map((cat, i) => (
            <div key={i} className="design-category">
              <div className="div-header" style={{ marginBottom: '16px' }}>
                <span className="div-num">0{i + 1}</span>
                <span className="div-name">{cat.title}</span>
              </div>
              <div className="event-cards-row">
                {cat.links?.map((linkObj, j) => (
                  <div key={j} className="event-card" style={{ padding: 0 }}>
                    <iframe
                      src={linkObj.url}
                      width="100%"
                      height="480"
                      title={`Instagram Embed ${j}`}
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency="true"
                      style={{ border: 'none', overflow: 'hidden', background: '#fff' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="section" id="achievements">
        <div className="section-number">06 // ACHIEVEMENTS</div>
        <h2 className="section-title">Awards &<br /><em>Recognition</em></h2>
        <div className="ach-grid">
          {ACHIEVEMENTS.map((a, i) => {
            const Inner = (
              <>
                <div className="ach-card-hatch" />
                <PhotoSlot src={a.img} alt={a.title} className="ach-card-photo" imgOptions={a.imgOptions} />
                <div className="ach-eyebrow">{a.eyebrow}</div>
                <div className="ach-title">{a.title}</div>
                <div className="ach-org">{a.org}</div>
                <span className="ach-icon" aria-hidden="true">{a.icon}</span>
                {a.href && <span className="ach-link-label">Visit ↗</span>}
              </>
            );
            return a.href
              ? <a key={i} href={a.href} target="_blank" rel="noopener noreferrer" className={`ach-card ach-card-link${a.accent ? ' accent' : ''}`}>{Inner}</a>
              : <div key={i} className={`ach-card${a.accent ? ' accent' : ''}`}>{Inner}</div>;
          })}
        </div>
      </section>

      {/* ── INTERNSHIP ── */}
      <section className="section" id="internship">
        <div className="section-number">07 // INTERNSHIP</div>
        <h2 className="section-title">Work <br /><em>Experience</em></h2>
        {INTERNSHIPS.length === 0 ? (
          <div style={{ color: 'var(--mid)', fontFamily: 'var(--font-m)', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.5, paddingTop: '16px' }}>
            Coming soon — internship entries will appear here.
          </div>
        ) : (
          <div className="org-grid">
            {INTERNSHIPS.map((item, i) => {
              const Inner = (
                <>
                  <PhotoSlot src={item.img || null} alt={item.company} className="org-card-photo" imgOptions={item.imgOptions || {}} />
                  <div className="org-period">{item.period}</div>
                  <div className="org-name">{item.company}</div>
                  <div className="org-role">{item.role}</div>
                  {item.desc && <div style={{ fontSize: '0.8rem', color: 'var(--mid)', marginTop: '6px', lineHeight: 1.5 }}>{item.desc}</div>}
                  {item.href && <span className="org-link-label">Visit ↗</span>}
                </>
              );
              return item.href
                ? <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="org-card org-card-link">{Inner}</a>
                : <div key={i} className="org-card">{Inner}</div>;
            })}
          </div>
        )}
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="contact-left">
          <div>
            <h2 className="contact-title">Get In<br />Touch</h2>
            <p className="contact-desc">
              Open to collaboration on events, committees, and creative or technical projects.
            </p>
          </div>
          <a href="mailto:mrizky2pratama3@gmail.com" className="contact-btn">Send Message ↗</a>
        </div>
        <div className="contact-right">
          <div className="contact-right-label">Contact.Info</div>
          {[
            { label: 'Email', value: 'mrizky2pratama3@gmail.com', href: 'mailto:mrizky2pratama3@gmail.com' },
            { label: 'Instagram', value: '@pratamar1zky', href: 'https://www.instagram.com/pratamar1zky/?hl=id' },
            { label: 'YouTube', value: '@emrzkyprtm', href: 'https://www.youtube.com/@emrzkyprtm' },
            { label: 'Location', value: 'Candi, Sidoarjo, East Java, Indonesia', href: null },
            { label: 'Institution', value: 'Politeknik Elektronika Negeri Surabaya (PENS)', href: null },
            { label: 'Status', value: 'Open to opportunities — 6th Semester', href: null }
          ].map((c, i) => (
            <div key={i} className="contact-item">
              <span className="contact-item-label">{c.label}</span>
              {c.href
                ? <a href={c.href} target={c.href.startsWith('http') ? "_blank" : "_self"} rel={c.href.startsWith('http') ? "noopener noreferrer" : ""} className="contact-item-value link">{c.value}</a>
                : <span className="contact-item-value">{c.value}</span>
              }
            </div>
          ))}
        </div>
      </section>

      <div className="footer-bar">
        <div className="footer-brand">R1ZKY · DAT</div>
        <div className="footer-sys">
          <div>PENS MECHATRONICS — 6TH SEMESTER</div>
          <div>EOF · 2026</div>
        </div>
      </div>
    </>
  );
}
