<script>
	// @ts-nocheck

	import Blogitem1 from '$lib/files/components/home/blog/blogitem1.svelte';
	import Blogitem2 from '$lib/files/components/home/blog/blogitem2.svelte';
	import Articleinfobar from '$lib/files/modules/articleinfobar.svelte';
	import Articlesidebar from '$lib/files/modules/articlesidebar.svelte';
	import Breadcrumbs from '$lib/files/modules/breadcrumbs.svelte';
	import Title from '$lib/files/modules/title.svelte';
</script>

<section class="relative flex w-full flex-col pb-[5px] pl-[10px] xl:pb-[35px] xl:pl-[70px]">
	<Breadcrumbs slugs={['/blog']} titles={['Blog']} />
	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary xl:rounded-bl-[75px]">
		<!-- <Articlesidebar /> -->
		<div class="mt-10 w-full px-3 py-5 md:p-10">
			<!-- <Articleinfobar link="ASd" text="Das" /> -->
			<div class="flex flex-col gap-5">
				<Blogitem1 />
				<Blogitem2 />
				<Blogitem1 />
				<Blogitem2 />
				<Blogitem1 />
				<Blogitem2 />
				<Blogitem1 />
				<Blogitem2 />
				<Blogitem1 />
				<Blogitem2 />
			</div>
		</div>
	</div>
</section>

<style>
	:global(#blogContent img) {
		filter: sepia(0.5);
		border-radius: 20px;
		border: 3px solid #ede9d0;
		transition: 0.5s all;
	}
	:global(#blogContent img:hover) {
		filter: sepia(0);
		transition: 0.5s all;
	}
</style>
