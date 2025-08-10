import { useNavigate } from 'react-router-dom';
import React from 'react';
import './App.css'; 

export default function Home() {
     const navigate = useNavigate();
  return (
    <div className="container">
      {/* 이름 */}
      <header className="header">
        <h1 className="title">윤지환</h1>
        <p className="subtitle">Frontend Developer</p>
      </header>

      {/* 자기소개 */}
      <section id="title" className="section about-me">
        <h2 className="section-title">About Me</h2>
        <p className="project-detail">
          안녕하세요! 사용자 경험을 중시하며 웹 서비스를 개발하는 프론트엔드
          개발자 윤지환입니다.사용자를 중심으로, 직관적이고
          효율적인 UI/UX를 만드는 데에 열정을 가지고 있습니다.
          변화하는 기술 환경 속에서 꾸준히 성장하며, 고객에게 실질적인 가치를 전달할 수 있는 서비스를 설계하고 구현하는 개발자로 나아가겠습니다.
        </p>
      </section>

      {/* 스킬 */}
      <section className="section skills">
        <h2 className="section-title">Skill</h2>
        <ul className="skill-list">
          <li>HTML / CSS / JavaScript / React / Node.js</li>
          <li>Python / Tensorflow / Selenium  </li>
          <li>Docker / Aws / Azure</li>
        </ul>
      </section>

    {/* 커리어 */}
<section className="section Career">
        <h2 className="section-title">Career</h2>
        
        {/* 솔텍시스템 */}
        <div className="career-entry-block">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div>솔텍시스템 소프트웨어</div>
              <div
                onClick={() => navigate('/Soltech')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  border: '1px solid #8F90A6',
                  borderRadius: '4px',
                  userSelect: 'none',
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') navigate('/Soltech');
                }}
              >
                <svg
                  width="0.7rem"
                  height="1rem"
                  fill="#8F90A6"
                  viewBox="0 0 5 8"
                  style={{ marginRight: '5px' }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4.35355 3.64645C4.54882 3.84171 4.54882 4.15829 4.35355 4.35355L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" />
                </svg>
                <span style={{ color: '#8F90A6', fontWeight: '500' }}>자세히</span>
              </div>
            </div>
            <div className='skills-list'>2024.09 ~</div>
          </div>
        </div>

        {/* 파라다이스 시티 */}
        <div className="career-entry-block">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div>파라다이스 시티 데이터 전략</div>
              <div
                onClick={() => navigate('/Paradise')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  border: '1px solid #8F90A6',
                  borderRadius: '4px',
                  userSelect: 'none',
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') navigate('/Paradise');
                }}
              >
                <svg
                  width="0.7rem"
                  height="1rem"
                  fill="#8F90A6"
                  viewBox="0 0 5 8"
                  style={{ marginRight: '5px' }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4.35355 3.64645C4.54882 3.84171 4.54882 4.15829 4.35355 4.35355L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" />
                </svg>
                <span style={{ color: '#8F90A6', fontWeight: '500' }}>자세히</span>
              </div>
            </div>
            <div className='skills-list'>2022.06 ~ 2023.09</div>
          </div>
        </div>

        {/* 그랜드 코리아 레저 */}
        <div className="career-entry-block">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div>그랜드 코리아 레저 인턴</div>
              <div
                onClick={() => navigate('/Gkl')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  border: '1px solid #8F90A6',
                  borderRadius: '4px',
                  userSelect: 'none',
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') navigate('/Gkl');
                }}
              >
                <svg
                  width="0.7rem"
                  height="1rem"
                  fill="#8F90A6"
                  viewBox="0 0 5 8"
                  style={{ marginRight: '5px' }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4.35355 3.64645C4.54882 3.84171 4.54882 4.15829 4.35355 4.35355L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" />
                </svg>
                <span style={{ color: '#8F90A6', fontWeight: '500' }}>자세히</span>
              </div>
            </div>
            <div className='skills-list'> 2019.10 ~ 2020.03</div>
          </div>
        </div>
      </section>
    
    {/* OPEN SOURCE CONTRIBUTION*/}
      <section className="section skills">
        <h2 className="section-title">Open Source Contribution</h2>
         <p>
          <a href="https://github.com/All-Hands-AI/OpenHands">AI-Hands-AI/OpenHands</a>
        </p>
      </section>

      {/* 연락처 */}
      <footer className="footer">
        <h2 className="contact">CONTECT</h2>
        <p>
          <a href="https://github.com/hwan0309">GitHub</a>
        </p>
        <p>
          <a href="https://jhyoon97.tistory.com/">블로그</a>
        </p>
      </footer>
    </div>
  );
}
