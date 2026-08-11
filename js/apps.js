const appContents = {
  about: {
    title: 'About',
    body: `
      <div class="profile-card">
        <div class="hero-badge">Flutter • UI • Product</div>
        <h2>Rahmath Nisha G</h2>
        <p>I’m a developer who turns complex ideas into elegant, user-focused digital experiences. My work blends mobile innovation, modern UI, and practical product thinking.</p>
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

apps.forEach((app) => {
  app.addEventListener('click', () => {
    const appKey = app.getAttribute('data-app');
    const content = appContents[appKey];

    if (content) {
      appTitle.textContent = content.title;
      windowContent.innerHTML = content.body;
      appWindow.classList.remove('minimized', 'maximized');
      appWindow.classList.add('active');
      appWindow.setAttribute('aria-hidden', 'false');
    }
  });
});

function closeWindow() {
  appWindow.classList.remove('active', 'minimized', 'maximized');
  appWindow.setAttribute('aria-hidden', 'true');
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

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeWindow();
  }
});
