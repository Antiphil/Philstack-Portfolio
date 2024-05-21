<script lang="ts">
	export let left = false;
	export let right = false;
</script>

{#if left}
	<section class="relative flex w-full py-[5px] pr-[10px] xl:py-[35px] xl:pr-[70px]">
		<div class="curved-corner-topright !absolute right-0 top-[calc(0px-35px)] !z-50 hidden scale-50 xl:block"></div>
		<div class="curved-corner-bottomleft !absolute left-0 top-[calc(0px-65px)] !z-50 hidden xl:block"></div>
		<div class="relative flex h-full w-full gap-3 overflow-hidden rounded-r-3xl bg-secondary-800 p-5 sm:p-10 xl:rounded-r-[75px]">
			<slot />
		</div>
	</section>
{:else if right}
	<section class="relative flex w-full py-[5px] pl-[10px] xl:py-[35px] xl:pl-[70px]">
		<div class="curved-corner-bottomright !absolute right-0 top-[calc(0px-65px)] !z-50 hidden xl:block"></div>
		<div class="curved-corner-topleft !absolute left-0 top-[calc(0px-35px)] !z-50 hidden xl:block"></div>
		<div class="relative flex h-full w-full flex-col items-center gap-3 overflow-hidden rounded-l-3xl bg-secondary-800 py-5 xl:rounded-l-[75px]">
			<slot />
		</div>
	</section>
{/if}

<style>
	.curved-corner-bottomleft,
	.curved-corner-bottomright,
	.curved-corner-topleft,
	.curved-corner-topright {
		width: 100px;
		height: 100px;
		overflow: hidden;
		position: relative;
	}
	.curved-corner-bottomleft:before,
	.curved-corner-bottomright:before,
	.curved-corner-topleft:before,
	.curved-corner-topright:before {
		content: '';
		display: block;
		width: 200%;
		height: 200%;
		position: absolute;
		border-radius: 50%;
	}
	.curved-corner-bottomleft:before {
		bottom: 0;
		left: 0;
		box-shadow: -50px 50px 0 0 #24201f;
	}
	.curved-corner-bottomright:before {
		bottom: 0;
		right: 0;
		box-shadow: 50px 50px 0 0 #24201f;
	}
	.curved-corner-topleft:before {
		top: 0;
		left: 0;
		box-shadow: -50px -50px 0 0 #24201f;
	}
	.curved-corner-topright:before {
		top: 0;
		right: 0;
		box-shadow: 50px -50px 0 0 #24201f;
	}
</style>
