<script>
	import { page } from '$app/stores';
</script>

<section>
	<div class="flex items-center justify-center">
		<h1>{$page.error.message}</h1>
	</div>
</section>
