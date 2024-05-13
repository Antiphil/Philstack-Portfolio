<script>
	import Skillbadge from '$lib/files/modules/skillbadge.svelte';
	import logo from '$lib/assets/logos/logo.svg';
	import bg from '$lib/assets/bg.svg';
	import Skill from '$lib/files/components/resume/skill.svelte';
	import Title from '$lib/files/modules/title.svelte';
</script>

<section class="flex w-full items-center justify-center rounded-xl rounded-bl-[50px] rounded-tr-[50px] bg-[rgba(22,22,19,0.8)]">
	<div class="flex w-full flex-col items-center text-center">
		<h1 class="text text-[90px] font-bold uppercase leading-[80px]">Philstack</h1>
		<h3 class="text-2xl font-thin uppercase">Frontend Developer & UI/UX Designer</h3>
	</div>
	<div class="relative flex items-center justify-center">
		<img class="absolute opacity-20 invert sepia" src={logo} alt="" />
		<img class="headanim scale-75" src="https://canisminor.cc/img/resume-banner-1.png" alt="" />
	</div>
</section>
<section class="bg-secondary py-10">
	<div class="m-auto flex max-w-4xl flex-col justify-around gap-5 text-center lg:flex-row lg:gap-0">
		<div class="">
			<h3 class="text-lg font-light">BORN:</h3>
			<h2 class="text-2xl font-bold uppercase">January 1996</h2>
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
<section class="rounded-xl rounded-bl-[50px] rounded-tr-[50px] bg-[rgba(22,22,19,0.8)] bg-center py-20" style="background-image:url({bg})">
	<div class="m-auto flex max-w-5xl flex-col">
		<Title title="My Timeline" />
		<div class="mt-10 flex items-center justify-start">
			<div class="text-right">
				<h3 class="text-xl font-bold">2013</h3>
				<h2 class="text-2xl font-bold">Mediengestalter</h2>
				<p class="text-pretty text-sm font-light">Lorem ipsum dolor sit amet consectetur<br /> elit .Adipisci asperiores illo quo quis ducimus<br /> odit veniam dignissimos distinctio</p>
			</div>
			<div class="relative ml-16 flex items-center justify-center">
				<div class="absolute h-7 w-7 rounded-full bg-primary"></div>
				<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary/60"></div>
			</div>
		</div>
		<div class="flex items-center justify-end">
			<div class="relative mr-10 flex items-center justify-center">
				<div class="absolute h-7 w-7 rounded-full bg-primary"></div>
				<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary/60"></div>
			</div>
			<div class="text-left">
				<h3 class="text-xl font-bold">2013</h3>
				<h2 class="text-2xl font-bold">Mediengestalter</h2>
				<p class="text-pretty text-sm font-light">Lorem ipsum dolor sit amet consectetur<br /> elit .Adipisci asperiores illo quo quis ducimus<br /> odit veniam dignissimos distinctio</p>
			</div>
		</div>
		<div class="flex items-center justify-start">
			<div class="text-right">
				<h3 class="text-xl font-bold">2013</h3>
				<h2 class="text-2xl font-bold">Mediengestalter</h2>
				<p class="text-pretty text-sm font-light">Lorem ipsum dolor sit amet consectetur<br /> elit .Adipisci asperiores illo quo quis ducimus<br /> odit veniam dignissimos distinctio</p>
			</div>
			<div class="relative ml-10 flex items-center justify-center">
				<div class="absolute h-7 w-7 rounded-full bg-primary"></div>
				<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary/60"></div>
			</div>
		</div>
		<div class="flex items-center justify-end">
			<div class="relative mr-10 flex items-center justify-center">
				<div class="absolute h-7 w-7 rounded-full bg-primary"></div>
				<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary/60"></div>
			</div>
			<div class="text-left">
				<h3 class="text-xl font-bold">2013</h3>
				<h2 class="text-2xl font-bold">Mediengestalter</h2>
				<p class="text-pretty text-sm font-light">Lorem ipsum dolor sit amet consectetur<br /> elit .Adipisci asperiores illo quo quis ducimus<br /> odit veniam dignissimos distinctio</p>
			</div>
		</div>
		<div class="flex items-center justify-start">
			<div class="text-right">
				<h3 class="text-xl font-bold">2013</h3>
				<h2 class="text-2xl font-bold">Mediengestalter</h2>
				<p class="text-pretty text-sm font-light">Lorem ipsum dolor sit amet consectetur<br /> elit .Adipisci asperiores illo quo quis ducimus<br /> odit veniam dignissimos distinctio</p>
			</div>
			<div class="relative ml-10 flex items-center justify-center">
				<div class="absolute h-7 w-7 rounded-full bg-primary"></div>
				<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary/60"></div>
			</div>
		</div>
		<div class="flex items-center justify-end">
			<div class="relative mr-10 flex items-center justify-center">
				<div class="absolute h-7 w-7 rounded-full bg-primary"></div>
				<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary/60"></div>
			</div>
			<div class="text-left">
				<h3 class="text-xl font-bold">2013</h3>
				<h2 class="text-2xl font-bold">Mediengestalter</h2>
				<p class="text-pretty text-sm font-light">Lorem ipsum dolor sit amet consectetur<br /> elit .Adipisci asperiores illo quo quis ducimus<br /> odit veniam dignissimos distinctio</p>
			</div>
		</div>
		<div class="flex items-center justify-start">
			<div class="text-right">
				<h3 class="text-xl font-bold">2013</h3>
				<h2 class="text-2xl font-bold">Mediengestalter</h2>
				<p class="text-pretty text-sm font-light">Lorem ipsum dolor sit amet consectetur<br /> elit .Adipisci asperiores illo quo quis ducimus<br /> odit veniam dignissimos distinctio</p>
			</div>
			<div class="relative ml-10 flex items-center justify-center">
				<div class="absolute h-7 w-7 rounded-full bg-primary"></div>
				<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary/60"></div>
			</div>
		</div>
		<div class="flex items-center justify-end">
			<div class="relative mr-10 flex items-center justify-center">
				<div class="absolute h-7 w-7 rounded-full bg-primary"></div>
				<div class="absolute h-7 w-7 animate-ping rounded-full bg-primary/60"></div>
			</div>
			<div class="text-left">
				<h3 class="text-xl font-bold">2013</h3>
				<h2 class="text-2xl font-bold">Mediengestalter</h2>
				<p class="text-pretty text-sm font-light">Lorem ipsum dolor sit amet consectetur<br /> elit .Adipisci asperiores illo quo quis ducimus<br /> odit veniam dignissimos distinctio</p>
			</div>
		</div>
	</div>
