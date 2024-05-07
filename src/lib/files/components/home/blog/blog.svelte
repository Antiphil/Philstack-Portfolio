<script lang="ts">
	import Button from '$lib/files/modules/button.svelte';
	import Title from '$lib/files/modules/title.svelte';
	import { blogStore } from '$lib/stores/blog';
	import Blogitem from './blogitem.svelte';
	import { format, formatDistance, formatRelative, subDays } from 'date-fns';
</script>

<section class="w-full">
	<div class="container mx-auto px-6 py-10">
		<div class="mb-10 mt-6 md:flex md:items-center md:justify-between">
			<div>
				<h1 class="text-2xl font-bold uppercase lg:text-3xl">My Blog</h1>

				<div class="mx-auto mt-3 flex">
					<span class="inline-block h-1 w-40 rounded-full bg-primary"></span>
					<span class="mx-1 inline-block h-1 w-4 rounded-full bg-primary"></span>
					<span class="inline-block h-1 w-2 rounded-full bg-primary"></span>
				</div>
			</div>
		</div>

		<div class="flex w-full gap-5">
			{#if $blogStore.data}
				{#each $blogStore.data.reverse() as blog, index}
					{#if index < 4}
						<article class="group h-[600px] w-[25%] transform cursor-pointer overflow-hidden rounded-2xl bg-cover bg-center shadow-xl sepia duration-500 hover:-translate-y-2" style={`background-image: url(https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url})`}>
							<div class="relative flex h-[600px] transform flex-col bg-black bg-opacity-20 px-6 py-6 duration-300 hover:bg-opacity-75">
								<h1 class="absolute bottom-10 mb-5 transform text-3xl font-medium drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] duration-300 group-hover:translate-y-[-100px]">{blog.attributes.title}</h1>
								<div class="absolute bottom-5 mb-5 flex h-2 w-full transform rounded-full drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] duration-300 group-hover:translate-y-[-100px]">
									<span class="inline-block h-1.5 w-20 rounded-full bg-primary"></span>
									<span class="mx-1 inline-block h-1.5 w-6 rounded-full bg-primary"></span>
									<span class="inline-block h-1.5 w-2 rounded-full bg-primary"></span>
								</div>
								<p class="absolute bottom-5 line-clamp-3 w-[calc(100%-48px)] translate-y-[-40px] transform text-sm opacity-0 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] duration-500 group-hover:opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing consectetur adipisicing consectetur adipisicing elit. Vitae, sapiente tempore iusto consectetur quo soluta consequatur. Ad officiis ea voluptas!</p>
								<p class="absolute bottom-5 flex w-[calc(100%-48px)] translate-y-[-0px] transform justify-between pb-3 text-xs opacity-0 drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] duration-500 group-hover:opacity-80">
									<span>{formatDistance(subDays(blog.attributes.date, 3), new Date(), { addSuffix: true })}</span>
									<span>Author: Phil</span>
								</p>
							</div>
						</article>
					{/if}
				{/each}
			{/if}
		</div>
		<Button text="View Blog" link="/" />
	</div>
</section>
