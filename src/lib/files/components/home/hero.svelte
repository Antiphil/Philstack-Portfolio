<script>
	import logo from '$lib/assets/logos/logo.svg';
	import logofull from '$lib/assets/logos/logo_full.svg';
	import hero from '$lib/assets/hero.png';
</script>

<section class="flex h-screen w-full pb-[5px] pl-[10px] xl:pb-[35px] xl:pl-[70px]">
	<div class="relative h-full w-full overflow-hidden bg-secondary xl:rounded-bl-[75px]">
		<img class="absolute z-0 h-full w-full object-cover" src={hero} alt="hero background" />
		<div class="relative z-10 flex h-full flex-col items-end justify-between p-10">
			<img class="w-72" src={logofull} alt="" />
			<div class="flex flex-col text-right text-[50px] font-extrabold uppercase">
				<span>A <span class="outline-text">Designer </span>is an</span>
				<span>emerging <span class="outline-text">Symbiosis </span>of</span>
				<span><span class="outline-text">artist</span>, <span class="outline-text">coder</span> and <span class="outline-text">writer</span></span>
			</div>
		</div>
	</div>
</section>
