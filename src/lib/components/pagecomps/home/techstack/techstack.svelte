<script lang="ts">
	import Title from '../../../modules/title.svelte';
	import Stack from './stack.svelte';
</script>

<section class="py-6 sm:py-32">
	<div class="mx-5 lg:mx-32">
		<Title title1="Meine Kentnisse" title2="Techstacks" />
		<div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
			<Stack snd text="Javascript" alt="Javascript" prog="Upper Intermediate" img="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" />
			<Stack text="Typescript" alt="Typescript" prog="Upper Intermediate" img="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" />
			<Stack snd text="Python" alt="Python" prog="Intermediate" img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" />
			<Stack text="Rust" alt="Rust" prog="Beginner" invert img="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" />

			<Stack snd text="Svelte" alt="Svelte" prog="Advanced" img="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" />
			<Stack text="React" alt="React" prog="Intermediate" img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
			<Stack snd text="Vue" alt="Vue" prog="Intermediate" img="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" />
			<Stack text="Tauri" alt="Tauri" prog="Beginner" img="https://cdn.worldvectorlogo.com/logos/tauri-1.svg" />

			<Stack snd text="HTML & CSS" alt="CSS" prog="Proficiency" img="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" />
			<Stack text="SASS/SCSS" alt="SASS/SCSS" prog="Proficiency" img="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" />
			<Stack snd text="Tailwind" alt="Tailwind" prog="Advanced" img="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
			<Stack text="Figma" alt="Figma" prog="Intermediate" img="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" />
		</div>
	</div>
</section>
