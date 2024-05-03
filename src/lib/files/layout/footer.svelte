<script>
	import logofull from '$lib/assets/logos/logo_full.svg';
</script>

<footer class="relative mt-[10px] flex h-[200px] w-full flex-col items-center justify-center gap-3 bg-secondary lg:mt-[35px]">
	<div class="curved-corner-bottomleft !absolute left-0 top-[calc(0px-100px)] !z-50 hidden lg:block"></div>
	<img class="w-[200px]" src={logofull} alt="" />
	<div class="flex items-center gap-1">
		<p class="text-center text-xs font-semibold uppercase">Copyright © 2022 - 2024 Philstack. All rights reserved</p>
		<span>•</span>
		<a class="text-center text-xs font-semibold uppercase hover:underline hover:text-primaryhover" href="/impressum">Impressum</a>
	</div>
	
	<div class="flex gap-2">
		<button class="group flex h-6 w-6 items-center justify-center rounded-full bg-primary transition-all hover:bg-secondary">
			<i class="fa-brands fa-threads text-xs text-secondary transition-all group-hover:text-primary"></i>
		</button>
		<button class="group flex h-6 w-6 items-center justify-center rounded-full bg-primary transition-all hover:bg-secondary">
			<i class="fa-brands fa-x-twitter text-xs text-secondary transition-all group-hover:text-primary"></i>
		</button>
		<button class="group flex h-6 w-6 items-center justify-center rounded-full bg-primary transition-all hover:bg-secondary">
			<i class="fa-brands fa-instagram text-xs text-secondary transition-all group-hover:text-primary"></i>
		</button>
		<button class="group flex h-6 w-6 items-center justify-center rounded-full bg-primary transition-all hover:bg-secondary">
			<i class="fa-brands fa-linkedin-in text-xs text-secondary transition-all group-hover:text-primary"></i>
		</button>
		<button class="group flex h-6 w-6 items-center justify-center rounded-full bg-primary transition-all hover:bg-secondary">
			<i class="fa-brands fa-discord text-xs text-secondary transition-all group-hover:text-primary"></i>
		</button>
	</div>
</footer>
