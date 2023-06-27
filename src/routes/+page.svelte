<script lang="ts">
	import heroImage from '$lib/assets/heroImage.png';
	import Blog from '$lib/components/pagecomps/blog/blog.svelte';
	import Hero from '$lib/components/pagecomps/hero.svelte';
	import Test from '$lib/components/pagecomps/test.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<div class="flex flex-col gap-10">
	<Hero />
	<Test />
	<Blog {data} />
</div>
