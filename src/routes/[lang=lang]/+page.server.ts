export async function load({ fetch }: any) {
	let apiAbout = `https://strapi.antiphil.de/api/about?populate=*`;
	let apiBlog = `https://strapi.antiphil.de/api/blogposts?populate=*`;
	try {
		const [responseAbout, responseBlog] = await Promise.all([fetch(apiAbout), fetch(apiBlog)]);

		if (responseAbout.ok) {
			const [aboutData, blogData] = await Promise.all([responseAbout.json(), responseBlog.json()]);
			return {
				status: 200,
				about: aboutData,
				blog: blogData
			};
		} else {
			return {
				status: responseAbout.status,
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
