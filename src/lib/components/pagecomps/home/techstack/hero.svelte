<script lang="ts">
	import sec from '$lib/assets/sectionsplit.svg';
	import shil from '$lib/assets/shil.jpg';
	import Partner from '../partner.svelte';
</script>

<section class="overflow-hidden grid">
	<img class="object-cover w-full h-screen col-start-1 col-end-4 row-start-1 row-end-4" src={shil} alt="" />
	<div class="col-start-1 col-end-4 row-start-3 row-end-4">
		<div class="hidden lg:block">
			<Partner />
		</div>
	</div>
</section>
