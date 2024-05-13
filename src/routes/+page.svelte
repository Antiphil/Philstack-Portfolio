<script>
	import Testimonials from '$lib/files/components/testimonials/testimonials.svelte';
	import Contact from '$lib/files/components/contact.svelte';
	import About from '$lib/files/components/home/about.svelte';
	import Blog from '$lib/files/components/home/blog/blog.svelte';
	import Partner from '$lib/files/components/home/partner.svelte';
	import Hero from '$lib/files/components/home/hero.svelte';
	import Projects from '$lib/files/components/home/projects/projects.svelte';
	import LeftSection from '$lib/files/layout/leftSection.svelte';
	import RightSection from '$lib/files/layout/rightSection.svelte';
	import { onMount } from 'svelte';
	import Button from '$lib/files/modules/button.svelte';
</script>

<div class="w-full">
	<Hero />
	<LeftSection>
		<div class="w-full flex flex-col gap-5">
			<About />
			<a href="/" class=" max-w-screen-xl m-auto relative hover:bg-secondary  hover:scale-[1.01] bg-primary group w-full p-5 h-72 rounded-2xl items-center flex border-[4px] border-primary transition-all">
				<div class="border-[5px] border-secondary absolute top-[28px] -left-[32px] w-64 h-56 bg-primaryhover rounded-3xl overflow-hidden">
					<img src="https://strapi.antiphil.de/uploads/3dprinter_e55d65d6b2.jpg" alt="" class="sepia w-full h-full object-cover" />
				</div>
				<div class="text-secondary group-hover:text-primary ml-[calc(224px-16px)] max-h-56 p-8">
					<h3 class="text-xs font-semibold line-clamp-1">Posted about 2 months ago - Author: Phil</h3>
					<h2 class="text-3xl font-bold mb-3 line-clamp-1">Lorem ipsum dolor sit amet</h2>
					<h3 class="text-sm font-light line-clamp-3 text-justify">Lorem ipsum dolor sit amet consectetur a dipisicing elit. Atque nulla pariatur voluptatibus. Voluptate iure ducimus ea exer dipisicing elit. Atque nulla pariatur voluptatibus. Voluptate iure ducimus ea exer dipisicing elit. Atque nulla pariatur voluptatibus. Voluptate iure ducimus ea exer dipisicing elit. Atque nulla pariatur voluptatibus. Voluptate iure ducimus ea exercitationem omnis? Fugit cumque maxime repellat, earum id officiis est asperiores nulla harum nisi?</h3>
					<div class="mt-3 w-fit items-center gap-2 rounded-xl text-sm font-bold  transition-all group-hover:text-primary text-secondary flex">
						<span>Read More</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
						</svg>
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<div class="rounded-xl h-16 w-4 group-hover:bg-primary bg-secondary ml-10"></div>
					<div class="rounded-xl h-6 w-4 group-hover:bg-primary bg-secondary ml-10"></div>
				</div>
			</a>
			<a href="/" class=" max-w-screen-xl m-auto relative hover:bg-secondary hover:scale-[1.01]  bg-primary group w-full p-5 h-72 rounded-2xl items-center flex border-[4px]  border-primary transition-all">
				<div class="border-[5px] border-secondary absolute top-[28px] -right-[32px] w-64 h-56 bg-primaryhover rounded-3xl overflow-hidden">
					<img src="https://strapi.antiphil.de/uploads/3dprinter_e55d65d6b2.jpg" alt="" class="sepia w-full h-full object-cover" />
				</div>	
			<div class="flex flex-col gap-2">
					<div class="rounded-xl h-16 w-4 group-hover:bg-primary bg-secondary ml-10"></div>
					<div class="rounded-xl h-6 w-4 group-hover:bg-primary bg-secondary ml-10"></div>
				</div>
				<div class="text-secondary group-hover:text-primary mr-[calc(224px-16px)] max-h-56 p-8 text-right">
					<h3 class="text-xs font-semibold line-clamp-1">Posted about 2 months ago - Author: Phil</h3>
					<h2 class="text-3xl font-bold mb-3 line-clamp-1">Lorem ipsum dolor sit amet</h2>
					<h3 class="text-sm font-light line-clamp-3 text-justify">Lorem ipsum dolor sit amet consectetur a dipisicing elit. Atque nulla pariatur voluptatibus. Voluptate iure ducimus ea exer dipisicing elit. Atque nulla pariatur voluptatibus. Voluptate iure ducimus ea exer dipisicing elit. Atque nulla pariatur voluptatibus. Voluptate iure ducimus ea exer dipisicing elit. Atque nulla pariatur voluptatibus. Voluptate iure ducimus ea exercitationem omnis? Fugit cumque maxime repellat, earum id officiis est asperiores nulla harum nisi?</h3>
					<div class="mt-3 w-fit items-center gap-2 rounded-xl text-sm font-bold  transition-all group-hover:text-primary text-secondary flex">
						<span>Read More</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
						</svg>
					</div>
				</div>
				
			</a>


			
			
		</div>
	</LeftSection>

	<RightSection>
		<Projects />
	</RightSection>
	<LeftSection>
		<Blog />
	</LeftSection>
	<RightSection>
		<Testimonials />
	</RightSection>
	<LeftSection>
		<Contact />
	</LeftSection>
	<RightSection>
		<Contact />
	</RightSection>
</div>
