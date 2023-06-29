<script lang="ts">
	import Title from '../../../modules/title.svelte';
	import Stack from './stack.svelte';
</script>

<section class="py-6 sm:py-32">
	<div class="mx-5 lg:mx-32">
		<Title title1="Meine Kentnisse" title2="Techstacks" />
		<div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
			<Stack text="Javascript" alt="Javascript" img="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" />
			<Stack text="Typescript" alt="Typescript" img="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" />
			<Stack text="Rust" alt="Rust" invert img="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" />
			<Stack text="GO" alt="GO" img="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" />

			<Stack text="Svelte" alt="Svelte" img="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" />
			<Stack text="React" alt="React" img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
			<Stack text="Vue" alt="Vue" img="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" />
			<Stack text="Tauri" alt="Tauri" img="https://tauri.app/img/index/header_dark.svg" />

			<Stack text="CSS" alt="CSS" img="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" />
			<Stack text="SASS/SCSS" alt="SASS/SCSS" img="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" />
			<Stack text="Tailwind" alt="Tailwind" img="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
			<Stack text="Figma" alt="Figma" img="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" />
		</div>
	</div>
</section>
