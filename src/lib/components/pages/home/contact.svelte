<script>
	import LL from '$i18n/i18n-svelte';
	import Button from '$lib/components/modules/button.svelte';
	import Title from '$lib/components/modules/title.svelte';
</script>

<section class="">
	<div class="container mx-auto px-6 py-12">
		<div>
			<Title center title={$LL.contactTitle()} />
			<p class="my-10 text-center">{$LL.contactSub()}</p>
		</div>

		<div class=" grid grid-cols-1 gap-12 lg:grid-cols-2">
			<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
				<div>
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/10">
						<i class="fa-solid fa-paper-plane"></i>
					</span>

					<h2 class="mt-4 text-base font-semibold">Email</h2>
					<p class="mt-2 text-sm">{$LL.mailText()}</p>
					<p class="mt-2 text-sm font-bold"><i class="fa-solid fa-caret-right"></i> Philipp-Stehle@outlook.de</p>
				</div>
				<div>
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/10">
						<i class="fa-solid fa-phone-volume"></i>
					</span>

					<h2 class="mt-4 text-base font-semibold">Phone</h2>
					<p class="mt-2 text-sm">{$LL.phoneText()}</p>
					<p class="mt-2 text-sm font-bold"><i class="fa-solid fa-caret-right"></i> +49 17621942619</p>
				</div>
				<div>
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/10">
						<i class="fa-brands fa-whatsapp"></i>
					</span>

					<h2 class="mt-4 text-base font-semibold">Whatsapp</h2>
					<p class="mt-2 text-sm">{$LL.whatsappText()}</p>
					<p class="mt-2 text-sm font-bold"><i class="fa-solid fa-caret-right"></i> +49 17621942619</p>
				</div>
				<div>
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-main/10">
						<i class="fa-brands fa-discord"></i>
					</span>

					<h2 class="mt-4 text-base font-semibold">Discord</h2>
					<p class="mt-2 text-sm">{$LL.discordText()}</p>
					<p class="mt-2 text-sm font-bold"><i class="fa-solid fa-caret-right"></i> Antiiphil</p>
				</div>
			</div>

			<div class="">
				<form>
					<div class="-mx-2 md:flex md:items-center">
						<div class="flex-1 px-2">
							<label for="name" class="mb-2 block text-sm">{$LL.contacFirstname()}</label>
							<input name="name" id="name" type="text" placeholder="John" class="mt-2 block w-full rounded-lg border bg-primary-main px-5 py-2.5 text-secondary-800 placeholder:text-secondary-800/40 focus:outline-none focus:ring focus:ring-opacity-40" />
						</div>

						<div class="mt-4 flex-1 px-2 md:mt-0">
							<label for="lastname" class="mb-2 block text-sm">{$LL.contacLastname()}</label>
							<input name="lastname" id="lastname" type="text" placeholder="Doe" class="mt-2 block w-full rounded-lg border bg-primary-main px-5 py-2.5 text-secondary-800 placeholder:text-secondary-800/40 focus:outline-none focus:ring focus:ring-opacity-40" />
						</div>
					</div>

					<div class="mt-4">
						<label for="email" class="mb-2 block text-sm">{$LL.contacMail()}</label>
						<input name="email" id="email" type="email" placeholder="johndoe@philstack.de" class="mt-2 block w-full rounded-lg border bg-primary-main px-5 py-2.5 text-secondary-800 placeholder:text-secondary-800/40 focus:outline-none focus:ring focus:ring-opacity-40" />
					</div>

					<div class="mt-4 w-full">
						<label for="message" class="mb-2 block text-sm">{$LL.contactMessage()}</label>
						<textarea id="message" name="message" class="mt-2 block h-32 w-full rounded-lg border bg-primary-main px-5 py-2.5 text-secondary-800 placeholder:text-secondary-800/40 focus:outline-none focus:ring focus:ring-opacity-40 md:h-44" placeholder="Your Message"></textarea>
					</div>
					<div class="mt-3 flex justify-center">
						<Button text={$LL.contactButton()} link="/" />
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
