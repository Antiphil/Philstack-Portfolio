<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import { locales } from '$i18n/i18n-util';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { replaceLocaleInUrl } from '../../../utils.js';
	import { navOpen, toggleNav } from '$lib/stores/navstore';

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;

		// load new dictionary from server
		await loadLocaleAsync(newLocale);

		// select locale
		setLocale(newLocale);

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
		}

		// run the `load` function again
		invalidateAll();
	};

	// update `lang` attribute
	$: browser && document.querySelector('html')!.setAttribute('lang', $locale);

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);

	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang, false);
		history.replaceState({ ...history.state, locale: lang }, '', replaceLocaleInUrl($page.url, lang));
	}
	$: console.log($navOpen);
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<ul class="fixed right-1 top-2 z-[1000] flex flex-col gap-2">
	{#each locales as l}
		<li>
			<a class="bg-secondary-800 px-2 py-1" class:active={l === $locale} href={replaceLocaleInUrl($page.url, l)}>
				{l}
			</a>
		</li>
	{/each}
</ul>
