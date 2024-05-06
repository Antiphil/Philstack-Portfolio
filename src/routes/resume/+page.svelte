<script>
	import Skillbadge from '$lib/files/modules/skillbadge.svelte';
</script>

<section>Resume Hero Sec</section>
<section>
	ABOUT ME
	<div class="m-auto flex max-w-4xl flex-col justify-around gap-5 text-center lg:flex-row lg:gap-0">
		<div class="">
			<h3 class="text-lg font-light">BORN:</h3>
			<h2 class="text-2xl font-bold uppercase">22.01.1996</h2>
		</div>
		<div class="">
			<h3 class="text-lg font-light">MOBILE:</h3>
			<h2 class="text-2xl font-bold uppercase">+49 176 21942619</h2>
		</div>
		<div class="">
			<h3 class="text-lg font-light">MAIL:</h3>
			<h2 class="text-2xl font-bold uppercase">stehle@mailbox.org</h2>
		</div>
	</div>
</section>
<section>
	Skills
	<div class="my-10 flex justify-around text-center">
		<div class="flex flex-col items-center justify-center gap-3">
			<img class="w-16" src="https://canisminor.cc/img/fe-skill-web.png" alt="" />
			<span class="text-xs font-bold">Web Frontend<br /> Development</span>
		</div>
		<div class="flex flex-col items-center justify-center gap-3">
			<img class="w-16" src="https://canisminor.cc/img/vd-skill-interface.png" alt="" />
			<span class="text-xs font-bold">UI/UX Design</span>
		</div>
		<div class="flex flex-col items-center justify-center gap-3">
			<img class="w-16" src="https://canisminor.cc/img/vd-skill-prototype.png" alt="" />
			<span class="text-xs font-bold">Prototyping</span>
		</div>
		<div class="flex flex-col items-center justify-center gap-3">
			<img class="w-16" src="https://canisminor.cc/img/fe-skill-mobile.png" alt="" />
			<span class="text-xs font-bold">Responsive &<br /> Mobile Dev</span>
		</div>
		<div class="flex flex-col items-center justify-center gap-3">
			<img class="w-16" src="https://canisminor.cc/img/fe-skill-linux.png" alt="" />
			<span class="text-xs font-bold">Mastery of Linux<br /> SSH & Git</span>
		</div>
	</div>
	<div class="mb-3">
		<div class="mb-2 flex items-center">
			<hr class="flex-grow border-t border-gray-300" />
			<span class="px-3 text-xl font-bold uppercase"> Programming Languages </span>
			<hr class="flex-grow border-t border-gray-300" />
		</div>
		<div class=" flex flex-wrap gap-3">
			<Skillbadge name="Javascript" img="/skills/javascript-original.svg" />
			<Skillbadge name="Typescript" img="/skills/typescript-original.svg" />
			<Skillbadge name="C#" img="/skills/csharp-original.svg" />
			<Skillbadge name="Rust" img="/skills/rust.svg" />
		</div>
	</div>
	<div class="mb-3">
		<div class="mb-2 flex items-center">
			<hr class="flex-grow border-t border-gray-300" />
			<span class="px-3 text-xl font-bold uppercase"> Frontend Development </span>
			<hr class="flex-grow border-t border-gray-300" />
		</div>
		<div class=" flex flex-wrap gap-3">
			<Skillbadge name="HTML" img="/skills/html5-original-wordmark.svg" />
			<Skillbadge name="CSS" img="/skills/css3-original-wordmark.svg" />
			<Skillbadge name="SASS/SCSS" img="/skills/sass-original.svg" />
			<Skillbadge name="Tailwind" img="/skills/tailwindcss-icon.svg" />
		</div>
	</div>
	<div class="mb-3">
		<div class="mb-2 flex items-center">
			<hr class="flex-grow border-t border-gray-300" />
			<span class="px-3 text-xl font-bold uppercase"> Frameworks </span>
			<hr class="flex-grow border-t border-gray-300" />
		</div>
		<div class=" flex flex-wrap gap-3">
			<Skillbadge name="Svelte & Sveltekit" img="/skills/Svelte_Logo.svg" />
			<Skillbadge name="React & Next" img="/skills/react-1-logo.svg" />
			<Skillbadge name="Vue" img="/skills/vue-vuejs-javascript-js-framework.svg" />
			<Skillbadge name="Inertia" img="/skills/47703742.png" />
			<Skillbadge name="Laravel" img="/skills/1969px-Laravel.svg.png" />
			<Skillbadge name="Electron" img="/skills/electron-original.svg" />
			<Skillbadge name="Tauri" img="/skills/tauri-1.svg" />
		</div>
	</div>
	<div class="mb-3">
		<div class="mb-2 flex items-center">
			<hr class="flex-grow border-t border-gray-300" />
			<span class="px-3 text-xl font-bold uppercase"> Backend Development </span>
			<hr class="flex-grow border-t border-gray-300" />
		</div>
		<div class=" flex flex-wrap gap-3">
			<Skillbadge name="Node.js" img="/skills/node-js.svg" />
			<Skillbadge name="express" img="/skills/express-original-wordmark.svg" />
		</div>
	</div>
	<div class="">
		<div class="flex items-center">
			<hr class="flex-grow border-t border-gray-300" />
			<span class="px-3 text-xl font-bold uppercase"> Database </span>
			<hr class="flex-grow border-t border-gray-300" />
		</div>
		<div class=" flex flex-wrap gap-3">
			<Skillbadge name="PostgreSQL" img="/skills/postgresql.svg" />
			<Skillbadge name="Redis" img="/skills/redis.svg" />
		</div>
	</div>
	<div class="mb-3">
		<div class="mb-2 flex items-center">
			<hr class="flex-grow border-t border-gray-300" />
			<span class="px-3 text-xl font-bold uppercase"> Misc </span>
			<hr class="flex-grow border-t border-gray-300" />
		</div>
		<div class=" flex flex-wrap gap-3">
			<Skillbadge name="Git" img="/skills/git-scm-icon.svg" />
			<Skillbadge name="Linux/Ubuntu" img="/skills/ubuntu.svg" />
			<Skillbadge name="Docker" img="/skills/docker-svgrepo-com.svg" />
			<Skillbadge name="Appwrite" img="/skills/appwriteio-icon.svg" />
			<Skillbadge name="Blender" img="/skills/blender.svg" />
			<Skillbadge name="Photoshop" img="/skills/images.png" />
			<Skillbadge name="Illustrator" img="/skills/Adobe_Illustrator_CC_icon.svg.png" />
			<Skillbadge name="Premiere Pro" img="/skills/Adobe_Premiere_Pro_CC_icon.svg.png" />
			<Skillbadge name="After Effects" img="/skills/Adobe_After_Effects_CC_icon.svg.png" />
			<Skillbadge name="Figma" img="/skills/figma-icon.svg" />
			<Skillbadge name="Lightburn" img="/skills/33769869.png" />
			<Skillbadge name="Godot" img="/skills/Godot_icon.svg.png" />
		</div>
	</div>
