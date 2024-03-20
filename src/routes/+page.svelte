<script>
	import Blogitemdemo from '$lib/files/components/blogitemdemo.svelte';
	import About from '$lib/files/components/home/about.svelte';
	import Blog from '$lib/files/components/home/blog/blog.svelte';
	import Hero from '$lib/files/components/home/hero.svelte';
	import Projects from '$lib/files/components/home/projects/projects.svelte';
	import LeftSection from '$lib/files/layout/leftSection.svelte';
	import RightSection from '$lib/files/layout/rightSection.svelte';
	import { onMount } from 'svelte';
</script>

<div class="w-full">
	<Hero />
	<LeftSection>
		<About />
	</LeftSection>
	<RightSection>
		<Projects />
	</RightSection>
	<LeftSection>
		<Blog />
	</LeftSection>
	<RightSection>
		<Projects />
	</RightSection>
</div>
