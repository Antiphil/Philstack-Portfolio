<script lang="ts">
	import Button from '$lib/files/modules/button.svelte';
	import { blogStore } from '$lib/stores/blog';
	import Blogitem from './blogitem.svelte';
</script>

<section class="relative flex w-full py-[35px] pr-[70px]">
	<div class="curved-corner-topright !absolute right-0 top-[calc(0px-35px)] !z-50"></div>
	<div class="curved-corner-bottomleft !absolute left-0 top-[calc(0px-65px)] !z-50"></div>
	<div class="relative flex h-full w-full gap-3 overflow-hidden rounded-r-[75px] bg-secondary p-10">
		<section class="flex w-full flex-col items-center px-5 py-2">
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
	</div>
</section>
