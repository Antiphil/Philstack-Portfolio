<script>
	import logo from '$lib/assets/images/logos/logo.svg';
	import logofull from '$lib/assets/images/logos/logo_full.svg';
	import hero from '$lib/assets/images/hero.jpg';
	import heroM from '$lib/assets/images/hero_mobile.jpg';
</script>

<section class="flex h-screen w-full pb-[5px] pl-[10px] xl:pb-[35px] xl:pl-[70px]">
	<div class="relative h-full w-full overflow-hidden rounded-bl-3xl bg-secondary-800 xl:rounded-bl-[75px]">
		<slot />
	</div>
</section>
