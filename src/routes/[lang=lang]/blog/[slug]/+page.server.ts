import { STRAPI_API_TOKEN } from '$env/static/private';

export const load = async ({ params, fetch }: any) => {
	const apiURL = `https://strapi.antiphil.de/api/blogposts?populate=*&filters[uid][$eq]=${params.slug}`;

	try {
		const response = await fetch(apiURL);

		if (response.ok) {
			const data = await response.json();
			const views = await data.data[0].attributes.views;

			const increaseViewCount = async (view: any) => {
				if (view === null) {
					return '1';
				} else {
					return parseInt(view) + 1;
				}
				return '1';
			};

			await fetch(`https://strapi.antiphil.de/api/blogposts/${await data.data[0].id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${STRAPI_API_TOKEN}`
				},
				body: JSON.stringify({
					data: {
						views: await increaseViewCount(views)
					}
				})
			});

			return {
				status: 200,
				featured: data.data
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
