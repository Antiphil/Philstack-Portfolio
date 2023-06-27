<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let slug;
	export let title;
	export let date;
	export let desc;
</script>

<article class="relative w-[600px] h-[450px] overflow-hidden border-4 border-white">
	<a href={slug} class="">
		<img alt="" class="absolute top-0 object-cover w-full h-full dark:bg-gray-500 hover:scale-110 transition-all duration-1000" src={`/${slug}.png`} />
		<div class="absolute bottom-0 m-3 h-1/8 w-[calc(100%-24px)] z-10 bg-white p-4">
			<p class="text-black uppercase font-bold bg-clip-text">{title}</p>
			<p class="text-black text-xs">{desc}</p>
			<div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-black">
				<span class="font-bold">{formatDate(date)}</span>
				<span class="font-bold">2.3K views</span>
			</div>
		</div>
	</a>
</article>
