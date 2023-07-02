<script lang="ts">
	import { navOpen } from '$lib/stores/navstore';
	import { fade, fly } from 'svelte/transition';
</script>

{#if $navOpen}
	<div class="flex justify-center">
		<div in:fly={{ x: -2000, duration: 1000 }} out:fly={{ x: -2000, duration: 1000 }} class="fixed bg w-screen h-screen z-40" />
		<div in:fly={{ x: -2000, duration: 1500 }} out:fly={{ x: -2000, duration: 1000 }} class="fixed bg-[#0a0a0c] w-[95%] lg:w-[calc(100%-256px)] h-screen z-40">
			<div class="flex h-[50vh] mt-[25vh] w-full divide-x-2 divide-white/30">
				<div class="relative h-full w-full">
					<ul class="flex flex-col justify-center h-full gap-3 p-10">
						<li class="before:content-['01.'] before:opacity-40 hover:ml-3 transition-all"><a href="/" class="font-semibold text-4xl ml-2">Home</a></li>
						<li class="before:content-['02.'] before:opacity-40 hover:ml-3 transition-all"><a href="/" class="font-semibold text-4xl ml-2">Blog</a></li>
						<li class="before:content-['03.'] before:opacity-40 hover:ml-3 transition-all"><a href="/" class="font-semibold text-4xl ml-2">Referenzen</a></li>
						<li class="before:content-['04.'] before:opacity-40 hover:ml-3 transition-all"><a href="/" class="font-semibold text-4xl ml-2">Datenschutz</a></li>
						<li class="before:content-['05.'] before:opacity-40 hover:ml-3 transition-all"><a href="/" class="font-semibold text-4xl ml-2">Impressum</a></li>
					</ul>
					<h1 class="text-[20vw] font-bold opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">MENU</h1>
				</div>
				<div class="flex justify-center items-center p-20">
					<div class="flex flex-col gap-10">
						<div class="">
							<h5 class="font-bold text-blue-500 uppercase mb-3">Adresse</h5>
							Neu-Ulmer Str 19, 98617 Meiningen, Germany
						</div>
						<div class="">
							<h5 class="font-bold text-blue-500 uppercase mb-3">Kontact</h5>
							<p class="mb-1"><a class="" href="tel:+49 176 21942619">+49 176 21942619</a></p>
							<p class=""><a class="" href="mailto:stehle@mailbox.org">stehle@mailbox.org</a></p>
						</div>
						<div class="">
							<h5 class="font-bold text-blue-500 uppercase mb-3">Follow me</h5>
							<ul class="flex gap-3">
								<li><a href="/" target="_blank" rel="nofollow noopener noreferrer">Instagram.</a></li>
								<li><a href="/" target="_blank" rel="nofollow noopener noreferrer">Discord.</a></li>
								<li><a href="/" target="_blank" rel="nofollow noopener noreferrer">Linkedin.</a></li>
								<li><a href="/" target="_blank" rel="nofollow noopener noreferrer">Twitter.</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.bg {
		background-color: #9999ff;
		background-image: radial-gradient(at 49% 99%, hsla(278, 71%, 74%, 1) 0px, transparent 50%), radial-gradient(at 56% 74%, hsla(95, 77%, 69%, 1) 0px, transparent 50%), radial-gradient(at 97% 73%, hsla(162, 71%, 67%, 1) 0px, transparent 50%), radial-gradient(at 94% 64%, hsla(200, 62%, 78%, 1) 0px, transparent 50%), radial-gradient(at 37% 94%, hsla(191, 66%, 61%, 1) 0px, transparent 50%), radial-gradient(at 72% 64%, hsla(188, 70%, 61%, 1) 0px, transparent 50%), radial-gradient(at 3% 10%, hsla(353, 89%, 77%, 1) 0px, transparent 50%);
	}
</style>
