// 학생 데이터
const students = [
  {
    id: 1,
    name: "장유준",
    name_en: "yujun",
    studentId: "2024001",
    description:
      "프로덕트 디자이너로서 서비스 기획에도 흥미가 있으며 이를 심플하고 캐주얼하게 디자인하여 설계하는 것을 추구합니다:)",
    avatar: "장",
    profileImage: "./images/profile_yujun.png",
    github: "https://github.com/JANGYUJUN",
    portfolio: "https://jangyujun.github.io/MY-website/MY_website.html",
    presentation: "https://docs.google.com/presentation/d/honggildong",
    prototype: "https://figma.com/prototype/honggildong",
  },
  {
    id: 2,
    name: "장연재",
    name_en: "yeonjae",
    studentId: "2024002",
    description: "데이터와 경험을 디자인으로 연결하는 프로덕트 디자이너",
    avatar: "장",
    profileImage: "./images/profile_yeonjae.png",
    github: "https://github.com/YeonJaezzzing",
    portfolio:
      "https://yeonjaezzzing.github.io/Portfolio/yeonjae_portfolio.html",
    presentation: "https://docs.google.com/presentation/d/kimamugae",
    prototype: "https://figma.com/prototype/kimamugae",
  },
  {
    id: 3,
    name: "김도은",
    name_en: "doen",
    studentId: "2024003",
    description:
      "Mix to Make, 돌리고, 고민하고, 관찰하며 맞춰나가야하는 큐브처럼 다양한 경험과 고민을 통해 무엇이든 연결해 균형점을 찾아가는 디자이너 김도은입니다.",
    avatar: "김",
    profileImage: "./images/profile_doen.png",
    github: "https://github.com/doeun-art",
    portfolio: "https://doeun-art.github.io/portfolio/",
    presentation:
      "https://www.figma.com/proto/PHN3PMMRO4spDSZshLRvu3/UX%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4?page-id=4420%3A75&node-id=4445-297&p=f&viewport=26273%2C9763%2C0.43&t=rMUGcKUvy0ygyYnL-1&scaling=min-zoom&content-scaling=fixed",
    prototype:
      "https://www.figma.com/proto/PHN3PMMRO4spDSZshLRvu3/UX%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4?page-id=4780%3A107&node-id=4802-430&viewport=313%2C108%2C0.34&t=FH78xqA6yRX67dgF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4802%3A430&show-proto-sidebar=1",
  },
  {
    id: 4,
    name: "박도현",
    name_en: "dohyen",
    studentId: "2024004",
    description:
      "모바일 앱 개발에 특화된 학생입니다. React Native와 Flutter를 다룹니다.",
    avatar: "박",
    profileImage: "./images/profile_dohyen.png",
    github: "https://github.com/hyeon129",
    portfolio: "https://hyeon129.github.io/Park-Do-Hyeon/",
    presentation: "https://docs.google.com/presentation/d/parkminsu",
    prototype: "https://figma.com/prototype/parkminsu",
  },
  {
    id: 5,
    name: "박호정",
    name_en: "hojung",
    studentId: "2024005",
    description: "안녕하세요 항상 즐기고 성장하는 UX/UI 디자이너 박호정입니다.",
    avatar: "박",
    profileImage: "./images/profile_hojung.png",
    github: "https://github.com/coho91",
    portfolio: "https://coho91.github.io/cocoportfolio/",
    presentation: "https://docs.google.com/presentation/d/choijiyeong",
    prototype: "https://figma.com/prototype/choijiyeong",
  },
  {
    id: 6,
    name: "김지경",
    name_en: "jikyung",
    studentId: "2024006",
    description:
      "복잡한 문제를 단순하게 풀어내고,사람들에게 새로운 시선을 제안하는 디자이너가 되고 싶습니다.",
    avatar: "김",
    profileImage: "./images/profile_jikyung.png",
    github: "https://github.com/gamzya5181",
    portfolio: "https://gamzya5181.github.io/JG/",
    presentation: "https://docs.google.com/presentation/d/jeonghyunwoo",
    prototype: "https://figma.com/prototype/jeonghyunwoo",
  },
  {
    id: 7,
    name: "소아연",
    name_en: "ayeon",
    studentId: "2024007",
    description:
      "사람의 마음을 움직이고 또 공감을 얻는 것에 대한 본원적인 고민을 합니다. 사용자의 마음을 다정하게 헤아려, 이를 기반으로 디자인하는 UX/UI 디자이너가 되겠습니다.",
    avatar: "소",
    profileImage: "./images/profile_ayeon.png",
    github: "https://github.com/ayeoniiii",
    portfolio: "https://ayeoniiii.github.io/say/",
    presentation: "https://docs.google.com/presentation/d/hansoyoung",
    prototype: "https://figma.com/prototype/hansoyoung",
  },
  {
    id: 8,
    name: "신나라",
    name_en: "nara",
    studentId: "2024008",
    description:
      "디자인은 단순한 화면이 아닌 의미 있는 메시지를 담아야 한다고 생각합니다.  마음을 움직이고 행동을 이끄는 디자인을 추구합니다.",
    avatar: "신",
    profileImage: "./images/profile_nara.png",
    github: "https://github.com/nara-shinn",
    portfolio: "https://nara-shinn.github.io/Shinnara/",
    presentation:
      "https://www.figma.com/design/mSgIHOGgzIt02VWnWtwjW3/UX-%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4?node-id=1239-10684&t=C96jCPqvYZu4sdYP-1",
    prototype:
      "https://www.figma.com/design/mSgIHOGgzIt02VWnWtwjW3/UX-%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4?node-id=1257-27252&t=C96jCPqvYZu4sdYP-1",
  },
  {
    id: 9,
    name: "장서연",
    name_en: "seoyeun",
    studentId: "2024009",
    description: "DATA 가 말하는 방향으로,'분석하는 디자이너'",
    avatar: "장",
    profileImage: "./images/profile_seoyeun.png",
    github: "https://github.com/noeyzen",
    portfolio: "https://noeyzen.github.io/noey-archive/",
    presentation:
      "https://www.figma.com/proto/VZ8nhdGBbNveSyjvZqOhnx/UXUI-%EA%B3%BC%EC%A0%95?node-id=1366-18797&t=rgVy5bMA1wCfIhNv-1&scaling=scale-down-width&content-scaling=fixed",
    prototype:
      "https://www.figma.com/proto/VZ8nhdGBbNveSyjvZqOhnx/UXUI-%EA%B3%BC%EC%A0%95?node-",
  },
  {
    id: 10,
    name: "곽지선",
    name_en: "jisun",
    studentId: "2024010",
    description:
      "창의적인 문제 해결과 사용자 경험에 집중하는 디자이너를 희망하는 곽지선입니다. 사람과 서비스를 잇는 따뜻한 디자인을 만드는 것을 목표로 하고 있습니다.",
    avatar: "곽",
    profileImage: "./images/profile_jisun.png",
    github: "https://github.com/jisun2077",
    portfolio: "https://jisun2077.github.io/MY-WEDSITE/",
    presentation:
      "https://www.figma.com/proto/J80B6tK8zJHRUJaDd5FS3v/%EC%83%88%EC%8B%B9-%EB%94%94%EC%9E%90%EC%9D%B8?page-id=1132%3A7377&node-id=1132-7470&p=f&viewport=315%2C-397%2C0.25&t=yCsd5qbALeYNX2V7-1&scaling=contain&content-scaling=fixed",
    prototype: "https://figma.com/prototype/songjunho",
  },
];

