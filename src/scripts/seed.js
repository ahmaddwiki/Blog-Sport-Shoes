// import prisma from "../src/utils/connect"; // Adjust the path as needed
// const prisma = require("../utils/connect"); 

// async function createCategories() {
//   const categories = [
//     { slug: "sneakers", title: "Sneakers", img: "/sneakers.jpg" },
//     { slug: "badminton", title: "Badminton", img: "/badminton.jpg" },
//     { slug: "basket", title: "Basket", img: "/basket.jpg" },
//     { slug: "slipon", title: "Slipon", img: "/slipon.jpg" },
//     { slug: "running", title: "Running", img: "/running.jpg" },
//     { slug: "casual", title: "Casual", img: "/casual.jpg" },
//   ];

//   for (const category of categories) {
//     await prisma.category.create({
//       data: category,
//     });
//   }
// }

// createCategories()
//   .then(() => console.log("Categories created"))
//   .catch((e) => console.error(e))
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
