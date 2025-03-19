import pool from '../../../lib/db';

// Récupérer tous les commerciaux
export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM commerciaux');
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (error) {
        console.error('Error fetching commerciaux:', error);
        return new Response('Error fetching commerciaux', { status: 500 });
    }
}

// Ajouter un commercial
export async function POST(request: Request) {
    const { nom, prenoms, contact } = await request.json();
    try {
        const result = await pool.query(
            'INSERT INTO commerciaux (nom, prenoms, contact) VALUES ($1, $2, $3) RETURNING *',
            [nom, prenoms, contact]
        );
        return new Response(JSON.stringify(result.rows[0]), { status: 201 });
    } catch (error) {
        console.error('Error adding commercial:', error);
        return new Response('Error adding commercial', { status: 500 });
    }
}