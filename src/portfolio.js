
// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Moeed",
  logo_name: "Moeed F.",
  nickname: "Moeed Farooq",
  full_name: "Moeed Farooq",
  subTitle:
    "Full Stack Development, Open Source Enthusiast 🔥. Always learning.",
  resumeLink: "https://www.fiverr.com/users/farooq_zahid1/",
  mail: "mailto:moeedfarooq14442@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Moeed-Farooq",
  linkedin: "https://www.linkedin.com/in/moeedfarooque/",
  gmail: "moeedfarooq14442@gmail.com",
  gitlab: "https://gitlab.com/moeedfarooq66",
  facebook: "https://www.facebook.com/moeed.faroooq",
  twitter: "https://twitter.com/MoeedFarooq07",
  instagram: "https://www.instagram.com/moeed_farook/",
  whatsapp: "https://wa.me/+923043888832",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using React Native and Android",
        "⚡ Creating application backend in Node, Express & CodeIgniter",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#651fff",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "iOS",
          fontAwesomeClassname: "simple-icons:ios",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "simple-icons:python",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Government College University Faisalabad",
      subtitle: "Bachelors in Computer Science",
      logo_path: "gcu2.png",
      alt_name: "SSEC",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ My academic journey includes in-depth studies of core subjects like Data Structures, Database Management Systems (DBMS), Security, and Software Engineering.",
        "⚡ Complementing this, I've successfully completed various courses focusing on Backend, Web, and Mobile App Development",
        "⚡ Applying the knowledge gained from my Software Engineering course, I've successfully implemented several projects showcasing practical application of these concepts",
      ],
      website_link: "https://gcuf.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: []
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description: `I have a creative mind and I am always up for new challenges. I am well organized and always plan ahead to make sure I manage my time well. I am a dedicated, organized and methodical individual. I have good interpersonal skills; I am keen and willing to learn and develop new skills.`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Mobile App Developer",
          company: "ChopDawg",
          company_url: "https://www.chopdawg.com/",
          logo_path: "cd.png",
          duration: "Feb 2024 – Pre.",
          location: "1703 N Howard St, Philadelphia",
          description: [
            `Championed Agile/Scrum methodology by actively participating in sprints. This fostered clear communication, streamlined task management, and resulted in continuous team improvement.`,
            `Leveraged state management libraries (Redux, Zustand) to efficiently manage application state in React Native projects. This enabled development of complex application logic with improved performance.`,
            `Implemented unit testing with Jest to guarantee code quality and stability. This facilitated efficient debugging throughout the development lifecycle.`,
          ],
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#0071C5",
        },
        {
          title: "Mobile App Developer",
          company: "Teknovation.io",
          company_url: "https://teknovation.io/",
          logo_path: "tk.jpeg",
          duration: "Oct 2022 – Feb 2024",
          location: "Blue Area, Islamabad",
          description: [
            `Design and build beautiful, practical and advanced applications for Moible
            platforms (Andorid/iOS).`,
            `Developing and implementing new features and user interfaces`,
            `Work with outside data sources and APIs.`,
            `Work on bug fixing and improving application performance.`,
            `Use modern architectural patterns, third-party libraries to deliver new features`,
          ],
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#0071C5",
        },
        {
          title: "Mobile Application Developer",
          company: "Hello World Technologies",
          company_url: "https://hwryk.com/",
          logo_path: "HW.png",
          duration: "Aug 2021 – Oct 2022",
          location: "Canal Road, Rahim Yar Khan",
          description: [
            `Architect, build and maintain excellent React Native applications with clean
            Code.`,
            `Implement clean, modern, smooth animations and transitions that provide an xcellent user experience.`,
            `Write reusable, effective, as well as scalable JavaScript/TypeScript code and
            create interchangeable modules with state management.`,
          ],
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#0071C5",
        },
        {
          title: "Mobile App Developer",
          company: "Punjab Safe Cities Authority",
          company_url: "https://psca.gop.pk/",
          logo_path: "psca.png",
          duration: "Feb 2020 – June 2021",
          location: "Qurban Police Lines, Lahore",
          description: [
            `Worked with marketing, key executives, UI designers, and other developers to
            deliver user- friendly and visually appealing mobile applicationsfor the Android
            platform and manage IT works too for better out comings.`,
            `Participate in fast-paced development cycles; have completed 100% of deadlines
            ahead ofschedule.`,
            `Contribute and participate in new feature product specifications.`,
            `Followed up by testing (user interface, errors with all possible inputs, debugging,
              publishing) apps after project completion.`
          ],
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Mobile Application Developer",
          company: "Jeux Developers",
          company_url: "https://jeuxdevelopers.com/",
          logo_path: "juex.png",
          duration: "Oct 2018 - Dec 2019",
          location: "Garden Town, Lahore",
          description: [
            `Investigated new and emerging software applications within Jeux Developers to
            design,select, implement, and use administrative information systems
            effectively.`,
            `Tested troubleshooting methods, devised innovative solutions, and
            documentedresolutions for inclusion in the knowledge base for support team
            use. Worked effectively with cross-functional design teams to create software
            solutionsthat elevated the client-side experience and significantly improved
            overall functionality and performance.`,
            `Worked with online databases, Firebase
            mostly for managing all data in real-time in the database. Worked with social
            networking login, notifications, analytics, Payment gateways, crash reports &
            performance.`
          ],
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
      ],
    },

  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Our projects make use of a vast variety of latest technology tools. We Have created Softwares for Small Businesses to Interprise Level Applications. Below are some of Our projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Hire Me",
    profile_image_path: "Hamza.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://www.linkedin.com/in/moeedfarooque/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "6",
      name: "Nomadz",
      url: "https://apps.apple.com/pk/app/nomadz/id6448633205",
      description:
        "Nomadz stands as the ultimate marketplace crafted by and for outdoor enthusiasts, delivering a comprehensive and user-friendly platform for nature lovers.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "devicon:typescript",
        },
        {
          name: "React $ React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Node JS",
          iconifyClass: "vscode-icons:file-type-node",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "PlatsPay",
          iconifyClass: "icon-park:flash-payment",
        },
      ],
    },
    {
      id: "60",
      name: "PETSBROZ",
      url: "https://apps.apple.com/pk/app/petsbroz/id1668323327",
      description:
        "Petsbroz helps find the perfect pet with ease. With our easy to use filters you can search to find your desired pet with pay user within the mobile app.",
      languages: [
        {
          name: "React $ React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Node JS",
          iconifyClass: "vscode-icons:file-type-node",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Expo",
          iconifyClass: "vscode-icons:file-type-light-expo",
        },
        {
          name: "Stripe",
          iconifyClass: "logos-stripe",
        },
      ],
    },
    {
      id: "60x60",
      name: "Flixoda",
      url: "https://apps.apple.com/pk/app/flixoda/id1667942333",
      description:
        "Your go-to for endless entertainment. Stream TV shows, movies, dramas, and podcasts anytime, anywhere. Recommendations, offline downloads.",
      languages: [
        {
          name: "React | React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon:typescript",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
      ],
    },

    {
      id: "0",
      name: "GymsWorld",
      url:
        "https://play.google.com/store/apps/details?id=com.oracionsGymworkout",
      description:
        "The ultimate fitness app for gym enthusiasts! Join classes, track your progress, and connect with friends in a vibrant gym community.",
      languages: [
        {
          name: "React | React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon:typescript",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
      ],
    },
    {
      id: "23X1",
      name: "TAS Dating",
      url: "https://play.google.com/store/apps/details?id=com.tasdatingkit",
      description:
        "Whether you're seeking a casual fling or a long-term commitment, TAS Dating caters to all relationship types. Simply create a profile and let our system do the rest.",
      languages: [
        {
          name: "React | React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon:typescript",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-webrtc",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "20x20",
      name: "Mangia Rewards | Dining Offers",
      url:
        "https://apps.apple.com/us/app/mangia-rewards-dining-offers/id1659785521",
      description: `
        Introducing Mangia Rewards: Explore local restaurants and get a free drink, appetizer, or dessert with every entree purchase, 7 days a week.`,
      languages: [
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon:javascript",
        },
        {
          name: "Stripe",
          iconifyClass: "logos-stripe",
        },
      ],
    },
    {
      id: "20",
      name: "Winelikes",
      url: "https://apps.apple.com/us/app/winelikes/id1604508326",
      description:
        "An engaging wine app that will change the way you drink wine. Whether you are about to take your first sip, or on the road to becoming a sommelier, Winelikes is for you.",
      languages: [
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon:typescript",
        },
        {
          name: "Stripe",
          iconifyClass: "logos-stripe",
        },
      ],
    },
    {
      id: "5",
      name: "FeedMile",
      url: "https://play.google.com/store/apps/details?id=com.feedmile",
      description:
        "Feedmile App: Your go-to for 360-degree coverage of latest news, including headlines, detailed analysis, trendy topics, and market trends.",
      languages: [
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
      ],
    },

    {
      id: "10x10",
      name: "ihost: tips for Airbnb host",
      url:
        "https://play.google.com/store/apps/details?id=com.keystolive.airbnbguide",
      description:
        "Empowering entrepreneurs to earn from their spaces. Learn how to rent out your home, apartment, or unused space with ease.",
      languages: [
        {
          name: "React | React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon:typescript",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "Stripe",
          iconifyClass: "logos-stripe",
        },
      ],
    },
    {
      id: "0x0",
      name: "Meet Match",
      url: "https://play.google.com/store/apps/details?id=com.meetmatch",
      description:
        "Your go-to app for finding serious partners nearby. Discover nearby matches, chat seamlessly, access public info, and browse gallery pics.",
      languages: [
        {
          name: "React | React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon:typescript",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "Stripe",
          iconifyClass: "logos-stripe",
        },
      ],
    },
    {
      id: "1",
      name: "HEWN SF",
      url: "https://play.google.com/store/apps/details?id=com.hewnsfmobile",
      description:
        "HEWN's app started as a solution for fabric sample requests and now streamlines sourcing and collaboration in the interior design community.",
      languages: [
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-bootstrap",
        },
      ],
    },

    {
      id: "41x21",
      name: "Online Seven Mall",
      url:
        "https://play.google.com/store/apps/details?id=com.fajira.OnlineSevenMall",
      description:
        "Online Seven Mall is a web based shopping framework which makes your shopping simpler, faster and more advantageous than any other time.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "OneSignal",
          iconifyClass: "logos-onesignal",
        },
      ],
    },
    {
      id: "4",
      name: "ICR - IT Centre RYK",
      url: "https://play.google.com/store/apps/details?id=com.itcentre",
      description:
        "ICR provides a cutting-edge learning environment, offering hands-on experience and skills development for success in the evolving IT industry.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "OneSignal",
          iconifyClass: "logos-onesignal",
        },
      ],
    },
    {
      id: "4x4",
      name: "My Pill and Med Reminder",
      url:
        "https://play.google.com/store/apps/details?id=com.mdr.medicine_reminder",
      description: `
        Introducing Medicine Reminder: Never miss a dose. This app ensures you take your meds on time, every time.`,
      languages: [
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos:php-alt",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "4",
      name: "Barcelona Guide",
      url:
        "https://play.google.com/store/apps/details?id=com.cityguide.barcelonacityguideapp",
      description:
        "Unlock Barcelona's treasures with our comprehensive travel guide app. Explore attractions, historic sights, and travel details seamlessly in one place.",
      languages: [
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos:php-alt",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "CRBO Inc.",
      url: "https://apps.apple.com/us/app/crbo/id1642157751",
      description:
        "A taxi App where people can rent thier cars with drivers for short and Long Trips. If Sign Up as a User, people can use this Uber like service",
      languages: [
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Stripe",
          iconifyClass: "logos-stripe",
        },
      ],
    },

    {
      id: "4x4",
      name: "Quran Urdu Audio Translation",
      url:
        "https://play.google.com/store/apps/details?id=com.quran_only_urdu_audio",
      description:
        "Your Gateway to Luxury Bags and Accessories Step into a world of opulence with LUXURIAN, the premier app designed exclusively for those who appreciate luxury.",
      languages: [
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Codeigniter",
          iconifyClass: "logos:codeigniter-icon",
        },
        {
          name: "Audio Play",
          iconifyClass: "icon-park:audio-file",
        },
      ],
    },
    {
      id: "3x3",
      name: "Daily Dose of Wisdom",
      url: "https://play.google.com/store/apps/details?id=com.oracionsHorizons&hl=en&gl=US",
      description:
        "Get inspired every day by thoughtful wisdom, exciting stories, fascinating personalities or the latest scientific findings. Free of charge!",
      languages: [
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Codeigniter",
          iconifyClass: "logos:codeigniter-icon",
        },
        {
          name: "PlatsPay",
          iconifyClass: "icon-park:flash-payment",
        },
      ],
    },
    {
      id: "3",
      name: "Luxurian KW",
      url: "https://apps.apple.com/pk/app/luxurian-kw/id6449488950",
      description:
        "Your Gateway to Luxury Bags and Accessories Step into a world of opulence with LUXURIAN, the premier app designed exclusively for those who appreciate luxury.",
      languages: [
        {
          name: "React & React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Codeigniter",
          iconifyClass: "logos:codeigniter-icon",
        },
        {
          name: "OneSignal",
          iconifyClass: "logos-onesignal",
        },
      ],
    },

    {
      id: "3x3",
      name: "Pehchaan Balochistan App",
      url:
        "https://play.google.com/store/apps/details?id=org.psca.pehchaanbalochistan",
      description:
        "A service Provider App Where people can become partners to provides services as well get services, people can interact forums, with subscriptions",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android-icon",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "OneSignal",
          iconifyClass: "logos-onesignal",
        },
      ],
    },
    {
      id: "3",
      name: "famHQ",
      url: "https://www.famhqconcierge.com/",
      description:
        "A service Provider App Where people can become partners to provides services as well get services, people can interact forums, with subscriptions",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React $ React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Node JS",
          iconifyClass: "vscode-icons:file-type-node",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },

    {
      id: "9",
      name: "UI/UX",
      url:
        "https://drive.google.com/file/d/1pOwqpavYMIDjDkzOk9duDX1EBtY-VO-L/view?usp=sharing",
      description:
        "Designed Many UIs for Mobile as well as web Applications. Designed UX for Games and Flyers",
      languages: [
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
