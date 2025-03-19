import pool from '../../../lib/db';

// Récupérer tous les sites d'intervention
export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM sites_intervention');
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (error) {
        console.error('Error fetching sites:', error);
        return new Response('Error fetching sites', { status: 500 });
    }
}

// Ajouter un site d'intervention
export async function POST(request: Request) {
    const { nom_site, adresse } = await request.json();
    try {
        const result = await pool.query(
            'INSERT INTO sites_intervention (nom_site, adresse) VALUES ($1, $2) RETURNING *',
            [nom_site, adresse]
        );
        return new Response(JSON.stringify(result.rows[0]), { status: 201 });
    } catch (error) {
        console.error('Error adding site:', error);
        return new Response('Error adding site', { status: 500 });
    }
}