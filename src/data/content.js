// 사이트의 모든 문구를 한 곳에서 관리합니다. (ko / en)
// 새 경력·프로젝트를 추가할 때는 이 파일만 수정하면 됩니다.

export const NAV_IDS = [
  'about',
  'career',
  'projects',
  'education',
  'opensource',
  'contact',
];

export const content = {
  ko: {
    label: '한국어',
    htmlLang: 'ko',
    nav: {
      about: '소개',
      career: '경력 사항',
      projects: '프로젝트',
      education: '교육',
      opensource: '오픈소스',
      contact: '연락처',
    },
    a11y: {
      toTop: '맨 위로 이동',
      toggleTheme: '테마 전환',
      toggleLang: '언어 전환',
      openMenu: '메뉴 열기',
      closeMenu: '메뉴 닫기',
    },
    brand: { name: '윤지환', role: '프론트엔드 개발자' },
    hero: {
      greeting: '안녕하세요,',
      role: '프론트엔드 개발자',
      name: '윤지환',
      suffix: '입니다.',
      cta: { primary: '경력 보기', secondary: '연락하기' },
      scroll: 'Scroll',
    },
    about: {
      title: '소개',
      lead: [
        '사용자가 마주하는 화면을 만들고, 오래 가도록 구조를 다집니다.',
        '제품을 함께 만들고 키우는 일을 좋아합니다.',
      ],
      body: [
        '사용자를 중심에 두고 화면을 설계합니다. 코드 한 줄에도 의도가 드러나야 하고, 책임 범위가 분명한 구조가 오래 간다고 믿습니다.',
        '기능이 동작하는 데서 멈추지 않습니다. 화면이 왜 느려지고 왜 무거워지는지를 끝까지 따라가, 개선이 수치로 확인될 때까지 다듬는 편입니다.',
        '동료와 기술적인 고민을 나누고 발전적인 리뷰를 주고받는 과정을 즐깁니다. 개인의 성장이 곧 팀의 시너지로 이어지는 선순환 구조를 만드는 데 기여하고 싶습니다.',
      ],
    },
    career: {
      title: '경력 사항',
      lead: ['다양한 업무와 프로젝트를 통해', '경험과 노하우를 쌓고 있습니다.'],
      toggleOpen: '주요 업무 내용 보기',
      toggleClose: '접기',
      storyLabels: { problem: '문제', approach: '해결', result: '결과' },
      // details[].stories 는 "무엇을 했는가"를 문제-해결-결과로 풀어 쓰는 자리입니다.
      // 없으면 points(요약 불릿)만 표시되므로, 이야기가 생길 때마다 아래 형태로 덧붙이세요.
      //   stories: [{ title, problem, approach, result }]
      items: [
        {
          id: 'soltech',
          period: '2024.09 - 2026.05',
          company: '솔텍시스템',
          role: '웹 프론트엔드 개발',
          details: [
            {
              title: '수자원공사 고도화 및 웹 개발',
              points: [
                '기존 서버 구조를 분석하여 성능 병목 구간 및 불안정 요소 식별',
                '코드 리팩토링 및 모듈화로 유지보수 용이성 및 코드 가독성 향상',
                '9개 댐, 16개 보 실시간 데이터 반응형 웹 개발',
              ],
              stories: [
                {
                  title: '실시간 모니터링 화면의 메모리 누수 해결',
                  problem:
                    '9개 댐의 계측값을 실시간으로 전송받아 그리는 화면에서 메모리 누수가 발생했습니다. 관제 화면 특성상 하루 종일 켜 두는 화면이라, 시간이 지날수록 브라우저가 무거워지는 문제로 이어졌습니다.',
                  approach:
                    '화면을 갱신할 때마다 새로 거는 setInterval이 기존 타이머를 정리하지 않은 채 계속 쌓이는 구조였습니다. 타이머 핸들을 변수에 보관해 두고 다시 걸기 전과 화면을 벗어날 때 clearInterval로 해제하도록 바꿔, 타이머 콜백이 붙잡고 있던 참조까지 함께 풀리도록 정리했습니다.',
                  result:
                    '장시간 띄워 두어도 메모리 사용량이 일정하게 유지되도록 개선해, 관제 화면을 재시작 없이 계속 사용할 수 있게 했습니다.',
                },
              ],
            },
            {
              title: '삼성 디스플레이 고도화',
              points: [
                '모델을 REST API 형태로 패키징하고 Docker 이미지로 컨테이너화하여 배포',
                'Microsoft Azure 클라우드 인프라 구성 및 사용자·개발자 환경 이중화',
              ],
              stories: [
                {
                  title: '모델 실행 환경을 컨테이너로 묶어 안정성 확보',
                  problem:
                    '기상 데이터를 수집하는 모델이 상시 동작해야 하는 시스템이었습니다. 모델이 돌아가는 실행 환경을 그대로 유지하는 일이 곧 서비스 안정성과 직결되는 구조였습니다.',
                  approach:
                    '학습한 모델을 REST API 형태로 패키징한 뒤 Docker 이미지로 컨테이너화하고, Microsoft Azure에 클라우드 인프라를 구성해 배포했습니다.',
                  result:
                    '실행 환경이 이미지 단위로 고정되고 사용자·개발자 환경을 이중으로 구성해, 배포와 운영 전반의 안정성을 높였습니다.',
                },
              ],
            },
            {
              title: '사내 그룹웨어 고도화',
              points: [
                'JSP 기반 레거시를 React로 마이그레이션하며 사용성 개선',
                '데이터 시각화 및 UX 고도화',
                'Docker Compose를 활용해 WAS, DB, 프록시 서버 등 멀티 컨테이너 환경 구성',
                '기존 레거시 CSS를 정리하고 반응형 디자인 적용',
              ],
              stories: [
                {
                  title: 'JSP 레거시를 React로 마이그레이션',
                  problem:
                    '그룹웨어가 JSP로 개발되어 있어, 화면을 손볼 때마다 손이 많이 가고 사용성을 개선하기 어려운 상태였습니다.',
                  approach:
                    'React로 마이그레이션하면서 화면을 컴포넌트 단위로 다시 나누고, UI/UX를 리디자인했습니다. 얽혀 있던 레거시 CSS도 함께 정리하며 반응형 디자인을 적용했습니다.',
                  result:
                    '화면 단위로 묶여 있던 코드를 재사용 가능한 컴포넌트로 정리해, 이후 기능 추가와 사용성 개선이 훨씬 수월해졌습니다.',
                },
                {
                  title: '로딩 지연과 레이아웃 시프트(CLS) 해결',
                  problem:
                    '그룹웨어 특성상 지난 기록을 한데 모아 보여 주는 화면이 많아, 데이터를 불러오는 동안 지연이 생겼습니다. 그사이 화면이 비어 있다가 갑자기 채워지면서 레이아웃이 밀리는 문제도 함께 있었습니다.',
                  approach:
                    '서버 컴포넌트 환경에서 활용할 수 있는 Deferred 스켈레톤 로딩 컴포넌트를 만들어 적용했습니다. 데이터가 도착하기 전에도 실제 콘텐츠와 같은 크기의 자리를 먼저 잡아 두도록 했습니다.',
                  result:
                    '데이터 로딩 중에도 레이아웃 시프트 없이 안정적인 화면을 제공하고, 기다리는 동안 무엇이 채워질지 보이도록 개선했습니다.',
                },
              ],
            },
          ],
        },
        {
          id: 'paradise',
          period: '2022.06 - 2023.09',
          company: '파라다이스 시티',
          role: '데이터 전략',
          details: [
            {
              title: '고객 맞춤형 카드 서비스 개발 및 상용화',
              points: [
                '고객 데이터 분석 및 통계 기반의 맞춤형 카드 서비스 기획 및 구현',
                'matplotlib·Seaborn을 활용한 고객 데이터 시각화',
                'NFC 태그 시 시각화 자료와 맞춤형 이벤트 정보를 함께 제공',
                '서비스 도입 1년 내 고객 만족도 20% 향상',
                '고객 서비스 만족 부문 우수 사원 선정',
              ],
              stories: [
                {
                  title: 'NFC 태그로 열어 보는 개인화 시각화 서비스',
                  problem:
                    '그전까지 고객은 자신의 이용 기록을 눈으로 확인할 방법이 없었고, 이벤트 정보도 따로 찾아봐야 했습니다. 분석 결과가 내부 보고서 안에만 머물러 고객에게 닿지 않는 상태였습니다.',
                  approach:
                    '고객 데이터를 분석해 matplotlib·Seaborn으로 시각화하고, 카드를 NFC로 태그하면 자신의 시각화 자료와 맞춤형 이벤트 정보가 바로 뜨도록 서비스를 기획하고 구현했습니다.',
                  result:
                    '서비스 도입 1년 내 고객 만족도가 20% 향상됐고, 이 성과로 고객 서비스 만족 부문 우수 사원에 선정됐습니다.',
                },
                {
                  title: '시각화 응답 속도 개선',
                  problem:
                    '처음에는 matplotlib으로 그래프를 그렸는데, 태그할 때마다 원본 데이터를 전부 읽어 그래프를 새로 그리다 보니 화면이 뜨기까지 지연이 있었습니다. 고객이 카드를 대고 기다리는 자리라 그 지연이 그대로 체감됐습니다.',
                  approach:
                    '병목이 그리기 자체보다 매번 전체 데이터를 읽고 집계하는 데 있다고 보고, 자주 조회되는 구간은 미리 집계해 둔 요약 데이터를 바라보도록 바꿨습니다. 반복되던 집계·스타일 코드는 Seaborn으로 옮겨 짧게 유지했고, 요청마다 새로 만들던 그래프는 결과를 재사용하도록 정리했습니다.',
                  result:
                    '태그 직후 시각화가 바로 뜨도록 응답 시간을 줄여, 기다림 없이 이벤트 정보까지 이어서 볼 수 있게 했습니다.',
                },
              ],
            },
          ],
        },
        {
          id: 'gkl',
          period: '2019.10 - 2020.03',
          company: '그랜드 코리아 레저',
          role: '인턴 · 데이터 분석',
          details: [
            {
              title: '실시간 게임 데이터 수집 및 현황 대시보드 개발',
              points: [
                '다양한 시스템으로부터 플레이어의 실시간 게임 데이터를 효율적으로 수집하는 파이프라인을 구축·관리',
                '분석된 데이터를 실시간으로 로딩해 게임 현황을 확인할 수 있는 대시보드 화면 개발',
                '기존 분석 도구로 그리던 차트를 Python matplotlib 기반으로 전환',
                '데이터를 쉽게 이해하고 활용할 수 있도록 보고서 형태로도 정리해 전달',
              ],
              stories: [
                {
                  title: '차트 생성을 matplotlib으로 옮겨 대시보드 개발 비용 낮추기',
                  problem:
                    '실시간 게임 현황 대시보드는 분석된 데이터를 화면에 계속 로딩해 보여 주는 구조였는데, 정작 차트는 파이썬이 아닌 별도 분석 도구로 그리고 있었습니다. 수집·분석은 파이썬으로 해 놓고 시각화만 다른 도구를 거치다 보니, 차트를 하나 바꾸려 해도 손이 많이 갔습니다.',
                  approach:
                    '차트 생성을 Python matplotlib으로 옮겨, 데이터를 수집·분석하는 코드와 같은 흐름 안에서 그래프를 그리도록 화면을 바꿨습니다.',
                  result:
                    '차트를 그리고 수정하는 일이 훨씬 수월해졌고, 분석 결과가 실시간 화면까지 끊김 없이 이어지도록 정리했습니다.',
                },
              ],
            },
          ],
        },
      ],
    },
    projects: {
      title: '프로젝트',
      lead: ['프로젝트 세부 사항'],
      items: [
        {
          title: '실시간 댐·보 모니터링 웹',
          meta: '솔텍시스템 · 2024 - 2026',
          body: '9개 댐과 16개 보의 실시간 데이터를 다루는 반응형 웹을 개발하고, 병목이 있던 기존 서버 구조를 분석해 함께 정리했습니다.',
          tags: ['JavaScript', 'JSP', '반응형'],
        },
        {
          title: '기상 예측 모델 · 클라우드 배포',
          meta: '삼성 디스플레이 · 솔텍시스템',
          body: '기상 데이터를 수집하는 모델을 REST API로 패키징하고, Docker 이미지로 실행 환경을 고정한 뒤 Azure에 사용자·개발자 환경을 이중으로 구성해 배포했습니다.',
          tags: ['Python', 'TensorFlow', 'TypeScript', 'Docker', 'Azure'],
        },
        {
          title: '사내 그룹웨어 JSP → React 마이그레이션',
          meta: '솔텍시스템',
          body: 'JSP 레거시를 React로 옮기며 컴포넌트 단위로 재구성하고, Deferred 스켈레톤 로딩을 적용해 데이터 로딩 중에도 레이아웃 시프트 없는 화면을 만들었습니다.',
          tags: ['React', '레거시 마이그레이션', 'CLS', 'Docker Compose'],
        },
        {
          title: '고객 맞춤형 NFC 카드 서비스',
          meta: '파라다이스 시티 · 2022 - 2023',
          body: '고객 데이터를 matplotlib·Seaborn으로 시각화하고, NFC 태그 한 번에 자신의 기록과 맞춤 이벤트 정보가 함께 뜨도록 만들어 1년 내 고객 만족도를 20% 높였습니다.',
          tags: ['데이터 시각화', 'matplotlib', 'Seaborn', 'NFC'],
        },
        {
          title: '실시간 게임 현황 대시보드',
          meta: '그랜드 코리아 레저 · 2019 - 2020',
          body: '차트 생성을 matplotlib으로 옮겨, 분석된 데이터를 실시간으로 로딩해 게임 현황을 한 화면에서 확인할 수 있는 대시보드 화면을 개발했습니다.',
          tags: ['Python', 'matplotlib', '데이터 시각화', '대시보드'],
        },
      ],
    },
    education: {
      title: '교육',
      items: [
        {
          period: '2023.12 - 2024.05',
          name: 'EZ Academy',
          role: '풀스택 과정 · 웹 프론트엔드 개발',
          points: [
            'HTML, CSS, JavaScript, React.js, Next.js를 활용한 웹 UI 구현',
            '학습한 기술을 바탕으로 웹 서비스 프로젝트 개발',
          ],
        },
        {
          period: '2020.03 - 2022.02',
          name: '백석대학교',
          role: '경영학 전공 · 졸업',
          points: [
            '동아리 활동으로 카지노 게임을 소개하는 웹 화면 제작',
            'Google.org에서 주관한 AI 모델 기반 국가 안보 분야 프로젝트 참여',
          ],
        },
      ],
    },
    opensource: {
      title: '오픈소스',
      lead: ['오픈소스 프로젝트에 참여하고 있습니다.'],
      items: [
        {
          name: 'All-Hands-AI/OpenHands',
          desc: '개발 작업을 자동화하는 AI 에이전트 플랫폼입니다.',
          href: 'https://github.com/All-Hands-AI/OpenHands',
        },
      ],
    },
    contact: {
      title: '감사합니다',
      lead: ['더 궁금한 점이 있다면', '편하게 연락주세요.'],
      items: [
        { label: 'Email', value: 'protmxk@naver.com', href: 'mailto:protmxk@naver.com' },
        { label: 'GitHub', value: '@hwan0309', href: 'https://github.com/hwan0309' },
        { label: 'Blog', value: 'jhyoon97.tistory.com', href: 'https://jhyoon97.tistory.com/' },
      ],
      footnote: '© 2026 윤지환. Built with React & Vite.',
    },
  },

  en: {
    label: 'English',
    htmlLang: 'en',
    nav: {
      about: 'About',
      career: 'Experience',
      projects: 'Projects',
      education: 'Education',
      opensource: 'Open Source',
      contact: 'Contact',
    },
    a11y: {
      toTop: 'Back to top',
      toggleTheme: 'Toggle theme',
      toggleLang: 'Toggle language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    brand: { name: 'Jihwan Yoon', role: 'Frontend Developer' },
    hero: {
      greeting: 'Hello, I am',
      role: 'a frontend developer,',
      name: 'Jihwan Yoon',
      suffix: '.',
      cta: { primary: 'View experience', secondary: 'Get in touch' },
      scroll: 'Scroll',
    },
    about: {
      title: 'About',
      lead: [
        'I build the screens people meet, and shape them to last.',
        'I like making products and growing them with a team.',
      ],
      body: [
        'I design screens with the user at the center. Intent should be visible in every line, and structure with clear ownership boundaries is what lasts.',
        'I do not stop at "it works." I follow a slow or heavy screen down to its cause, and keep refining until the improvement shows up in the numbers.',
        'I enjoy sharing technical questions and constructive reviews with the people I work with, and I want to help build the loop where individual growth turns into momentum for the whole team.',
      ],
    },
    career: {
      title: 'Experience',
      lead: ['Building know-how through', 'a range of products and projects.'],
      toggleOpen: 'See key responsibilities',
      toggleClose: 'Collapse',
      storyLabels: { problem: 'Problem', approach: 'Approach', result: 'Result' },
      items: [
        {
          id: 'soltech',
          period: '2024.09 - 2026.05',
          company: 'Soltech System',
          role: 'Web Frontend Developer',
          details: [
            {
              title: 'K-water system modernization & web development',
              points: [
                'Analyzed the existing server architecture to identify performance bottlenecks and unstable components',
                'Improved maintainability and readability through refactoring and modularization',
                'Built a responsive web app for real-time data from 9 dams and 16 weirs',
              ],
              stories: [
                {
                  title: 'Fixing a memory leak in the real-time monitoring view',
                  problem:
                    'The view that streams live readings from 9 dams leaked memory. Because it is an operations screen left open all day, the browser grew heavier the longer it ran.',
                  approach:
                    'Each refresh started a new setInterval without clearing the previous one, so timers stacked up indefinitely. I kept the timer handle in a variable and cleared it with clearInterval before re-scheduling and when leaving the view, which also released the references its callback had been holding on to.',
                  result:
                    'Memory usage now stays flat over long sessions, so the operations screen runs continuously without needing a restart.',
                },
              ],
            },
            {
              title: 'Samsung Display system modernization',
              points: [
                'Packaged the model as a REST API and containerized it as a Docker image for deployment',
                'Configured Microsoft Azure cloud infrastructure with separate user and developer environments',
              ],
              stories: [
                {
                  title: 'Containerizing the model runtime for stability',
                  problem:
                    'The system ran a model that continuously collects weather data, so keeping its runtime environment intact was directly tied to the stability of the service.',
                  approach:
                    'I packaged the trained model as a REST API, containerized it as a Docker image, and deployed it on Microsoft Azure cloud infrastructure.',
                  result:
                    'Pinning the runtime to an image and splitting user and developer environments made deployment and day-to-day operation noticeably more stable.',
                },
              ],
            },
            {
              title: 'Internal groupware modernization',
              points: [
                'Migrated the JSP-based legacy app to React, improving usability',
                'Improved data visualization and overall UX',
                'Composed a multi-container environment (WAS, DB, proxy) with Docker Compose',
                'Cleaned up legacy CSS and applied a responsive design',
              ],
              stories: [
                {
                  title: 'Migrating JSP legacy code to React',
                  problem:
                    'The groupware was built on JSP, so every screen change took significant effort and usability was hard to improve.',
                  approach:
                    'I migrated it to React, splitting screens back into components and redesigning the UI/UX. Tangled legacy CSS was cleaned up in the same pass, with a responsive layout applied.',
                  result:
                    'Code that had been locked into whole screens became reusable components, making later features and usability work far easier.',
                },
                {
                  title: 'Solving loading delays and layout shift (CLS)',
                  problem:
                    'Groupware screens often gather past records in one place, so fetching that data introduced a delay — and the page would sit empty, then jolt as content filled in.',
                  approach:
                    'I built a Deferred skeleton loading component usable in a server component environment, reserving space the same size as the real content before the data arrives.',
                  result:
                    'Screens now stay stable during loading with no layout shift, and users can see what is about to appear while they wait.',
                },
              ],
            },
          ],
        },
        {
          id: 'paradise',
          period: '2022.06 - 2023.09',
          company: 'Paradise City',
          role: 'Data Strategy',
          details: [
            {
              title: 'Personalized card service — development & launch',
              points: [
                'Planned and implemented a personalized card service based on customer data analysis and statistics',
                'Visualized customer data with matplotlib and Seaborn',
                'Surfaced the visualization together with tailored event information on NFC tap',
                'Raised customer satisfaction by 20% within a year of launch',
                'Recognized as a top performer for customer service satisfaction',
              ],
              stories: [
                {
                  title: 'Personalized visualizations, opened by an NFC tap',
                  problem:
                    'Customers had no way to see their own usage history, and had to look up events separately. The analysis lived inside internal reports and never reached the people it described.',
                  approach:
                    'I analyzed customer data, visualized it with matplotlib and Seaborn, and designed and built a service where tapping the card over NFC immediately brings up that customer’s own charts alongside tailored event information.',
                  result:
                    'Customer satisfaction rose 20% within a year of launch, and the work earned recognition as a top performer for customer service satisfaction.',
                },
                {
                  title: 'Speeding up how fast the visualization appears',
                  problem:
                    'The charts were first drawn with matplotlib, re-reading the full dataset and redrawing on every tap — so there was a visible wait before anything appeared. With the customer standing there holding their card, that delay was felt directly.',
                  approach:
                    'I traced the bottleneck to reading and aggregating the whole dataset each time rather than to drawing itself, and pointed frequently requested views at pre-aggregated summaries. Repeated aggregation and styling code moved to Seaborn to stay compact, and charts rebuilt on every request were reworked to reuse their results.',
                  result:
                    'The visualization now appears right after the tap, letting customers move straight on to the event information without waiting.',
                },
              ],
            },
          ],
        },
        {
          id: 'gkl',
          period: '2019.10 - 2020.03',
          company: 'Grand Korea Leisure',
          role: 'Intern · Data Analysis',
          details: [
            {
              title: 'Real-time game data collection & status dashboard',
              points: [
                'Built and maintained a pipeline that efficiently collects real-time player game data from multiple systems',
                'Developed a dashboard that streams analyzed data live to show current game activity',
                'Moved chart generation off a separate analytics tool onto Python matplotlib',
                'Packaged the data into reports so it could be understood and acted on easily',
              ],
              stories: [
                {
                  title: 'Moving chart generation to matplotlib to cut dashboard effort',
                  problem:
                    'The real-time dashboard continuously streamed analyzed data onto the screen, yet the charts themselves were drawn in a separate analytics tool rather than in Python. Collection and analysis lived in Python while visualization detoured through another tool, so changing a single chart took far more effort than it should have.',
                  approach:
                    'I moved chart generation to Python matplotlib so graphs are drawn in the same flow as the code that collects and analyzes the data.',
                  result:
                    'Creating and adjusting charts became much easier, and analysis results now flow through to the live screen without a detour.',
                },
              ],
            },
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      lead: ['Project details'],
      items: [
        {
          title: 'Real-time dam & weir monitoring web',
          meta: 'Soltech System · 2024 - 2026',
          body: 'Built a responsive web app handling real-time data from 9 dams and 16 weirs, and analyzed the bottlenecked legacy server structure alongside it.',
          tags: ['JavaScript', 'JSP', 'Responsive'],
        },
        {
          title: 'Weather prediction model & cloud delivery',
          meta: 'Samsung Display · Soltech System',
          body: 'Packaged the weather-collection model as a REST API, pinned its runtime in a Docker image, and deployed it on Azure with separate user and developer environments.',
          tags: ['Python', 'TensorFlow', 'TypeScript', 'Docker', 'Azure'],
        },
        {
          title: 'Groupware: JSP to React migration',
          meta: 'Soltech System',
          body: 'Moved a JSP legacy app to React and restructured it into components, adding Deferred skeleton loading so screens hold their layout while data loads.',
          tags: ['React', 'Legacy migration', 'CLS', 'Docker Compose'],
        },
        {
          title: 'Personalized NFC card service',
          meta: 'Paradise City · 2022 - 2023',
          body: 'Visualized customer data with matplotlib and Seaborn so a single NFC tap brings up your own history next to tailored offers — lifting satisfaction 20% within a year.',
          tags: ['Data visualization', 'matplotlib', 'Seaborn', 'NFC'],
        },
        {
          title: 'Real-time game status dashboard',
          meta: 'Grand Korea Leisure · 2019 - 2020',
          body: 'Moved chart generation to matplotlib and built a dashboard that streams analyzed data live, showing current game activity on a single screen.',
          tags: ['Python', 'matplotlib', 'Data visualization', 'Dashboard'],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          period: '2023.12 - 2024.05',
          name: 'EZ Academy',
          role: 'Web frontend development',
          points: [
            'Built web UIs with HTML, CSS, JavaScript, React.js and Next.js',
            'Developed web service projects applying what the course covered',
          ],
        },
        {
          period: '2020.03 - 2022.02',
          name: 'Baekseok University',
          role: 'B.A. in Business Administration · Graduated',
          points: [
            'Built a web page introducing casino games as a student club project',
            'Took part in a Google.org-hosted national security project built on an AI model',
          ],
        },
      ],
    },
    opensource: {
      title: 'Open Source',
      lead: ['Taking part in open source projects.'],
      items: [
        {
          name: 'All-Hands-AI/OpenHands',
          desc: 'An AI agent platform that automates development work.',
          href: 'https://github.com/All-Hands-AI/OpenHands',
        },
      ],
    },
    contact: {
      title: 'Thank you',
      lead: ['If you would like to know more,', 'feel free to reach out.'],
      items: [
        { label: 'Email', value: 'protmxk@naver.com', href: 'mailto:protmxk@naver.com' },
        { label: 'GitHub', value: '@hwan0309', href: 'https://github.com/hwan0309' },
        { label: 'Blog', value: 'jhyoon97.tistory.com', href: 'https://jhyoon97.tistory.com/' },
      ],
      footnote: '© 2026 Jihwan Yoon. Built with React & Vite.',
    },
  },
};
