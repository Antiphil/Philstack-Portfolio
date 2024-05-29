export const load = async ({ fetch }: any) => {
	const apiURL = 'https://strapi.antiphil.de/api/blogposts?populate=*';
	try {
		const response = await fetch(apiURL);
		if (response.ok) {
			const data = await response.json();
			return {
				status: 200,
				featured: data.data.filter((article: { attributes: { featured: boolean } }) => article.attributes.featured === true).reverse(),
				main: data.data.filter((article: { id: number }) => article.id === 50),
				latest: data.data,
				popular: data.data
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
};
