<script lang="ts">
	export let left: boolean = false;
	export let right: boolean = false;
	export let year: string = '2024';
	export let job: string = 'Designer';
	export let description: string = 'Lorem ipsum dolor sit amet consectetur elit .Adipisci asperiores illo quo quis ducimus odit veniam dignissimos distinctio';
</script>

{#if left}
	<div class="mb-10 flex items-center justify-start">
		<div class="text-right">
			<h3 class="text-xl font-bold">{year}</h3>
			<h2 class="mb-2 text-2xl font-bold">{job}</h2>
			<p class="max-w-[300px] text-pretty text-sm font-light">{description}</p>
		</div>
		<div class="relative ml-16 hidden items-center justify-center md:flex">
			<div class="absolute h-7 w-7 rounded-full bg-primary-main"></div>
			<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary-main/60"></div>
		</div>
	</div>
{:else if right}
	<div class="mb-10 flex items-center justify-end">
		<div class="relative mr-10 hidden items-center justify-center md:flex">
			<div class="absolute h-7 w-7 rounded-full bg-primary-main"></div>
			<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary-main/60"></div>
		</div>
		<div class="text-left">
			<h3 class="text-xl font-bold">{year}</h3>
			<h2 class="mb-2 text-2xl font-bold">{job}</h2>
			<p class="max-w-[300px] text-pretty text-sm font-light">{description}</p>
		</div>
	</div>
{/if}
