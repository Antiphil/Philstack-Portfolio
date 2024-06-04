<script lang="ts">
	import Offpagenavbar from '$lib/components/modules/offpagenavbar.svelte';
	import { tooltip } from '$lib/utils/tooltip';
	import { toggleNav } from '$lib/stores/navstore';
	import { locale } from '$i18n/i18n-svelte';
	import Sidebar from '$lib/components/pages/blog/sidebar.svelte';
	import { initializePrism } from '$lib/utils/prismjs.js';
	import { onMount } from 'svelte';
	import { formatDistance, subDays } from 'date-fns';
	import Infobar from '$lib/components/modules/infobar.svelte';

	export let data;

	onMount(() => {
		initializePrism();
	});
</script>

<div class="flex">
	<Offpagenavbar />
	<div class="mt-[30px] w-full p-2 md:w-3/4 md:p-10">
		<a href="/{$locale}/blog" class="text-secondary my-4 flex w-fit items-center gap-2 rounded-xl bg-secondary-900 px-4 py-3 text-xs font-semibold transition-all hover:bg-primary-main hover:text-secondary-800">
			<i class="fa-solid fa-chevron-left"></i>
			<span>Back to Blog Overview</span>
		</a>
		<Infobar date={data.featured[0].attributes.createdAt} />
		<article class="prose-sm prose-pink overflow-hidden p-3 md:p-5">
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
