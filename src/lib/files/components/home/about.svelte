<script>
	import mgn from '$lib/assets/Screenshot 2024-03-13 115119.png';
	import Button from '$lib/files/modules/button.svelte';

	let about;
	const fetchDataFromAPI = async () => {
		try {
			const response = await fetch('https://strapi.antiphil.de/api/about?populate=*');
			about = await response.json();
		} catch (error) {
			console.error('Fehler beim Abrufen der About Daten:', error);
		}
	};
	fetchDataFromAPI();
</script>
<div class="m-auto w-full">
{#if about}
	<div class="relative flex w-full justify-center overflow-hidden py-6 sm:py-12">
		<div class="mx-auto w-full max-w-screen-xl items-center">
			<div class="group flex w-full flex-col lg:grid lg:grid-cols-2">
				<div class="relative flex min-h-[300px] flex-col items-end justify-center overflow-hidden pl-16 before:bg-primary before:transition-all group-hover:before:bg-orange-300 lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:block lg:before:h-1/6 lg:before:w-4 lg:before:rounded-lg">
					<div class="absolute left-0 top-0 z-10 flex w-4/6 flex-col justify-center rounded-xl bg-primary p-5 transition-all group-hover:bg-secondary lg:px-12 lg:py-14">
						<span class="mb-2 block font-bold text-secondary group-hover:text-primary lg:mb-10">{about?.data?.attributes?.phrase}</span>
						<h2 class="text-lg font-bold text-secondary group-hover:text-primary lg:text-3xl">{about?.data?.attributes?.title}</h2>
					</div>
					<a class=" mb-8 mt-2 hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-secondary lg:flex" href="/resume">
						<span>{about?.data?.attributes?.entryline}</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
						</svg>
					</a>
					<div class="relative z-0 overflow-hidden rounded-xl">
						<img class="sepia" src={`https://strapi.antiphil.de${about?.data?.attributes?.image?.data?.attributes?.url}`} alt="" />
					</div>
				</div>
				<div>
					<div class="content prose-base prose-pink text-left lg:pl-12">
						{@html about?.data?.attributes?.text}
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
<div class="relative flex w-full justify-center overflow-hidden py-6 sm:py-12">
	<div class="mx-auto w-full max-w-screen-xl items-center">
		<div class="group flex w-full flex-col lg:grid lg:grid-cols-2">
			<div class="relative flex min-h-[300px] flex-col items-end justify-center overflow-hidden pl-16 before:bg-primary before:transition-all group-hover:before:bg-orange-300 lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:block lg:before:h-1/6 lg:before:w-4 lg:before:rounded-lg">
				<div class="absolute left-0 top-0 z-10 flex w-4/6 flex-col justify-center rounded-xl bg-primary p-5 transition-all group-hover:bg-secondary lg:px-12 lg:py-14">
					<span class="mb-2 block font-bold text-secondary group-hover:text-primary lg:mb-10"><p class="bg-secondarydark p-3 animate-pulse rounded-2xl"></p></span>
					<h2 class="text-lg font-bold text-secondary group-hover:text-primary lg:text-3xl"><p class="bg-secondarydark p-4 animate-pulse rounded-2xl"></p><p class="bg-secondarydark p-4 mt-2 animate-pulse rounded-2xl"></p></h2>
				</div>
				<a class=" mb-8 mt-2 hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-secondary lg:flex" href="/resume">
					<p class="bg-secondarydark px-20 py-4 animate-pulse rounded-2xl"></p>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
					</svg>
				</a>
				<div class="relative z-0 overflow-hidden rounded-xl">
					<img class="sepia opacity-5" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/symbol_questionmark.png" alt="" />
				</div>
			</div>
			<div>
				<div class="content prose-base prose-pink text-left lg:pl-12">
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
					<p class="bg-secondarydark p-2 animate-pulse rounded-2xl"></p>
				</div>
			</div>
		</div>
	</div>
	
</div>
{/if}
<div class="flex justify-center">
	<Button text="Check out my Resume" link="/resume" />
</div>
</div>
<style>
</style>
