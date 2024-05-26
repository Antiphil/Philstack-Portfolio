<script>
	import BlogitemMain from '$lib/components/modules/blogitems/blogitemMain.svelte';
	import BlogitemSmall from '$lib/components/modules/blogitems/blogitemSmall.svelte';
	import Button from '$lib/components/modules/button.svelte';
</script>

<main class="m-auto mt-12 max-w-7xl">
	<!-- FEATURED POSTS -->
	<div class="mb-16 flex flex-wrap space-x-0 md:flex-nowrap md:space-x-6">
		<div class="md:w-4/7 relative mb-3 block w-full rounded-3xl bg-primary-main p-3 text-secondary-800 lg:mb-0">
			<BlogitemMain />
		</div>
		<div class="md:w-4/7 xs:pl-7 flex w-full flex-col gap-3">
			<BlogitemSmall />
			<BlogitemSmall />
			<BlogitemSmall />
			<BlogitemSmall />
		</div>
	</div>

	<!-- recent posts -->
	<div class="mb-4 mt-16 flex items-center justify-between px-4 lg:px-0">
		<h2 class="text-3xl font-bold">Latest news</h2>
		<a class="cursor-pointer rounded bg-gray-200 px-3 py-1 text-gray-800 hover:bg-green-200"> View all </a>
	</div>
	<div class="block space-x-0 lg:flex lg:space-x-6">
		<div class="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
			<img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="rounded" alt="technology" />
			<div class="p-4 pl-0">
				<h2 class="text-2xl font-bold text-gray-800">Put all speaking her delicate recurred possible.</h2>
				<p class="mt-2 text-gray-700">Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.</p>

				<a href="#" class="ml-auto mt-2 inline-block rounded py-2 text-green-900"> Read more </a>
			</div>
		</div>

		<div class="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
			<img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="rounded" alt="technology" />
			<div class="p-4 pl-0">
				<h2 class="text-2xl font-bold text-gray-800">Is at purse tried jokes china ready decay an.</h2>
				<p class="mt-2 text-gray-700">Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. Procured shutters mr it feelings. To or three offer house begin taken am at.</p>

				<a href="#" class="ml-auto mt-2 inline-block rounded py-2 text-green-900"> Read more </a>
			</div>
		</div>

		<div class="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
			<img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="rounded" alt="technology" />
			<div class="p-4 pl-0">
				<h2 class="text-2xl font-bold text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
				<p class="mt-2 text-gray-700">Alteration connection to so as collecting me. Difficult in delivered extensive at direction allowance. Alteration put use diminution can considered sentiments interested discretion.</p>

				<a href="#" class="ml-auto mt-2 inline-block rounded py-2 text-green-900"> Read more </a>
			</div>
		</div>
	</div>
	<!-- end recent posts -->

	<!-- subscribe -->
	<div class="mt-12 flex rounded md:shadow">
		<img src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="w-0 rounded-l object-cover md:w-1/4" />
		<div class="px-4 py-2">
			<h3 class="text-3xl font-bold text-gray-800">Subscribe to newsletter</h3>
			<p class="text-xl text-gray-700">We sent latest news and posts once in every week, fresh from the oven</p>
			<form class="mb-10 mt-4">
				<input type="email" class="rounded border bg-gray-100 px-4 py-2 focus:border-green-400" placeholder="john@tech.com" />
				<button class="rounded bg-green-800 px-4 py-2 text-gray-100">
					Subscribe
					<i class="bx bx-right-arrow-alt"></i>
				</button>
				<p class="mt-1 text-sm text-green-900 opacity-50">No spam. We promise</p>
			</form>
		</div>
	</div>
	<!-- ens subscribe section -->

	<!-- popular posts -->
	<div class="mb-4 mt-16 flex items-center justify-between px-4 lg:px-0">
		<h2 class="text-3xl font-bold">Popular news</h2>
		<a class="cursor-pointer rounded bg-gray-200 px-3 py-1 text-gray-800 hover:bg-green-200"> View all </a>
	</div>
	<div class="block space-x-0 lg:flex lg:space-x-6">
		<div class="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
			<img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="rounded" alt="technology" />
			<div class="p-4 pl-0">
				<h2 class="text-2xl font-bold text-gray-800">Put all speaking her delicate recurred possible.</h2>
				<p class="mt-2 text-gray-700">Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.</p>

				<a href="#" class="ml-auto mt-2 inline-block rounded py-2 text-green-900"> Read more </a>
			</div>
		</div>

		<div class="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
			<img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="rounded" alt="technology" />
			<div class="p-4 pl-0">
				<h2 class="text-2xl font-bold text-gray-800">Is at purse tried jokes china ready decay an.</h2>
				<p class="mt-2 text-gray-700">Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. Procured shutters mr it feelings. To or three offer house begin taken am at.</p>

				<a href="#" class="ml-auto mt-2 inline-block rounded py-2 text-green-900"> Read more </a>
			</div>
		</div>

		<div class="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
			<img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="rounded" alt="technology" />
			<div class="p-4 pl-0">
				<h2 class="text-2xl font-bold text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
				<p class="mt-2 text-gray-700">Alteration connection to so as collecting me. Difficult in delivered extensive at direction allowance. Alteration put use diminution can considered sentiments interested discretion.</p>

				<a href="#" class="ml-auto mt-2 inline-block rounded py-2 text-green-900"> Read more </a>
			</div>
		</div>
	</div>
	<!-- end popular posts -->
</main>
