<script lang="ts">
	export let nr: string;
	export let title: string;
	export let categories: string[];
	export let img: string;
</script>

<button class="projectGroup group relative flex min-h-[150px] w-full items-center justify-between overflow-hidden rounded-[25px] border-2 border-primary shadow-[4px_4px_0px_rgba(237,233,208,1)] xl:rounded-[30px]">
	<div class="z-10 flex w-full items-center">
		<div class="mr-1 h-[3px] w-5 bg-primary transition-all duration-300 group-hover:mr-0 group-hover:w-10 sm:mr-5 sm:w-20 lg:group-hover:w-44"></div>
		<p class="mr-1 w-10 overflow-hidden font-bold transition-all duration-300 group-hover:mr-0 group-hover:w-0 sm:mr-5">{nr}</p>

		<div class="relative flex flex-col items-start justify-center rounded-xl py-2 group-hover:pr-4">
			<p class="relative z-20 text-left text-lg font-semibold uppercase transition-all duration-300 group-hover:!pl-4 group-hover:text-secondary sm:text-2xl">{title}</p>
			<p class="relative z-20 w-fit text-left text-[10px] uppercase group-hover:!pl-4 group-hover:text-secondary">
				{#each categories as cat}
					<span>{cat}</span>
				{/each}
			</p>
			<div class="absolute z-10 flex h-full w-0 flex-col items-start justify-center overflow-hidden rounded-xl bg-primary transition-all duration-500 group-hover:w-full"></div>
		</div>
	</div>
	<div class="relative z-10 hidden items-center rounded-l-xl bg-cover py-8 pl-10 pr-24 transition-all duration-300 group-hover:bg-primary lg:flex">
		<p class="absolute left-7 text-xs font-bold uppercase group-hover:text-black">View Project</p>
	</div>
	<div class="absolute z-[1] h-full w-full bg-secondary transition-all duration-300 group-hover:w-[0%]"></div>
	<img class="absolute z-0 h-full w-full object-cover opacity-55 sepia" alt="" src={img} />
</button>
