<script>
	import BlogitemMini from './../../modules/blogitems/blogitemMini.svelte';
	import phil from '$lib/assets/images/hero.jpg';
	import BlogitemSmall from '$lib/components/modules/blogitems/blogitemSmall.svelte';
	import Titlesmall from '$lib/components/modules/titlesmall.svelte';
	import Tag from './tag.svelte';

	export let tags;
</script>

<!-- 
    Suche
    About
    Tags
    Other Posts
 -->

<div class="h-full w-full bg-secondary-900 p-10">
	<!-- <div class="">
		<span>Search for Blog Content</span>
		<input class="m-a rounded-lg bg-secondary-800 px-5 py-2" type="text" placeholder="Suchbegriff" />
	</div> -->
	<Titlesmall title="about me" />
	<div class="my-10 flex flex-col">
		<img class="m-auto mb-2 h-40 w-40 rounded-full object-cover" src={phil} alt="Philstack" />
		<div class="mt-3 flex flex-col gap-1">
			<div class="flex items-center gap-3">
				<p class="text-xs font-bold">Name:</p>
				<p class="text-sm font-light">Phil aka. AntiPhil</p>
			</div>
			<div class="flex items-center gap-3">
				<p class="text-xs font-bold">Job:</p>
				<p class="text-sm font-light">Frontend Developer & UX/UI Designer</p>
			</div>
			<div class="flex items-center gap-3">
				<p class="text-xs font-bold">Location:</p>
				<p class="text-sm font-light">Thuringia/Germany</p>
			</div>
			<div class="mt-3 text-sm font-light">Ich bin ein IT-Nerd aus Thüringen mit einer großen Leidenschaft für alles Technische und Kreative. Die meisten meiner Fähigkeiten habe ich mir selbst beigebracht und möchte meine Erfahrungen und Skills mit euch zu teilen!</div>
		</div>
	</div>
	<Titlesmall title="Tags" />
	<div class="my-10 flex flex-wrap gap-2">
		{#each tags as tag}
			<Tag name={tag} url="/" />
		{/each}
	</div>
	<Titlesmall title="Other Posts" />
	<div class="mt-10 flex flex-col items-center justify-center gap-3">
		<BlogitemMini />
		<BlogitemMini />
		<BlogitemMini />
		<BlogitemMini />
	</div>
</div>
