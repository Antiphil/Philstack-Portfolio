export async function load({ fetch }: any) {
	let apiAbout = `https://strapi.antiphil.de/api/about?populate=*`;
	let apiBlog = `https://strapi.antiphil.de/api/blogposts?populate=*`;
	try {
		const responseAbout = await fetch(apiAbout);
		const responseBlog = await fetch(apiBlog);
		if (responseAbout.ok) {
			const aboutData = await responseAbout.json();
			const blogData = await responseBlog.json();
			return {
				status: 200,
				api: aboutData,
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
