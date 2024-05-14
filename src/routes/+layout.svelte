<script>
	// @ts-nocheck
	import 'locomotive-scroll/locomotive-scroll.css';
	import Footer from '$lib/files/layout/footer.svelte';
	import '../app.css';
	import logo2 from '$lib/assets/logos/logo.svg';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { reveal } from 'svelte-reveal';
	import 'svelte-reveal/styles.css';
	import Overlay from '$lib/files/layout/overlay.svelte';

	const delay = (ms) => new Promise((res) => setTimeout(res, ms));
	onMount(async () => {
		function isMobile() {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		}

		if (!isMobile()) {
			const locomotive = await import('../lib/utils/locomotive');
		}
	});

	let loadingContent = true;

	const toggleLoad = async () => {
		await delay(5000);
		loadingContent = false;
	};
	toggleLoad();
</script>

<!-- <Noise /> -->
<svelte:head>
	<meta name="theme-color" content="#eaac16" />
	<title>Welcome | Philstack.de - My Web-Developer Portfolio</title>
	<link rel="canonical" href="https://philstack.de" />
	<meta property="og:url" content="https://philstack.de" />

	<meta property="og:type" content="Portfolio" />
	<meta property="og:title" content="Philstack - Frontend Developer" />
	<meta name="twitter:title" content="Philstack - Frontend Developer" />

	<meta property="og:description" content="Developer Portfolio of the frontend developer" />
	<meta name="description" content="Developer Portfolio of the frontend developer" />
	<meta name="twitter:description" content="Developer Portfolio of the frontend developer" />

	<meta property="og:site_name" content="Philstack.de" />

	<meta property="og:image" content="/favicon.png" />
	<meta name="twitter:image" content="/favicon.png" />
</svelte:head>

{#if loadingContent}
	<div class="flex h-screen items-center justify-center" use:reveal out:fly={{ x: -800 }}>
		<div class="flex w-1/2 flex-col items-center justify-center rounded-3xl p-20">
			<img class="headanim w-44" src={logo2} alt="" />
			<div class="flex w-full flex-col items-center text-center text-secondary">
				<h1 class="text text-[55px] font-bold uppercase leading-[50px]" transition:fade={{ delay: 250, duration: 300 }}>Philstack</h1>
				<h3 class="line-1 anim-typewriter text-[15px] font-light uppercase">Collection of my designs, articles and projects</h3>
			</div>
		</div>
	</div>
{:else}
	<Overlay />
	<div class="" in:fly={{ x: 800, delay: 600 }}>
		<div class="relative z-50"></div>
		<slot />
		<Footer />
	</div>
{/if}

<style>
	.headanim {
		animation: animationhead 3s infinite;
	}
	@keyframes animationhead {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
		}
	}
	.anim-typewriter {
		animation:
			typewriter 2s steps(44) 1s 1 normal both,
			blinkTextCursor 500ms steps(44) infinite normal;
	}
	@keyframes typewriter {
		from {
			width: 0;
		}
		to {
			width: 26em;
		}
	}
	@keyframes blinkTextCursor {
		from {
			border-right-color: rgb(24, 23, 21);
		}
		to {
			border-right-color: transparent;
		}
	}
	.line-1 {
		position: relative;
		top: 0%;
		width: 26em;
		margin: 0 auto;
		border-right: 2px solid rgba(255, 255, 255, 0.75);
		font-size: 100%;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		transform: translateY(-0%);
	}
</style>
