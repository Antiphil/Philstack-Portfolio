<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';

	export let data;
	/* console.log(data.featured[0]); */
</script>

<div class="prose-base">
	{#if $locale === 'en'}
		{@html data.featured[0].attributes.content}
	{:else}
		{@html data.featured[0].attributes.localizations.data[0].attributes.content}
	{/if}
</div>
