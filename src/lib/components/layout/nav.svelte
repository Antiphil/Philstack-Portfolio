<script lang="ts">
	import { navOpen } from '$lib/stores/navstore';
	import { fade, fly } from 'svelte/transition';
</script>

{#if $navOpen}
	<div class="">
		<div in:fly={{ x: -2000, duration: 1000 }} out:fly={{ x: -2000, duration: 1000 }} class="fixed bg-[#0c0c0f] w-screen h-screen z-40" />
		<div in:fly={{ x: -2000, duration: 1500 }} out:fly={{ x: -2000, duration: 1000 }} class="fixed bg-[#0a0a0c] w-[90%] h-screen z-40" />
	</div>
{/if}
