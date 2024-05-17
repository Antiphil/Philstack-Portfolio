<script lang="ts">
	import { page } from '$app/stores';
	import LL, { setLocale } from '$i18n/i18n-svelte';

	import type { LayoutData } from './$types';

	import '../app.css';

	import LocaleSwitcher from '$lib/components/modules/LocaleSwitcher.svelte';
	import Navigation from '$lib/components/modules/navigation.svelte';
	import { navOpen } from '$lib/stores/navstore';

	export let data: LayoutData;
	setLocale(data.locale);
</script>

<LocaleSwitcher />
{#if $navOpen}
	<Navigation />
{/if}

<main>
	<slot />
</main>

<svelte:head>
	<title>{$LL.title()}</title>
</svelte:head>
