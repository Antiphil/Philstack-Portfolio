// src/routes/api/generate-pdf.js
import puppeteer from 'puppeteer';

export async function POST({ request }) {
	const { url } = await request.json();
	console.log(url);

	if (!url) {
		return {
			status: 400,
			body: {
				error: 'URL is required'
			}
		};
	}

	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(url, { waitUntil: 'networkidle2' });
		console.log('step');
		const pdf = await page.pdf({
			format: 'A4',
			printBackground: false
		});
		console.log('step2');
		await browser.close();

		return {
			status: 200,
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': 'attachment; filename="article.pdf"'
			},
			body: pdf
		};
	} catch (error) {
		console.error(error);
		return {
			status: 500,
			body: {
				error: 'Failed to generate PDF'
			}
		};
	}
}
