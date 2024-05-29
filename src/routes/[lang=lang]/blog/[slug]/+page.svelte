<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';
	import Sidebar from '$lib/components/pages/blog/sidebar.svelte';
	import { initializePrism } from '$lib/utils/prismjs.js';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		initializePrism();
	});
</script>

<div class="flex">
	<div class="prose-base prose-pink w-full p-10 md:w-3/4">
		{#if $locale === 'en'}
			{@html data.featured[0].attributes.content}
		{:else}
			{@html data.featured[0].attributes.localizations.data[0].attributes.content}
		{/if}
	</div>
	<div class="hidden w-1/4 md:block">
		<Sidebar />
	</div>
</div>

<style>
	:global(.prose-pink img) {
		margin: auto;
	}
</style>
