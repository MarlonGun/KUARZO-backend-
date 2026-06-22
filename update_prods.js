const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    await prisma.producto.updateMany({
        where: { id: { in: [13, 28, 29] } },
        data: { destacado: true }
    });
    console.log("Productos destacados actualizados");
}
main().finally(() => prisma.$disconnect());
