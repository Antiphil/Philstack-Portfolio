<script>
</script>

<div class="noiseBG sepia" />

<div class="content fixed pointer-events-none !opacity-20">
	<div class='film'>
		<div class="effect">
			<div class="grain"></div>
		</div>
	</div>
</div>

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
		opacity: 0.5;
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
	/*** 
unsplash.com API has changed
random images don't work like they used to
a still image has been posted
until I can investigate the new API

------------------------------------

The random image on unsplash.com works again as before. 
I leave it activated again.
***/

:root {
	--trsn: all 0.5s ease 0s;
	--black: #635644;
}

*, *:before, *:after {
	position: absolute;
}


.content {
	width: 100vw;
	height: 100vh;
	z-index: 1000;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	background-size: cover;
	transition: var(--trsn);
	opacity: 0.8;
}

.content:before {
	font-family: Arial, Helvetica, serif;
	bottom: 0vmin;
	font-weight: 500;
	font-size: 1.35vmin;
	color: #fffD;
	border-radius: 1px;
	padding: 20vmin 2vmin 3vmin;
	letter-spacing: 0.5px;
	word-spacing: 3px;
	background: linear-gradient(0deg, black, transparent);
	width: 100%;
	text-align: center;
}

.content:after {
	content: "";
	width: 100%;
	height: 100%;
	box-shadow: 0 0 20vmin 0vmin var(--black) inset, 0 0 3vmin 0.5vmin var(--black) inset, 0 0 1vmin 1vmin var(--black);
}

.film, .effect {
	width: 100%;
	height: 100%;
	filter: blur(0.45px) drop-shadow(0px 0px 0px #fff1);
}

.film:after, .effect:after {
	content: '';
	width: 120%;
	height: 100%;
	top: 0;
	left: 0;
	padding-left: 100px;
	opacity: 0.5;
	animation: film-scratch 0.45s steps(1) infinite;
	background: repeating-linear-gradient(90deg, #0002 0 2px, transparent 4px 37vmin);
}

.effect:after {
	left: 30%;
	animation: effect-scratch 2s infinite;
}

.grain {
	width: 100%;
	height: 100%;
}

.grain:after {
	content: '';
	width: 110%;
	height: 110%;
	top: -5%;
	left: -5%;
	opacity: .25;
	background-image: 
		repeating-conic-gradient(var(--black) 0%, transparent .00003%, transparent .0005%, transparent .00095%),
		repeating-conic-gradient(var(--black) 0%, transparent .00005%, transparent 0.00015%, transparent 0.0009%);
	animation: grain 0.5s steps(1) infinite;
	filter: drop-shadow(0px 0px 1px black);
}

@keyframes grain {
	0%, 100% { transform: translate(0, 0); }
	10% { transform: translate(-1%, -1%); }
	20% { transform: translate(1%, 1%); }
	30% { transform: translate(-2%, -2%); }
	40% { transform: translate(3%, 3%); }
	50% { transform: translate(-3%, -3%); }
	60% { transform: translate(4%, 4%); }
	70% { transform: translate(-4%, -4%); }
	80% { transform: translate(2%, 2%); }
	90% { transform: translate(-3%, -3%); }
}

@keyframes film-scratch {
	0%, 100% { transform: translateX(0); opacity: 0.5; }
	10% { transform: translateX(-1%); }
	20% { transform: translateX(1%); }
	30% { transform: translateX(-2%); opacity: 0.75; }
	40% { transform: translateX(3%); }
	50% { transform: translateX(-3%); opacity: 0.5; }
	60% { transform: translateX(8%); }
	70% { transform: translateX(-3%); }
	80% { transform: translateX(10%); opacity: 0.25; }
	90% { transform: translateX(-2%); }
}

@keyframes effect-scratch {
	0% { transform: translateX(0); opacity: 0.75; }
	10% { transform: translateX(-1%); }
	20% { transform: translateX(1%); }
	30% { transform: translateX(-2%); }
	40% { transform: translateX(3%); }
	50% { transform: translateX(-3%); opacity: 0.5; }
	60% { transform: translateX(8%); }
	70% { transform: translateX(-3%); }
	80% { transform: translateX(10%); opacity: 0.25; }
	90% { transform: translateX(20%); }
	100% { transform: translateX(30%); }
}


</style>