</section>
<section class="">
	<div class="m-auto my-24 max-w-5xl justify-around">
		<Title title="My Skillset" />
		<div class="mb-20 mt-16 flex justify-center gap-20">
			<Skill text="Grid & Layout" img="/skills/skill/vd-skill-layout.png" />
			<Skill text="UI/UX Design" img="/skills/skill/vd-skill-interface.png" />
			<Skill text="Prototyping" img="/skills/skill/vd-skill-prototype.png" />
			<Skill text="Motion Design" img="/skills/skill/vd-skill-motion.png" />
			<Skill text="3D Design" img="/skills/skill/vd-skill-3d.png" />
			<Skill text="Brand Design" img="/skills/skill/vd-skill-brand.png" />
		</div>
		<div class="flex justify-center gap-20">
			<Skill text="Web Frontend<br /> Development" img="/skills/skill/fe-skill-web.png" />
			<Skill text="Responsive &<br /> Mobile Development" img="/skills/skill/fe-skill-mobile.png" />
			<Skill text="Mastery of Linux<br />  SSH & Git" img="/skills/skill/fe-skill-linux.png" />
			<Skill text="devSkill" img="/skills/skill/fe-skill-web.png" />
			<Skill text="devSkill" img="/skills/skill/fe-skill-web.png" />
		</div>
	</div>
</section>

