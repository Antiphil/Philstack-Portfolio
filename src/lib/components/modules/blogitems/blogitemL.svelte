<script lang="ts">
	export let title: string = 'Viel zu unzufrieden mit diesem ganzen Mist hier! ARGH!!!';
	export let img: string = 'https://img.freepik.com/free-vector/cute-astronaut-friend-playing-space-cartoon-vector-icon-illustration-science-technology-isolated_138676-8720.jpg';
	export let date: string = '0 seconds ago';
	export let desc: string = 'Lorem ipsum dolor sit amet consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? isicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? Maxime magnam, ullam accusamus veniam veritatis voluptas, blanditiis, molestias nemo ipsam asperiores provident?';
	export let url: string = '/';
	export let tags: string = 'aaa,aasd';
	export let views: string = '0';
</script>

<a href={url} class="group relative m-auto mt-[60px] flex w-full max-w-screen-xl flex-col items-center justify-between rounded-2xl border-[4px] border-primary-main bg-primary-main p-5 transition-all hover:scale-[1.01] hover:bg-secondary-800 md:mt-0 md:h-72 md:flex-row">
	<div class="absolute top-[-60px] h-56 w-64 overflow-hidden rounded-3xl border-[5px] border-secondary-800 md:-left-[32px] md:top-[28px]">
		<img src={img} alt="" class="h-full w-full object-cover sepia" />
	</div>
	<div class="mt-36 p-2 text-secondary-800 group-hover:text-primary-main md:ml-[calc(224px-16px)] md:mt-0 md:max-h-56 md:p-8">
		<h3 class="mb-2 line-clamp-1 flex justify-between text-xs font-semibold">
			<span>Posted {date}</span>
			<span>Author: Phil</span>
		</h3>
		<ul class="mb-2 line-clamp-1 flex max-w-full gap-2 truncate text-nowrap text-xs font-semibold">
			{#each tags as tag}
				<li class="rounded-lg bg-secondary-800 px-2 py-1 text-primary-main transition-all group-hover:bg-primary-main group-hover:text-secondary-800">{tag}</li>
			{/each}
		</ul>
		<h2 class="mb-3 line-clamp-1 text-xl font-bold md:text-3xl">{title}</h2>
		<h3 class="line-clamp-2 text-justify text-sm font-light">{desc}</h3>
		<div class="mt-3 flex items-center justify-between">
			<div class="text-secondary group-hover:text-primary flex w-fit items-center gap-2 rounded-xl text-sm font-bold transition-all">
				<span>Read More</span>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
				</svg>
			</div>
			<div class="flex items-center gap-1 text-xs">
				<i class="fa-solid fa-eye"></i>
				<p class="font-bold">{views}</p>
			</div>
		</div>
	</div>
	<div class="hidden flex-col gap-2 md:flex">
		<div class="group-hover:bg-primary ml-10 h-6 w-4 rounded-xl bg-secondary-800"></div>
		<div class="group-hover:bg-primary ml-10 h-16 w-4 rounded-xl bg-secondary-800"></div>
	</div>
</a>
