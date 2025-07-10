
const InventoryApplication = {
    id: 1,
    githubLink: "https://github.com/BrennanT123/InventoryApplication",
    previewLink: "https://inventoryapplication-production-909d.up.railway.app/",
    media: "https://res.cloudinary.com/dgngynk3j/image/upload/v1751299926/inventoryApplicationMedia_ex8olz.png",
    title: "Inventory Application",
    readMe:     '\n' +
    'This is a simple inventory application that I made to help keep track of my rubiks cube collection. You are able to add new cubes to the collection, filter by brand, and search for cubes. \n' +
    '\n' +
    'This project was created using a postgres database to store the data simple SQL queries to update it. The HTML was generated using ejs.\n',
    tags: ["node-js", "Express", "PostgreSQL", "ejs"]
}

const blogAPI = {
    id: 2,
    githubLink: "https://github.com/BrennanT123/blogAPI",
    previewLink: "https://frontend-production-c81e.up.railway.app/",
    media: "https://res.cloudinary.com/dgngynk3j/image/upload/v1751394547/Screenshot_from_2025-07-01_14-05-41_nheo9c.png",
    title: "Blog API",
    readMe:     '\n' +
    'This is a simple api I made for blogs. It uses express for the backend and react for the frontend.  The repo includes the api inside the backend folder and an example use case inside the blog1 folder. The backend uses JWT for authentication and prisma to manage the postgres db. \n' +
    '\n' +
    'The blog allows the blog owner to make posts and allows other users to make comments on the post either using an account or as a guest. The blog owner can also edit their posts, delete their posts, and hide posts from the published page. Owner routes are protected using JWT authentication and inputes are validated using express-validator. \n' +
    '\n' +
    'test credentials for blog owner:\n' +
    '\n' +
    'email: blogOwner@fakeemail.com\n' +
    'password: :,"4zTMW^"v3gsL\n',
    tags: ["node-js", "Express", "PostgreSQL", "JWT","Prisma","React"]
}


const wheresWaldo = {
    id: 3,
    githubLink: "https://github.com/BrennanT123/wheresWaldo",
    previewLink: "https://fortunate-reprieve-production-2b89.up.railway.app/selectScene",
    title: "Wheres Waldo?",
    readMe:     '\n' +
    'This is a charcter finding game similar to the common childrens book "Wheres Waldo". For this game you must find 3 characters. Every wrong guess removes 50 points from your score and every second you take to find the characters removes 10 points. \n' +
    '\n' +
    'This app was built using nodejs for the backend and react for the frontend. The backend API uses a postgres database with prisma ORM. The API has routes allowing the frontend to retrieve the leaderboard, session data, scores, characters, scenes, etc...\n',
    media: "https://res.cloudinary.com/dgngynk3j/image/upload/v1751394940/Screenshot_from_2025-07-01_14-35-19_gbn1rp.png",
    tags: ["node-js","Express", "React", "Prisma", "Jest", "Supertest"]
}

export const projects = [InventoryApplication, blogAPI, wheresWaldo];