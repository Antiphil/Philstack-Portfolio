<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';
	import LL from '$i18n/i18n-svelte';
	import Button from '$lib/components/modules/button.svelte';

	interface AboutData {
		data: {
			attributes: {
				phrase: string;
				title: string;
				text_en: string;
				text_de: string;
				entryline: string;
				image: {
					data: {
						attributes: {
							url: string;
						};
					};
				};
			};
		};
	}

	export let about: AboutData;
</script>

<div class="m-auto w-full">
	{#if about}
		<div class="relative flex w-full justify-center overflow-hidden py-6 sm:py-12">
			<div class="mx-auto w-full max-w-screen-xl items-center">
				<div class="group flex w-full flex-col lg:grid lg:grid-cols-2">
					<div class="relative flex min-h-[300px] flex-col items-end justify-center overflow-hidden pl-16 before:bg-primary-main before:transition-all lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:block lg:before:h-1/6 lg:before:w-4 lg:before:rounded-lg">
						<div class="absolute left-0 top-0 z-10 flex w-4/6 flex-col justify-center rounded-xl bg-primary-main p-5 text-secondary-800 transition-all group-hover:bg-secondary-800 lg:px-12 lg:py-14">
							<span class="mb-2 block font-bold text-secondary-800 group-hover:text-primary-main lg:mb-10">{about.data.attributes.phrase}</span>
							<h2 class="text-lg font-bold text-secondary-800 group-hover:text-primary-main lg:text-3xl">{about.data.attributes.title}</h2>
						</div>
						<span class="mb-8 mt-2 hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-primary-main transition-all md:flex">
							<span class="uppercase">Thats me!</span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
							</svg>
						</span>
						<div class="relative z-0 overflow-hidden rounded-xl">
							<img class="sepia" src={`https://strapi.antiphil.de${about.data.attributes.image.data.attributes.url}`} alt="" />
						</div>
					</div>
					<div>
						<div class="content prose-base prose-pink text-left lg:pl-12">
							{#if $locale === 'en'}
								{@html about.data.attributes.text_en}
							{:else}
								{@html about.data.attributes.text_de}
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="relative flex w-full justify-center overflow-hidden py-6 sm:py-12">
			<div class="mx-auto w-full max-w-screen-xl items-center">
				<div class="group flex w-full flex-col lg:grid lg:grid-cols-2">
					<div class="relative flex min-h-[300px] flex-col items-end justify-center overflow-hidden pl-16 before:bg-primary-main before:transition-all lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:block lg:before:h-1/6 lg:before:w-4 lg:before:rounded-lg">
						<div class="group-hover:bg-secondary-text-secondary-800 absolute left-0 top-0 z-10 flex w-4/6 flex-col justify-center rounded-xl bg-primary-main p-5 transition-all lg:px-12 lg:py-14">
							<span class="mb-2 block font-bold text-secondary-800 group-hover:text-primary-main lg:mb-10"><p class="bg-secondary-text-secondary-800dark animate-pulse rounded-2xl p-3"></p></span>
							<h2 class="text-lg font-bold text-secondary-800 group-hover:text-primary-main lg:text-3xl">
								<p class="bg-secondary-text-secondary-800dark animate-pulse rounded-2xl p-4"></p>
								<p class="bg-secondary-text-secondary-800dark mt-2 animate-pulse rounded-2xl p-4"></p>
							</h2>
						</div>
						<span class=" mb-8 mt-2 hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-primary-main transition-all lg:flex">
							<p class="bg-secondary-text-secondary-800dark animate-pulse rounded-2xl px-20 py-4"></p>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
							</svg>
						</span>
						<div class="relative z-0 overflow-hidden rounded-xl">
							<img class="opacity-5 sepia" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/symbol_questionmark.png" alt="" />
						</div>
					</div>
					<div>
						<div class="content prose-base prose-pink text-left lg:pl-12">
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
							<p class=" animate-pulse rounded-2xl bg-secondary-900 p-2"></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<div class="flex justify-center">
		<Button text={$LL.resumeButton()} link={`/${$locale}/resume`} />
	</div>
</div>

<style>
</style>
