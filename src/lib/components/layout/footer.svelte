<script>
	import { locale } from '$i18n/i18n-svelte';
	import logofull from '$lib/assets/images/logos/logo_full.svg';
</script>

<footer class="relative mt-[10px] flex h-[200px] w-full flex-col items-center justify-center gap-3 bg-secondary-800 bg-blend-screen lg:mt-[35px]">
	<div class="curved-corner-bottomleft !absolute left-0 top-[calc(0px-100px)] !z-50 hidden lg:block"></div>
	<img class="w-[200px]" src={logofull} alt="" />
	<div class="flex flex-col items-center gap-1 md:flex-row">
		<p class="text-center text-xs font-semibold uppercase">Copyright © 2022 - 2024 Philstack. <br class="block md:hidden" />All rights reserved</p>
		<span class="hidden md:block">•</span>
		<a class=" hover:text-primaryhover mt-1 text-center text-xs font-semibold uppercase hover:underline md:mt-0" href="/{$locale}/imprint">Impressum</a>
	</div>

	<div class="flex gap-2">
		<button class="group flex h-6 w-6 items-center justify-center rounded-full bg-primary-main transition-all hover:bg-secondary-800">
			<i class="fa-brands fa-threads text-xs text-secondary-800 transition-all group-hover:text-primary-main"></i>
		</button>
		<button class="group flex h-6 w-6 items-center justify-center rounded-full bg-primary-main transition-all hover:bg-secondary-800">
			<i class="fa-brands fa-x-twitter text-xs text-secondary-800 transition-all group-hover:text-primary-main"></i>
		</button>
		<button class="group flex h-6 w-6 items-center justify-center rounded-full bg-primary-main transition-all hover:bg-secondary-800">
			<i class="fa-brands fa-instagram text-xs text-secondary-800 transition-all group-hover:text-primary-main"></i>
		</button>
		<button class="group flex h-6 w-6 items-center justify-center rounded-full bg-primary-main transition-all hover:bg-secondary-800">
			<i class="fa-brands fa-linkedin-in text-xs text-secondary-800 transition-all group-hover:text-primary-main"></i>
		</button>
		<button class="group flex h-6 w-6 items-center justify-center rounded-full bg-primary-main transition-all hover:bg-secondary-800">
			<i class="fa-brands fa-discord text-xs text-secondary-800 transition-all group-hover:text-primary-main"></i>
		</button>
	</div>
</footer>
