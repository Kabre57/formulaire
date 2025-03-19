import pool from '../../../lib/db';

// Récupérer tous les techniciens
export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM techniciens');
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (error) {
        console.error('Error fetching techniciens:', error);
        return new Response('Error fetching techniciens', { status: 500 });
    }
}

// Ajouter un technicien
export async function POST(request: Request) {
    const { nom, prenoms, contact } = await request.json();
    try {
        const result = await pool.query(
            'INSERT INTO techniciens (nom, prenoms, contact) VALUES ($1, $2, $3) RETURNING *',
            [nom, prenoms, contact]
        );
        return new Response(JSON.stringify(result.rows[0]), { status: 201 });
    } catch (error) {
        console.error('Error adding technicien:', error);
        return new Response('Error adding technicien', { status: 500 });
    }
}