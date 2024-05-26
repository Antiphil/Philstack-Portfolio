<script lang="ts">
	export let title: string = 'Projektname';
	export let logo: string = 'https://img.freepik.com/free-vector/cute-astronaut-friend-playing-space-cartoon-vector-icon-illustration-science-technology-isolated_138676-8720.jpg';
	export let banner: string = 'https://img.freepik.com/free-vector/cute-astronaut-friend-playing-space-cartoon-vector-icon-illustration-science-technology-isolated_138676-8720.jpg';
	export let desc: string = 'Lorem ipsum dolor sit amet consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? isicing elit. Eum natus, quia incidunt perferendis magnam rerum pariatur quidem? Maxime magnam, ullam accusamus veniam veritatis voluptas, blanditiis, molestias nemo ipsam asperiores provident?';
	export let url: string = '/';
	export let tags = ['Tailwind', 'Sveltekit', 'Laravel'];
</script>

<a href={url} class="group relative m-auto mt-[60px] flex w-full max-w-screen-xl flex-col items-center justify-between rounded-2xl border-[4px] border-primary-main transition-all hover:scale-[1.01] md:mt-0 md:h-72 md:flex-row">
	<div class="absolute top-[-60px] z-[2] h-56 w-64 overflow-hidden rounded-3xl border-[5px] border-secondary-800 bg-primary-main transition-all group-hover:bg-secondary-800 md:-right-[32px] md:top-[28px]">
		<img src={logo} alt="" class="m-auto h-full w-4/6 object-contain opacity-70 brightness-0 transition-all group-hover:invert" />
	</div>
	<div class="relative z-[2] hidden flex-col gap-2 pr-5 transition-all md:flex">
		<div class="ml-10 h-16 w-4 rounded-xl bg-primary-main transition-all group-hover:bg-secondary-800"></div>
		<div class="ml-10 h-6 w-4 rounded-xl bg-primary-main transition-all group-hover:bg-secondary-800"></div>
	</div>
	<div class="relative z-[2] mt-40 p-2 text-center text-primary-main drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all group-hover:text-primary-main md:mr-[calc(224px-16px)] md:mt-0 md:max-h-56 md:p-8 md:text-right">
		<ul class="mb-4 line-clamp-2 flex flex-wrap justify-center text-xs font-semibold md:mb-2 md:justify-end [&>li:not(:last-child)]:after:mx-1 [&>li:not(:last-child)]:after:content-['•']">
			{#each tags as tag}
				<li>{tag}</li>
			{/each}
		</ul>
		<h2 class="mb-3 line-clamp-1 text-xl font-bold md:text-3xl">{title}</h2>
		<h3 class="line-clamp-3 text-justify text-sm font-normal">{desc}</h3>
		<div class="text-secondary group-hover:text-primary mt-3 flex w-fit items-center gap-2 rounded-xl text-sm font-bold transition-all">
			<span>View Project</span>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
			</svg>
		</div>
	</div>

	<img class="absolute z-[1] h-full w-full rounded-2xl object-cover opacity-5 blur-[3px] sepia transition-all duration-500 group-hover:opacity-40" alt="" src={banner} />
</a>
