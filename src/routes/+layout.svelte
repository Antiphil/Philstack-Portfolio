<script>
	// @ts-nocheck
	import 'locomotive-scroll/locomotive-scroll.css';
	import Footer from '$lib/files/layout/footer.svelte';
	import Noise from '$lib/files/layout/noise.svelte';
	import Overlay from '$lib/files/layout/overlay.svelte';
	import '../app.css';
	import logo2 from '$lib/assets/logos/logo2.svg';
	import { onMount } from 'svelte';

	// @ts-nocheck

	onMount(async () => {
		const locomotive = await import('../lib/utils/locomotive');

		var cursor = document.getElementById('cursor');
		var cursorCircle = document.getElementById('cursorCircle');
		document.body.addEventListener('mousemove', function (e) {
			(cursor.style.left = e.clientX + 'px'), (cursor.style.top = e.clientY + 'px');
			(cursorCircle.style.left = e.clientX + 'px'), (cursorCircle.style.top = e.clientY + 'px');
		});
	});

	let scrollY;
	$: distance = scrollY / 5;
</script>

<svelte:window bind:scrollY />

<div class="cursor" id="cursor"></div>
<div class="cursorCircle" id="cursorCircle"></div>

<div class="">
<<<<<<< Updated upstream
  <div class="relative z-50"></div>
    <!-- <img class="MotionObj" src={logo2} style={`offset-distance:${distance}%`} alt="">
    <svg width="200%" height="600vh"  class="motionPath" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0V470C-0.333323 505.5 19.1 576.5 107.5 576.5C195.9 576.5 486.667 576.5 621 576.5" stroke="red"/>
      <path d="M0,50 L0,900" stroke="red"/>
    </svg> -->
  
    <slot />
    <Footer />
</div> 
=======
	<div class="relative z-50"></div>
	<!-- <img class="MotionObj" src={logo2} style={`offset-distance:${distance}%`} alt="" />
	<svg width="100%" viewBox="0 0 1920 5291" class="motionPath" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.99997 0V1706.5C-5.33336 1807.5 46.4 2009.5 304 2009.5C561.6 2009.5 2022 2009.5 2720 2009.5" stroke="#F51E1E" />
	</svg> -->

	<slot />
	<Footer />
</div>
>>>>>>> Stashed changes

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
