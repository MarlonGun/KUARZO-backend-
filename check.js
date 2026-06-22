const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    const prods = await prisma.producto.findMany({
        where: { destacado: true },
        include: { imagenes: true }
    });
    console.log("Destacados: ", prods);
}
main().finally(() => prisma.$disconnect());
