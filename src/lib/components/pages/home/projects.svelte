<script lang="ts">
	import landkautzlogo from '$lib/assets/images/logos/partner/landkautz.webp';
	import landkautz from '$lib/assets/images/logos/partner/landkautzbanner.png';
	import ProjectitemL from '$lib/components/modules/projectitems/projectitemL.svelte';
	import ProjectitemR from '$lib/components/modules/projectitems/projectitemR.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import Button from '$lib/components/modules/button.svelte';
	import xivdataBanner from '$lib/assets/images/logos/partner/xivdata_banner.png';
	import xivdataLogo from '$lib/assets/images/logos/partner/xivdata_logo.svg';
	import beschriftungsteamBanner from '$lib/assets/images/logos/partner/beschrteam_banner.png';
	import beschriftungsteamLogo from '$lib/assets/images/logos/partner/beschriftungsteam_logo.svg';
	import lebenshilfeLogo from '$lib/assets/images/logos/partner/lebenshilfe.svg';
	import kreaweBanner from '$lib/assets/images/logos/partner/kreawe_banner.png';
	import LL, { locale } from '$i18n/i18n-svelte';
</script>

<section class="w-full">
	<div class="container mx-auto py-10 md:px-6">
		<div class="m-auto mb-10 mt-6 max-w-screen-xl text-center md:flex md:items-center md:justify-center">
			<Title title="Selection of my Projects & Clients" center />
		</div>
		<div class="m-auto flex flex-col gap-5">
			<ProjectitemL url="/{$locale}/projects/kreativwerkstatt-lebenshilfe-suedthueringen" title="KreativWerkstatt" desc={$LL.keaWeDescr()} tags={['Strapi', 'Sveltekit', 'Sqoosh API', 'Social Media Concept']} logo={lebenshilfeLogo} banner={kreaweBanner} />
			<ProjectitemR url="/{$locale}/projects/beschriftungsteam-dreißigacker-meiningen" title="Beschriftungsteam" desc={$LL.beschrTeamDescr()} tags={['UI/UX', 'IONOS', 'CSS', 'Social Media Management', 'Movie Prod.']} logo={beschriftungsteamLogo} banner={beschriftungsteamBanner} />
			<ProjectitemL url="/{$locale}/projects/xivdata-finalfantasy-database" title="XIVDATA" desc={$LL.xivdataDesc()} tags={['Javascript', 'PHP', 'Tailwind', 'Svelte', 'Laravel']} logo={xivdataLogo} banner={xivdataBanner} />
			<ProjectitemR url="/{$locale}/projects/landkautz-handwerk-aus-der-rhoen" title="Landkautz" desc={$LL.landkautzDescr()} tags={['Shopify', 'Liquid', 'React', 'Javascript', 'HTML&CSS']} logo={landkautzlogo} banner={landkautz} />
		</div>
		<div class="mt-10 flex justify-center">
			<Button text={$LL.viewProjectsBtn()} link="/blog" />
		</div>
	</div>
</section>
