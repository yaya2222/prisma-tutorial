import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany()
  const user = await prisma.user.findUnique({
    where:{
      email:"yaya@exmple.com"
    }
  });
  console.log(user);
}

main()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prisma.$disconnect(); 
   });
