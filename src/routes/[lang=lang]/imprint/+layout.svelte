<script>
	// @ts-nocheck
	import logo from '$lib/assets/images/logos/logo_full.svg';
	import Infobar from '$lib/components/modules/infobar.svelte';
	import Offpagenavbar from '$lib/components/modules/offpagenavbar.svelte';
</script>

<section class="relative flex w-full flex-col pb-[5px] pl-[10px] xl:pb-[35px] xl:pl-[70px]">
	<Offpagenavbar />
	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary-800 xl:rounded-bl-[75px]">
		<div class="mt-10 w-full p-10">
			<Infobar text="Updated at 11 June 2024" link />
			<div class="mt-5 rounded-xl bg-secondary-900 p-5">
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
