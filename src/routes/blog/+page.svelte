<script>
	// @ts-nocheck

	import { blogStore } from '$lib/stores/blog';
	import Blogitem1 from '$lib/files/components/home/blog/blogitem1.svelte';
	import Blogitem2 from '$lib/files/components/home/blog/blogitem2.svelte';
	import { format, formatDistance, formatRelative, subDays } from 'date-fns';
	import Articleinfobar from '$lib/files/modules/articleinfobar.svelte';
	import Articlesidebar from '$lib/files/modules/articlesidebar.svelte';
	import Breadcrumbs from '$lib/files/modules/breadcrumbs.svelte';
	import Title from '$lib/files/modules/title.svelte';

	export let currentPage;
	export let totalPages;

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
</script>

<section class="relative flex w-full flex-col pb-[5px] pl-[10px] xl:pb-[35px] xl:pl-[70px]">
	<Breadcrumbs slugs={['/blog']} titles={['Blog']} />
	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary xl:rounded-bl-[75px]">
		<!-- <Articlesidebar /> -->
		<div class="mt-10 w-full px-3 py-5 md:p-10">
			<!-- <Articleinfobar link="ASd" text="Das" /> -->
			<div class="flex flex-col gap-5">
				{#if $blogStore.data}
					{#each $blogStore.data.reverse() as blog, index}
						{#if index < 1}
							{#if index % 2 == 0}
								<Blogitem1 title={blog.attributes.title} url="blog/article={blog.id}" desc={blog.attributes.description} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.date, 3), new Date(), { addSuffix: true })} />
							{:else}
								<Blogitem2 title={blog.attributes.title} url="blog/article={blog.id}" desc={blog.attributes.description} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.date, 3), new Date(), { addSuffix: true })} />
							{/if}
						{/if}
					{/each}
				{/if}
			</div>

			<div class="flex flex-col items-center">
				<!-- Help text -->
				<span class="text-sm text-gray-700 dark:text-gray-400">
					Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span class="font-semibold text-gray-900 dark:text-white">10</span> of <span class="font-semibold text-gray-900 dark:text-white">100</span> Entries
				</span>
				<!-- Buttons -->
				<div class="xs:mt-0 mt-2 inline-flex">
					<button class="flex h-8 items-center justify-center rounded-s bg-gray-800 px-3 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> Prev </button>
					<button class="flex h-8 items-center justify-center rounded-e border-0 border-s border-gray-700 bg-gray-800 px-3 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> Next </button>
				</div>
			</div>
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
