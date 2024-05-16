<script>
	import { tooltip } from 'svooltip';
	export let link;
	export let text;
</script>

<div class="mb-5 flex items-center justify-between rounded-xl bg-[rgba(22,22,19,0.8)] px-5 py-2 text-xs">
	<div class="">
		<span>Author: Phil</span>
		-
		<span>{text}</span>
	</div>
	<div class="flex gap-3 text-sm">
		<a href="/" use:tooltip={{ content: 'Share on Facebook' }} class="flex h-6 w-6 items-center justify-center rounded-full transition-all hover:bg-primary hover:text-secondary">
			<i class="fa-brands fa-facebook-f"></i>
		</a>
		<a href="/" use:tooltip={{ content: 'Share on X/Twitter' }} class="flex h-6 w-6 items-center justify-center rounded-full transition-all hover:bg-primary hover:text-secondary">
			<i class="fa-brands fa-x-twitter"></i>
		</a>
		<a href="/" use:tooltip={{ content: 'Share on Threads' }} class="flex h-6 w-6 items-center justify-center rounded-full transition-all hover:bg-primary hover:text-secondary">
			<i class="fa-brands fa-threads"></i>
		</a>
		<a href="/" use:tooltip={{ content: 'Copy URL' }} class="flex h-6 w-6 items-center justify-center rounded-full transition-all hover:bg-primary hover:text-secondary">
			<i class="fa-solid fa-link"></i>
		</a>
	</div>
</div>
