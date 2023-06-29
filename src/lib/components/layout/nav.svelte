<script lang="ts">
	import { navOpen } from '$lib/stores/navstore';
	import { fade, fly } from 'svelte/transition';
</script>

{#if $navOpen}
	<div class="flex justify-center">
		<div in:fly={{ x: -2000, duration: 1000 }} out:fly={{ x: -2000, duration: 1000 }} class="fixed bg w-screen h-screen z-40" />
		<div in:fly={{ x: -2000, duration: 1500 }} out:fly={{ x: -2000, duration: 1000 }} class="fixed bg-[#0a0a0c] w-[95%] lg:w-[calc(100%-256px)] h-screen z-40" />
	</div>
{/if}

<style>
	.bg {
		background-color: #9999ff;
		background-image: radial-gradient(at 49% 99%, hsla(278, 71%, 74%, 1) 0px, transparent 50%), radial-gradient(at 56% 74%, hsla(95, 77%, 69%, 1) 0px, transparent 50%), radial-gradient(at 97% 73%, hsla(162, 71%, 67%, 1) 0px, transparent 50%), radial-gradient(at 94% 64%, hsla(200, 62%, 78%, 1) 0px, transparent 50%), radial-gradient(at 37% 94%, hsla(191, 66%, 61%, 1) 0px, transparent 50%), radial-gradient(at 72% 64%, hsla(188, 70%, 61%, 1) 0px, transparent 50%), radial-gradient(at 3% 10%, hsla(353, 89%, 77%, 1) 0px, transparent 50%);
	}
</style>
