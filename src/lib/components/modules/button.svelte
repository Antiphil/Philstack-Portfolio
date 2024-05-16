<script lang="ts">
	export let text: string;
	export let link: string;
</script>

<a href={link} class="group relative my-5 inline-block w-fit text-lg">
	<span class="relative z-10 block overflow-hidden rounded-lg border-2 border-primary-main px-5 py-3 text-sm font-bold uppercase leading-tight text-primary-main transition-colors duration-300 ease-out group-hover:text-secondary-800">
		<span class="absolute inset-0 h-full w-full rounded-lg bg-secondary-900 px-5 py-3 text-secondary-800"></span>
		<span class="ease absolute left-0 -ml-2 h-20 w-80 origin-top-right -translate-x-full translate-y-12 -rotate-90 rounded-full bg-primary-main transition-all duration-300 group-hover:-rotate-180"></span>
		<span class="relative">{text}</span>
	</span>
	<span class="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-primary-main transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
