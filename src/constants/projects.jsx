// Projects Images
import colorChanger from '../assets/imgs/bgcolorChanger.png';
import calorieCounter from '../assets/imgs/calorieCounter.png';
import clsf from '../assets/imgs/CLSF2.png';
import documentation from '../assets/imgs/documentation.png';
import salesInventorySystem from '../assets/gif/kandylandSalesandInventory.gif';
import landingPage from '../assets/imgs/landing_Page.png';
import rockPaperScissors from '../assets/imgs/RockPaperScissors.png';
import rolePlayingGame from '../assets/imgs/Role_Playing_Game_JS.png';
import surveyForm from '../assets/imgs/survey_form.png';
import amazon from '../assets/gif/amazonclone.gif'
import virtualR from  '../assets/gif/virtualr_landingpage.gif'

//Projects Demo
import calorieCounterProj from '../../public/projects/FormValidation_CalorieCounter/index.html';
import amazonProj from '../../public/projects/javascript-amazon-project/amazon.html';
import landingPageProj from '../../public/projects/Product_LandingPage/index.html';
import colorGeneratorProj from '../../public/projects/RandomColorGenerator/index.html';
import rockPaperScissorsProj from '../../public/projects/Rock,Paper,Scissors_Game/index.html'; 
import rolePlayingGameProj from '../../public/projects/RolePlayingGame_BasicJS/index.html';
import surveyFormProj from '../../public/projects/SurveyForm_CertificationProject/index.html';
import technicalDocumentationProj from '../../public/projects/TechnicalDocumentation_Page/index.html';

//Projects SVG
import phpIcon from '../assets/vectors/php.svg';
import htmlIcon from '../assets/vectors/html.svg';
import xamppIcon from '../assets/vectors/xampp.svg';
import bootstrapIcon from '../assets/vectors/bootstrap.svg';
import cssIcon from '../assets/vectors/css.svg';
import javascriptIcon from '../assets/vectors/javascript.svg';
import jasmineIcon from '../assets/vectors/jasmine.svg';
import reactIcon from '../assets/vectors/react.svg';
import tailwindIcon from '../assets/vectors/tailwind.svg';

