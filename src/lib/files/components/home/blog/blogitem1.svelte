<script lang="ts">
	import phil from '$lib/assets/phil.jpg';
	import Button from '$lib/files/modules/button.svelte';
	import { text } from '@sveltejs/kit';
	import { format, formatDistance, endOfDay, formatRelative, subDays } from 'date-fns';

	export let title: string = 'Viel zu unzufrieden mit diesem ganzen Mist hier! ARGH!!!';
	export let img: string = 'https://img.freepik.com/free-vector/cute-astronaut-friend-playing-space-cartoon-vector-icon-illustration-science-technology-isolated_138676-8720.jpg';
	export let date: string = '0 seconds ago';
	export let desc: string = 'Lorem ipsum dolor sit amet consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? isicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? Maxime magnam, ullam accusamus veniam veritatis voluptas, blanditiis, molestias nemo ipsam asperiores provident?';
	export let url: string = '/';
</script>

<a href={url} class="group relative m-auto mt-[60px] flex w-full max-w-screen-xl flex-col items-center justify-between rounded-2xl border-[4px] border-primary bg-primary p-5 transition-all hover:scale-[1.01] hover:bg-secondary md:h-72 md:flex-row">
	<div class="absolute top-[-60px] h-56 w-64 overflow-hidden rounded-3xl border-[5px] border-secondary md:-left-[32px] md:top-[28px]">
		<img src={img} alt="" class="h-full w-full object-cover sepia" />
	</div>
	<div class="mt-36 p-2 text-secondary group-hover:text-primary md:ml-[calc(224px-16px)] md:mt-0 md:max-h-56 md:p-8">
		<h3 class="mb-2 line-clamp-1 text-xs font-semibold">Posted {date} - Author: Phil</h3>
		<h2 class="mb-3 line-clamp-1 text-xl font-bold md:text-3xl">{title}</h2>
		<h3 class="line-clamp-3 text-justify text-sm font-light">{desc}</h3>
		<div class="mt-3 flex w-fit items-center gap-2 rounded-xl text-sm font-bold text-secondary transition-all group-hover:text-primary">
			<span>Read More</span>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
			</svg>
		</div>
	</div>
	<div class="hidden flex-col gap-2 md:flex">
		<div class="ml-10 h-6 w-4 rounded-xl bg-secondary group-hover:bg-primary"></div>
		<div class="ml-10 h-16 w-4 rounded-xl bg-secondary group-hover:bg-primary"></div>
	</div>
</a>
