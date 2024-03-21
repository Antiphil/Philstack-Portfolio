<script>
	import mgn from '$lib/assets/Screenshot 2024-03-13 115119.png';

	let about;
	const fetchDataFromAPI = async () => {
		try {
			const response = await fetch('https://strapi.antiphil.de/api/about');
			about = await response.json();
		} catch (error) {
			console.error('Fehler beim Abrufen der About Daten:', error);
		}
	};
	fetchDataFromAPI();
</script>

{#if about}
	<div class="relative flex w-full justify-center overflow-hidden py-6 sm:py-12">
		<div class="mx-auto w-full max-w-screen-lg items-center">
			<div class="group flex w-full flex-col lg:grid lg:grid-cols-2">
				<div class="relative flex min-h-[300px] flex-col items-end justify-center overflow-hidden pl-16 before:bg-primary before:transition-all group-hover:before:bg-orange-300 lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:block lg:before:h-1/6 lg:before:w-4 lg:before:rounded-lg">
					<div class="absolute left-0 top-0 z-10 flex w-4/6 flex-col justify-center rounded-xl bg-primary p-5 transition-all group-hover:bg-secondary lg:px-12 lg:py-14">
						<span class="mb-2 block font-bold text-secondary group-hover:text-primary lg:mb-10">{about?.data?.attributes?.phrase}</span>
						<h2 class="text-lg font-bold text-secondary group-hover:text-primary lg:text-3xl">{about?.data?.attributes?.title}</h2>
					</div>
					<a class=" mb-8 mt-2 hidden items-center gap-2 text-sm font-bold text-primary lg:flex" href="">
						<span>{about?.data?.attributes?.entryline}</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
						</svg>
					</a>
					<div class="relative z-0 overflow-hidden rounded-xl">
						<img class="sepia" src={mgn} alt="" />
					</div>
				</div>
				<div>
					<div class="text-left text-justify lg:pl-12">
						{@html about?.data?.attributes?.text}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
