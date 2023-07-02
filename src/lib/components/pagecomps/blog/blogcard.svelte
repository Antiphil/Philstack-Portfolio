<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let slug: string;
	export let title: string;
	export let date: string;
	export let desc: string;
</script>

<!-- <article class="relative w-full sm:w-[600px] h-[450px] overflow-hidden border-4 border-white">
	<a href={slug} class="">
		<img alt="" class="absolute top-0 object-cover w-full h-full dark:bg-gray-500 hover:scale-110 transition-all duration-1000" src={`/${slug}.png`} />
		<div class="absolute bottom-0 m-3 h-1/8 w-[calc(100%-24px)] z-10 bg-white p-4 shadow-lg">
			<p class="text-black uppercase font-bold bg-clip-text">{title}</p>
			<p class="text-black text-xs">{desc}</p>
			<div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-black">
				<span class="font-bold">{formatDate(date)}</span>
				<span class="font-bold">2.3K views</span>
			</div>
		</div>
	</a>
</article>
 -->
<div class="max-w-2xl px-8 py-4 mx-auto bg-black/50 rounded-lg shadow-md" style="cursor: auto;">
	<div class="flex items-center justify-between">
		<span class="text-sm font-light text-gray-600 dark:text-gray-400">{formatDate(date)}</span>
		<div class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">JavaScript</div>
	</div>
	<div class="mt-2">
		<a href="https://stackdiary.com/" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{title}</a>
		<p class="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
	</div>
	<div class="flex items-center justify-between mt-4">
		<a href={slug} class="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a>
	</div>
</div>
