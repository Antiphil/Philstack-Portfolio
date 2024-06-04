import { STRAPI_API_TOKEN } from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';

export const load = async ({ params, fetch, request, cookies }: RequestEvent) => {
	const apiURL = `https://strapi.antiphil.de/api/blogposts?populate=*&filters[uid][$eq]=${params.slug}`;
	const sidebarURL = `https://strapi.antiphil.de/api/blogposts?populate=*`;

	try {
		const [responseAPI, responseViews] = await Promise.all([fetch(apiURL), fetch(sidebarURL)]);

		if (responseAPI.ok) {
			const visited = cookies.get('visited');

			const [apiData, sidebarData] = await Promise.all([responseAPI.json(), responseViews.json()]);
			const views = await apiData.data[0].attributes.views;

			if (visited !== 'true') {
				cookies.set('visited', 'true', { path: `${params.slug}` });

				const increaseViewCount = (view: string | null) => {
					return view === null ? 1 : parseInt(view) + 1;
				};

				await fetch(`https://strapi.antiphil.de/api/blogposts/${await apiData.data[0].id}`, {
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
			}

			return {
				status: 200,
				featured: apiData.data,
				sidebar: sidebarData,
				visited
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
