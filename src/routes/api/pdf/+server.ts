import puppeteer from 'puppeteer';

export async function GET({}) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	// Setze die URL deiner SvelteKit-Seite
	await page.goto('http://localhost:5173/de/resume', {
		waitUntil: 'networkidle2'
	});

	// Generiere das PDF
	const pdf = await page.pdf({ format: 'A4' });

	await browser.close();

	return {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'attachment; filename=article.pdf'
		},
		body: pdf
	};
}
