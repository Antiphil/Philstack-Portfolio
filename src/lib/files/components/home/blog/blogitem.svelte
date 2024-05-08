<script lang="ts">
	import phil from '$lib/assets/phil.jpg';
	import Button from '$lib/files/modules/button.svelte';
	import { text } from '@sveltejs/kit';
	import { format, formatDistance, endOfDay, formatRelative, subDays } from 'date-fns';

	export let title: string = 'Viel zu unzufrieden mit diesem ganzen Mist hier! ARGH!!!';
	export let img: string = 'https://img.freepik.com/free-vector/cute-astronaut-friend-playing-space-cartoon-vector-icon-illustration-science-technology-isolated_138676-8720.jpg';
	export let date: string = '0 seconds ago';
	export let desc: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? Maxime magnam, ullam accusamus veniam veritatis voluptas, blanditiis, molestias nemo ipsam asperiores provident?';
	export let tag: string = 'Coding';
</script>

<!-- <div class="relative flex w-full mb-5 flex-col rounded-3xl border-2 border-[#EDE9D0] shadow-[4px_4px_0px_rgba(237,233,208,1)] sm:h-[200px]">
	<img class="relative z-30 w-full rounded-t-3xl object-cover sm:w-1/3" src={img} alt="" />

	<div class="flex w-full flex-col items-center justify-center sm:relative sm:right-10 sm:w-[90%]">
		<div class="flex w-full flex-col justify-center bg-[#EDE9D0] p-3 text-secondary sm:absolute sm:w-[400px] sm:rounded-3xl sm:p-5">
			<h3 class="mx-auto mb-3 text-xs uppercase"><span class="rounded-lg bg-secondary px-2 py-1 text-sm font-semibold text-primary"> {tag}</span></h3>
			<h2 class="text-lg font-extrabold uppercase">{title}</h2>
		</div>
		<div class="absolute bottom-4 left-[160px] hidden h-6 w-36 rounded-3xl bg-primary sm:flex"></div>
		<div class="top-2 flex flex-col items-end justify-center sm:relative">
			<div class="line-clamp-[5] w-full rounded-xl border-[#EDE9D0] px-3 pr-1 pt-3 text-xs italic text-[#EDE9D0] sm:border-2 sm:py-1 sm:pl-[26%]">{desc}</div>
			<div class="flex w-full items-center justify-between pl-3 pr-5 sm:mr-0">
				<span class="text-xs">posted <br />{formatDistance(date, endOfDay(new Date()))} ago</span>
				<Button link="/blog" text="Read post" />
			</div>
		</div>
	</div>
</div> -->
<article class="group h-[600px] w-[25%] transform cursor-pointer overflow-hidden rounded-2xl bg-cover bg-center shadow-xl duration-500 hover:-translate-y-2" style="background-image: url({img});">
	<div class="relative flex h-[600px] transform flex-col bg-black bg-opacity-20 px-6 py-6 duration-300 hover:bg-opacity-75">
		<h1 class="absolute bottom-10 mb-5 transform text-3xl font-medium text-white duration-300 group-hover:translate-y-[-100px]">{title}</h1>
		<div class="absolute bottom-5 mb-5 flex h-2 w-full transform rounded-full duration-300 group-hover:translate-y-[-100px]">
			<span class="inline-block h-1.5 w-20 rounded-full bg-primary"></span>
			<span class="mx-1 inline-block h-1.5 w-6 rounded-full bg-primary"></span>
			<span class="inline-block h-1.5 w-2 rounded-full bg-primary"></span>
		</div>
		<p class="absolute bottom-5 line-clamp-3 w-[calc(100%-48px)] translate-y-[-40px] transform text-sm opacity-0 duration-500 group-hover:opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing consectetur adipisicing consectetur adipisicing elit. Vitae, sapiente tempore iusto consectetur quo soluta consequatur. Ad officiis ea voluptas!</p>
		<p class="absolute bottom-5 flex w-[calc(100%-48px)] translate-y-[-0px] transform justify-between pb-3 text-xs opacity-0 duration-500 group-hover:opacity-80">
			<span>{formatDistance(date, endOfDay(new Date()))}</span>
			<span>Author: Phil</span>
		</p>
	</div>
</article>
