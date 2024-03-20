<script lang="ts">
	import phil from '$lib/assets/phil.jpg';
	import Button from '$lib/files/modules/button.svelte';
	import { text } from '@sveltejs/kit';

	export let title: string = 'Viel zu unzufrieden mit diesem ganzen Mist hier! ARGH!!!';
	//export let img: string = 'https://img.freepik.com/free-vector/cute-astronaut-friend-playing-space-cartoon-vector-icon-illustration-science-technology-isolated_138676-8720.jpg';
	export let date: string = '0 seconds ago';
	export let desc: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? Maxime magnam, ullam accusamus veniam veritatis voluptas, blanditiis, molestias nemo ipsam asperiores provident?';
	export let tag: string = 'Coding';
</script>

<div class="relative flex w-full flex-col rounded-3xl border-2 border-[#EDE9D0] shadow-[4px_4px_0px_rgba(237,233,208,1)] sm:h-[200px]">
	<img class="relative z-30 w-full rounded-3xl object-cover sm:w-1/3" src="https://cdn.leonardo.ai/users/372c505e-b23b-464e-80af-b4294fdd9866/generations/912a5f12-c946-4c7e-b080-266a13edaec0/Default_a_sepia_colored_comic_image_of_a_laser_cutter_1.jpg" alt="" />

	<div class="flex w-full flex-col items-center justify-center sm:relative sm:right-10 sm:w-[90%]">
		<div class="left-[-100px] top-[-10%] z-40 w-full bg-[#EDE9D0] p-5 text-secondary sm:absolute sm:w-[400px] sm:rounded-3xl">
			<h3 class="font-extrabold uppercase">Post about {tag}</h3>
			<h2 class="text-2xl font-extrabold uppercase">{title}</h2>
		</div>
		<div class="absolute bottom-4 left-[160px] hidden h-6 w-36 rounded-3xl bg-primary sm:flex"></div>
		<div class="top-2 flex flex-col items-end justify-center sm:relative">
			<div class="line-clamp-4 w-full rounded-xl border-[#EDE9D0] pr-1 text-sm italic text-[#EDE9D0] sm:border-2 sm:py-1 sm:pl-[26%]">{desc}</div>
			<Button text="Read post" />
		</div>
	</div>
</div>
