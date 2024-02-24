<script>
</script>

<div class="noiseBG" />

<style>
	.noiseBG {
		z-index: 20;
		pointer-events: none;
		position: fixed;
		overflow: hidden;
		top: -50%;
		left: -50%;
		right: -50%;
		bottom: -50%;
		width: 200%;
		height: 200vh;
		background: transparent url(http://assets.iceable.com/img/noise-transparent.png) repeat 0 0;
		animation: bg-animation 0.3s infinite;
		opacity: 0.7;
		visibility: visible;
		z-index: 2000;
	}
	@keyframes bg-animation {
		0% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(-12%, 6%);
		}
		100% {
			transform: translate(15%, 12%);
		}
	}
</style>
