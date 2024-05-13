<script lang="ts">
	import Button from '$lib/files/modules/button.svelte';
	import Title from '$lib/files/modules/title.svelte';
	import { blogStore } from '$lib/stores/blog';
	import Blogitem1 from './blogitem1.svelte';
	import Blogitem2 from './blogitem2.svelte';
	import { format, formatDistance, formatRelative, subDays } from 'date-fns';
</script>

<section class="w-full">
	<div class="container mx-auto px-6 py-10">
		<div class="mb-10 max-w-screen-xl m-auto mt-6 md:flex md:items-center md:justify-between">
			<div>
				<h1 class="text-2xl font-bold uppercase lg:text-3xl">Latest Articles</h1>

				<div class="mx-auto mt-3 flex">
					<span class="inline-block h-1 w-40 rounded-full bg-primary"></span>
					<span class="mx-1 inline-block h-1 w-4 rounded-full bg-primary"></span>
					<span class="inline-block h-1 w-2 rounded-full bg-primary"></span>
				</div>
			</div>
		</div>

		<div class="flex flex-col  w-full gap-5">
			{#if $blogStore.data}
				{#each $blogStore.data.reverse() as blog, index}
					{#if index < 4}
						{#if index % 2 == 0}
							<Blogitem1 title={blog.attributes.title} desc={undefined} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.date, 3), new Date(), { addSuffix: true })}/>
						{:else}
							<Blogitem2 title={blog.attributes.title} desc={undefined} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.date, 3), new Date(), { addSuffix: true })}/>
						{/if}
					{/if}
				{/each}
			{/if}
		</div>
		<div class="flex justify-center mt-10">
		<Button text="Visit blog page" link="/" />
		</div>
	</div>
</section>
