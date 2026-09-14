import Reveal from './Reveal.jsx';

/**
 * 섹션 공통 껍데기: eyebrow + 제목 + 내용.
 * lead 를 주지 않으면 큰 제목 없이 eyebrow 만 표시하고, 그때는 eyebrow 가 섹션 제목 역할을 합니다.
 */
export default function Section({ id, eyebrow, lead, className = '', children }) {
  const hasLead = Array.isArray(lead) && lead.length > 0;

  return (
    <section id={id} className={`section${className ? ` ${className}` : ''}`}>
      <div className="shell">
        <Reveal className={`section__head${hasLead ? '' : ' section__head--compact'}`}>
          {hasLead ? (
            <>
              <p className="section__eyebrow">{eyebrow}</p>
              <h2 className="section__title">
                {lead.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
            </>
          ) : (
            <h2 className="section__eyebrow">{eyebrow}</h2>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
