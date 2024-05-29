<script>
	import BlogitemL from '$lib/components/modules/blogitems/blogitemL.svelte';
	import BlogitemR from '$lib/components/modules/blogitems/blogitemR.svelte';
	import Title from '$lib/components/modules/title.svelte';
</script>

<div class="p-10">
	<Title title="Popular Posts" />
	<div class="mt-10 flex flex-col gap-5">
		<BlogitemL />
		<BlogitemR />
		<BlogitemL />
		<BlogitemR />
		<BlogitemL />
	</div>
</div>