// projectsDetails
export const projectsDetails = [
    {
        title: "Sales and Inventory System",
        image: salesInventorySystem,
        alt: "Sales and Inventory System",
        description: "Developed as a final project for System Analysis Design, this Sales and Inventory System was initially based on a YouTube tutorial. I customized and enhanced the system to meet the specific needs of a candy store, adding features to efficiently manage inventory and sales transactions. This project aimed to provide a tailored solution for small businesses selling sweets, candies, and toys.",
        codeLink: "https://github.com/IvanVargas21/Kandyland-SalesandInventory_System",
        demo: "https://github.com/IvanVargas21/Kandyland-SalesandInventory_System",
        techStack: [phpIcon, htmlIcon, xamppIcon, bootstrapIcon]
    },
    {
        title: "Amazon Clone Project",
        image: amazon,
        alt: "Amazon Website Clone Project",
        description: "Developed as a hands-on project to deepen my understanding of JavaScript, this Amazon Clone was built following a tutorial from the YouTube channel SuperSimple.dev. It served as an excellent opportunity to practice key JavaScript fundamentals, including working with objects, DOM manipulation, functions, Git, modules, and external libraries. The project also introduced me to testing frameworks like Jasmine, Object-Oriented Programming (OOP) concepts such as classes and inheritance, as well as foundational backend concepts like callbacks, async/await, Promises, and Fetch. This project provided a comprehensive learning experience in implementing essential programming techniques in a practical context",
        codeLink: "https://github.com/IvanVargas21/javascript-course_SuperSimpleDev",
        demo: amazonProj,
        techStack: [htmlIcon, cssIcon, javascriptIcon, jasmineIcon]
    },
    {
        title: "Landing Page",
        image: virtualR,
        description: "This project is a React and TailwindCSS-based landing page designed for VirtualR, a fictional platform offering tools for building VR environments. The page highlights features such as a drag-and-drop interface, real-time previews, multi-platform compatibility, and collaboration tools. It also includes detailed pricing tiers to showcase subscription options. Developing this landing page helped me grasp essential React concepts, Tailwind's utility-first CSS framework, and the principles of responsive web design",
        codeLink: "https://github.com/IvanVargas21/VirtualR_LandingPage_React-Tailwind",
        demo: "https://github.com/IvanVargas21/VirtualR_LandingPage_React-Tailwind",
        techStack: [reactIcon, tailwindIcon]
    },
    {
        title: "Church Landing Page",
        image: clsf,
        description: "In collaboration with a groupmate, I contributed to creating a webpage for Christ the Living Stone Church as part of our Software Engineering course. My key role involved integrating a chatbot system and designing donation forms. These forms allow users to submit their email addresses for donations, triggering automated confirmation emails sent to both the userand the church admin.",
        codeLink: "https://github.com/IvanVargas21/ChurchOrganization_Webpage",
        demo: "https://github.com/IvanVargas21/ChurchOrganization_Webpage",
        techStack: [reactIcon, cssIcon]
    },
    {
        title: "Landing Page",
        image: landingPage,
        description: "Designed a responsive landing page that showcases various content areas, utilizing modern web design techniques to ensure an engaging user experience. This project emphasized layout and aesthetics while maintaining functionality across devices.",
        demo: landingPageProj,
        techStack: [htmlIcon, cssIcon, javascriptIcon]
    },
    {
        title: "Rock, Paper, Scissors Game",
        image: rockPaperScissors,
        description: "Developed a classic Rock Paper Scissors game using JavaScript. This interactive project allowed users to play against the computer, incorporating game logic and a user-friendly interface to enhance engagement.",
        codeLink: "https://github.com/IvanVargas21/IvanVargas21-freeCodeCamp_JS_Algorithm_and_DataStructures/tree/main/Rock%2CPaper%2CScissors_Game",
        demo: rockPaperScissorsProj,
        techStack: [htmlIcon, cssIcon, javascriptIcon]
    },
    {
        title: "Role Playing Game",
        image: rolePlayingGame,
        description: "Built an engaging role-playing game that features character selection, quest mechanics, and interactive gameplay elements. This project utilized JavaScript to create a dynamic experience, encouraging users to explore and complete challenges",
        codeLink: "https://github.com/IvanVargas21/IvanVargas21-freeCodeCamp_JS_Algorithm_and_DataStructures/tree/main/RolePlayingGame_BasicJS",
        demo: rolePlayingGameProj,
        techStack: [htmlIcon, cssIcon, javascriptIcon]
    },
    {
        title: "Calorie Counter",
        image: calorieCounter,
        description: "The Calorie Counter is a straightforward application designed to assist users in tracking their daily caloric intake. With a user-friendly interface, the app makes it easy for individuals to log their meals and monitor their nutritional goals. By providing a simple way to track calories, it encourages users to adopt healthier eating habits and stay mindful of their dietary choices. This project emphasizes clarity and ease of use, making calorie tracking accessible for everyone, regardless of their dietary knowledge",
        codeLink: "https://github.com/IvanVargas21/IvanVargas21-freeCodeCamp_JS_Algorithm_and_DataStructures/tree/main/FormValidation_CalorieCounter",
        demo: calorieCounterProj,
        techStack: [htmlIcon, cssIcon, javascriptIcon]
    },
    {
        title: "Random Color Generator",
        image: colorChanger,
        description: "A straightforward web application that allows users to dynamically change the background color of the page. This project showcases basic JavaScript functionality and user interaction in a fun and engaging way.",
        codeLink: "https://github.com/IvanVargas21/IvanVargas21-freeCodeCamp_JS_Algorithm_and_DataStructures/tree/main/RandomColorGenerator",
        demo: colorGeneratorProj,
        techStack: [htmlIcon, cssIcon, javascriptIcon]
    },
    {
        title: "Documentation Webpage",
        image: documentation,
        description: "Created a comprehensive documentation webpage that outlines the principles of responsive web design. This project involved structuring content clearly and ensuring that it is visually appealing and easy to navigate.",
        codeLink: "https://github.com/IvanVargas21/freeCodeCamp_ResponsiveWebDesign/tree/main/TechnicalDocumentation_Page",
        demo: technicalDocumentationProj,
        techStack: [htmlIcon, cssIcon, javascriptIcon]
    },
    {
        title: "Survey Form",
        image: surveyForm,
        description: "Designed a responsive survey form that collects user feedback. This project focused on user experience, ensuring that the form is easy to fill out on any device, while also incorporating validation to enhance data accuracy.",
        codeLink: "https://github.com/IvanVargas21/freeCodeCamp_ResponsiveWebDesign/tree/main/SurveyForm_CertificationProject",
        demo: surveyFormProj,
        techStack: [htmlIcon, cssIcon, javascriptIcon]
    }
];
