<script>
	import LL from '$i18n/i18n-svelte';
	import { locale } from '$i18n/i18n-svelte';

	// @ts-nocheck
	import logo from '$lib/assets/images/logos/logo_full.svg';
	import Infobar from '$lib/components/modules/infobar.svelte';
	import Offpagenavbar from '$lib/components/modules/offpagenavbar.svelte';
	import { tooltip } from '$lib/utils/tooltip';

	export let data;
</script>

<section class="relative flex w-full flex-col pb-[5px] pl-[10px] xl:pb-[35px] xl:pl-[70px]">
	<Offpagenavbar />

	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary-800 pt-1 xl:rounded-bl-[75px]">
		<div class="mt-16 w-full p-2 md:mt-10 md:p-10">
			<div class="mb-2 flex gap-3">
				<Infobar text="Updated at may 2024" twitter threads linkedin link />
				<a href="/{$locale}/blog" class="flex h-fit w-full items-center gap-2 rounded-xl bg-primary-main px-6 py-2.5 text-xs font-semibold text-secondary-900 transition-all hover:bg-secondary-900 hover:text-primary-main md:w-fit">
					<i class="fa-solid fa-chevron-left"></i>
					<span>Back</span>
				</a>
			</div>
			<div class="">
				<slot />
			</div>
		</div>
	</div>
</section>

<style>
	:global(.svooltip) {
		z-index: 100;
	}
</style>
