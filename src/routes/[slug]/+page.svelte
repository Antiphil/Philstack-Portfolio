<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="max-w-7xl px-6 py-16 mx-auto space-y-12">
	<article class="space-y-8">
		<div class="space-y-6">
			<h1 class="text-4xl font-bold md:tracki md:text-5xl">{data.meta.title}</h1>
			<div class="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
				<div class="flex items-center md:space-x-2">
					<img src="https://vercel.com/api/www/avatar/99253364f34c46441fa86cb84910593e836ae286?s=64" alt="" class="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
					<p class="text-sm font-bold">Phil • {formatDate(data.meta.date)}</p>
				</div>
				<p class="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
			</div>
		</div>
		<div class="prose prose-pink max-w-7xl">
			<svelte:component this={data.content} />
		</div>
	</article>
	<div>
		<div class="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
			{#each data.meta.categories as category}
				<a rel="noopener noreferrer" href="/" class="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900">{category}</a>
			{/each}
		</div>
		<div class="space-y-2">
			<h4 class="text-lg font-semibold">Related posts</h4>
			<ul class="ml-4 space-y-1 list-disc">
				<li>
					<a rel="noopener noreferrer" href="/" class="hover:underline">Nunc id magna mollis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="/" class="hover:underline">Duis molestie, neque eget pretium lobortis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="/" class="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
				</li>
			</ul>
		</div>
	</div>
</div>
