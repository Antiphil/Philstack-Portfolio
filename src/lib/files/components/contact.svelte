<script>
	import logo from '$lib/assets/logos/logo_full.svg';
	import Button from '../modules/button.svelte';
</script>

<div class="my-28 flex h-full flex-col items-center justify-center gap-10 lg:justify-start lg:gap-3 xl:flex-row">
	<div class="cardBG max-w-[650px] p-5 sm:p-2 lg:w-full">
		<a href="/" class="mb-6 flex justify-center">
			<img class="w-48" src={logo} alt="logo" />
		</a>
		<form class="" action="#">
			<div class="grid grid-cols-2 gap-3 lg:grid-cols-1">
				<div>
					<label for="email" class="mb-1 ml-1 block text-xs font-semibold">E-mail</label>
					<input type="email" name="email" id="email" class="cardBG rounded border-2 border-[#584538] bg-primary p-2 text-sm lg:w-full" placeholder="mail@philstack.de" required />
				</div>
				<div>
					<label for="password" class="mb-1 ml-1 block text-xs font-semibold">Your Topic</label>
					<input type="text" name="password" id="password" placeholder="Website for my Pizza Store" class="rounded border-2 border-[#584538] bg-primary p-2 text-sm lg:w-full" required />
				</div>
				<div>
					<label for="password" class="mb-1 ml-1 block text-xs font-semibold">Your Message</label>
					<textarea id="w3review" name="w3review" rows="8" cols="50" class="rounded border-2 border-[#584538] bg-primary p-2 text-sm lg:w-full"> asd </textarea>
				</div>
			</div>
			<Button text="Submit" link="/" />
		</form>
	</div>
	<div class="flex max-w-[600px] flex-col gap-2 sm:p-3">
		<h1 class="outline-text mb-3 text-[75px] font-black uppercase">Let's Talk</h1>
		<p class="mb-3 text-3xl font-bold">Do you feel like saying hi to me, or do you need my help with your project? Feel free to contact me 😊</p>
	</div>
</div>
