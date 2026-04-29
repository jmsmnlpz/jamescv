// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "James",
  middleName: "",
  lastName: "Manlapaz",
  message: "Entrepreneur. Tradesman. Always Learning, Always Building.",
  icons: [
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/james.manlapazzz",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/jazmresortandevents/",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/james.png"),
  imageSize: 375,
  message:
    "I'm James Manlapaz — a mechanical engineering graduate from Mapua Institute of Technology and a hands-on business owner based in Cavite, Philippines. I currently run JAZM Garden Hidden Resort as General Manager while also handling administrative operations for a medical equipment repair and maintenance business. I'm driven by constant learning, technical precision, and a deep commitment to building things that last.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "",
  reposLength: 0,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message: "",
  images: [],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Welding (TIG, MIG, Fiber Laser, Stud, Spot)", value: 90 },
    { name: "Metal Fabrication & Assembly", value: 90 },
    { name: "Swimming Pool Maintenance", value: 85 },
    { name: "Resort Facility Maintenance", value: 85 },
    { name: "Bookkeeping & Budget Tracking", value: 75 },
    { name: "Government Compliance", value: 75 },
    { name: "MS Office (Excel, Word, PowerPoint)", value: 80 },
    { name: "AutoCAD", value: 70 },
    { name: "Python & VS Code", value: 60 },
    { name: "Woodworks & Masonry", value: 60 },
  ],
  softSkills: [
    { name: "Working Under Pressure", value: 90 },
    { name: "Technical Analysis", value: 90 },
    { name: "Attention to Detail", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Goal-Oriented", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Creativity", value: 80 },
    { name: "Leadership", value: 60 },
    { name: "Communication", value: 45 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Feel free to reach out for business inquiries, collaborations, or just to say hello. You can email me at",
  email: "jasmanlapaz@outlook.ph",
};

// EXPERIENCE SECTION
const experiences = {
  show: false,
  heading: "Experience",
  data: [
    {
      role: "Business Owner / General Manager — JAZM Garden Hidden Resort",
      companylogo: require("../assets/img/dell.png"),
      date: "May 2022 – Present",
    },
    {
      role: "Administrative Manager — Manlapas Medical Equipment Services",
      companylogo: require("../assets/img/boeing.png"),
      date: "August 2021 – Present",
    },
    {
      role: "Production Intern — Ninomiya Manufacturing Corporation",
      companylogo: require("../assets/img/boeing.png"),
      date: "November 2019 – November 2020",
    },
  ],
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };