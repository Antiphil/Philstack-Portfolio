<script>
	import ProjectItem from "$lib/files/components/home/projects/projectItem.svelte";
	import xivdb from '$lib/assets/xivdb_banner.png';
	import trio from '$lib/assets/trio_banner.png';
	import xivdata from '$lib/assets/xiv_banner.png';
	import landkautz from '$lib/assets/landkautz_banner.png';
	import lukas from '$lib/assets/lukas_banner.png';
	import Title from '$lib/files/modules/title.svelte';
	import Articleinfobar from '$lib/files/modules/articleinfobar.svelte';
    import Articlesidebar from '$lib/files/modules/articlesidebar.svelte';
    import Breadcrumbs from '$lib/files/modules/breadcrumbs.svelte';


</script>


<section class="relative flex flex-col w-full pl-[10px] xl:pl-[70px] pb-[5px] xl:pb-[35px]">
    <Breadcrumbs slugs={["/projects"]} titles={["Projects"]} />
	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary xl:rounded-bl-[75px]">  
        <Articlesidebar />
		<div class="p-10 w-3/4 mt-10">
			
            <div class="bg-[rgba(22,22,19,0.8)] p-5 rounded-xl">
				<div class="mt-4 mb-8 ml-4 md:flex md:items-center md:justify-between">
					<div>
						<h1 class="text-2xl font-bold uppercase lg:text-3xl">
							Projects i created or participated
						</h1>
		
						<div class="flex mx-auto mt-3">
							<span class="inline-block w-40 h-1 bg-primary rounded-full"></span>
							<span class="inline-block w-4 h-1 mx-1 bg-primary rounded-full"></span>
							<span class="inline-block w-2 h-1 bg-primary rounded-full"></span>
						</div>
					</div>
				</div>
                <div class="flex flex-col gap-5">
					<ProjectItem title="XIVData" link="/projects/xivdata" nr="01" categories={['Javascript, PHP, Tailwind, Svelte, Inertia']} img={xivdata} />
					<ProjectItem title="Landkautz" link="/" nr="02" categories={['Shopify, Liquid, Javascript']} img={landkautz} />
					<ProjectItem title="Lukas Kleinecke" link="/" nr="03" categories={['Sveltekit, Javascript, Node.js']} img={lukas} />
					<ProjectItem title="Triostate" link="/" nr="04" categories={['Vue, Typescript, C#']} img={trio} />
					<ProjectItem title="XIVDB" link="/" nr="05" categories={['React, Javascript, SCSS']} img={xivdb} />
				</div>	
            </div>
        </div>
	</div>
</section>
