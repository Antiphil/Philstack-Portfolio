<script lang="ts">
	export let alt: string;
	export let img: string;
	export let text: string;
	export let invert: boolean = false;
</script>

<div class="bg-black/30 hover:bg-black/50 hover:group transition-all flex flex-col items-center group justify-center p-4 sm:p-6 md:py-12 duration-300 cursor-pointer h-56">
	<img {alt} class={`${invert ? 'invert w-20 object-contain group-hover:scale-105 transition-all' : 'transition-all group-hover:scale-110 w-20 object-contain'}`} draggable="true" loading="lazy" sizes="10vw" src={img} width="150" height="75" />
	<div class="flex items-center space-x-2 font-mono text-xs mt-4 group-hover:scale-110 transition-all">
		<span class="transition-colors font-semibold uppercase text-xl duration-500">{text}</span>
	</div>
</div>
