import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; 

export default function CareerDetails() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="crtitle" >솔텍시스템 소프트웨어의 기록</h1> 

      {/* 수자원공사*/}
      <section className="career-detail-section">
        <h2 className="section-title">수자원공사 고도화 및 웹 개발</h2>   
        <ul className="project-details">
          <li>기존 서버 구조를 분석하여 성능 병목 구간 및 불안정 요소 식별</li>
          <li>코드 리팩토링 및 모듈화로 유지보수 용이성 및 코드 가독성 향상</li>
          <li>9개댐, 16개보 실시간 데이터 반응형 웹 개발</li>
        </ul>
      </section>

      {/* 삼성 디스플레이 */}
      <section className="career-detail-section">
        <h2 className="section-title">삼성 디스플레이 클라우드 개발 및 AI 개발</h2>
        <ul className="project-details">
          <li>과거 기상 데이터를 수집 및 전처리하여 예측 정확도 85% 향상 모델 개발</li>
          <li>모델을 REST API 형태로 패키징하고 Docker 이미지로 컨테이너 화하여 배포</li>
          <li>Microsoft Azure 클라우드 인프라 구성 및 서비스 배포</li>
        </ul>
      </section>

      {/* 그룹웨어 */}
      <section className="career-detail-section">
        <h2 className="section-title">사내 그룹웨어 고도화</h2>
       <ul className="project-details">
          <li>Docker Compose를 활용해 WAS, DB, 프록시 서버 등 멀티 컨테이너 환경 구성</li>
          <li>사용성 개선을 위한 UI/UX 리디자인 및 컴포넌트 단위 재구성</li>
          <li>기존 레거시 CSS를 정리하고, 반응형 디자인 적용</li>
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