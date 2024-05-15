<script>
	
	import Articleinfobar from '$lib/files/modules/articleinfobar.svelte';
    import Articlesidebar from '$lib/files/modules/articlesidebar.svelte';
    import Breadcrumbs from '$lib/files/modules/breadcrumbs.svelte';
	import Title from '$lib/files/modules/title.svelte';

	export let data;
	console.log(data.api.data)
</script>

<section class="relative flex flex-col w-full ">
	{#if data.api.data}
    <Breadcrumbs slugs={["/blog",`/blog/article=${data.api.data.id}`]} titles={["Blog",data.api.data.attributes.title]} />
	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary xl:rounded-bl-[75px]">  
        <Articlesidebar />
		<div class="p-10 w-3/4 mt-10">
            <Articleinfobar link="{data.api.data.attributes?.link}" text={data.api.data.attributes.title} />
            <div class="bg-[rgba(22,22,19,0.8)] p-5 rounded-xl">
                <article id="blogContent" class="prose-base prose-pink">
					
					<div class="mb-8 md:flex md:items-center md:justify-between">
						<div>
							<h1 class="text-2xl font-bold uppercase py-0 my-0 lg:text-3xl">{data.api.data.attributes.title}</h1>
							<div class="flex mx-auto mt-3">
								<span class="inline-block w-40 h-1 bg-primary rounded-full"></span>
								<span class="inline-block w-4 h-1 mx-1 bg-primary rounded-full"></span>
								<span class="inline-block w-2 h-1 bg-primary rounded-full"></span>
							</div>
						</div>
					</div>
						{@html data.api.data.attributes.content}
					
				</article>				
            </div>
        </div>
	</div>
	{/if}
</section>


<style>
	:global(#blogContent img) {
		filter: sepia(0.5);
		border-radius: 20px;
		border: 3px solid #EDE9D0;
		transition: .5s all;
	}
	:global(#blogContent img:hover) {
		filter: sepia(0);
		transition: .5s all;
	}
</style>