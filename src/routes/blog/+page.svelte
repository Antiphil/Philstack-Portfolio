<script lang="ts">
	// @ts-nocheck

	import { blogStore } from '$lib/stores/blog';
	import Blogitem1 from '$lib/files/components/home/blog/blogitem1.svelte';
	import Blogitem2 from '$lib/files/components/home/blog/blogitem2.svelte';
	import { format, formatDistance, formatRelative, subDays } from 'date-fns';
	import Articleinfobar from '$lib/files/modules/articleinfobar.svelte';
	import Articlesidebar from '$lib/files/modules/articlesidebar.svelte';
	import Breadcrumbs from '$lib/files/modules/breadcrumbs.svelte';
	import Title from '$lib/files/modules/title.svelte';

	let curPage = 1
	let pageSize = 8
	$: strapiURL = `https://strapi.antiphil.de/api/blogposts?populate=*&pagination[pageSize]=${pageSize}&pagination[page]=${curPage}`
	let data = undefined;
	
	$: {
		const fetchDataFromAPI = async () => {
			try {
				const response = await fetch(strapiURL);
				data = await response.json();
			} catch (error) {
				console.error('Fehler beim Abrufen der Blog Daten.', error);
			}
		};
		fetchDataFromAPI();
	}
	const nextPage = () => { if (curPage < data.meta.pagination.pageCount) curPage += 1 };
	const prevPage = () => { if (curPage > 1) curPage -= 1; };
	
	
</script>

<section class="relative flex w-full flex-col pb-[5px] pl-[10px] xl:pb-[35px] xl:pl-[70px]">
	<Breadcrumbs slugs={['/blog']} titles={['Blog']} />
	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary xl:rounded-bl-[75px]">
		<!-- <Articlesidebar /> -->
		<div class="mt-10 w-full px-3 py-5 md:p-10">
			<!-- <Articleinfobar link="ASd" text="Das" /> -->
			{#if data}
				<div class="flex flex-col gap-5">
						{#each data.data as blog, index}
							{#if index % 2 == 0}
								<Blogitem1 title={blog.attributes.title} url="blog/article={blog.id}" desc={blog.attributes.description} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.date, 3), new Date(), { addSuffix: true })} />
							{:else}
								<Blogitem2 title={blog.attributes.title} url="blog/article={blog.id}" desc={blog.attributes.description} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.date, 3), new Date(), { addSuffix: true })} />
							{/if}
						{/each}
					
				</div>

				<div class="flex flex-col items-center mt-5">
					<span class="text-sm text-gray-700 dark:text-gray-400">
						Showing up to <span class="font-semibold text-gray-900 dark:text-white">{pageSize}</span> elements of <span class="font-semibold text-gray-900 dark:text-white">{data.meta.pagination.total}</span> Articles
					</span>
					<div class="xs:mt-0 mt-2 inline-flex">
						<button on:click={() => (prevPage())} class="{curPage > 1 ? 'hover:bg-primaryhover' : 'opacity-30 cursor-not-allowed'} flex h-8 items-center justify-center rounded-s bg-primary px-3 text-sm font-medium text-secondary "> Prev </button>
						<button on:click={() => (nextPage())} class="{curPage < data.meta.pagination.pageCount ? 'hover:bg-primaryhover' : 'opacity-30 cursor-not-allowed'} flex h-8 items-center justify-center rounded-e  bg-primary px-3 text-sm font-medium text-secondary hover:bg-primaryhover"> Next </button>
					</div>
				</div>
			{:else}
				
				<div class="w-full flex justify-center h-[80vh] items-center" role="status">
					<svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
						<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
					</svg>
					<span class="sr-only">Loading...</span>
				</div>

			{/if}
		</div>
	</div>
</section>

<style>
	:global(#blogContent img) {
		filter: sepia(0.5);
		border-radius: 20px;
		border: 3px solid #ede9d0;
		transition: 0.5s all;
	}
	:global(#blogContent img:hover) {
		filter: sepia(0);
		transition: 0.5s all;
	}
</style>
