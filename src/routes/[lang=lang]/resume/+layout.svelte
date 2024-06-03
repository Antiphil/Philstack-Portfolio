<script>
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
			<div class="mb-2">
				<Infobar text="Updated at may 2024" />
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
