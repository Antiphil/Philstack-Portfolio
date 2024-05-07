<script>
	import { cockieOpen } from '$lib/stores/cookiestore';
</script>

{#if $cockieOpen}
	<section class="fixed bottom-0 z-[1000] w-full bg-[rgba(22,22,19,0.9)] backdrop-blur-xl">
		<div class="mx-auto max-w-5xl px-4 py-6 md:flex md:items-center md:gap-x-6">
			<div class="flex items-start gap-x-2 md:items-center">
				<div class="text-3xl">👋</div>
				<p class="">
					Just wanna let you know that im using cokies here to enhance your user experience. By continuing to visit this site you agree to <a href="#" class="underline transition-colors duration-200 hover:text-primaryhover">our use of cookies</a>.
				</p>
			</div>

			<button on:click={() => cockieOpen.set(false)} class="hidden h-7 w-7 items-center justify-center rounded-full text-primary transition-colors duration-300 focus:outline-none md:flex">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
					<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
				</svg>
			</button>
		</div>
	</section>
{/if}
