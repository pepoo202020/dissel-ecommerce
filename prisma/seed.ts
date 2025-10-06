import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // upsert categories and keep the created/updated records to get their IDs
  const categoryNames = ["Electronics", "Clothing", "Books", "Toys", "Other"];
  const categoryRecords = [];
  for (const name of categoryNames) {
    const cat = await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    categoryRecords.push(cat);
  }

  const categoryByName = Object.fromEntries(
    categoryRecords.map((c) => [c.name, c])
  );

  // create products referencing real category IDs
  const { count } = await prisma.product.createMany({
    data: [
      {
        title: "Laptop Pro",
        description: "High-end laptop",
        price: 1000,
        stock: 10,
        mainImage:
          "https://images.unsplash.com/photo-1636032204336-213ce377e4ab?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1602414975706-76597ccdfc84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExhcHRvcCUyMFByb3xlbnwwfHwwfHx8MA%3D%3D",
          "https://images.unsplash.com/photo-1669649878169-3f12ac9eeb2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fExhcHRvcCUyMFByb3xlbnwwfHwwfHx8MA%3D%3D",
        ],
        categoryId: categoryByName["Electronics"].id,
        featured: true,
      },
      {
        title: "T-Shirt",
        description: "Cotton t-shirt",
        price: 19.99,
        stock: 50,
        mainImage:
          "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y290dG9uJTIwdC1zaGlydHxlbnwwfHwwfHx8Mg%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1722310752951-4d459d28c678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdHRvbiUyMHQtc2hpcnR8ZW58MHx8MHx8fDI%3D",
          "https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdHRvbiUyMHQtc2hpcnR8ZW58MHx8MHx8fDI%3D",
        ],
        categoryId: categoryByName["Clothing"].id,
        discount: 10.0,
      },
    ],
    skipDuplicates: true,
  });

  console.log(`Created ${count} products`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
