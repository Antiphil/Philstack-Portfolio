<script lang="ts">
	export let title: string = 'Lorem ipsum dolor sit amet conse ctetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit.';
	export let img: string = 'https://img.freepik.com/free-vector/cute-astronaut-friend-playing-space-cartoon-vector-icon-illustration-science-technology-isolated_138676-8720.jpg';
	export let date: string = '0 seconds ago';
	export let desc: string = 'Lorem ipsum dolor sit amet consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? isicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? Maxime magnam, ullam accusamus veniam veritatis voluptas, blanditiis, molestias nemo ipsam asperiores provident?';
	export let url: string = '/';
	export let tags: string = 'aaa,aasd';
	export let views: string = '0';
</script>

<a href={url} class="group relative flex h-48 w-full max-w-screen-xl flex-col items-center justify-center rounded-2xl border-[4px] border-primary-main bg-primary-main p-5 transition-all hover:scale-[1.01] hover:bg-secondary-800 md:mt-0 md:flex-row">
	<div class=" absolute -left-[32px] top-[28px] hidden h-32 w-32 overflow-hidden rounded-3xl border-[5px] border-secondary-800 xs:block">
		<img src={img} alt="" class="h-full w-full object-cover sepia" />
	</div>
	<div class="max-h-56 text-secondary-800 group-hover:text-primary-main xs:ml-[calc(128px-64px)] xs:pl-8">
		<h3 class="mb-2 line-clamp-1 flex justify-between text-xs font-semibold">
			<span>Posted {date}</span>
			<span>Author: Phil</span>
		</h3>
		<h2 class="mb-1 line-clamp-1 text-xl font-bold md:text-xl">{title}</h2>
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
	<div class="hidden flex-col gap-2 lg:flex">
		<div class="ml-10 h-4 w-3 rounded-xl bg-secondary-800 group-hover:bg-primary-main"></div>
		<div class="ml-10 h-10 w-3 rounded-xl bg-secondary-800 group-hover:bg-primary-main"></div>
	</div>
</a>
