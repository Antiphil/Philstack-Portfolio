<script lang="ts">
	import Title from '$lib/components/modules/title.svelte';
	import Blogcard from './blogcard.svelte';

	export let data: any;
</script>

<section class="py-6 sm:py-32 bg-black/20">
	<div class="container p-6 mx-auto space-y-8">
		<Title title1="Meine neusten und besten Posts" title2="Mein Portfolio, Mein Blog" />

		<div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			{#each data.posts as post}
				<Blogcard slug={post.slug} title={post.title} date={post.date} desc={post.description} />
			{/each}
		</div>
	</div>
</section>
