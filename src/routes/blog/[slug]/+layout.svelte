<script>
	// @ts-nocheck
	import logo from '$lib/assets/logos/logo_full.svg';
	import { tooltip } from 'svooltip';
	import 'svooltip/styles.css'; // Include default styling
</script>

<section class="relative flex w-full flex-col pb-[5px] pl-[10px] xl:pb-[35px] xl:pl-[70px]">
	<div class="fixed z-20 flex w-full bg-[rgba(22,22,19,0.8)] px-10 py-5 backdrop-blur-xl">
		<a href="/"><img class="mr-10 h-5" src={logo} alt="" /></a>
		<nav class="flex items-center" aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
				<li class="inline-flex items-center">
					<a href="/" class="inline-flex items-center text-sm font-medium transition-colors hover:text-primaryhover">
						<i class="fa-solid fa-house mr-2 text-xs"></i>
						Home
					</a>
				</li>
				<li>
					<div class="flex items-center">
						<i class="fa-solid fa-angles-right mr-1 text-xs"></i>
						<a href="/blog" class="ms-1 text-sm font-medium transition-colors hover:text-primaryhover">Blog</a>
					</div>
				</li>
			</ol>
		</nav>
	</div>
	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary xl:rounded-bl-[75px]">
		<div class="mt-10 w-full p-10">
			<div class="mb-5 flex items-center justify-between rounded-xl bg-[rgba(22,22,19,0.8)] px-5 py-2 text-xs">
				<div class="">
					<span>Updated at May 2024 (Work in Progress)</span>
				</div>
				<div class="flex gap-3 text-sm">
					<a href="/" use:tooltip={{ content: 'Share on Facebook' }} class="flex h-6 w-6 items-center justify-center rounded-full transition-all hover:bg-primary hover:text-secondary">
						<i class="fa-brands fa-facebook-f"></i>
					</a>
					<a href="/" use:tooltip={{ content: 'Share on X/Twitter' }} class="flex h-6 w-6 items-center justify-center rounded-full transition-all hover:bg-primary hover:text-secondary">
						<i class="fa-brands fa-x-twitter"></i>
					</a>
					<a href="/" use:tooltip={{ content: 'Share on Threads' }} class="flex h-6 w-6 items-center justify-center rounded-full transition-all hover:bg-primary hover:text-secondary">
						<i class="fa-brands fa-threads"></i>
					</a>
					<a href="/" use:tooltip={{ content: 'Copy URL' }} class="flex h-6 w-6 items-center justify-center rounded-full transition-all hover:bg-primary hover:text-secondary">
						<i class="fa-solid fa-link"></i>
					</a>
					<a href="/" use:tooltip={{ content: 'Download PDF' }} class="flex h-6 w-6 items-center justify-center rounded-full transition-all hover:bg-primary hover:text-secondary">
						<i class="fa-solid fa-download"></i>
					</a>
				</div>
			</div>
			<div class="">
				<slot />
			</div>
		</div>
	</div>
</section>

<style>
	:global(.svooltip) {
		z-index: 100;
	}
</style>
