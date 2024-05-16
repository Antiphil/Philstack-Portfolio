<script lang="ts">
	import { page } from '$app/stores';
	import LL, { setLocale } from '$i18n/i18n-svelte';

	import type { LayoutData } from './$types';

	import '../app.css';
	import LocaleSwitcher from '$lib/components/modules/LocaleSwitcher.svelte';

	export let data: LayoutData;
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);
</script>

<LocaleSwitcher />
<main>
	<slot />
</main>

<svelte:head>
	<title>{$LL.title()}</title>
</svelte:head>
