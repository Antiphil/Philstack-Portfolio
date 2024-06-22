<script lang="ts">
	export let left: boolean = false;
	export let right: boolean = false;
	export let year: string = '2024';
	export let job: string = 'Designer';
	export let description: string = 'Lorem ipsum dolor sit amet consectetur elit .Adipisci asperiores illo quo quis ducimus odit veniam dignissimos distinctio';
</script>

{#if left}
	<div class="text-right">
		<div class="flex max-w-[445px]">
			<div class="mr-8 flex flex-wrap justify-end">
				<h3 class="text-xl font-bold">{year}</h3>
				<h2 class="mb-2 w-full text-2xl font-bold">{job}</h2>
				<p class="text-pretty text-sm font-light md:max-w-[400px]">{description}</p>
			</div>
			<div class="relative hidden w-8 min-w-8 items-center justify-center md:flex">
				<div class="absolute h-7 w-7 rounded-full bg-primary-main"></div>
				<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary-main/60"></div>
			</div>
		</div>
	</div>
{:else if right}
	<div class="flex justify-end text-left">
		<div class="flex max-w-[445px]">
			<div class="relative hidden w-8 min-w-8 items-center justify-center md:flex">
				<div class="absolute h-7 w-7 rounded-full bg-primary-main"></div>
				<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary-main/60"></div>
			</div>
			<div class="ml-8 flex flex-wrap justify-start">
				<h3 class="text-xl font-bold">{year}</h3>
				<h2 class="mb-2 w-full text-2xl font-bold">{job}</h2>
				<p class="text-pretty text-sm font-light md:max-w-[400px]">{description}</p>
			</div>
		</div>
	</div>
{/if}
