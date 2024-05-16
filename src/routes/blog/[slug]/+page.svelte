<script>
	// @ts-nocheck

	import Articleinfobar from '$lib/files/modules/articleinfobar.svelte';
	import Articlesidebar from '$lib/files/modules/articlesidebar.svelte';
	import Breadcrumbs from '$lib/files/modules/breadcrumbs.svelte';
	import Title from '$lib/files/modules/title.svelte';
	import { onMount } from 'svelte';
	import { initializePrism } from '$lib/utils/initprism.js'; // Annahme: Pfad zur Initialisierungsfunktion
	import { format, formatDistance, formatRelative, subDays } from 'date-fns';

	onMount(() => {
		initializePrism();
	});

	export let data;
</script>

<section class="relative flex w-full flex-col">
	{#if data.api.data}
		<Breadcrumbs slugs={['/blog', `/blog/article=${data.api.data.id}`]} titles={['Blog', data.api.data.attributes.title]} />
		<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary xl:rounded-bl-[75px]">
			<div class="mt-10 w-full p-10">
				<Articleinfobar text={`posted ${formatDistance(subDays(data.api.data.attributes.date, 3), new Date(), { addSuffix: true })}`} />
				<div class="rounded-xl bg-[rgba(22,22,19,0.8)] p-5">
					<article id="blogContent" class="prose-base prose-pink">
						<div class="mb-8 md:flex md:items-center md:justify-between">
							<div>
								<h1 class="my-0 py-0 text-2xl font-bold uppercase lg:text-3xl">{data.api.data.attributes.title}</h1>
								<div class="mx-auto mt-3 flex">
									<span class="inline-block h-1 w-40 rounded-full bg-primary"></span>
									<span class="mx-1 inline-block h-1 w-4 rounded-full bg-primary"></span>
									<span class="inline-block h-1 w-2 rounded-full bg-primary"></span>
								</div>
							</div>
						</div>
						{@html data.api.data.attributes.content}
					</article>
				</div>
			</div>
		</div>
	{/if}
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
