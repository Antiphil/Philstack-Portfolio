<script lang="ts">
	import Button from '$lib/files/modules/button.svelte';
	import Title from '$lib/files/modules/title.svelte';
	import { blogStore } from '$lib/stores/blog';
	import Blogitem from './blogitem.svelte';
</script>

<!-- <section class="flex w-full flex-col items-center">
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
</section> -->
<section class="">
    <div class="container px-6 py-10 mx-auto">
        <div class="mt-6 md:flex md:items-center md:justify-between">
            <div>
                <h1 class="text-2xl font-bold uppercase lg:text-3xl">
                    My Blog
                </h1>

                <div class="flex mx-auto mt-3">
                    <span class="inline-block w-40 h-1 bg-primary rounded-full"></span>
                    <span class="inline-block w-4 h-1 mx-1 bg-primary rounded-full"></span>
                    <span class="inline-block w-2 h-1 bg-primary rounded-full"></span>
                </div>
            </div>

        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
			{#if $blogStore.data}
				{#each $blogStore.data.reverse() as blog, index}
					{#if index < 4}
					<div class="lg:flex bg-black/30 rounded-xl">
						<img class="object-cover w-full h-56 rounded-lg lg:w-64" src={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} alt="">
		
						<div class="flex flex-col justify-between py-4 lg:mx-4">
							<a href="#" class="text-xl font-semibold  hover:underline  ">
								{blog.attributes.title}
							</a>
							
							<span class="text-sm ">{blog.attributes.date}</span>
						</div>
					</div>
					{/if}
				{/each}
			{/if}

        </div>
		<Button text="View Blog" link="/" />
    </div>
</section>