<script lang="ts">
	import logo from '$lib/assets/images/logos/logo_full.svg';
	import { toggleNav } from '$lib/stores/navstore';
</script>

<div class="fixed top-0 z-20 flex w-full items-center justify-between bg-secondary-900/80 px-7 py-5 backdrop-blur-md md:justify-start md:px-10">
	<button on:click={() => toggleNav()} class="fa-solid fa-bars text-xl"></button>
	<a class="" href="/"><img class=" h-5 md:ml-5" src={logo} alt="" /></a>
</div>
