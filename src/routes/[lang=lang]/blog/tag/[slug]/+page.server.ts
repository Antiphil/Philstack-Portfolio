import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, params }) => {
	const page = Number(url.searchParams.get('page')) || 1;
	const tag = params.slug;

	const res = await fetch(`https://strapi.antiphil.de/api/blogposts?populate=*&filters[tags][$contains]=${tag}&pagination[pageSize]=6&pagination[page]=${page}`);
	const data = await res.json();

	return {
		posts: data.data,
		pagination: data.meta.pagination
	};
};
