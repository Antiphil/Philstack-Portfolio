<script>
	import Button from '$lib/files/modules/button.svelte';
	import xivdb from '$lib/assets/xivdb_banner.png';
	import trio from '$lib/assets/trio_banner.png';
	import xivdata from '$lib/assets/logos/partner/xivdata_banner.png';
	import beschrteam from '$lib/assets/logos/partner/beschrteam_banner.png';
	import kreawe from '$lib/assets/logos/partner/kreawe_banner.png';
	import triologo from '$lib/assets/logos/partner/Triostate.png';
	import landkautzlogo from '$lib/assets/logos/partner/landkautz.webp';
	import landkautz from '$lib/assets/landkautz_banner.png';
	import lukas from '$lib/assets/lukas_banner.png';
	import ProjectItem from './projectItem.svelte';
	import Title from '$lib/files/modules/title.svelte';
	import Partner from '../partner.svelte';
	import lebenshilfe from '$lib/assets/logos/partner/Lebenshilfe.svg';
	import beschriftungsteam from '$lib/assets/logos/partner/beschriftungsteam.svg';
</script>

<div class="flex w-full flex-col gap-5 px-0 py-0 md:px-6 md:py-10">
	<Title title="My Partners & Projects" nr="02." />
	<ProjectItem title="KreativWerkstatt" logo={lebenshilfe} height="max-h-[70px]" link="/projects/kreawe" nr="01" categories={['Strapi, Sveltekit, Sqoosh API & Social Media Concept']} img={kreawe} />
	<ProjectItem title="Beschriftungsteam" logo={beschriftungsteam} height="max-h-[80px]"  link="/projects/beschriftungsteam" nr="02" categories={['IONOS, Social Media Management, Movie Production']} img={beschrteam} />
	<ProjectItem title="XIVDATA" logo="https://dev.xivdata.com/build/assets/xiv_logo_white-DDTgE6x6.svg" height="max-h-[40px]" link="/projects/xivdata" nr="03" categories={['Javascript, PHP, Tailwind, Svelte, Inertia']} img={xivdata} />
	<ProjectItem title="Lukas Kleinecke" link="/" nr="04" categories={['Sveltekit, Javascript, Node.js']} height="max-h-[80px]" img={lukas} logo="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/uHnpuDpsyRVEcrh26pKr/media/65facb961a91953e738c8833.png"/>
	<ProjectItem title="Karina Hartung" link="/" nr="05" categories={['Sveltekit, Javascript, Node.js']} height="max-h-[80px]" img={lukas} logo="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/uHnpuDpsyRVEcrh26pKr/media/65facb961a91953e738c8833.png"/>
	<ProjectItem title="Landkautz" link="/" nr="06" categories={['Shopify, Liquid, Javascript']} height="max-h-[90px]" logo={landkautzlogo} img={landkautz} />
	<ProjectItem title="Triostate" link="/" nr="07" categories={['Vue, Typescript, C#']} height="max-h-[60px]" logo={triologo} img={trio} />
	<Button text="View all Projects" link="/" />
</div>
