<script lang="ts">
	import sec from '$lib/assets/SectionSplitter/split_top_y.svg';
	import shil from '$lib/assets/shil2.png';
	import Partner from '../partner.svelte';
	import split from '$lib/assets/splitter.svg'
</script>

<section class="overflow-hidden relative">
	<div class="absolute flex w-full h-full items-end">
		<div class="justify-center w-full mb-20">
			<div class="hidden lg:block">
				<Partner />
			</div>
		</div>
	</div>
	<img class="object-cover w-full h-screen" src={shil} alt="" />
	
	<img class="absolute bottom-0 min-w-[100vw]" src={sec} alt="Section Split">
</section>
