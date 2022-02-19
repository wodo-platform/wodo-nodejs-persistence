import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const wodoGaming = await prisma.demo.upsert({
    where: { name: 'Wodo Gaming' },
    update: {},
    create: {
      name: 'Wodo Gaming',
      deleted: false,
      description: 'Wodo Gamung is the very first tetant in Wodo Platform',
      },
    }
   );
  console.log({ wodoGaming })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })