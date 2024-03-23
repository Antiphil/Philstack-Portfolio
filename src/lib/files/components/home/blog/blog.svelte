<script lang="ts">
	import Button from '$lib/files/modules/button.svelte';
	import Title from '$lib/files/modules/title.svelte';
	import { blogStore } from '$lib/stores/blog';
	import Blogitem from './blogitem.svelte';
</script>

<section class="flex w-full flex-col items-center">
	<div class="flex w-full flex-col  items-center">
		<Title title="Blog Posts" nr="03." />
		{#if $blogStore.data}
			{#each $blogStore.data.reverse() as blog, index}
				{#if index < 4}
					<Blogitem title={blog.attributes.title} tag={blog.attributes.tag} date={blog.attributes.date} desc={blog.attributes.description} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} />
				{/if}
			{/each}
		{/if}
	</div>
	<Button text="View Blog" link="/" />
</section>
