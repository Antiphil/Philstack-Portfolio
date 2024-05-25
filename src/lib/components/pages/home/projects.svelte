<script lang="ts">
	import landkautzlogo from '$lib/assets/images/logos/partner/landkautz.webp';
	import landkautz from '$lib/assets/images/logos/partner/landkautzbanner.png';
	import ProjectitemL from '$lib/components/modules/projectitems/projectitemL.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import Button from '$lib/components/modules/button.svelte';
	import xivdataBanner from '$lib/assets/images/logos/partner/xivdata_banner.png';
	import xivdataLogo from '$lib/assets/images/logos/partner/xivdata_logo.svg';
	import beschriftungsteamBanner from '$lib/assets/images/logos/partner/beschrteam_banner.png';
	import beschriftungsteamLogo from '$lib/assets/images/logos/partner/beschriftungsteam_logo.svg';
	import lebenshilfeLogo from '$lib/assets/images/logos/partner/lebenshilfe.svg';
	import kreaweBanner from '$lib/assets/images/logos/partner/kreawe_banner.png';
</script>

<section class="w-full">
	<div class="container mx-auto py-10 md:px-6">
		<div class="m-auto mb-10 mt-6 max-w-screen-xl text-center md:flex md:items-center md:justify-center">
			<Title title="Selection of my Projects & Clients" center />
		</div>
		<div class="m-auto flex flex-col gap-5">
			<ProjectitemL title="KreativWerkstatt" tags={['Strapi', 'Sveltekit', 'Sqoosh API', 'Social Media Concept']} logo={lebenshilfeLogo} banner={kreaweBanner} />
			<ProjectitemL title="Beschriftungsteam" tags={['UI/UX', 'IONOS', 'CSS', 'Social Media Management', 'Movie Prod.']} logo={beschriftungsteamLogo} banner={beschriftungsteamBanner} />
			<ProjectitemL title="XIVDATA" tags={['Javascript', 'PHP', 'Tailwind', 'Svelte', 'Laravel']} logo={xivdataLogo} banner={xivdataBanner} />
			<ProjectitemL title="Landkautz" tags={['Shopify', 'Liquid', 'React', 'Javascript', 'HTML&CSS']} logo={landkautzlogo} banner={landkautz} />
		</div>
		<div class="mt-10 flex justify-center">
			<Button text="View all projects" link="/blog" />
		</div>
	</div>
</section>
