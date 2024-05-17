<script>
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { locale } from '$i18n/i18n-svelte';
	import { navOpen, toggleNav } from '$lib/stores/navstore';
	console.log($page.route);
	console.log($locale);
</script>

<section class="fixed z-[100] flex h-screen w-full">
	<div class="absolute h-full w-full bg-primary-main" in:fly={{ duration: 300, x: -2000 }} out:fly={{ delay: 0, duration: 300, x: -1000 }}></div>
	<div class="absolute h-[calc(100%-15px)] w-[calc(100%-15px)] overflow-hidden rounded-br-3xl bg-secondary-800 md:h-[calc(100%-75px)] md:w-[calc(100%-75px)]" in:fly={{ delay: 400, duration: 300, x: -2000 }} out:fly={{ delay: 0, duration: 300, x: -1000 }}>
		<div class="h-full w-full">
			<nav class="h-full w-full items-center">
				<ol class="h-full w-full py-10">
					<li class="flex h-1/5" in:fly={{ delay: 600, duration: 300, x: -2000 }}>
						<a on:click={toggleNav} class="{$page.route.id === `/[lang=lang]` ? '!pl-16' : 'hover:pl-16'} group relative flex h-full w-full items-center pl-5 text-5xl font-bold uppercase transition-all md:pl-10 md:text-[80px]" href="/{$locale}/">
							<span class="{$page.route.id === `/[lang=lang]` ? 'text-secondary-800' : 'group-hover:text-secondary-800'} z-20 transition-all">Home</span>
							<div class="{$page.route.id === `/[lang=lang]` ? 'w-full' : 'group-hover:w-full'} absolute left-0 z-10 h-full w-[0%] bg-primary-main transition-all"></div>
						</a>
					</li>
					<li class="flex h-1/5" in:fly={{ delay: 700, duration: 300, x: -2000 }}>
						<a on:click={toggleNav} class="{$page.route.id === `/[lang=lang]/resume` ? '!pl-16' : 'hover:pl-16'} group relative flex h-full w-full items-center pl-5 text-5xl font-bold uppercase transition-all md:pl-10 md:text-[80px]" href="/{$locale}/resume">
							<span class="{$page.route.id === `/[lang=lang]/resume` ? 'text-secondary-800' : 'group-hover:text-secondary-800'} z-20 transition-all">resume</span>
							<div class="{$page.route.id === `/[lang=lang]/resume` ? 'w-full' : 'group-hover:w-full'} absolute left-0 z-10 h-full w-[0%] bg-primary-main transition-all"></div>
						</a>
					</li>
					<li class="flex h-1/5" in:fly={{ delay: 800, duration: 300, x: -2000 }}>
						<a class="{$page.route.id === `/[lang=lang]/projects` ? '!pl-16' : 'hover:pl-16'} group relative flex h-full w-full items-center pl-5 text-5xl font-bold uppercase transition-all md:pl-10 md:text-[80px]" href="/{$locale}/projects">
							<span class="{$page.route.id === `/[lang=lang]/projects` ? 'text-secondary-800' : 'group-hover:text-secondary-800'} z-20 transition-all">projects</span>
							<div class="{$page.route.id === `/[lang=lang]/projects` ? 'w-full' : 'group-hover:w-full'} absolute left-0 z-10 h-full w-[0%] bg-primary-main transition-all"></div>
						</a>
					</li>
					<li class="flex h-1/5" in:fly={{ delay: 900, duration: 300, x: -2000 }}>
						<a class="{$page.route.id === `/[lang=lang]/blog` ? '!pl-16' : 'hover:pl-16'} group relative flex h-full w-full items-center pl-5 text-5xl font-bold uppercase transition-all md:pl-10 md:text-[80px]" href="/{$locale}/blog">
							<span class="{$page.route.id === `/[lang=lang]/blog` ? 'text-secondary-800' : 'group-hover:text-secondary-800'} z-20 transition-all">blog</span>
							<div class="{$page.route.id === `/[lang=lang]/blog` ? 'w-full' : 'group-hover:w-full'} absolute left-0 z-10 h-full w-[0%] bg-primary-main transition-all"></div>
						</a>
					</li>
					<li class="flex h-1/5" in:fly={{ delay: 1000, duration: 300, x: -2000 }}>
						<a class="{$page.route.id === `/[lang=lang]/contact` ? '!pl-16' : 'hover:pl-16'} group relative flex h-full w-full items-center pl-5 text-5xl font-bold uppercase transition-all md:pl-10 md:text-[80px]" href="/{$locale}/contact">
							<span class="{$page.route.id === `/[lang=lang]/contact` ? 'text-secondary-800' : 'group-hover:text-secondary-800'} z-20 transition-all">contact</span>
							<div class="{$page.route.id === `/[lang=lang]/contact` ? 'w-full' : 'group-hover:w-full'} absolute left-0 z-10 h-full w-[0%] bg-primary-main transition-all"></div>
						</a>
					</li>
				</ol>
			</nav>
		</div>
	</div>
</section>
