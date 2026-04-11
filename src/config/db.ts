import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

//Creo el adaptador pasandole la DATABASE_URL
const adapter = new PrismaMariaDb(process.env.DATABASE_URL as string);

//Configuro prisma
const prisma = new PrismaClient({ adapter });

export default prisma;