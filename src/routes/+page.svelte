<script lang="ts">
	import Title from '$lib/components/modules/title.svelte';
	import Blog from '$lib/components/pagecomps/blog/blog.svelte';
	import Hero from '$lib/components/pagecomps/hero.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<div class="flex flex-col">
	<Hero />
	<Blog {data} />
</div>
