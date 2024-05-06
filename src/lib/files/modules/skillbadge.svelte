<script>
	export let name;
	export let img;
</script>

<div class="group relative my-1 inline-block w-fit text-lg transition-all hover:scale-[1.03]">
	<span class="relative z-10 block overflow-hidden rounded-lg border-2 border-primary py-2 pl-2 pr-4 text-sm font-bold uppercase leading-tight text-primary">
		<span class="absolute inset-0 h-full w-full rounded-lg bg-secondary py-2 pr-4"></span>
		<span class="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-primary transition-all duration-300"></span>

		<span class="relative flex items-center">
			<img src={img} class="mr-2 h-7 w-7 rounded-lg" alt="" />
			{name}</span
		>
	</span>
	<span class="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-primary transition-all duration-200 ease-linear" data-rounded="rounded-lg"></span>
</div>
