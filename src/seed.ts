import prisma from '../src/config/db';

async function main() {
    console.log('Iniciando Seeder...');

    // Rol Comprador (Los clientes)
    const comprador = await prisma.rol.create({
        data: { nombre: 'COMPRADOR' },
    });
    console.log(`Creado: ${comprador.nombre}`);

    // Rol Administrador (El vendedor (Nosotros))
    const admin = await prisma.rol.create({
        data: { nombre: 'ADMINISTRADOR' },
    });
    console.log(`Creado: ${admin.nombre}`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
