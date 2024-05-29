<script lang="ts">
	export let title: string = 'Lorem ipsum dolor sit amet conse ctetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit.';
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

<a href={url} class="group relative flex h-24 w-full max-w-screen-xl flex-col items-center justify-center rounded-xl border-[4px] border-primary-main bg-primary-main transition-all hover:scale-[1.01] hover:bg-secondary-800 md:mt-0 md:flex-row">
	<div class=" absolute -left-[32px] top-[12px] hidden h-16 w-16 overflow-hidden rounded-2xl border-[5px] border-secondary-800 xs:block">
		<img src={img} alt="" class="h-full w-full object-cover sepia" />
	</div>
	<div class="max-h-56 text-secondary-800 group-hover:text-primary-main xs:ml-[calc(128px-82px)]">
		<h2 class="mb-1 line-clamp-1 text-base font-bold">{title}</h2>
		<h3 class="line-clamp-2 text-justify text-xs font-light">{desc}</h3>
	</div>
	<div class="hidden flex-col gap-1 pr-1 lg:flex">
		<div class="ml-5 h-3 w-2 rounded-xl bg-secondary-800 group-hover:bg-primary-main"></div>
		<div class="ml-5 h-6 w-2 rounded-xl bg-secondary-800 group-hover:bg-primary-main"></div>
	</div>
</a>
