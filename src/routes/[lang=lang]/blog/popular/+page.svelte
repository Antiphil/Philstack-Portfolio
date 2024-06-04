<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';
	import Offpagenavbar from './../../../../lib/components/modules/offpagenavbar.svelte';
	import BlogitemL from '$lib/components/modules/blogitems/blogitemL.svelte';
	import BlogitemR from '$lib/components/modules/blogitems/blogitemR.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';
	import { formatDistance, subDays } from 'date-fns';

	export let data;
	let posts = [];
	let pagination: any;
	let curPage = 1;

	$: {
		const unsubscribe = page.subscribe(($page) => {
			posts = $page.data.posts;
			pagination = $page.data.pagination;
			curPage = pagination.page;
		});
		onDestroy(() => {
			unsubscribe();
		});
	}

	const nextPage = () => {
		curPage += 1;
		goto(`?page=${curPage}`);
	};

	const prevPage = () => {
		if (curPage > 1) {
			curPage -= 1;
			goto(`?page=${curPage}`);
		}
	};
</script>

<Offpagenavbar />
<div class="m-auto mt-16 max-w-7xl p-10">
	<div class="flex items-center justify-between">
		<Title title="Popular Posts" />
		<a href="/{$locale}/blog" class="text-secondary flex h-fit w-fit items-center gap-2 rounded-xl bg-secondary-900 px-4 py-3 text-xs font-semibold transition-all hover:bg-primary-main hover:text-secondary-800">
			<i class="fa-solid fa-chevron-left"></i>
			<span>Back to Blog Overview</span>
		</a>
	</div>

	<div class="mt-10 flex flex-col gap-5">
		{#each data.posts as blog, index}
			{#if index < 4}
				{#if $locale === 'en'}
					{#if index % 2 == 0}
						<BlogitemL title={blog.attributes.title} url="/{$locale}/blog/article/{blog.attributes.uid}" desc={blog.attributes.description} tags={blog.attributes.tags.tags} views={blog.attributes.views} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} />
					{:else}
						<BlogitemR title={blog.attributes.title} url="/{$locale}/blog/article/{blog.attributes.uid}" desc={blog.attributes.description} tags={blog.attributes.tags.tags} views={blog.attributes.views} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} />
					{/if}
				{:else if $locale === 'de'}
					{#if index % 2 == 0}
						<BlogitemL title={blog.attributes.localizations.data[0].attributes.title} url="/{$locale}/blog/article/{blog.attributes.uid}" views={blog.attributes.views} tags={blog.attributes.tags.tags} desc={blog.attributes.localizations.data[0].attributes.description} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} />
					{:else}
						<BlogitemR title={blog.attributes.localizations.data[0].attributes.title} url="/{$locale}/blog/article/{blog.attributes.uid}" views={blog.attributes.views} tags={blog.attributes.tags.tags} desc={blog.attributes.localizations.data[0].attributes.description} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} />
					{/if}
				{/if}
			{/if}
		{/each}

		<!-- <BlogitemR /> -->
	</div>
	<div class="mb-5 mt-10 flex justify-center">
		<div class="flex items-center gap-4">
			<button on:click={prevPage} disabled={curPage === 1} class="flex select-none items-center gap-2 rounded-full px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-primary-main transition-all hover:bg-primary-main/10 active:bg-primary-main/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
					<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
				</svg>
				Previous
			</button>
			<div class="flex items-center gap-2 font-bold">
				{#if pagination.pageCount > 1 && pagination.page > 1}
					<button class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs uppercase text-primary-main transition-all hover:bg-primary-main/10 active:bg-primary-main/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
						<span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"> {pagination.page - 1} </span>
					</button>
				{/if}

				<button class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full bg-primary-main text-center align-middle font-sans text-xs uppercase text-secondary-800 shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
					<span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"> {data.pagination.page} </span>
				</button>

				{#if pagination.page < pagination.pageCount}
					<button class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs uppercase text-primary-main transition-all hover:bg-primary-main/10 active:bg-primary-main/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
						<span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"> {pagination.page + 1} </span>
					</button>
				{/if}
			</div>
			<button on:click={nextPage} disabled={curPage === pagination.pageCount} class="flex select-none items-center gap-2 rounded-full px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-primary-main transition-all hover:bg-primary-main/10 active:bg-primary-main/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
				Next
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
				</svg>
			</button>
		</div>
	</div>
</div>
