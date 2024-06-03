<script lang="ts">
	import { tooltip } from '$lib/utils/tooltip';
	import { toggleNav } from '$lib/stores/navstore';
	import { locale } from '$i18n/i18n-svelte';
	import Sidebar from '$lib/components/pages/blog/sidebar.svelte';
	import { initializePrism } from '$lib/utils/prismjs.js';
	import { onMount } from 'svelte';
	import { formatDistance, subDays } from 'date-fns';

	export let data;

	onMount(() => {
		initializePrism();
	});
</script>

<div class="flex">
	<button on:click={() => toggleNav()} class="fixed z-20 flex w-3/4 items-center bg-secondary-900/80 px-10 py-5 backdrop-blur-md">
		<i class="fa-solid fa-bars text-xl"></i>
	</button>

	<div class="mt-[68px] w-full p-10 md:w-3/4">
		<div class=" flex items-center justify-between rounded-xl bg-secondary-900 px-5 py-2 text-xs">
			<div class="">
				<span>Posted {formatDistance(subDays(data.featured[0].attributes.createdAt, 0), new Date(), { addSuffix: true })}</span>
			</div>
			<div class="flex gap-3 text-sm">
				<a href="/" use:tooltip={{ text: 'Share on Facebook' }} class="hover:bg-primary hover:text-secondary flex h-6 w-6 items-center justify-center rounded-full transition-all">
					<i class="fa-brands fa-facebook-f"></i>
				</a>
				<a href="/" use:tooltip={{ text: 'Share on X/Twitter' }} class="hover:bg-primary hover:text-secondary flex h-6 w-6 items-center justify-center rounded-full transition-all">
					<i class="fa-brands fa-x-twitter"></i>
				</a>
				<a href="/" use:tooltip={{ text: 'Share on Threads' }} class="hover:bg-primary hover:text-secondary flex h-6 w-6 items-center justify-center rounded-full transition-all">
					<i class="fa-brands fa-threads"></i>
				</a>
				<a href="/" use:tooltip={{ text: 'Copy URL' }} class="hover:bg-primary hover:text-secondary flex h-6 w-6 items-center justify-center rounded-full transition-all">
					<i class="fa-solid fa-link"></i>
				</a>
			</div>
		</div>
		<article class="prose-sm prose-pink p-5">
			<h1>{@html data.featured[0].attributes.title}</h1>
			<img src={`https://strapi.antiphil.de${data.featured[0].attributes.media.data[0].attributes.url}`} alt="Thumbnail" />
			{#if $locale === 'en'}
				{@html data.featured[0].attributes.content}
			{:else}
				{@html data.featured[0].attributes.localizations.data[0].attributes.content}
			{/if}
		</article>
	</div>
	<div class="relative z-30 hidden w-1/4 md:block">
		<Sidebar tags={data.featured[0].attributes.tags.tags} />
	</div>
</div>

<style>
	:global(.prose-pink img) {
		margin: auto;
		border-radius: 16px;
	}
</style>
