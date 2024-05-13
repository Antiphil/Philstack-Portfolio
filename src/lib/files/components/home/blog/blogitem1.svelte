<script lang="ts">
	import phil from '$lib/assets/phil.jpg';
	import Button from '$lib/files/modules/button.svelte';
	import { text } from '@sveltejs/kit';
	import { format, formatDistance, endOfDay, formatRelative, subDays } from 'date-fns';

	export let title: string = 'Viel zu unzufrieden mit diesem ganzen Mist hier! ARGH!!!';
	export let img: string = 'https://img.freepik.com/free-vector/cute-astronaut-friend-playing-space-cartoon-vector-icon-illustration-science-technology-isolated_138676-8720.jpg';
	export let date: string = '0 seconds ago';
	export let desc: string = 'Lorem ipsum dolor sit amet consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? isicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? Maxime magnam, ullam accusamus veniam veritatis voluptas, blanditiis, molestias nemo ipsam asperiores provident?';
	export let url: string = "/"
</script>


<a href={url} class=" max-w-screen-xl m-auto relative hover:bg-secondary  hover:scale-[1.01] bg-primary group w-full p-5 h-72 rounded-2xl items-center justify-between flex border-[4px] border-primary transition-all">
	<div class="border-[5px] border-secondary absolute top-[28px] -left-[32px] w-64 h-56 bg-primaryhover rounded-3xl overflow-hidden">
		<img src={img} alt="" class="sepia w-full h-full object-cover" />
	</div>
	<div class="text-secondary group-hover:text-primary ml-[calc(224px-16px)] max-h-56 p-8">
		<h3 class="text-xs font-semibold line-clamp-1">Posted {date} - Author: Phil</h3>
		<h2 class="text-3xl font-bold mb-3 line-clamp-1">{title}</h2>
		<h3 class="text-sm font-light line-clamp-3 text-justify">{desc}</h3>
		<div class="mt-3 w-fit items-center gap-2 rounded-xl text-sm font-bold  transition-all group-hover:text-primary text-secondary flex">
			<span>Read More</span>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
			</svg>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div class="rounded-xl h-6 w-4 group-hover:bg-primary bg-secondary ml-10"></div>
		<div class="rounded-xl h-16 w-4 group-hover:bg-primary bg-secondary ml-10"></div>
	</div>
</a>