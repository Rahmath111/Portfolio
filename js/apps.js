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
      <div class="experience-page">
        <header class="experience-intro">
          <span class="experience-eyebrow"><span></span> PROFESSIONAL EXPERIENCE</span>
          <h2>Thoughtful code.<br />Useful products.</h2>
          <p>Mobile apps, full-stack delivery, and systems built around real needs.</p>
        </header>

        <div class="experience-list">
          <article class="experience-entry experience-current">
            <div class="experience-entry-top">
              <span class="experience-period">CURRENT</span>
              <span class="experience-index">01</span>
            </div>
            <h3>Junior Flutter Developer</h3>
            <p class="experience-company">TEKSINFO GLOBAL SERVICES</p>
            <p class="experience-location">Chennai, Tamil Nadu, India</p>
            <p class="experience-project"><i class="fa-solid fa-cube" aria-hidden="true"></i> Building UBill, an AI-powered billing and financial compliance application.</p>
            <ul>
              <li>Contributing to GST/TDS, invoicing, payroll, and inventory workflows.</li>
              <li>Implementing BLoC architecture for scalable state management and modular Flutter development.</li>
              <li>Integrating and optimizing REST APIs for reliable backend communication and responsive performance.</li>
            </ul>
            <div class="experience-tags"><span>Flutter</span><span>BLoC</span><span>REST APIs</span><span>FinTech</span></div>
          </article>

          <article class="experience-entry">
            <div class="experience-entry-top">
              <span class="experience-period">SEP 2025 — JAN 2026</span>
              <span class="experience-index">02</span>
            </div>
            <h3>Application &amp; Website Developer</h3>
            <p class="experience-company">ADSSAN</p>
            <p class="experience-location">Trichy, Tamil Nadu,India</p>
            <ul>
              <li>Developed and deployed a PHP MBBS Question Bank with an admin dashboard, authentication, and database management.</li>
              <li>Built Flutter e-commerce and food-ordering apps with payment integration, dynamic products, and API-driven architecture.</li>
              <li>Managed end-to-end SDLC, backend integration, performance optimization, and Plesk deployment including DNS, SSL, databases, and server maintenance.</li>
            </ul>
            <div class="experience-tags"><span>Flutter</span><span>PHP</span><span>Payments</span><span>Plesk</span></div>
          </article>

          <article class="experience-entry">
            <div class="experience-entry-top">
              <span class="experience-period">JUNE 2025 — SEP 2025</span>
              <span class="experience-index">03</span>
            </div>
            <h3>Flutter Developer</h3>
            <p class="experience-company">PRIYONIX</p>
            <p class="experience-location">Thanjavur, Tamil Nadu, India</p>
            <ul>
              <li>Developed a full-scale LMS mobile app with authentication, course modules, video streaming, assignments, and progress tracking.</li>
              <li>Integrated REST APIs and local storage, building responsive UI with structured Flutter architecture and clean coding practices.</li>
            </ul>
            <div class="experience-tags"><span>Flutter</span><span>LMS</span><span>REST APIs</span><span>Local Storage</span></div>
          </article>
        </div>
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
const searchForm = document.getElementById('appSearchForm');
const navBack = document.getElementById('navBack');
const navHome = document.getElementById('navHome');
const navRecent = document.getElementById('navRecent');
const recentScreen = document.getElementById('recentScreen');
const recentList = document.getElementById('recentList');
const recentCount = document.getElementById('recentCount');
const clearRecent = document.getElementById('clearRecent');
let appHistory = [];
let activeAppKey = null;
let isRecentView = false;
let recentReturnAppKey = null;

