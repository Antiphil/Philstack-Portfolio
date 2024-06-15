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
	<div class="mt-[68px] w-full p-2 md:w-3/4 md:p-10">
		<Infobar text={'www.KreativWerkstatt.de'} />
		<article class="prose-sm prose-pink overflow-hidden p-3 md:p-5">
			<img src="https://myperfectwords.com/_next/image?url=https%3A%2F%2Fassets.myperfectwords.com%2Fblog%2Fwriting-a-case-study%2FCase-Study-10667.jpg&w=640&q=75" alt="" />
		</article>
	</div>
	<div class="relative z-30 hidden w-1/4 md:block">
		<!-- <Sidebar tags={['ya']} /> -->
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
