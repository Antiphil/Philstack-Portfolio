<script>
	import { locale } from '$i18n/i18n-svelte';
	import BlogitemCard from '$lib/components/modules/blogitems/blogitemCard.svelte';
	import BlogitemMain from '$lib/components/modules/blogitems/blogitemMain.svelte';
	import BlogitemSmall from '$lib/components/modules/blogitems/blogitemSmall.svelte';
	import Button from '$lib/components/modules/button.svelte';
	import Offpagenavbar from '$lib/components/modules/offpagenavbar.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import { formatDistance, subDays } from 'date-fns';

	export let data;
</script>

<Offpagenavbar />
<main class="m-auto mt-20 max-w-7xl p-3 pb-20">
	<div class="mb-8">
		<Title left title="Featured Posts" />
	</div>
	<!-- FEATURED POSTS -->
	<div class="mb-16 flex flex-wrap space-x-0 md:flex-nowrap md:space-x-6">
		<div class="relative mb-3 block w-full pt-20 md:w-1/2 lg:mb-0">
			{#if data.main}
				{#if $locale === 'en'}
					<BlogitemMain title={data.main[0].attributes.title} views={data.main[0].attributes.views || 0} tags={data.main[0].attributes.tags.tags} desc={data.main[0].attributes.description} date={formatDistance(subDays(data.main[0].attributes.createdAt, 0), new Date(), { addSuffix: true })} url="/{$locale}/blog/{data.main[0].attributes.uid}" img="https://strapi.antiphil.de{data.main[0].attributes.media.data[0].attributes.url}" />
				{:else if $locale === 'de'}
					<BlogitemMain title={data.main[0].attributes.localizations.data[0].attributes.title} views={data.main[0].attributes.views || 0} tags={data.main[0].attributes.tags.tags} desc={data.main[0].attributes.localizations.data[0].attributes.description} date={formatDistance(subDays(data.main[0].attributes.createdAt, 0), new Date(), { addSuffix: true })} url="/{$locale}/blog/{data.main[0].attributes.uid}" img="https://strapi.antiphil.de{data.main[0].attributes.media.data[0].attributes.url}" />
				{/if}
			{:else}
				<div class="flex h-full w-full flex-col gap-3">
					<div class="h-full w-full animate-pulse rounded-3xl bg-secondary-900"></div>
				</div>
			{/if}
		</div>
		<div class="flex w-full flex-col gap-3 xs:pl-3 md:w-1/2">
			{#if data.featured}
				{#each data.featured as featuredItem, index}
					{#if index < 4}
						{#if $locale === 'en'}
							<BlogitemSmall title={featuredItem.attributes.title} views={featuredItem.attributes.views || 0} tags={featuredItem.attributes.tags.tags} desc={featuredItem.attributes.description} date={formatDistance(subDays(featuredItem.attributes.createdAt, 0), new Date(), { addSuffix: true })} url="/{$locale}/blog/{featuredItem.attributes.uid}" img="https://strapi.antiphil.de{featuredItem.attributes.media.data[0].attributes.url}" />
						{:else if $locale === 'de'}
							<BlogitemSmall title={featuredItem.attributes.localizations.data[0].attributes.title} views={featuredItem.attributes.views || 0} tags={featuredItem.attributes.tags.tags} desc={featuredItem.attributes.localizations.data[0].attributes.description} date={formatDistance(subDays(featuredItem.attributes.createdAt, 0), new Date(), { addSuffix: true })} url="/{$locale}/blog/{featuredItem.attributes.uid}" img="https://strapi.antiphil.de{featuredItem.attributes.media.data[0].attributes.url}" />
						{/if}
					{/if}
				{/each}
			{:else}
				<div class="flex h-full w-full flex-col gap-3">
					<div class="h-1/4 w-full animate-pulse rounded-3xl bg-secondary-900"></div>
					<div class="h-1/4 w-full animate-pulse rounded-3xl bg-secondary-900"></div>
					<div class="h-1/4 w-full animate-pulse rounded-3xl bg-secondary-900"></div>
					<div class="h-1/4 w-full animate-pulse rounded-3xl bg-secondary-900"></div>
				</div>
			{/if}
		</div>
	</div>

	<!-- recent posts -->
	<div class="mb-4 mt-16 flex items-center justify-between px-4 lg:px-0">
		<div class="">
			<Title left title="Latest Posts" />
		</div>
		<div class="hidden lg:block">
			<Button text="View All" link="/{$locale}/blog/latest" />
		</div>
	</div>
	<div class="flex max-w-screen-xl flex-col justify-center gap-3 space-x-0 lg:flex lg:flex-row lg:space-x-6">
		{#each data.latest as blog, index}
			{#if index < 3}
				{#if $locale === 'en'}
					<BlogitemCard title={blog.attributes.title} views={blog.attributes.views || 0} tags={blog.attributes.tags.tags} desc={blog.attributes.description} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} url="/{$locale}/blog/{blog.attributes.uid}" img="https://strapi.antiphil.de{blog.attributes.media.data[0].attributes.url}" />
				{:else if $locale === 'de'}
					<BlogitemCard title={blog.attributes.localizations.data[0].attributes.title} tags={blog.attributes.tags.tags} views={blog.attributes.views || 0} desc={blog.attributes.localizations.data[0].attributes.description} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} url="/{$locale}/blog/{blog.attributes.uid}" img="https://strapi.antiphil.de{blog.attributes.media.data[0].attributes.url}" />
				{/if}
			{/if}
		{/each}
	</div>
	<div class="flex justify-center lg:hidden">
		<Button text="View All" link="/{$locale}/blog/latest" />
	</div>
	<!-- end recent posts -->

	<!-- popular posts -->
	<div class="mb-4 mt-16 flex items-center justify-between px-4 lg:px-0">
		<div class="">
			<Title left title="Popular Posts" />
		</div>
		<div class="hidden lg:block">
			<Button text="View All" link="/{$locale}/blog/popular" />
		</div>
	</div>
	<div class="flex max-w-screen-xl flex-col justify-center gap-3 space-x-0 lg:flex lg:flex-row lg:space-x-6">
		{#each data.popular as blog, index}
			{#if index < 3}
				{#if $locale === 'en'}
					<BlogitemCard title={blog.attributes.title} views={blog.attributes.views || 0} tags={blog.attributes.tags.tags} desc={blog.attributes.description} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} url="/{$locale}/blog/{blog.attributes.uid}" img="https://strapi.antiphil.de{blog.attributes.media.data[0].attributes.url}" />
				{:else if $locale === 'de'}
					<BlogitemCard title={blog.attributes.localizations.data[0].attributes.title} tags={blog.attributes.tags.tags} views={blog.attributes.views || 0} desc={blog.attributes.localizations.data[0].attributes.description} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} url="/{$locale}/blog/{blog.attributes.uid}" img="https://strapi.antiphil.de{blog.attributes.media.data[0].attributes.url}" />
				{/if}
			{/if}
		{/each}
	</div>
	<div class="flex justify-center lg:hidden">
		<Button text="View All" link="/{$locale}/blog/popular" />
	</div>
	<!-- end popular posts -->
</main>
