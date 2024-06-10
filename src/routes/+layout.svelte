<script lang="ts">
	import { page } from '$app/stores';
	import LL, { setLocale } from '$i18n/i18n-svelte';
	import { fade, fly } from 'svelte/transition';

	import type { LayoutData } from './$types';

	import '../app.css';

	import LocaleSwitcher from '$lib/components/modules/LocaleSwitcher.svelte';
	import Navigation from '$lib/components/layout/navigation.svelte';
	import { navOpen, toggleNav } from '$lib/stores/navstore';
	import Footer from '$lib/components/layout/footer.svelte';
	import Headerbar from '$lib/components/layout/headerbar.svelte';

	export let data: LayoutData;
	setLocale(data.locale);
</script>

<Headerbar />
<!-- <LocaleSwitcher /> -->
{#if $navOpen}
	<Navigation />
{/if}

<main>
	<slot />
</main>

<Footer />
<svelte:head>
	<title>{$LL.title()}</title>
</svelte:head>