// DOM 요소들
let studentsGrid;
let portfolioModal;
let modalTitle;
let studentInfo;
let portfolioButtons;
let closeModal;

// 초기화
document.addEventListener("DOMContentLoaded", function () {
  initializeElements();
  renderStudents();
  setupEventListeners();
});

// DOM 요소 초기화
function initializeElements() {
  studentsGrid = document.getElementById("studentsGrid");
  portfolioModal = document.getElementById("portfolioModal");
  modalTitle = document.getElementById("modalTitle");
  studentInfo = document.getElementById("studentInfo");
  portfolioButtons = document.getElementById("portfolioButtons");
  closeModal = document.getElementById("closeModal");
}

// 학생 카드 렌더링
function renderStudents() {
  studentsGrid.innerHTML = "";

  students.forEach((student) => {
    const studentCard = createStudentCard(student);
    studentsGrid.appendChild(studentCard);
  });
}

// 학생 카드 생성
function createStudentCard(student) {
  const card = document.createElement("div");
  card.className = "student-card";
  card.onclick = () => openPortfolioModal(student);

  card.innerHTML = `
        <div class="student-avatar">
            <img src="${student.profileImage}" alt="${student.name}" class="profile-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="avatar-fallback" style="display: none;">${student.avatar}</div>
        </div>
        <div class="student-info-content">
            <h3 class="student-name">${student.name}</h3>
            <p class="student-description">${student.description}</p>
        </div>
    `;

  return card;
}

