<script lang="ts">
	import sec from '$lib/assets/SectionSplitter/split_top_y.svg';
	import bg from '$lib/assets/shil2.png';
	import char from '$lib/assets/character.png';
	import Partner from './partner.svelte';
	import split from '$lib/assets/splitter.svg'
	import philstack from "$lib/assets/logos/philstack_long.svg"
</script>

<section class="overflow-hidden relative">
	<div class="absolute flex w-full h-full items-end  z-20">
		<div class="justify-center w-full mb-20">
			<div class="flex justify-center items-center h-80">
				<img class="w-[30%]" src={philstack} alt="philstack">
			</div>

		</div>
	</div>
	<img class="absolute object-cover bottom-0 right-[0px] h-[80%] z-10" src={char} alt="">
	<img class="object-cover w-full h-screen  z-0" src={bg} alt="" />	
	<img class="absolute bottom-0 min-h-[200px] object-cover  z-20" src={sec} alt="Section Split">
</section>
