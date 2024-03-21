<script lang="ts">
	import Button from '$lib/files/modules/button.svelte';
	import { blogStore } from '$lib/stores/blog';
	import Blogitem from './blogitem.svelte';
</script>

<section class="flex w-full flex-col items-center">
	<div class="flex w-full flex-col gap-20">
		{#if $blogStore.data}
			{#each $blogStore.data.reverse() as blog, index}
				{#if index < 4}
					<Blogitem title={blog.attributes.title} tag={blog.attributes.tag} date={blog.attributes.date} desc={blog.attributes.description} />
				{/if}
			{/each}
		{/if}
	</div>
	<Button text="View Blog" link="/" />
</section>
