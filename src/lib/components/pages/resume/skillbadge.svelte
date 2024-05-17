<script>
	export let name;
	export let img;
</script>

<a href="#_" class="ease relative overflow-hidden rounded-md bg-primary-main px-5 py-2 font-medium transition duration-300 hover:bg-primary-hover">
	<span class="absolute bottom-0 left-0 -ml-2 h-full">
		<svg viewBox="0 0 487 487" class="object-stretch h-full w-auto opacity-100" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="current-color" fill-rule="nonzero" fill-opacity=".05"></path></svg>
	</span>
	<span class="absolute right-0 top-0 -mr-3 h-full w-12">
		<svg viewBox="0 0 487 487" class="h-full w-full object-cover" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="current-color" fill-rule="nonzero" fill-opacity=".05"></path></svg>
	</span>
	<span class="relative flex items-center font-semibold uppercase text-secondary-800">
		<img src={img} class="mr-2 h-7 w-7 rounded-lg" alt="" />
		{name}
	</span>
</a>
