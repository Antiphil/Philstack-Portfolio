<script>
	import logo from '$lib/assets/images/logos/logo.svg';
	import logofull from '$lib/assets/images/logos/logo_full.svg';
	import hero from '$lib/assets/images/hero.jpg';
	import heroM from '$lib/assets/images/hero_mobile.jpg';
</script>

<section class="flex h-screen w-full pb-[5px] pl-[10px] xl:pb-[35px] xl:pl-[70px]">
	<div class="bg-secondary relative h-full w-full overflow-hidden rounded-bl-3xl xl:rounded-bl-[75px]">
		<img class="absolute z-0 hidden h-full w-full object-cover object-center xl:block" src={hero} alt="hero background" />
		<img class="absolute z-0 h-full w-full object-cover object-left xl:hidden" src={heroM} alt="hero background" />
		<div class="relative z-10 flex h-full flex-col items-end justify-between p-10">
			<img class="w-52 sm:w-72" src={logofull} alt="" />
			<div class="flex flex-col text-right text-[30px] font-extrabold uppercase sm:text-[50px]">
				<span>A <span class="outline-text">Designer </span>is an</span>
				<span>emerging <span class="">Symbiosis </span>of</span>
				<span><span class="outline-text">artist</span>, <span class="outline-text">coder</span> and <span class="outline-text">writer</span></span>
			</div>
		</div>
	</div>
</section>
