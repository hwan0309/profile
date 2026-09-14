import { useEffect, useState } from 'react';

/**
 * 현재 화면에 보이는 섹션 id를 돌려줍니다. (상단 네비 하이라이트용)
 * 헤더 높이만큼 위쪽 기준선을 내려서 판단합니다.
 */
export function useScrollSpy(ids, offset = 140) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;

      // 페이지 끝에 닿으면 마지막 섹션을 활성화합니다.
      // (짧은 마지막 섹션은 기준선까지 올라오지 못하기 때문)
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, offset]);

  return active;
}

/** 스크롤이 threshold px 이상 내려갔는지 여부 */
export function useScrolledPast(threshold = 24) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return past;
}
