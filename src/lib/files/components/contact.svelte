<script>
	import logo from '$lib/assets/logos/logo_full.svg';
	import Button from '../modules/button.svelte';
</script>

<div class="my-4 flex h-full w-full flex-col-reverse items-center justify-center gap-10 xl:flex-row xl:justify-start xl:gap-3">
	<div class="cardBG w-full p-5 sm:p-2 lg:max-w-[650px] xl:w-full">
		<a href="/" class="mb-6 hidden justify-center xl:flex">
			<img class="w-48" src={logo} alt="logo" />
		</a>
		<form class="w-full" action="#">
			<div class="grid w-full grid-cols-1 gap-3 xl:grid-cols-2">
				<div>
					<label for="email" class="mb-1 ml-1 block text-xs font-semibold">E-mail</label>
					<input type="email" name="email" id="email" class="cardBG w-full rounded border-2 border-[#584538] bg-primary p-2 text-sm" placeholder="mail@philstack.de" required />
				</div>
				<div>
					<label for="topic" class="mb-1 ml-1 block text-xs font-semibold">Your Topic</label>
					<input type="text" name="topic" id="topic" placeholder="Website for my Pizza Store" class="w-full rounded border-2 border-[#584538] bg-primary p-2 text-sm" required />
				</div>
				<div class="">
					<label for="password" class="mb-1 ml-1 block w-full text-xs font-semibold">Your Message</label>
					<textarea id="w3review" name="w3review" rows="8" class="w-full rounded border-2 border-[#584538] bg-primary p-2 text-sm"> asd </textarea>
				</div>
			</div>
			<Button text="Submit" link="/" />
		</form>
	</div>
	<div class="flex max-w-[600px] flex-col gap-2 text-center sm:p-3">
		<h1 class="outline-text mb-3 text-[75px] font-black uppercase">Let's Talk</h1>
		<p class="mb-3 text-3xl font-bold">Do you feel like saying hi to me, or do you need my help with your project? Feel free to contact me 😊</p>
	</div>
</div>
