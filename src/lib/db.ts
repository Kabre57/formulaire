// src/lib/db.ts

import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres', // Remplacez par votre nom d'utilisateur PostgreSQL
    host: 'localhost',
    database: 'progitek_planning',  // Remplacez par le nom de votre base de données
    password: 'Edwin',  // Remplacez par votre mot de passe
    port: 5432,                       // Port par défaut pour PostgreSQL
});

export default pool;