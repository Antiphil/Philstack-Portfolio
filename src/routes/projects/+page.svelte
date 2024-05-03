<script>
	import ProjectItem from "$lib/files/components/home/projects/projectItem.svelte";
	import xivdb from '$lib/assets/xivdb_banner.png';
	import trio from '$lib/assets/trio_banner.png';
	import xivdata from '$lib/assets/xiv_banner.png';
	import landkautz from '$lib/assets/landkautz_banner.png';
	import lukas from '$lib/assets/lukas_banner.png';
	import Title from '$lib/files/modules/title.svelte';


</script>

<div class="flex flex-col gap-5">
    <ProjectItem title="XIVData" link="/projects/xivdata" nr="01" categories={['Javascript, PHP, Tailwind, Svelte, Inertia']} img={xivdata} />
    <ProjectItem title="Landkautz" link="/" nr="02" categories={['Shopify, Liquid, Javascript']} img={landkautz} />
    <ProjectItem title="Lukas Kleinecke" link="/" nr="03" categories={['Sveltekit, Javascript, Node.js']} img={lukas} />
    <ProjectItem title="Triostate" link="/" nr="04" categories={['Vue, Typescript, C#']} img={trio} />
    <ProjectItem title="XIVDB" link="/" nr="05" categories={['React, Javascript, SCSS']} img={xivdb} />
</div>