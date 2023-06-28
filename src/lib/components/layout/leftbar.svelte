<script lang="ts">
	import logo from '$lib/assets/logo.svg';
</script>

<div class="flex fixed pointer-events-none z-50 py-5 lg:py-10 px-2 lg:px-5 items-center h-screen flex-col justify-between gap-2">
	<a href="/" class="pointer-events-auto">
		<img class="w-16 mix-blend-exclusion" src={logo} alt="aa" />
	</a>
	<div class="hidden sm:flex pointer-events-auto flex-col items-center gap-2 max-w-5">
		<a href="/https://twitter.com/MisterNamazu" target="_blank" class="relative flex items-center socHov hover:text-[#1DA1F2]">
			<i class="fa-brands fa-twitter mix-blend-exclusion" />
			<span class="absolute left-5 font-bold text-xs overflow-hidden w-0 mix-blend-normal">Twitter</span>
		</a>
		<a href="https://www.instagram.com/mrnamazu/" target="_blank" class="relative flex items-center socHov hover:text-[#FCAF45]">
			<i class="fa-brands fa-instagram mix-blend-exclusion" />
			<span class="absolute left-5 font-bold text-xs overflow-hidden w-0 mix-blend-exclusion">Instagram</span>
		</a>
		<a href="/" target="_blank" class="relative flex items-center socHov hover:text-[#0072b1]">
			<i class="fa-brands fa-linkedin mix-blend-exclusion" />
			<span class="absolute left-5 font-bold text-xs overflow-hidden w-0 mix-blend-lighten">LinkedIn</span>
		</a>
		<div class="w-[1px] h-20 my-5 bg-white mix-blend-exclusion" />
		<div class="vl mix-blend-exclusion">FOLLOW ME</div>
	</div>
</div>

<style lang="postcss">
	.socHov:hover {
		transition: 0.3s all;
	}
	.socHov:hover > i {
		transition: 0.3s all;
	}
	.socHov:hover > span {
		width: 200px;
		transition: 0.8s all;
	}
	.vl {
		writing-mode: vertical-rl;
		text-orientation: mixed;
		font-weight: 600;
		font-size: 12px;
		letter-spacing: 2px;
	}
</style>
