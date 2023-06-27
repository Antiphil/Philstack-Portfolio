<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let slug;
	export let title;
	export let date;
	export let desc;
</script>

<article class="relative w-[300px] h-[450px] rounded-2xl overflow-hidden">
	<a href={slug} class="">
		<img alt="" class="absolute top-0 object-cover w-full h-full dark:bg-gray-500" src={`/${slug}.png`} />
	</a>
</article>

<article class="flex flex-col dark:bg-black/50">
	<a rel="noopener noreferrer" href={slug} aria-label="Te nulla oportere reprimique his dolorum">
		<img alt="" class="object-cover w-full h-52 dark:bg-gray-500" src={`/${slug}.png`} />
	</a>
	<div class="flex flex-col flex-1 p-6">
		<a rel="noopener noreferrer" href={slug} aria-label="Te nulla oportere reprimique his dolorum" />
		<a rel="noopener noreferrer" href={slug} class="text-xs tracki uppercase hover:underline text-blue-500">Zum Post</a>
		<h3 class="flex-1 py-2 text-lg font-semibold leadi">{title}</h3>
		<div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
			<span>{formatDate(date)}</span>
			<span>2.3K views</span>
		</div>
	</div>
</article>
