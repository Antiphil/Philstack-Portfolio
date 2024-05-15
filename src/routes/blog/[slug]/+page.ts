export async function load({ params, fetch }:any) {
	const arcticleID =  params.slug.replace('article=', '')
	console.log(arcticleID)
	let apiUrl = `https://strapi.antiphil.de/api/blogposts/${arcticleID}?populate=*`
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
