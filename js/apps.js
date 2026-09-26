const appContents = {
  about: {
    title: 'About',
    body: `
      <div class="profile-card about-profile">
        <div class="avatar-shell">
          <img
            class="profile-photo"
            src="assets/profile/nisha.jpg"
            alt="Rahmath Nisha"
          />
        </div>
        <div class="hero-badge">Flutter • UI • Product</div>
        <h2>Rahmath Nisha G</h2>
        <p>I build digital products that feel intuitive, polished, and useful — combining mobile-first thinking, clean UI systems, and practical product execution.</p>

        <div class="profile-stats">
          <div>
            <span>Focus</span>
            <strong>Mobile UX</strong>
          </div>
          <div>
            <span>Stack</span>
            <strong>Flutter</strong>
          </div>
          <div>
            <span>Style</span>
            <strong>Clean UI</strong>
          </div>
        </div>

        <div class="tag-list">
          <span>Product Thinking</span>
          <span>Design Systems</span>
          <span>Frontend</span>
          <span>Problem Solving</span>
        </div>
      </div>
    `
  },
  experience: {
    title: 'Experience',
    body: `
      <div class="timeline-card">
        <h3>Career Journey</h3>
        <div class="timeline-item"><strong>2025</strong><p>Flutter Developer at Priyonix, building refined LMS and mobile experiences.</p></div>
        <div class="timeline-item"><strong>2025</strong><p>Application & Website Developer at ADSSAN, delivering full-stack web and mobile products.</p></div>
        <div class="timeline-item"><strong>2024</strong><p>Contributed to UBill, an AI-powered billing platform with Flutter and BLoC architecture.</p></div>
      </div>
    `
  },
  skills: {
    title: 'Skills',
    body: `
      <div class="skill-card">
        <h3>Core Strengths</h3>
        <div class="skill-row"><strong>Flutter</strong><span>95%</span></div>
        <div class="progress-bar"><span style="width:95%"></span></div>
        <div class="skill-row"><strong>HTML & CSS</strong><span>90%</span></div>
        <div class="progress-bar"><span style="width:90%"></span></div>
        <div class="skill-row"><strong>JavaScript</strong><span>84%</span></div>
        <div class="progress-bar"><span style="width:84%"></span></div>
        <div class="skill-row"><strong>Firebase & APIs</strong><span>88%</span></div>
        <div class="progress-bar"><span style="width:88%"></span></div>
      </div>
    `
  },
  resume: {
    title: 'Resume',
    body: `
      <div class="resume-card">
        <h3>Professional Resume</h3>
        <p>Download a complete overview of my education, experience, technical expertise, and achievements.</p>
        <a href="assets/resume/resume.pdf" download>Download Resume</a>
      </div>
    `
  },
  projects: {
    title: 'Projects',
    body: `
      <div class="project-card">
        <h3>Selected Work</h3>
        <p>UBill • Learning Management System • E-Commerce App • MBBS Question Bank • AI Billing Solutions</p>
      </div>
    `
  },
  contact: {
    title: 'Contact',
    body: `
      <div class="contact-card">
        <h3>Let’s Connect</h3>
        <div class="contact-list">
          <div class="contact-item"><span>Email</span><strong>rahmathnisha0502@gmail.com</strong></div>
          <div class="contact-item"><span>Phone</span><strong>+91 95972 79682</strong></div>
          <div class="contact-item"><span>LinkedIn</span><strong>rahmath-nisha</strong></div>
        </div>
      </div>
    `
  },
  education: {
    title: 'Education',
    body: `
      <div class="info-card">
        <h3>Education</h3>
        <p>B.Tech in Information Technology • CGPA 8.6 • 2021 – 2025</p>
        <p>JJ College of Engineering and Technology</p>
      </div>
    `
  },
  info: {
    title: 'Additional Info',
    body: `
      <div class="info-card">
        <h3>About Me</h3>
        <p>Focused on crafting polished digital products with strong UI, performance, scalability, and thoughtful user journeys.</p>
      </div>
    `
  }
};

const apps = document.querySelectorAll('.app');
const appWindow = document.getElementById('appWindow');
const appTitle = document.getElementById('appTitle');
const windowContent = document.getElementById('windowContent');
const controlButtons = document.querySelectorAll('.window-controls .control');
const searchInput = document.getElementById('appSearch');
const navBack = document.getElementById('navBack');
const navHome = document.getElementById('navHome');
const navRecent = document.getElementById('navRecent');
let appHistory = [];
let activeAppKey = null;

function openApp(appKey, shouldTrack = true) {
  const content = appContents[appKey];

  if (content) {
    appTitle.textContent = content.title;
    windowContent.innerHTML = content.body;
    appWindow.classList.remove('minimized', 'maximized');
    appWindow.classList.add('active');
    appWindow.setAttribute('aria-hidden', 'false');
    activeAppKey = appKey;

    if (shouldTrack) {
      appHistory = appHistory.filter((item) => item !== appKey);
      appHistory.push(appKey);
      if (appHistory.length > 10) {
        appHistory.shift();
      }
    }
  }
}

apps.forEach((app) => {
  app.addEventListener('click', () => {
    const appKey = app.getAttribute('data-app');
    openApp(appKey);
  });
});

function filterApps(query = '') {
  const normalized = query.trim().toLowerCase();

  apps.forEach((app) => {
    const label = app.textContent.trim().toLowerCase();
    const key = app.getAttribute('data-app')?.toLowerCase() ?? '';
    const matches = !normalized || label.includes(normalized) || key.includes(normalized);

    app.classList.toggle('is-hidden', !matches);
    app.setAttribute('aria-hidden', String(!matches));
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    filterApps(event.target.value);
  });

  searchInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;

    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const matchingApp = Array.from(apps).find((app) => {
      const label = app.textContent.trim().toLowerCase();
      const key = app.getAttribute('data-app')?.toLowerCase() ?? '';
      return label.includes(query) || key.includes(query);
    });

    if (matchingApp) {
      openApp(matchingApp.getAttribute('data-app'));
    }
  });
}

function closeWindow() {
  appWindow.classList.remove('active', 'minimized', 'maximized');
  appWindow.setAttribute('aria-hidden', 'true');
  activeAppKey = null;
}

function goHome() {
  closeWindow();
  if (searchInput) {
    searchInput.value = '';
    filterApps('');
  }
}

function goBack() {
  const previousApp = appHistory.length > 1 ? appHistory[appHistory.length - 2] : null;

  if (previousApp) {
    openApp(previousApp, false);
    return;
  }

  closeWindow();
}

function openRecentApp() {
  const previousApp = appHistory.length > 1 ? appHistory[appHistory.length - 2] : null;

  if (previousApp) {
    openApp(previousApp, false);
  }
}

function minimizeWindow() {
  appWindow.classList.toggle('minimized');
  appWindow.classList.remove('maximized');
}

function maximizeWindow() {
  const isMaximized = appWindow.classList.toggle('maximized');
  if (isMaximized) {
    appWindow.classList.remove('minimized');
  }
}

controlButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    if (action === 'close') closeWindow();
    if (action === 'minimize') minimizeWindow();
    if (action === 'maximize') maximizeWindow();
  });
});

if (navBack) {
  navBack.addEventListener('click', goBack);
}

if (navHome) {
  navHome.addEventListener('click', goHome);
}

if (navRecent) {
  navRecent.addEventListener('click', openRecentApp);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeWindow();
  }
});
