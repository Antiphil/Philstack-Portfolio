<script lang="ts">
	import { tooltip } from '$lib/utils/tooltip';
	import { page } from '$app/stores';
	import LL from '$i18n/i18n-svelte';

	import { formatDistance, subDays } from 'date-fns';
	export let date: string | undefined = undefined;
	export let text: string | undefined = undefined;
	export let facebook: boolean = false;
	export let twitter: boolean = false;
	export let threads: boolean = false;
	export let linkedin: boolean = false;
	export let link: boolean = false;
	export let download: boolean = false;

	const copyURL = () => window.navigator.clipboard.writeText(`https://philstack.de${$page.url.pathname}`);

	async function downloadPDF() {
		const response = await fetch('/api/pdf', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ url: window.location.href })
		});

		if (response.ok) {
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'article.pdf';
			a.click();
			window.URL.revokeObjectURL(url);
		} else {
			console.error('Failed to generate PDF');
		}
	}
</script>

<div class=" flex w-full items-center justify-between rounded-xl bg-secondary-900 px-5 py-2 text-xs">
	<div class="">
		{#if date}
			<span>Posted {formatDistance(subDays(date, 0), new Date(), { addSuffix: true })}</span>
		{:else if text}
			<span>{text}</span>
		{/if}
	</div>
	<div class="flex gap-3 text-xs">
		{#if facebook}
			<a href="https://www.facebook.com/sharer/sharer.php?u=Read%20about%20that%20Article%20i've%20found%20on%20Philstack.de!%20https%3A//philstack.de{$page.url.pathname}" use:tooltip={{ text: `${$LL.fbShare()}` }} class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-main text-secondary-900 transition-all hover:bg-secondary-800 hover:text-primary-main">
				<i class="fa-brands fa-facebook-f"></i>
			</a>
		{/if}
		{#if twitter}
			<a href="https://twitter.com/intent/tweet?text=Read%20about%20that%20article%20i've%20found%20on%20Philstack.de!%0Ahttps%3A//philstack.de{$page.url.pathname}" use:tooltip={{ text: `${$LL.xShare()}` }} class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-main text-secondary-900 transition-all hover:bg-secondary-800 hover:text-primary-main">
				<i class="fa-brands fa-x-twitter"></i>
			</a>
		{/if}
		{#if threads}
			<a href="https://www.threads.net/intent/post?text=Read%20about%20that%20Article%20i've%20found%20on%20Philstack.de!%20https%3A//philstack.de{$page.url.pathname}" use:tooltip={{ text: `${$LL.threadsShare()}` }} class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-main text-secondary-900 transition-all hover:bg-secondary-800 hover:text-primary-main">
				<i class="fa-brands fa-threads"></i>
			</a>
		{/if}
		{#if linkedin}
			<a href="https://www.linkedin.com/shareArticle?mini=true&url=Read%20about%20that%20Article%20i've%20found%20on%20Philstack.de!%20https%3A//philstack.de{$page.url.pathname}" use:tooltip={{ text: `${$LL.linkledInShare()}` }} class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-main text-secondary-900 transition-all hover:bg-secondary-800 hover:text-primary-main">
				<i class="fa-brands fa-linkedin-in"></i>
			</a>
		{/if}
		{#if link}
			<button on:click={copyURL} use:tooltip={{ text: `${$LL.linkShare()}` }} class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-main text-secondary-900 transition-all hover:bg-secondary-800 hover:text-primary-main">
				<i class="fa-solid fa-link"></i>
			</button>
		{/if}
		{#if download}
			<button on:click={downloadPDF} use:tooltip={{ text: `${$LL.dlPDF()}` }} class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-main text-secondary-900 transition-all hover:bg-secondary-800 hover:text-primary-main">
				<i class="fa-solid fa-download"></i>
			</button>
		{/if}
	</div>
</div>
