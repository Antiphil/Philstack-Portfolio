<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import Section from '$lib/components/layout/section.svelte';
	import About from '$lib/components/pages/home/about.svelte';
	import Blog from '$lib/components/pages/home/blog.svelte';
	import Contact from '$lib/components/pages/home/contact.svelte';
	import Hero from '$lib/components/pages/home/hero.svelte';
	import Projects from '$lib/components/pages/home/projects.svelte';

	export let data;
</script>

<Hero />

<Section left>
	<About about={data.about} />
</Section>

<Section right>
	<Projects />
</Section>

<Section left>
	<Blog blog={data.blog} />
</Section>

<Section right>
	<Contact />
</Section>
