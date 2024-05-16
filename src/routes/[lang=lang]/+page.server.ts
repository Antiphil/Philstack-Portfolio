export async function load({ fetch }: any) {
	let apiUrl = `https://strapi.antiphil.de/api/about?populate=*`;
	try {
		const response = await fetch(apiUrl);
		if (response.ok) {
			const data = await response.json();
			return {
				status: 200,
				api: data
			};
		} else {
			return {
				status: response.status,
				body: {
					error: 'Failed to fetch data from the API'
				}
			};
		}
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			status: 500,
			body: {
				error: 'Internal server error'
			}
		};
	}
}
