function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

/* Profile Image Preview */
function openImagePreview() {
  document.getElementById("imagePreview").style.display = "block";
}
function closeImagePreview() {
  document.getElementById("imagePreview").style.display = "none";
}

const projects = {
  cms: {
    title: "Community Management System",
    desc: "Designed and developed a full-stack community management platform to efficiently handle member registrations, event scheduling, and role-based access control. Implemented secure authentication and RESTful APIs to ensure data integrity and seamless frontend–backend communication, improving overall administrative efficiency.",
    tech: "Angular, ASP.NET Core, SQL Server"
  },
  "email-Detection":{
    title: "Malicious Email Detection",
    desc: "Implemented a machine learning-based email classification system to detect spam and phishing attacks. Applied Natural Language Processing techniques and supervised learning models to improve email security and reduce malicious content exposure.",
    tech: "Python, Machine learning, NLP"
  },
  "image-gallery": {
    title: "Image Gallery Web Application",
    desc: "Designed a responsive image gallery with lightbox preview,next/previous navigation, smooth hover effects, transitions, and category-based filtering for enhanced user experience.",
    tech: "HTML, CSS, Bootstrap, JavaScript"
  },
  calculator: {
    title: "Calculator Web Application",
    desc: "Built a fully functional calculator supporting all arithmetic operations with real-time display, keyboard input handling,clear/reset functionality, and clean UI design.",
    tech: "HTML, CSS, Bootstrap, JavaScript"
  },
   "hr event portal": {
    title: "HR Event Registration Portal",
    desc: "Created a responsive web portal for HR event registrations with client-side validations and mobile-friendly design. Focused on delivering a smooth user experience while ensuring data accuracy and accessibility across devices.",
    tech: "HTML, CSS, Bootstrap, JavaScript"
  },
  "personal-portfolio": {
    title: "Personal Portfolio",
    desc: "Developed a responsive personal portfolio showcasing skills, projects, resume, and contact information with smooth scrolling, dark mode, resume preview/download, and GitHub Pages deployment.",
    tech: "HTML, CSS, Bootstrap, JavaScript"
  },
  estore: {
    title: "E-Store Landing Page",
    desc: "Designed and developed a responsive flipcart style e-store landing page optimized for both mobile phones and laptops using HTML and CSS. The layout adapts seamlessly across different screen sizes using responsive design techniques such as flexible grids and media queries.It works as a real time e-store shopping site.",
    tech: "HTML, CSS, Bootstrap, JavaScript"
  },

};

function openProject(key) {
  const p = projects[key];
  document.getElementById("projectTitle").innerText = p.title;
  document.getElementById("projectDesc").innerText = p.desc;
  document.getElementById("projectTech").innerText = p.tech;
  new bootstrap.Modal(document.getElementById("projectModal")).show();
}


/* Resume Preview */
function openResume() {
  const frame = document.getElementById("resumeFrame");
  frame.src = "resume/KATKURI HARISH REDDY-pdf.pdf"; // load only on click
  document.getElementById("resumePreview").style.display = "block";
}

function closeResume() {
  document.getElementById("resumePreview").style.display = "none";
  document.getElementById("resumeFrame").src = ""; // unload PDF
}


/* Project Filter */
function filterProjects(type, btn) {
  document.querySelectorAll(".project-card").forEach(card => {
    card.style.display =
      type === "all" || card.classList.contains(type) ? "block" : "none";
  });

  document.querySelectorAll("#projects button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}
