<script>
	// @ts-nocheck
	import logo from '$lib/assets/images/logos/logo_full.svg';
</script>

<section class="relative flex w-full flex-col pb-[5px] pl-[10px] xl:pb-[35px] xl:pl-[70px]">
	<div class="fixed z-10 flex w-full bg-[rgba(22,22,19,0.8)] px-10 py-5 backdrop-blur-xl">
		<a href="/"><img class="mr-10 h-5" src={logo} alt="" /></a>
		<nav class="flex items-center" aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
				<li class="inline-flex items-center">
					<a href="/" class="hover:text-primaryhover inline-flex items-center text-sm font-medium transition-colors">
						<i class="fa-solid fa-house mr-2 text-xs"></i>
						Home
					</a>
				</li>
				<li>
					<div class="flex items-center">
						<i class="fa-solid fa-angles-right mr-1 text-xs"></i>
						<a href="/projects" class="hover:text-primaryhover ms-1 text-sm font-medium transition-colors">Impressum</a>
					</div>
				</li>
			</ol>
		</nav>
	</div>
	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary-800 xl:rounded-bl-[75px]">
		<div class="mt-10 w-full p-10">
			<div class="mb-5 flex items-center justify-between rounded-xl bg-[rgba(22,22,19,0.8)] px-5 py-2 text-xs">
				<div class="">
					<span>Updated at 03.05.2023</span>
				</div>
				<div class="flex gap-3 text-sm">
					<a href="/" class="hover:bg-primary flex h-6 w-6 items-center justify-center rounded-full transition-all hover:text-secondary-800">
						<i class="fa-solid fa-link"></i>
					</a>
				</div>
			</div>
			<div class="rounded-xl bg-[rgba(22,22,19,0.8)] p-5">
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
