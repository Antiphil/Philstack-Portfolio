<script lang="ts">
	import { description } from './../../config.ts';
	import Title from '$lib/components/modules/title.svelte';
	import { formatDate } from '$lib/utils';
	import Blogcard from './blogcard.svelte';

	export let data: any;
	let active: number = 0; 
	let progress: number = 0;

	const increaseProgress = async () => {
		setInterval(() => {
			if (progress === 100) {
				progress = 0;
				if (active === 3) {
					active = 0;
				} else {
					active++;
				}
			} else {
				progress++;
			}
		}, 100);
	};

	const setActive = (index: number) => {
		if (active !== index) active = index;
		progress = 0;
	};
	increaseProgress();
</script>

<section class="py-6 sm:py-32">
	<Title title1="Meine neusten und besten Posts" title2="Mein Portfolio, Mein Blog" />
	<div class="mx-5 lg:mx-32">
		<div class="bg-black/30 ">
			<div class="flex">
				<div class="w-1/3 flex flex-col">
					{#each data.posts as post, i}
						<button class={`${active === i ? 'bg-black/30' : ''} flex gap-3 group-[blog] hover:bg-black/30 p-3 transition-all`} on:click={() => setActive(i)}>
							<div class="relative">
								<span class="absolute test w-12 shadow-red-700 left-1" style={`${active === i ? '-webkit-text-fill-color: #FFF; -webkit-text-stroke-color: #000;' : '-webkit-text-fill-color: transparent'}`}>{'0' + (1 + i)}</span>
								<img class={`${active === i ? 'opacity-100' : 'opacity-20'} transition-all min-w-[80px] w-20 h-20`}  src={`/${post.slug}.png`} alt="" />
							</div>
							<div class="relative flex flex-col w-[83%]">
								<h2 class="font-bold uppercase text-left">{post.title}</h2>
								<p class="font-light text-xs truncate">{post.description}</p>
								<div class="absolute bottom-0 w-full flex justify-between text-xs font-semibold">
									<p>{formatDate(post.date)}</p>
									<p>Phil</p>
								</div>
							</div>
						</button>
					{/each}
				</div>
				<div class="w-full ">
					<img class="w-full h-52 object-cover" src={`/${data.posts[active].slug}.png`} alt="">
					<div class="p-2 relative flex flex-col h-[calc(100%-216px)]">
						<h2 class="text-2xl font-bold mb-2">{data.posts[active].title}</h2>
						<p>{data.posts[active].description}</p>
						<button class="w-[calc(100%-16px)] text-xs hover:bg-black transition-colors hover:text-white font-bold uppercase absolute bottom-0 bg-white text-black px-3 py-2">Lies den gesamten Blogpost</button>
					</div>
				</div>
			</div>
			<div class="w-full ">
				<div class="bg-white h-[4px] duration-100 ease-in" style="width: {progress}%;" />
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