// 포트폴리오 모달 열기
function openPortfolioModal(student) {
  modalTitle.textContent = `${student.name}의 포트폴리오`;

  // 학생 정보 업데이트
  studentInfo.innerHTML = `
        <div class="student-avatar">
            <img src="${student.profileImage}" alt="${student.name}" class="profile-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="avatar-fallback" style="display: none;">${student.avatar}</div>
        </div>
        <div class="student-details">
            <h3 class="student-name">${student.name}</h3>
            <p class="student-description">${student.description}</p>
        </div>
    `;

  // 포트폴리오 버튼들 생성
  portfolioButtons.innerHTML = `
        <a href="${student.github}" target="_blank" class="portfolio-btn github">
            <i>📱</i>
            GitHub 주소
        </a>
        <a href="${student.portfolio}" target="_blank" class="portfolio-btn portfolio">
            <i>🌐</i>
            포트폴리오 사이트
        </a>
        <a href="${student.presentation}" target="_blank" class="portfolio-btn presentation">
            <i>📊</i>
            프로젝트 발표자료
        </a>
        <a href="${student.prototype}" target="_blank" class="portfolio-btn prototype">
            <i>🎨</i>
            Application 시연
        </a>
    `;

  // 모달 표시
  portfolioModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

// 포트폴리오 모달 닫기
function closePortfolioModal() {
  portfolioModal.classList.remove("show");
  document.body.style.overflow = "auto";
}

// 이벤트 리스너 설정
function setupEventListeners() {
  // 모달 닫기 버튼
  closeModal.addEventListener("click", closePortfolioModal);

  // 모달 배경 클릭 시 닫기
  portfolioModal.addEventListener("click", function (e) {
    if (e.target === portfolioModal) {
      closePortfolioModal();
    }
  });

  // ESC 키로 모달 닫기
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && portfolioModal.classList.contains("show")) {
      closePortfolioModal();
    }
  });

  // 포트폴리오 버튼 클릭 이벤트
  portfolioButtons.addEventListener("click", function (e) {
    if (e.target.classList.contains("portfolio-btn")) {
      showSuccessMessage("새 탭에서 링크가 열렸습니다!");
    }
  });
}

// 성공 메시지 표시
function showSuccessMessage(message) {
  // 기존 메시지 제거
  const existingMessage = document.querySelector(".success-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // 새 메시지 생성
  const successMessage = document.createElement("div");
  successMessage.className = "success-message";
  successMessage.textContent = message;

  document.body.appendChild(successMessage);

  // 3초 후 자동 제거
  setTimeout(() => {
    successMessage.remove();
  }, 3000);
}

// 학생 검색 기능 (추가 기능)
function searchStudents(query) {
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(query.toLowerCase()) ||
      student.studentId.includes(query) ||
      student.description.toLowerCase().includes(query.toLowerCase())
  );

  studentsGrid.innerHTML = "";
  filteredStudents.forEach((student) => {
    const studentCard = createStudentCard(student);
    studentsGrid.appendChild(studentCard);
  });
}

// 랜덤 학생 선택 기능 (추가 기능)
function selectRandomStudent() {
  const randomIndex = Math.floor(Math.random() * students.length);
  const randomStudent = students[randomIndex];
  openPortfolioModal(randomStudent);
}

// 학생 데이터 업데이트 함수 (관리자용)
function updateStudentData(studentId, newData) {
  const studentIndex = students.findIndex(
    (student) => student.id === studentId
  );
  if (studentIndex !== -1) {
    students[studentIndex] = { ...students[studentIndex], ...newData };
    renderStudents();
    showSuccessMessage("학생 정보가 업데이트되었습니다!");
  }
}

// 통계 정보 표시 (추가 기능)
function showStatistics() {
  const totalStudents = students.length;
  const message = `총 ${totalStudents}명의 학생이 등록되어 있습니다.`;
  showSuccessMessage(message);
}

// 키보드 단축키
document.addEventListener("keydown", function (e) {
  // Ctrl + R: 랜덤 학생 선택
  if (e.ctrlKey && e.key === "r") {
    e.preventDefault();
    selectRandomStudent();
  }

  // Ctrl + S: 통계 표시
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    showStatistics();
  }
});

// 페이지 로드 완료 시 환영 메시지
window.addEventListener("load", function () {
  setTimeout(() => {
    showSuccessMessage("포트폴리오 쇼케이스에 오신 것을 환영합니다!");
  }, 1000);
});

// 반응형 처리
window.addEventListener("resize", function () {
  // 모바일에서 모달 크기 조정
  if (window.innerWidth <= 768) {
    const modalContent = document.querySelector(".modal-content");
    if (modalContent) {
      modalContent.style.maxHeight = "90vh";
    }
  }
});

// 스크롤 애니메이션 (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// 학생 카드에 애니메이션 적용
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const studentCards = document.querySelectorAll(".student-card");
    studentCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = `opacity 0.6s ease ${
        index * 0.1
      }s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });
  }, 100);
});
