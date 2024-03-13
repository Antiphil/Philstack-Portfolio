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

<div class="group my-4 w-full rounded-3xl border-2 border-primary px-10 py-5 text-primary shadow-[4px_3px_0px_rgba(237,233,208,1)] transition-all hover:scale-[1.01]">
	<div class="flex items-center justify-between">
		<span class="font-light">{date}</span>
		<a class="rounded bg-primary px-2 py-1 text-sm font-semibold uppercase text-secondary" href="#"><i class="fa-solid fa-tag mr-1"></i>{tag}</a>
	</div>
	<div class="mt-2">
		<a class="text-xl font-semibold uppercase" href="#">{title}</a>
		<p class="mt-2 text-sm">{desc}</p>
	</div>
	<div class="mt-4 flex items-center justify-between">
		<Button text="Read More" link="/" />
		<div>
			<a class="flex items-center" href="#">
				<h1 class="flex items-center">
					<span class="mr-1 text-xs">Posted by</span>
					<span class="font-bold"> Philstack</span>
					<span class="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold text-blue-800 dark:text-blue-400">
						<svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
							<path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z" />
							<path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z" />
						</svg>
					</span>
				</h1>
				<img class="hidden h-10 w-10 rounded-full object-cover sm:block" src={phil} alt="avatar" />
			</a>
		</div>
	</div>
</div>
