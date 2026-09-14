import { useReveal } from '../hooks/useReveal.js';

/**
 * 스크롤 진입 시 fade-up 되는 래퍼.
 * delay(ms)로 같은 그룹 안에서 순차 등장을 만들 수 있습니다.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
