// src/CareerDetails.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; 

export default function CareerDetails() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="crtitle" >파라다이스 시티 데이터 전략의 기록</h1> 

      {/* 서비스 개발*/}
      <section className="career-detail-section">
        <h2 className="section-title">고객 맞춤형 카드 서비스 개발 및 상용화</h2>   
        <ul className="project-details">
          <li>고객 데이터 분석 및 통계 기반의 맞춤형 카드 서비스 기획 및 구현</li>
          <li>분석 결과를 바탕으로 NFC 태그 시 사용자 맞춤형 이벤트 정보 제공</li>
          <li>서비스 도입 1년 내 고객 만족도 20% 향상</li>
          <li>고객 서비스 만족 부분 우수 사원 선정</li>
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