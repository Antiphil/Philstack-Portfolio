<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import Section from '$lib/components/layout/section.svelte';
	import About from '$lib/components/pages/home/about.svelte';
	import Hero from '$lib/components/pages/home/hero.svelte';
</script>

<Hero />
<Section left>
	<About />
</Section>
<Section right>
	<div class="text-secondary-800">
		{$LL.projects()}
	</div>
</Section>
