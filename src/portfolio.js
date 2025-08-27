/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dln Thanh",
  title: "Hi all, I'm Thanh",
  subTitle: emoji(
    "A passionate Junior Fullstack Developer 🚀, coming back to tech after a career break. I enjoy building clean, responsive web apps with React, Spring Boot, and PostgreSQL."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dlnthanh262",
  linkedin: "https://www.linkedin.com/in/dlnthanh/",
  gmail: "dolenguyetthanh@gmail.com",
  gitlab: "https://gitlab.com/dolenguyetthanh/",
  medium: "https://medium.com/@selenabright",
  stackoverflow: "https://stackoverflow.com/users/23565522/thanh-do",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVELOPER WITH A PASSION FOR BUILDING WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Develop responsive and user-friendly web interfaces with ReactJS / Flutter / Figma"
    ),
    emoji("⚡ Build secure backend APIs with Spring Boot (JWT, Spring Security) and write unit / integration tests"),
    emoji(
      "⚡ Work with Postgres databases and deploy services using AWS (CloudFormation)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fa-brands fa-flutter"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "postgres",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fa-brands fa-figma"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "HCMC Open University",
      logo: require("./assets/images/universityLogo.png"),
      subHeader: "Bachelor of Information Technology",
      duration: "November 2024 - now",
      desc: "Currently participating in the School-level Student Scientific Research program 2025",
      descBullets: []
    },
    {
      schoolName: "HCMC College of Industry and Trade",
      logo: require("./assets/images/collegeLogo.png"),
      subHeader: "Associate Degree in Information Technology",
      duration: "September 2018 - September 2022",
      desc: "Participated in ACM ICPC 2020 and won 3rd prize at the 2020 Vietnam Student Olympiad in Informatics",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend – Intermediate",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend – Intermediate/Advanced",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming – Intermediate",
      progressPercentage: "60%"
    },
    {
      Stack: "Cloud & Deployment – Beginner/Intermediate",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Developer",
      company: "Pullable Limited",
      companylogo: require("./assets/images/pullableLogo.png"),
      date: "Jan 2022 – Mar 2023",
      desc: "Contributed to backend, frontend, and cloud development for microservices-based applications.",
      descBullets: [
        "Java Spring Boot (Security, JPA, JUnit, Integration Tests), PostgreSQL",
        "Flutter, Figma, Photoshop",
        "AWS (CloudFormation, S3, RDS, DynamoDB, Lambda, Cognito, etc.)"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "AdStart Media",
      companylogo: require("./assets/images/adstartLogo.png"),
      date: "Mar 2021 – Dec 2021",
      desc: "Supported the development of landing pages and the company’s internal admin dashboard.",
      descBullets: [
        "HTML, CSS, JavaScript, jQuery, Flutter",
        "Java Spring Boot (REST APIs)",
        "Mentored new interns on code review and debugging"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "END-TO-END APPLICATIONS I HAVE BUILT AND DEPLOYED",
  projects: [
    {
      image: require("./assets/images/dashboard.png"),
      projectName: "Product Management Dashboard",
      projectDesc: "Full-stack dashboard application. Deployed on Render.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://product-management-dashboard-1.onrender.com"
        },
        {
          name: "Source Code",
          url: "https://github.com/dlnthanh262/product-management-dashboard"
        }
      ]
    },
    {
      image: require("./assets/images/portfolioLogo.png"),
      projectName: "Portfolio Website",
      projectDesc: "Personal developer portfolio. Deployed on Netlify.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/dlnthanh262/portfolio"
        },
        {
          name: "Source Code",
          url: "https://github.com/dlnthanh262/portfolio"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "The ICPC International Collegiate Programming Contest",
      subtitle: "Honorable Mention at the 2020 ACM International Collegiate Programming Contest (ICPC).",
      image: require("./assets/images/icpcLogo.png"),
      imageAlt: "ICPC Logo",
      footerLink: [
        {
          name: "Honorable Mention Certificate",
          url: "https://drive.google.com/file/d/1Pm2enR5BmTxwYecd5SEmF5-dx9uRBtjy/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Vietnam National Olympiad in Informatics",
      subtitle:
        "Third Prize at the 2020 Vietnam National Olympiad in Informatics (MOET).",
      image: require("./assets/images/vnoiLogo.png"),
      imageAlt: "Vietnam National Olympiad in Informatics Logo",
      footerLink: [
        {
          name: "Excellence Certificate",
          url: "https://drive.google.com/file/d/1s33c4SoN8ZETJ0QWkmMhf4Dd_-GXfyc8/view?usp=drive_link"
        },
        {
          name: "Third Prize Certificate",
          url: "https://drive.google.com/file/d/1FqovMrQBzYicPoJ7gqmX_dddE_AOkvWM/view?usp=drive_link"
        }
      ]
    },
    {
      title: "International English Language Testing System",
      subtitle: "Achieved an overall band score of 6.5 in the IELTS Academic Test.",
      image: require("./assets/images/ieltsLogo.png"),
      imageAlt: "IELTS Logo",
      footerLink: [
        {
          name: "IELTS Certificate",
          url: "https://drive.google.com/file/d/1BBvLLOHzxgcE27JpXXa5bWbCz2EdnO_n/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Writing, I love to write and share my journey.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84-374401764",
  email_address: "dolenguyetthanh@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