<section class="mb-10 rounded-xl rounded-bl-[50px] rounded-tr-[50px] bg-[rgba(22,22,19,0.8)] p-10">
	<div class="container mx-auto  px-5 py-2">
		<Title title="My Showcase" />
		<div class="mt-16 flex flex-wrap">
			<div class="flex w-1/2 flex-wrap">
				<div class="w-1/2 p-1 md:p-2">
					<img alt="gallery" class="block h-full w-full cursor-pointer rounded-lg object-cover object-center sepia transition-all hover:scale-[1.03] hover:sepia-0" src="https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg" />
				</div>
				<div class="w-1/2 p-1 md:p-2">
					<img alt="gallery" class="block h-full w-full cursor-pointer rounded-lg object-cover object-center sepia transition-all hover:scale-[1.03] hover:sepia-0" src="https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg" />
				</div>
				<div class="w-full p-1 md:p-2">
					<img alt="gallery" class="block h-full w-full cursor-pointer rounded-lg object-cover object-center sepia transition-all hover:scale-[1.03] hover:sepia-0" src="https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg" />
				</div>
			</div>
			<div class="flex w-1/2 flex-wrap">
				<div class="w-full p-1 md:p-2">
					<img alt="gallery" class="block h-full w-full cursor-pointer rounded-lg object-cover object-center sepia transition-all hover:scale-[1.03] hover:sepia-0" src="https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg" />
				</div>
				<div class="w-1/2 p-1 md:p-2">
					<img alt="gallery" class="block h-full w-full cursor-pointer rounded-lg object-cover object-center sepia transition-all hover:scale-[1.03] hover:sepia-0" src="https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg" />
				</div>
				<div class="w-1/2 p-1 md:p-2">
					<img alt="gallery" class="block h-full w-full cursor-pointer rounded-lg object-cover object-center sepia transition-all hover:scale-[1.03] hover:sepia-0" src="https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg" />
				</div>
			</div>
		</div>
	</div>
</section>

<section class="flex flex-col items-start gap-5 rounded-xl rounded-bl-[50px] rounded-tr-[50px] bg-[rgba(22,22,19,0.8)] p-20">
	<Title title="Techstack & Tools" />
	<div class="mb-3 max-w-5xl">
		Programming Languages
		<div class=" flex flex-wrap gap-3">
			<Skillbadge name="Javascript" img="/skills/javascript-original.svg" />
			<Skillbadge name="Typescript" img="/skills/typescript-original.svg" />
			<Skillbadge name="C#" img="/skills/csharp-original.svg" />
			<Skillbadge name="Rust" img="/skills/rust.svg" />
		</div>
	</div>
	<div class="mb-3 max-w-5xl">
		Frontend Development
		<div class=" flex flex-wrap gap-3">
			<Skillbadge name="HTML" img="/skills/html5-original-wordmark.svg" />
			<Skillbadge name="CSS" img="/skills/css3-original-wordmark.svg" />
			<Skillbadge name="SASS/SCSS" img="/skills/sass-original.svg" />
			<Skillbadge name="Tailwind" img="/skills/tailwindcss-icon.svg" />
		</div>
	</div>
	<div class="mb-3 max-w-5xl">
		Frameworks
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
	<div class="mb-3 max-w-5xl">
		Backend Development
		<div class=" flex flex-wrap gap-3">
			<Skillbadge name="Node.js" img="/skills/node-js.svg" />
			<Skillbadge name="express" img="/skills/express-original-wordmark.svg" />
		</div>
	</div>
	<div class="mb-3 max-w-5xl">
		Databases
		<div class=" flex flex-wrap gap-3">
			<Skillbadge name="PostgreSQL" img="/skills/postgresql.svg" />
			<Skillbadge name="Redis" img="/skills/redis.svg" />
		</div>
	</div>
	<div class="mb-3 max-w-5xl">
		Miscellaneous
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

<style>
	.headanim {
		animation: 30s ease-in-out 0.5s infinite normal none running animationhead;
	}
	.logoanim {
		animation: 30s ease-in-out 0.5s infinite normal none running animLogo;
	}
	@keyframes animationhead {
		0% {
			transform: translate(0px);
		}
		14% {
			transform: translate(-6px, -16px);
		}
		25% {
			transform: translate(-3px, 3px);
		}
		37% {
			transform: translate(6px, -13px);
		}
		50% {
			transform: translate(2px, -4px);
		}
		63% {
			transform: translate(5px, -15px);
		}
		75% {
			transform: translate(2px, -6px);
		}
		88% {
			transform: translate(-4px, -15px);
		}
		100% {
			transform: translate(0px);
		}
	}
	@keyframes animLogo {
		0% {
			transform: translate(0px);
		}
		14% {
			transform: translate(6px, -16px);
		}
		25% {
			transform: translate(3px, 3px);
		}
		37% {
			transform: translate(-3px, -13px);
		}
		50% {
			transform: translate(2px, -4px);
		}
		63% {
			transform: translate(-2px, -15px);
		}
		75% {
			transform: translate(2px, -6px);
		}
		88% {
			transform: translate(-4px, -15px);
		}
		100% {
			transform: translate(0px);
		}
	}
</style>