function openApp(appKey) {
  const content = appContents[appKey];

  if (content) {
    appTitle.textContent = content.title;
    windowContent.innerHTML = content.body;
    appWindow.classList.remove('minimized', 'maximized');
    appWindow.classList.add('active');
    appWindow.setAttribute('aria-hidden', 'false');
    recentScreen.classList.remove('active');
    recentScreen.setAttribute('aria-hidden', 'true');
    isRecentView = false;
    recentReturnAppKey = null;
    activeAppKey = appKey;

    appHistory = appHistory.filter((item) => item !== appKey);
    appHistory.push(appKey);
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
}

if (searchForm) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const rawQuery = searchInput.value.trim();
    const query = rawQuery.toLowerCase();
    if (!rawQuery) return;

    const matchingApp = Array.from(apps).find((app) => {
      const label = app.textContent.trim().toLowerCase();
      const key = app.getAttribute('data-app')?.toLowerCase() ?? '';
      return label.includes(query) || key.includes(query);
    });

    if (matchingApp) {
      openApp(matchingApp.getAttribute('data-app'));
    } else {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(rawQuery)}`;
      window.open(googleSearchUrl, '_blank', 'noopener,noreferrer');
    }
  });
}

function hideWindow() {
  appWindow.classList.remove('active', 'minimized', 'maximized');
  appWindow.setAttribute('aria-hidden', 'true');
  activeAppKey = null;
}

function closeWindow() {
  if (activeAppKey) {
    appHistory = appHistory.filter((appKey) => appKey !== activeAppKey);
  }
  hideWindow();
  renderRecentApps();
}

function goHome() {
  recentScreen.classList.remove('active');
  recentScreen.setAttribute('aria-hidden', 'true');
  isRecentView = false;
  recentReturnAppKey = null;
  hideWindow();
  if (searchInput) {
    searchInput.value = '';
    filterApps('');
  }
}

function goBack() {
  if (isRecentView) {
    recentScreen.classList.remove('active');
    recentScreen.setAttribute('aria-hidden', 'true');
    isRecentView = false;
    const appToRestore = recentReturnAppKey;
    recentReturnAppKey = null;
    if (appToRestore && appHistory.includes(appToRestore)) openApp(appToRestore);
    return;
  }

  const previousApp = [...appHistory].reverse().find((appKey) => appKey !== activeAppKey);

  if (previousApp) {
    openApp(previousApp);
    return;
  }

  goHome();
}

function renderRecentApps() {
  if (!recentList) return;

  recentList.replaceChildren();
  recentCount.textContent = `${appHistory.length} open`;
  clearRecent.disabled = appHistory.length === 0;

  if (appHistory.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'recent-empty';
    emptyMessage.textContent = 'No recent apps';
    recentList.append(emptyMessage);
    return;
  }

  [...appHistory].reverse().forEach((appKey) => {
    const content = appContents[appKey];
    const appButton = document.createElement('button');
    appButton.className = 'recent-card-open';
    appButton.type = 'button';
    appButton.innerHTML = `
      <span class="recent-card-title">
        <span class="recent-card-icon"><i class="fa-solid fa-window-maximize" aria-hidden="true"></i></span>
        <span>${content.title}</span>
      </span>
      <span class="recent-card-preview"></span>
    `;
    appButton.querySelector('.recent-card-preview').textContent = content.body.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    appButton.addEventListener('click', () => openApp(appKey));

    const card = document.createElement('article');
    card.className = 'recent-card';
    card.append(appButton);

    const closeButton = document.createElement('button');
    closeButton.className = 'recent-card-close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', `Close ${content.title}`);
    closeButton.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
    closeButton.addEventListener('click', () => {
      appHistory = appHistory.filter((key) => key !== appKey);
      if (activeAppKey === appKey) hideWindow();
      renderRecentApps();
    });

    card.append(closeButton);
    recentList.append(card);
  });
}

function openRecentApps() {
  recentReturnAppKey = activeAppKey;
  if (activeAppKey) hideWindow();
  isRecentView = true;
  renderRecentApps();
  recentScreen.classList.add('active');
  recentScreen.setAttribute('aria-hidden', 'false');
}

function clearRecentApps() {
  appHistory = [];
  recentReturnAppKey = null;
  hideWindow();
  renderRecentApps();
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
  navRecent.addEventListener('click', openRecentApps);
}

if (clearRecent) {
  clearRecent.addEventListener('click', clearRecentApps);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (isRecentView) goBack();
    else closeWindow();
  }
});
