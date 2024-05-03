<script>
	// @ts-nocheck
	import 'locomotive-scroll/locomotive-scroll.css';
	import Footer from '$lib/files/layout/footer.svelte';
	import Noise from '$lib/files/layout/noise.svelte';
	import Overlay from '$lib/files/layout/overlay.svelte';
	import '../app.css';
	import logo2 from '$lib/assets/logos/logo2.svg';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition'

	// @ts-nocheck

	onMount(async () => {
		function isMobile() {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		}

		if (!isMobile()) {
			const locomotive = await import('../lib/utils/locomotive');
		}
	});

	
	let scrollY;
	$: distance = scrollY / 5;
</script>

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
<svelte:window bind:scrollY />

<div class="">
	<div class="relative z-50"></div>
	<!-- <img class="MotionObj" src={logo2} style={`offset-distance:${distance}%`} alt="" />
	<svg width="100%" viewBox="0 0 1920 5291" class="motionPath" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.99997 0V1706.5C-5.33336 1807.5 46.4 2009.5 304 2009.5C561.6 2009.5 2022 2009.5 2720 2009.5" stroke="#F51E1E" />
	</svg> -->

	

  <slot />

	<Footer />
</div>

<style>
	.MotionObj {
		offset-path: path('M0.99997 0V1706.5C-5.33336 1807.5 46.4 2009.5 304 2009.5C561.6 2009.5 2022 2009.5 2720 2009.5');
		offset-rotate: 0deg;
		width: 75px;
		height: 75px;
		position: absolute;
		z-index: 100;
		left: 35px;
	}
	.motionPath {
		position: absolute;
		z-index: 100;
		left: 35px;
	}
	@keyframes move {
		0% {
			offset-distance: 0%;
		}
		100% {
			offset-distance: 100%;
		}
	}
</style>
