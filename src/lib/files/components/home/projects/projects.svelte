<script>
	import Button from '$lib/files/modules/button.svelte';
	import xivdb from '$lib/assets/xivdb_banner.png';
	import trio from '$lib/assets/trio_banner.png';
	import xivdata from '$lib/assets/xiv_banner.png';
	import landkautz from '$lib/assets/landkautz_banner.png';
	import lukas from '$lib/assets/lukas_banner.png';
	import ProjectItem from './projectItem.svelte';
	import Title from '$lib/files/modules/title.svelte';
</script>

<div class="flex w-full flex-col items-center gap-5">
	<Title title="My Projects" nr="02." />

	<ProjectItem title="XIVData" nr="01" categories={['Javascript, PHP, Tailwind, Svelte, Inertia']} img={xivdata} />
	<ProjectItem title="Landkautz" nr="02" categories={['Shopify, Liquid, Javascript']} img={landkautz} />
	<ProjectItem title="Lukas Kleinecke" nr="03" categories={['Sveltekit, Javascript, Node.js']} img={lukas} />
	<ProjectItem title="Triostate" nr="04" categories={['Vue, Typescript, C#']} img={trio} />
	<ProjectItem title="XIVDB" nr="05" categories={['React, Javascript, SCSS']} img={xivdb} />

	<Button text="View all Projects" link="/" />
</div>
