<script lang="ts">
	export let title: string = 'Viel zu unzufrieden mit diesem ganzen Mist hier! ARGH!!!';
	export let img: string = 'https://img.freepik.com/free-vector/cute-astronaut-friend-playing-space-cartoon-vector-icon-illustration-science-technology-isolated_138676-8720.jpg';
	export let date: string = '0 seconds ago';
	export let desc: string = 'Lorem ipsum dolor sit amet consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? isicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? Maxime magnam, ullam accusamus veniam veritatis voluptas, blanditiis, molestias nemo ipsam asperiores provident?';
	export let url: string = '/';
	export let tags: string = 'aaa,aasd';
	export let views: string = '0';

	const formatTags = () => {
		if (!tags || typeof tags !== 'string') {
			return [];
		}
		const tagsArray = tags.split(',').map((tag) => tag.trim());

		return tagsArray;
	};
	let tagArray = formatTags();
</script>

<a href={url} class="group relative mt-[60px] flex w-full flex-col items-center justify-between rounded-2xl border-[4px] border-primary-main bg-primary-main p-5 transition-all hover:scale-[1.01] hover:bg-secondary-800 lg:max-w-[31%]">
	<div class="w-full">
		<div class="absolute left-1/2 top-[-60px] h-56 w-64 -translate-x-1/2 transform overflow-hidden rounded-3xl border-[5px] border-secondary-800">
			<img src={img} alt="" class="h-full w-full object-cover sepia" />
		</div>
		<div class="mt-36 p-2 text-secondary-800 group-hover:text-primary-main">
			<h3 class="mb-2 line-clamp-1 flex justify-between text-xs font-semibold">
				<span>Posted {date}</span>
				<span>Author: Phil</span>
			</h3>
			<ul class="line-clamp-1 flex max-w-full gap-2 truncate text-nowrap text-xs font-semibold">
				{#each tagArray as tag}
					<li class="rounded-lg bg-secondary-800 px-2 py-1 text-primary-main transition-all group-hover:bg-primary-main group-hover:text-secondary-800">{tag}</li>
				{/each}
			</ul>
			<h2 class="mb-3 line-clamp-1 text-xl font-bold">{title}</h2>
			<h3 class="line-clamp-3 text-justify text-sm font-light">{desc}</h3>
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
		<div class="hidden gap-2">
			<div class="group-hover:bg-primary h-4 w-6 rounded-xl bg-secondary-800"></div>
			<div class="group-hover:bg-primary h-4 w-16 rounded-xl bg-secondary-800"></div>
		</div>
	</div>
</a>
