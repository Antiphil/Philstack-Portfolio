<script lang="ts">
	import Title from '$lib/components/modules/title.svelte';
	import Blog from '$lib/components/pagecomps/blog/blog.svelte';
	import Partner from '$lib/components/pagecomps/home/partner.svelte';
	import Hero from '$lib/components/pagecomps/home/techstack/hero.svelte';
	import Techstack from '$lib/components/pagecomps/home/techstack/techstack.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<div class="flex flex-col">
	<Hero />
	<div class="lg:hidden">
		<Partner />
	</div>
	<Blog {data} />
	<Techstack />
</div>
