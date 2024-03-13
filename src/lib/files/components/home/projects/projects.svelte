<script>
	import Button from '$lib/files/modules/button.svelte';
	import xivdb from '$lib/assets/xivdb_banner.png';
	import trio from '$lib/assets/trio_banner.png';
	import ProjectItem from './projectItem.svelte';
</script>

<section class="relative flex w-full py-[35px] pl-[70px]">
	<div class="curved-corner-bottomright !absolute right-0 top-[calc(0px-65px)] !z-50"></div>
	<div class="curved-corner-topleft !absolute left-0 top-[calc(0px-35px)] !z-50"></div>
	<div class="relative flex h-full w-full flex-col items-center gap-3 overflow-hidden rounded-l-[75px] bg-secondary p-10">
		<ProjectItem title="XIVData" nr="01" categories={['Javascript, PHP, Tailwind, Svelte, Inertia, HTML & CSS']} img="https://i.imgur.com/kqqHOLo.png" />
		<ProjectItem title="Landkautz" nr="02" categories={['Shopify, Liquid, Javascript, HTML & CSS']} img="https://i.imgur.com/kqqHOLo.png" />
		<ProjectItem title="Lukas Kleinecke" nr="03" categories={['Sveltekit, Javascript, Node.js']} img="https://i.imgur.com/kqqHOLo.png" />
		<ProjectItem title="Triostate" nr="04" categories={['Vue, Typescript, C#']} img={trio} />
		<ProjectItem title="XIVDB" nr="05" categories={['React, Javascript, SCSS']} img={xivdb} />

		<Button text="View all Projects" link="/" />
	</div>
</section>
