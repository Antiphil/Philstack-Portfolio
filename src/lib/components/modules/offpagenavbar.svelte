<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';
	import logo from '$lib/assets/images/logos/logo_full.svg';
	import { toggleNav } from '$lib/stores/navstore';
</script>

<div class="fixed top-0 z-20 flex h-[68px] w-full items-center justify-between bg-secondary-900/80 px-7 py-5 backdrop-blur-md md:justify-start md:px-10">
	<button on:click={() => toggleNav()} class="fa-solid fa-bars text-xl xl:hidden"></button>
	<a class="" href="/{$locale}/"><img class=" h-5 md:ml-5 xl:ml-0" src={logo} alt="" /></a>
</div>
