const InventoryApplication = {
  id: 3,
  githubLink: "https://github.com/BrennanT123/InventoryApplication",
  previewLink: "https://inventoryapplication-production-909d.up.railway.app/",
  media:
    "https://res.cloudinary.com/dgngynk3j/image/upload/v1751299926/inventoryApplicationMedia_ex8olz.png",
  title: "Inventory Application",
  readMe:
    "\n" +
    "An inventory application that I made to help keep track of my rubiks cube collection. Features includes being able to add new cubes, update/delete cubes, filter by brand, and custom search. ",
  tags: ["node-js", "Express", "PostgreSQL", "ejs"],
};

const blogAPI = {
  id: 4,
  githubLink: "https://github.com/BrennanT123/blogAPI",
  previewLink: "https://frontend-production-c81e.up.railway.app/",
  media:
    "Screenshot from 2026-01-07 20-51-13.webp",
  title: "Blog API",
  readMe:
    "\n" +
    "This is an api I made for blogs. Features include authenticaiton using JWT, session tracking, account creation, ability to create, edit, delete, and hide posts, and the ability to make comments as both a verified user and a guest user. The preview links to a rough implementation of the api.\n" +
    "\n Here are the test credentials for the blog owner:\n" +
    "\n" +
    "email: blogOwner@fakeemail.com\n" +
    'password: :,"4zTMW^"v3gsL\n',
  tags: ["node-js", "Express", "PostgreSQL", "JWT", "Prisma", "React"],
};

const wheresWaldo = {
  id: 2,
  githubLink: "https://github.com/BrennanT123/wheresWaldo",
  previewLink:
    "https://fortunate-reprieve-production-2b89.up.railway.app/selectScene",
  title: "Wheres Waldo?",
  readMe:
    "\n" +
    'This is a charcter finding game similar to the common childrens book "Wheres Waldo". This game includes score tracking, leaderboards, session tracking, guess logic, and more. \n \n',
  media:
    "/Screenshot_from_2025-07-01_14-35-19_ntpx3q.webp",
  tags: ["node-js", "Express", "React", "Prisma", "Jest", "Supertest"],
};

const resumeWebsite = {
  id: 5,
  githubLink: "https://github.com/BrennanT123/resumeWebsite",
  previewLink: "https://brennanturi-production.up.railway.app",
  title: "Resume Website",
  readMe:
    "This website showcases my projects and experience and is built with React. It features a mobile-responsive design, animations, and a dynamic project gallery. Through this project, I gained hands-on experience optimizing frontend performance by analyzing network bottlenecks and improving load times under throttled network conditions. \n \n",
  media: "/resumeWebsite.webp",
  tags: [
    "React",
    "CSS",
    "Canvas",
    "CSS animations",
    "Bootstrap",
  ],
};

const rubiksCubeSolver = {
  id: 1,
  githubLink: "https://github.com/BrennanT123/CubeSolver.git",
  previewLink: null,
  title: "Rubiks Cube Solver",
  readMe:
    "This is a Rubiks Cube Solver that I made. It utilizes an arduino to control stepper motors and an input keypad. The state is then sent the computer via serial where a python script determines the optimal solution. The solution is then sent back to the arduino which turns the motors to solve the cube.",
  media: "/rubiks_cube_solver.webp",
  tags: ["Arduino", "Python", "C++", "Data Structures", "Algorithms"],
};

const rubiksCubeTimer = {
    id: 6,
    githubLink: "https://github.com/BrennanT123/cubeTimer/tree/main",
    previewLink: "https://cubetimer.up.railway.app/",
    title: "Rubiks Cube Timer",
    readMe: "This is a timer that I made for tracking how fast I can solve a rubiks cube. It uses sessions to track individual users solve time. I include a paginated table, a chart, and a totals/averages section to help analyze the data. This project utilizes React for the frontend, express for the backened, jest/supertest for testing, and postgresql for the database. \n \n The app seeds each session with data to help get an understanding of how it works. \n",
    media: "/cubeTimer.webp",
    tags: ["React", "Canvas", "Bootstrap", "Mobile Friendly", "Data vizualization", "Data analysis", "Jest", "Supertest"],
}
/*
const template = {
    id: 
    githubLink:
    previewLink:
    title:
    readMe:
    media:
    tags: 
}

*/
export const projects = [
  rubiksCubeSolver,
  rubiksCubeTimer,
  wheresWaldo,
  InventoryApplication,
  blogAPI,
  resumeWebsite,
];
