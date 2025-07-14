const InventoryApplication = {
  id: 1,
  githubLink: "https://github.com/BrennanT123/InventoryApplication",
  previewLink: "https://inventoryapplication-production-909d.up.railway.app/",
  media:
    "https://res.cloudinary.com/dgngynk3j/image/upload/v1751299926/inventoryApplicationMedia_ex8olz.png",
  title: "Inventory Application",
  readMe:
    "\n" +
    "An inventory application that I made to help keep track of my rubiks cube collection. Features includes being able to add new cubes, update/delete cubes, filter by brand, and custom search. " +
    "\n",
  tags: ["node-js", "Express", "PostgreSQL", "ejs"],
};

const blogAPI = {
  id: 2,
  githubLink: "https://github.com/BrennanT123/blogAPI",
  previewLink: "https://frontend-production-c81e.up.railway.app/",
  media:
    "https://res.cloudinary.com/dgngynk3j/image/upload/v1751394547/Screenshot_from_2025-07-01_14-05-41_nheo9c.png",
  title: "Blog API",
  readMe:
    "\n" +
    "This is an api I made for blogs. Features include authenticaiton using JWT, session tracking, account creation, ability to create, edit, delete, and hide posts, and the ability to make comments as both a verified user and a guest user. \n"+
   
    "\n Here are the test credentials for the blog owner:\n" +
    "\n" +
    "email: blogOwner@fakeemail.com\n" +
    'password: :,"4zTMW^"v3gsL\n',
  tags: ["node-js", "Express", "PostgreSQL", "JWT", "Prisma", "React"],
};

const wheresWaldo = {
  id: 3,
  githubLink: "https://github.com/BrennanT123/wheresWaldo",
  previewLink:
    "https://fortunate-reprieve-production-2b89.up.railway.app/selectScene",
  title: "Wheres Waldo?",
  readMe:
    "\n" +
    'This is a charcter finding game similar to the common childrens book "Wheres Waldo". This game includes score tracking, leaderboards, session tracking, guess logic, and more.',
  media:
    "https://res.cloudinary.com/dgngynk3j/image/upload/v1751394940/Screenshot_from_2025-07-01_14-35-19_gbn1rp.png",
  tags: ["node-js", "Express", "React", "Prisma", "Jest", "Supertest"],
};


const resumeWebsite = {
    id: 4,
    githubLink: "https://github.com/BrennanT123/resumeWebsite",
    previewLink: "brennanturi-production.up.railway.app",
    title: "Resume Website",
    readMe: "This is the website that you are currently viewing. Although I originally made it to display my App Dev journey, I plan to use it to display all of my skills and use it as a tool to catalog my jounrney.",
    media: "/resumeWebsite.png",
    tags: ["React","CSS","Canvas","CSS animations", "Bootstrap", "Mobile Friendly"]
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
export const projects = [InventoryApplication, blogAPI, wheresWaldo, resumeWebsite];
