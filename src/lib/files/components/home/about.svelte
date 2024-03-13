<script>
	import mgn from '$lib/assets/Screenshot 2024-03-13 115119.png';
</script>

<section class="relative flex w-full py-[35px] pr-[70px]">
	<div class="curved-corner-topright !absolute right-0 top-[calc(0px-35px)] !z-50"></div>
	<div class="curved-corner-bottomleft !absolute left-0 top-[calc(0px-65px)] !z-50"></div>
	<div class="relative flex h-full w-full gap-3 overflow-hidden rounded-r-[75px] bg-secondary p-10">
		<div class="relative flex w-full flex-col justify-center overflow-hidden py-6 sm:py-12">
			<div class="mx-auto w-full max-w-screen-lg items-center">
				<div class="group grid w-full grid-cols-2">
					<div class="relative flex flex-col items-end overflow-hidden pl-16 before:absolute before:bottom-0 before:left-0 before:block before:h-1/6 before:w-4 before:rounded-lg before:bg-primary before:transition-all group-hover:before:bg-orange-300">
						<div class="absolute left-0 top-0 flex w-4/6 flex-col justify-center rounded-xl bg-primary px-12 py-14 transition-all group-hover:bg-secondary">
							<span class="mb-10 block font-bold text-secondary group-hover:text-primary">HERE WE ARE</span>
							<h2 class="text-3xl font-bold text-secondary group-hover:text-white">Hier muss ich mir irgendwas ausdenken was ganz cool klingt</h2>
						</div>
						<a class="mb-8 mt-2 flex items-center gap-2 text-sm font-bold text-primary" href="">
							<span>MORE ABOUT ME</span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
							</svg>
						</a>
						<div class="overflow-hidden rounded-xl">
							<img src={mgn} alt="" />
						</div>
					</div>
					<div>
						<div class="pl-12">
							<p class="peer mb-6 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea a ut minima maiores atque, eligendi accusamus quo ipsa quis? Quo alias harum labore fuga repudiandae, praesentium odit soluta! Blanditiis.</p>
							<p class="mb-6 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis suscipit quae magni illum iure facilis excepturi tempora quibusdam, ea perspiciatis saepe repudiandae qui aliquam dolor! Eveniet autem labore consectetur?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus repudiandae rem voluptates quos quibusdam, cum maiores distinctio odio similique delectus eum eligendi recusandae ipsa, corporis et consequuntur est in repellat.</p>
							<h3 class="mb-4 text-xl font-semibold text-primary">Lorem ipsum dolor sit amet</h3>
							<ul role="list" class="list-disc space-y-3 pl-5 text-primary">
								<li>Bla</li>
								<li>Blubb</li>
								<li>Dingsda</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
