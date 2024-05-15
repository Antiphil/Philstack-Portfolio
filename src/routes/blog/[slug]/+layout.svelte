<script>
	// @ts-nocheck
	import logo from '$lib/assets/logos/logo_full.svg';
	import { tooltip } from 'svooltip';
	import 'svooltip/styles.css'; // Include default styling
</script>

<section class="relative flex w-full flex-col pb-[5px] pl-[10px] xl:pb-[35px] xl:pl-[70px]">

	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary xl:rounded-bl-[75px]">
		<div class=" w-full">

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