</section>
<div class="flex gap-5">
	<article class="min-h-150 group mx-auto max-w-sm transform cursor-pointer bg-cover bg-center shadow-xl sepia duration-500 hover:-translate-y-2" style="background-image: url(https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900);">
		<div class="min-h-150 flex transform flex-col flex-wrap bg-black bg-opacity-20 px-10 pt-96 duration-300 hover:bg-opacity-75">
			<h1 class="mb-5 translate-y-0 transform text-3xl text-white duration-300 group-hover:translate-y-[-80px]">On A Day Like Today</h1>
			<div class="mb-5 h-2 w-16 translate-y-0 transform rounded-full bg-primary duration-300 group-hover:translate-y-[-80px]"></div>
			<p class="translate-y-[-80px] transform text-sm opacity-0 duration-500 group-hover:opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!</p>
		</div>
	</article>
	<article class="min-h-150 group mx-auto max-w-sm transform cursor-pointer bg-cover bg-center shadow-xl sepia duration-500 hover:-translate-y-2" style="background-image: url(https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900);">
		<div class="min-h-150 flex transform flex-col flex-wrap bg-black bg-opacity-20 px-10 pt-96 duration-300 hover:bg-opacity-75">
			<h1 class="mb-5 translate-y-0 transform text-3xl text-white duration-300 group-hover:translate-y-[-80px]">On A Day Like Today</h1>
			<div class="mb-5 h-2 w-16 translate-y-0 transform rounded-full bg-primary duration-300 group-hover:translate-y-[-80px]"></div>
			<p class="translate-y-[-80px] transform text-sm opacity-0 duration-500 group-hover:opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!</p>
		</div>
	</article>
	<article class="min-h-150 group mx-auto max-w-sm transform cursor-pointer overflow-hidden rounded-2xl bg-cover bg-center shadow-xl sepia duration-500 hover:-translate-y-2" style="background-image: url(https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900);">
		<div class="min-h-150 flex transform flex-col flex-wrap bg-black bg-opacity-20 px-10 pt-96 duration-300 hover:bg-opacity-75">
			<h1 class="mb-5 translate-y-0 transform text-3xl text-white duration-300 group-hover:translate-y-[-80px]">On A Day Like Today</h1>
			<div class="mb-5 h-2 w-16 translate-y-0 transform rounded-full bg-primary duration-300 group-hover:translate-y-[-80px]"></div>
			<p class="line-clamp-4 translate-y-[-80px] transform text-sm opacity-0 duration-500 group-hover:opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, sapiente tempore iusto consectetur quo soluta consequatur. Ad officiis ea voluptas!</p>
			<p class="flex translate-y-[-40px] transform justify-between text-xs opacity-0 duration-500 group-hover:opacity-80">
				<span>06.05.2024</span>
				<span>Author: Phil</span>
			</p>
		</div>
	</article>
	<article class="min-h-150 group mx-auto max-w-sm transform cursor-pointer bg-cover bg-center shadow-xl sepia duration-500 hover:-translate-y-2" style="background-image: url(https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900);">
		<div class="min-h-150 flex transform flex-col flex-wrap bg-black bg-opacity-20 px-10 pt-96 duration-300 hover:bg-opacity-75">
			<h1 class="mb-5 translate-y-0 transform text-3xl text-white duration-300 group-hover:translate-y-[-80px]">On A Day Like Today</h1>
			<div class="mb-5 h-2 w-16 translate-y-0 transform rounded-full bg-primary duration-300 group-hover:translate-y-[-80px]"></div>
			<p class="translate-y-[-80px] transform text-sm opacity-0 duration-500 group-hover:opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!</p>
		</div>
	</article>
</div>
