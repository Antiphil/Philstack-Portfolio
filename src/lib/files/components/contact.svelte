<script>
	import logo from '$lib/assets/logos/logo_full.svg';
	import Button from '../modules/button.svelte';
	import Title from '../modules/title.svelte';
</script>

<div class="my-4 flex h-full w-full flex-col-reverse items-center justify-center xl:flex-row xl:gap-3">
	<div class=" w-full sm:p-2 lg:max-w-[650px] xl:w-full">
		<a href="/" class="mb-6 hidden justify-center xl:flex">
			<img class="w-48" src={logo} alt="logo" />
		</a>
		<form class="w-full" action="#">
			<div class="w-full">
				<div class="flex flex-col xl:flex-row gap-3 w-full mb-3">
					<div class="w-full">
						<label for="email" class="mb-1 ml-1 block text-xs font-semibold">E-mail</label>
						<input type="email" name="email" id="email" class="cardBG w-full rounded border-2 border-[#c09a69] placeholder-[#beb3a2] bg-primary p-2 text-sm" placeholder="mail@philstack.de" required />
					</div>
					<div class="w-full">
						<label for="topic" class="mb-1 ml-1 block text-xs font-semibold">Your Topic</label>
						<input type="text" name="topic" id="topic" placeholder="Website for my Pizza Store" class=" placeholder-[#beb3a2] w-full rounded border-2 border-[#c09a69] bg-primary p-2 text-sm" required />
					</div>
				</div>
				<div class="">
					<label for="password" class="mb-1 ml-1 block w-full text-xs font-semibold">Your message</label>
					<textarea id="w3review" name="w3review" placeholder="Your message" rows="8" class="w-full rounded border-2 border-[#c09a69] placeholder-[#beb3a2] bg-primary p-2 text-sm "></textarea>
				</div>
			</div>
			<Button text="Submit" link="/" />
		</form>
	</div>
	<div class="flex max-w-[600px] flex-col gap-2 text-center sm:p-3">
		<Title title="Let's Talk" nr="04."/>
		<p class="mb-3 text-lg sm:text-3xl font-bold">Do you feel like saying hi to me, or do you need my help with your project? Feel free to contact me 😊</p>
	</div>
	
</div>
