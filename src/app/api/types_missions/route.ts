import pool from '../../../lib/db';

// Récupérer tous les types de missions
export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM types_missions');
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (error) {
        console.error('Error fetching types:', error);
        return new Response('Error fetching types', { status: 500 });
    }
}

// Ajouter un type de mission
export async function POST(request: Request) {
    const { type_mission } = await request.json();
    try {
        const result = await pool.query(
            'INSERT INTO types_missions (type_mission) VALUES ($1) RETURNING *',
            [type_mission]
        );
        return new Response(JSON.stringify(result.rows[0]), { status: 201 });
    } catch (error) {
        console.error('Error adding type:', error);
        return new Response('Error adding type', { status: 500 });
    }
}