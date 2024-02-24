<script>
	import Partner from '$lib/files/comps/home/partner.svelte';
	import Hero from '$lib/files/comps/home/hero.svelte';
</script>

<div class="flex flex-col">
	<Hero />
	<div class="lg:hidden">
		<Partner />
	</div>
	<!-- <Blog /> -->
	<!-- <Techstack /> -->
</div>
