// src/routes/api/posts.js
import fs from 'fs';

const environmentalKeywords = ["Klima", "Umwelt", "Nachhaltigkeit", "Energieeffizienz", "Ressourcenverbrauch", "Abfallmanagement", "Umweltverschmutzung", "Umweltschutz", "Ressourcenschonung", "CO2-Fußabdruck"];
const socialKeywords = ["Soziale Verantwortung", "Vielfalt", "Inklusion", "Menschenrechte", "Arbeitsbedingungen", "Gesundheit und Sicherheit am Arbeitsplatz", "Gemeinschaftsengagement", "Mitarbeiterengagement", "Gesundheit", "Diversity", "Arbeitskultur"];
const governanceKeywords = ["Ethik", "Governance", "Unternehmensführung", "Compliance", "Richtlinien", "Integrität", "Verantwortung", "Transparenz"];

// Read the dataset
const linkedinPosts = JSON.parse(fs.readFileSync("src/data/dataset_linkedin.json", 'utf-8'));


export async function GET() {
    // Map through posts and categorize them
    const categorizedPosts = linkedinPosts.map(post => {
        let category = 'Other';
        const text = post.text.toLowerCase();

        if (environmentalKeywords.some(keyword => text.includes(keyword.toLowerCase()))) {
            category = 'Environmental';
        } else if (socialKeywords.some(keyword => text.includes(keyword.toLowerCase()))) {
            category = 'Social';
        } else if (governanceKeywords.some(keyword => text.includes(keyword.toLowerCase()))) {
            category = 'Governance';
        }

        return { ...post, category };
    });

    // Set headers for CORS and content type
    const headers = new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    });

    // Return the categorized posts
    return new Response(JSON.stringify(categorizedPosts), {
        status: 200,
        headers: headers
    });
}
