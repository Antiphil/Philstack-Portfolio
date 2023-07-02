<script lang="ts">
	import Title from '$lib/components/modules/title.svelte';
	import { formatDate } from '$lib/utils';
	import Blogcard from './blogcard.svelte';

	export let data: any;
</script>

<!-- <section class="py-6 sm:py-32">
	<div class="container p-6 mx-auto space-y-8">
		<Title title1="Meine neusten und besten Posts" title2="Mein Portfolio, Mein Blog" />

		<div class="flex flex-col sm:flex-row gap-5">
			{#each data.posts as post}
				<Blogcard slug={post.slug} title={post.title} date={post.date} desc={post.description} />
			{/each}
		</div>
	</div>
</section>
 -->

<section class="py-6 sm:py-32">
	<Title title1="Meine neusten und besten Posts" title2="Mein Portfolio, Mein Blog" />
	<div class="mx-5 lg:mx-32">
		<div class="bg-black/30 flex p-3">
			<div class="w-1/3 flex flex-col">
				{#each data.posts as post, i}
					<div class="flex gap-3 group-[blog] hover:bg-black/30 p-3 transition">
						<div class="relative">
							<span class="absolute test w-12 shadow-red-700 ml-2">{'0' + (1 + i)}</span>
							<img class="min-w-[80px] w-20 h-20 opacity-25" src={`/${post.slug}.png`} alt="" />
						</div>
						<div class="relative flex flex-col w-[83%]">
							<h2 class="font-bold uppercase">{post.title}</h2>
							<p class="font-light text-xs truncate">{post.description}</p>
							<div class="absolute bottom-0 w-full flex justify-between text-xs font-semibold">
								<p>{formatDate(post.date)}</p>
								<p>Phil</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="">
				<span class="test"> Laser Cutting - Meine Einstieg & Erfahrungen</span>
			</div>
		</div>
	</div>
</section>

<style>
	.test {
		font-weight: 900;
		font-size: 30px;
		color: #fff;
		-webkit-text-stroke-color: #fff;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke-width: 1px;
	}
</style>
