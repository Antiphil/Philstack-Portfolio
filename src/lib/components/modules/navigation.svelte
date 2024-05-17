<script>
	import logo from '$lib/assets/images/logos/logo.svg';
	import logofull from '$lib/assets/images/logos/logo_full.svg';
	import hero from '$lib/assets/images/hero.jpg';
	import heroM from '$lib/assets/images/hero_mobile.jpg';
	import { fade, fly } from 'svelte/transition';
</script>

<section class="fixed z-[100] flex h-screen w-full pb-[5px] pr-[10px] xl:pb-[70px] xl:pr-[70px]">
	<div class="absolute h-full w-full bg-primary-main" in:fly={{ duration: 300, x: -2000 }} out:fly={{ delay: 0, duration: 300, x: -1000 }}></div>
	<div class="absolute h-[calc(100%-75px)] w-[calc(100%-75px)] overflow-hidden rounded-br-3xl bg-secondary-800" in:fly={{ delay: 400, duration: 300, x: -2000 }} out:fly={{ delay: 0, duration: 300, x: -1000 }}>
		<div class="h-full w-full">
			<nav class="h-full w-full items-center">
				<ol class="h-full w-full py-10">
					<li class="h-1/5" in:fly={{ delay: 600, duration: 300, x: -2000 }}><a class="block h-full w-full pl-10 text-[80px] font-bold uppercase transition-all hover:bg-primary-main hover:pl-16 hover:text-secondary-800" href="/">Home</a></li>
					<li class="h-1/5" in:fly={{ delay: 700, duration: 300, x: -2000 }}><a class="block h-full w-full pl-10 text-[80px] font-bold uppercase transition-all hover:bg-primary-main hover:pl-16 hover:text-secondary-800" href="/">Resume</a></li>
					<li class="h-1/5" in:fly={{ delay: 800, duration: 300, x: -2000 }}><a class="block h-full w-full pl-10 text-[80px] font-bold uppercase transition-all hover:bg-primary-main hover:pl-16 hover:text-secondary-800" href="/">Projects</a></li>
					<li class="h-1/5" in:fly={{ delay: 900, duration: 300, x: -2000 }}><a class="block h-full w-full pl-10 text-[80px] font-bold uppercase transition-all hover:bg-primary-main hover:pl-16 hover:text-secondary-800" href="/">Blog</a></li>
					<li class="h-1/5" in:fly={{ delay: 1000, duration: 300, x: -2000 }}><a class="block h-full w-full pl-10 text-[80px] font-bold uppercase transition-all hover:bg-primary-main hover:pl-16 hover:text-secondary-800" href="/">Contact</a></li>
				</ol>
			</nav>
		</div>
	</div>
</section>
