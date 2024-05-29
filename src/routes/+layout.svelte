<script lang="ts">
	import { page } from '$app/stores';
	import LL, { setLocale } from '$i18n/i18n-svelte';
	import { fade, fly } from 'svelte/transition';

	import type { LayoutData } from './$types';

	import '../app.css';

	import LocaleSwitcher from '$lib/components/modules/LocaleSwitcher.svelte';
	import Navigation from '$lib/components/modules/navigation.svelte';
	import { navOpen, toggleNav } from '$lib/stores/navstore';
	import Footer from '$lib/components/layout/footer.svelte';

	export let data: LayoutData;
	setLocale(data.locale);
</script>

<LocaleSwitcher />
{#if $navOpen}
	<Navigation />
{:else}
	<button out:fly={{ duration: 800, x: -1000 }} in:fly={{ delay: 0, duration: 600, x: -1000 }} on:click={toggleNav} class="fixed left-2.5 top-1/2 z-[1000] flex h-10 w-5 -translate-x-1/2 transform items-center justify-center rounded-r-lg bg-primary-main text-secondary-800 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all hover:bg-secondary-800 hover:text-primary-main">
		<i class="fa-solid fa-bars"></i>
	</button>
{/if}

<main>
	<slot />
</main>
<Footer />
<svelte:head>
	<title>{$LL.title()}</title>
</svelte:head>
