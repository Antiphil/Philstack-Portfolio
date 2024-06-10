<script lang="ts">
	import Offpagenavbar from '$lib/components/modules/offpagenavbar.svelte';
	import { locale } from '$i18n/i18n-svelte';
	import Sidebar from '$lib/components/pages/blog/sidebar.svelte';
	import { initializePrism } from '$lib/utils/prismjs.js';
	import { onMount } from 'svelte';
	import Infobar from '$lib/components/modules/infobar.svelte';

	export let data;

	onMount(() => {
		initializePrism();
	});
</script>

<div class="flex">
	<Offpagenavbar />
	<div class="mt-[68px] w-full p-3 md:w-3/4 md:p-8">
		<div class=" flex w-full flex-col-reverse items-center gap-2 md:flex-row">
			<Infobar date={data.featured[0].attributes.createdAt} />
			<a href="/{$locale}/blog" class="flex h-fit w-full items-center gap-2 rounded-xl bg-primary-main px-6 py-2.5 text-xs font-semibold text-secondary-900 transition-all hover:bg-secondary-900 hover:text-primary-main md:w-fit">
				<i class="fa-solid fa-chevron-left"></i>
				<span>Back</span>
			</a>
		</div>
		<article class="prose-sm prose-pink overflow-hidden p-3 md:p-5">
			{#if $locale === 'en'}
				<h1>{@html data.featured[0].attributes.title}</h1>
			{:else}
				<h1>{@html data.featured[0].attributes.localizations.data[0].attributes.title}</h1>
			{/if}
			<img src={`https://strapi.antiphil.de${data.featured[0].attributes.media.data[0].attributes.url}`} alt="Thumbnail" />
			{#if $locale === 'en'}
				{@html data.featured[0].attributes.content}
			{:else}
				{@html data.featured[0].attributes.localizations.data[0].attributes.content}
			{/if}
		</article>
	</div>
	<div class="relative z-30 hidden w-1/4 md:block">
		<Sidebar tags={data.featured[0].attributes.tags.tags} data={data.sidebar} />
	</div>
</div>

<style>
	:global(.prose-pink img) {
		border-radius: 16px;
	}
	:global(.prose-pink .image) {
		margin: 0 auto;
	}
</style>
