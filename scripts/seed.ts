const { PrismaClient } = require("@prisma/client");

const databse = new PrismaClient();

async function main() {
  try {
    await databse.category.createMany({
      data: [
        { name: "Computer science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Filming" },
      ],
    });
    console.log("Success");
  } catch (error) {
    console.log("Error seeding databse categories", error);
  } finally {
    await databse.$disconnect();
  }
}

main();
