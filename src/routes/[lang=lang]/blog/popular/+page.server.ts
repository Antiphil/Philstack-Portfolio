import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const page = Number(url.searchParams.get('page')) || 1;

	const res = await fetch(`https://strapi.antiphil.de/api/blogposts?populate=*&sort=views:desc&pagination[pageSize]=6&pagination[page]=${page}`);
	const data = await res.json();

	return {
		posts: data.data,
		pagination: data.meta.pagination
	};
};
