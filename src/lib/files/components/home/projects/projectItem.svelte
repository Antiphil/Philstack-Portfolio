<script lang="ts">
	export let nr: string;
	export let title: string;
	export let categories: string[];
	export let img: string;
</script>

<button class="border-1 projectGroup group relative flex min-h-[150px] w-full items-center justify-between overflow-hidden rounded-[50px]">
	<div class="z-10 flex w-full items-center">
		<div class="mr-5 h-[3px] w-20 bg-primary transition-all duration-300 group-hover:mr-0 group-hover:w-44"></div>
		<p class="mr-5 font-bold transition-all duration-300 group-hover:hidden">{nr}</p>

		<div class="relative flex flex-col items-start justify-center rounded-xl py-2 group-hover:pr-4">
			<p class="relative z-20 text-2xl font-semibold uppercase transition-all duration-300 group-hover:!pl-4 group-hover:text-secondary">{title}</p>
			<p class="relative z-20 w-fit text-[10px] uppercase group-hover:!pl-4 group-hover:text-secondary">
				{#each categories as cat}
					<span>{cat}</span>
				{/each}
			</p>
			<div class="absolute z-10 flex h-full w-0 flex-col items-start justify-center overflow-hidden rounded-xl bg-primary transition-all duration-500 group-hover:w-full"></div>
		</div>
	</div>
	<div class="projectButton relative z-10 flex h-[80px] w-[284px] items-center bg-cover transition-all duration-300">
		<p class="absolute left-7 text-xs font-bold uppercase group-hover:text-black">View Project</p>
	</div>
	<div class="absolute z-[1] h-full w-full bg-secondary transition-all duration-300 group-hover:w-[0%]"></div>
	<img class="absolute z-0 h-full w-full object-cover opacity-55 sepia" alt="" src={img} />
</button>
