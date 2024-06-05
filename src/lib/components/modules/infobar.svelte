<script lang="ts">
	import { tooltip } from '$lib/utils/tooltip';

	import { formatDistance, subDays } from 'date-fns';
	export let date: string | undefined = undefined;
	export let text: string | undefined = undefined;
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
		<a href="/" use:tooltip={{ text: 'Share on Facebook' }} class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-main text-secondary-900 transition-all hover:bg-secondary-800 hover:text-primary-main">
			<i class="fa-brands fa-facebook-f"></i>
		</a>
		<a href="/" use:tooltip={{ text: 'Share on X/Twitter' }} class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-main text-secondary-900 transition-all hover:bg-secondary-800 hover:text-primary-main">
			<i class="fa-brands fa-x-twitter"></i>
		</a>
		<a href="/" use:tooltip={{ text: 'Share on Threads' }} class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-main text-secondary-900 transition-all hover:bg-secondary-800 hover:text-primary-main">
			<i class="fa-brands fa-threads"></i>
		</a>
		<a href="/" use:tooltip={{ text: 'Copy URL' }} class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-main text-secondary-900 transition-all hover:bg-secondary-800 hover:text-primary-main">
			<i class="fa-solid fa-link"></i>
		</a>
	</div>
</div>
