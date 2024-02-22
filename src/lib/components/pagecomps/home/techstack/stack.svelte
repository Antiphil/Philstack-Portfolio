<script lang="ts">
	export let alt: string;
	export let img: string;
	export let text: string;
	export let invert: boolean = false;
	export let snd: boolean = false;
	export let prog: string;
</script>

<div class={`${snd ? 'skew-y-[3deg]' : 'skew-y-[-2deg]'}`}>
	<div class="border-[5px] drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] border-[#1d1d1f] bg-black hover:bg-[#F2CD19] hover:group transition-all flex flex-col items-center group justify-center p-4 sm:p-6 md:py-12 duration-300 cursor-pointer h-56">
		<img {alt} class={`${invert ? 'invert w-20 object-contain group-hover:scale-105 transition-all' : 'transition-all group-hover:scale-110 w-20 object-contain'}`} draggable="true" loading="lazy" sizes="10vw" src={img} width="150" height="75" />
		<div class="flex flex-col items-center space-x-2 font-mono text-xs mt-4 group-hover:scale-110 transition-all">
			<span class="transition-colors font-semibold uppercase text-xl duration-500">{text}</span>
			<span>{prog}</span>
		</div>
	</div>
</div>
