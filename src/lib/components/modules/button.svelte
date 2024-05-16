<script lang="ts">
	export let text: string;
	export let link: string;
</script>

<a href={link} class="group relative my-5 inline-block w-fit text-lg">
	<span class="border-primary text-primary group-hover:text-secondary relative z-10 block overflow-hidden rounded-lg border-2 px-5 py-3 text-sm font-bold uppercase leading-tight transition-colors duration-300 ease-out">
		<span class="bg-secondary absolute inset-0 h-full w-full rounded-lg px-5 py-3"></span>
		<span class="ease bg-primary absolute left-0 -ml-2 h-48 w-64 origin-top-right -translate-x-full translate-y-12 -rotate-90 transition-all duration-300 group-hover:-rotate-180"></span>
		<span class="relative">{text}</span>
	</span>
	<span class="bg-primary absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
