<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte';
	import Offpagenavbar from '$lib/components/modules/offpagenavbar.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import landkautzlogo from '$lib/assets/images/logos/partner/landkautz.webp';
	import landkautz from '$lib/assets/images/logos/partner/landkautzbanner.png';
	import ProjectitemL from '$lib/components/modules/projectitems/projectitemL.svelte';
	import ProjectitemR from '$lib/components/modules/projectitems/projectitemR.svelte';
	import xivdataBanner from '$lib/assets/images/logos/partner/xivdata_banner.png';
	import xivdataLogo from '$lib/assets/images/logos/partner/xivdata_logo.svg';
	import beschriftungsteamBanner from '$lib/assets/images/logos/partner/beschrteam_banner.png';
	import beschriftungsteamLogo from '$lib/assets/images/logos/partner/beschriftungsteam_logo.svg';
	import lebenshilfeLogo from '$lib/assets/images/logos/partner/lebenshilfe.svg';
	import kreaweBanner from '$lib/assets/images/logos/partner/kreawe_banner.png';

	export let data;
</script>

<div class="mt-5">
	<Offpagenavbar />
</div>
<main class="m-auto mt-[80px] max-w-7xl p-3 pb-20">
	<div class="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
		<div class=" flex w-full items-center justify-between rounded-xl bg-secondary-900 px-5 py-3 text-xs">
			<div class="">
				<nav>
					<ul class="flex items-center gap-3 text-xs font-semibold">
						<li><a href="/{$locale}/"><i class="fa-solid fa-house mr-1"></i> <span>Home</span></a></li>
						<li><i class="fa-solid fa-chevron-right"></i></li>
						<li><a href="/{$locale}/projects/">{$LL.navProjects()}</a></li>
					</ul>
				</nav>
			</div>
		</div>
		<a href="/{$locale}/blog" class="flex h-fit w-full items-center gap-2 rounded-xl bg-primary-main px-6 py-2.5 text-xs font-semibold text-secondary-900 transition-all hover:bg-secondary-900 hover:text-primary-main md:w-fit">
			<i class="fa-solid fa-chevron-left"></i>
			<span>Back</span>
		</a>
	</div>
	<div class="mb-14 mt-5 rounded-xl bg-secondary-900 p-5">
		<Title title={$LL.navProjects()} />
		<div class="m-auto mt-10 flex flex-col gap-5 p-5">
			<ProjectitemL url="/{$locale}/projects/kreativwerkstatt-lebenshilfe-suedthueringen" title="KreativWerkstatt" desc={$LL.keaWeDescr()} tags={['Strapi', 'Sveltekit', 'Sqoosh API', 'Social Media Concept']} logo={lebenshilfeLogo} banner={kreaweBanner} />
			<ProjectitemR url="/{$locale}/projects/beschriftungsteam-dreißigacker-meiningen" title="Beschriftungsteam" desc={$LL.beschrTeamDescr()} tags={['UI/UX', 'IONOS', 'CSS', 'Social Media Management', 'Movie Prod.']} logo={beschriftungsteamLogo} banner={beschriftungsteamBanner} />
			<ProjectitemL url="/{$locale}/projects/xivdata-finalfantasy-database" title="XIVDATA" desc={$LL.xivdataDesc()} tags={['Javascript', 'PHP', 'Tailwind', 'Svelte', 'Laravel']} logo={xivdataLogo} banner={xivdataBanner} />
			<ProjectitemR url="/{$locale}/projects/landkautz-handwerk-aus-der-rhoen" title="Landkautz" desc={$LL.landkautzDescr()} tags={['Shopify', 'Liquid', 'React', 'Javascript', 'HTML&CSS']} logo={landkautzlogo} banner={landkautz} />
		</div>
	</div>
</main>
