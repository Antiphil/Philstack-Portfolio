<script lang="ts">
	export let title: string = 'Lorem ipsum dolor sit amet conse ctetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit.';
	export let img: string = 'https://img.freepik.com/free-vector/cute-astronaut-friend-playing-space-cartoon-vector-icon-illustration-science-technology-isolated_138676-8720.jpg';
	export let date: string = '0 seconds ago';
	export let desc: string = 'Lorem ipsum dolor sit amet consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? isicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? Maxime magnam, ullam accusamus veniam veritatis voluptas, blanditiis, molestias nemo ipsam asperiores provident?';
	export let url: string = '/';
	export let tags: string = 'aaa,aasd';
	export let views: string = '0';
</script>

<a href={url} class="group relative block h-full w-full rounded-3xl border-[4px] border-primary-main bg-primary-main p-3 text-secondary-800 transition-all hover:scale-[1.01] hover:bg-secondary-800 hover:text-primary-main">
	<img class="absolute -top-20 left-1/2 h-64 w-[calc(100%-24px)] -translate-x-1/2 rounded-3xl border-[5px] border-secondary-800 object-cover sepia" alt="a" src={img} />
	<div class="xs:p-3">
		<h3 class="mb-2 line-clamp-1 flex justify-between pt-[calc(256px-80px)] text-xs font-semibold">
			<span>Posted {date}</span>
			<span>Author: Phil</span>
		</h3>
		<ul class="line-clamp-1 flex w-64 gap-2 truncate text-nowrap text-xs font-semibold">
			{#each tags as tag}
				<li class="rounded-lg bg-secondary-800 px-2 py-1 text-primary-main transition-all group-hover:bg-primary-main group-hover:text-secondary-800">{tag}</li>
			{/each}
		</ul>

		<h1 class="mb-2 mt-2 line-clamp-3 text-4xl font-bold leading-tight">{title}</h1>
		<p class="mb-4 line-clamp-6">{desc}</p>
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
</a>
