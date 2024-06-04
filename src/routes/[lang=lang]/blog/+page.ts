export const load = async ({ fetch }: any) => {
	const apiURL = 'https://strapi.antiphil.de/api/blogposts?populate=*';
	const viewURL = 'https://strapi.antiphil.de/api/blogposts?populate=*&sort=views:desc';

	try {
		const [responseAPI, responseViews] = await Promise.all([fetch(apiURL), fetch(viewURL)]);

		if (responseAPI.ok) {
			const [apiData, viewData] = await Promise.all([responseAPI.json(), responseViews.json()]);
			return {
				status: 200,
				featured: apiData.data.filter((article: { attributes: { featured: boolean } }) => article.attributes.featured === true).reverse(),
				main: apiData.data.filter((article: { id: number }) => article.id === 50),
				latest: apiData.data.reverse(),
				popular: viewData.data
			};
		} else {
			return {
				status: responseAPI.status,
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
