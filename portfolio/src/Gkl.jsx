// src/CareerDetails.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; 

export default function CareerDetails() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="crtitle" >그랜드 코리아 레저 인턴의 기록</h1> 

      {/* 인턴*/}
      <section className="career-detail-section">
        <h2 className="section-title">데이터 분석</h2>   
        <ul className="project-details">
          <li>다양한 시스템으로부터 플레이어의 실시간 게임 데이터를 효율적으로 수집하는 파이프라인을 구축,관리</li>
          <li>수집 및 분석된 데이터를 쉽게 이해하고 활용할 수 있도록 직관적인 대시보드와 보고서 개발</li>
        </ul>
      </section>



      {/* 뒤로가기 버튼 */}
      <div style={{ marginTop: '2rem' }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{
            padding: '4px 8px',
            fontSize: '1rem',
            cursor: 'pointer',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#8F90A6'
          }}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}