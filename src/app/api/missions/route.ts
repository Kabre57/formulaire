import pool from '../../../lib/db';

// Récupérer toutes les missions
export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM missions');
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (error) {
        console.error('Error fetching missions:', error);
        return new Response('Error fetching missions', { status: 500 });
    }
}

// Ajouter une mission
export async function POST(request: Request) {
    const { type_mission_id, site_id, date, heure_debut, heure_fin, statut, notes } = await request.json();
    try {
        const result = await pool.query(
            'INSERT INTO missions (type_mission_id, site_id, date, heure_debut, heure_fin, statut, notes) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [type_mission_id, site_id, date, heure_debut, heure_fin, statut, notes]
        );
        return new Response(JSON.stringify(result.rows[0]), { status: 201 });
    } catch (error) {
        console.error('Error adding mission:', error);
        return new Response('Error adding mission', { status: 500 });
    }
}