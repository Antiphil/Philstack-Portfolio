<script>
	import { toggleNav } from '$lib/stores/navstore';
</script>

<div class="pointer-events-none absolute z-[30] hidden h-[90vh] w-[70px] flex-col items-center justify-between gap-2 px-2 py-5 text-secondary-900 lg:px-5 lg:py-5 xl:flex">
	<button on:click={toggleNav}><i class="fa-solid fa-bars pointer-events-auto cursor-pointer text-2xl"></i></button>
	<div class="pointer-events-auto hidden max-w-5 flex-col items-center gap-2 sm:flex">
		<a href="https://twitter.com/MisterNamazu" target="_blank" class="socHov relative flex items-center hover:text-[#1DA1F2]">
			<i class="fa-brands fa-twitter mix-blend-exclusion" />
			<span class="absolute left-5 w-0 overflow-hidden text-xs font-bold transition-all">Twitter</span>
		</a>
		<a href="https://www.instagram.com/mrnamazu/" target="_blank" class="socHov relative flex items-center hover:text-[#FCAF45]">
			<i class="fa-brands fa-instagram mix-blend-exclusion" />
			<span class="absolute left-5 w-0 overflow-hidden text-xs font-bold transition-all">Instagram</span>
		</a>
		<a href="https://www.linkedin.com/in/philipp-stehle-24a125249/" target="_blank" class="socHov relative flex items-center hover:text-[#0072b1]">
			<i class="fa-brands fa-linkedin mix-blend-exclusion" />
			<span class="absolute left-5 w-0 overflow-hidden text-xs font-bold transition-all">LinkedIn</span>
		</a>
		<div class="my-5 h-20 w-[1px] bg-secondary-800" />
		<div class="vl">FOLLOW ME</div>
	</div>
</div>

<style lang="postcss">
	.socHov:hover {
		transition: 0.2s all;
	}
	.socHov:hover > i {
		transition: 0.1s all;
	}
	.socHov:hover > span {
		width: 200px;
		transition: 0.1s all;
	}
	.vl {
		writing-mode: vertical-rl;
		text-orientation: mixed;
		font-weight: 700;
		font-size: 12px;
		letter-spacing: 2px;
		mix-blend-mode: difference;
	}
</style>
