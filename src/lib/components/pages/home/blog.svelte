<script>
	// @ts-nocheck

	import Button from '$lib/components/modules/button.svelte';
	import Title from '$lib/components/modules/title.svelte';
	import Blogitem1 from '$lib/components/modules/blogitems/blogitemL.svelte';
	import Blogitem2 from '$lib/components/modules/blogitems/blogitemR.svelte';
	import { formatDistance, subDays } from 'date-fns';
	import { locale } from '$i18n/i18n-svelte';

	export let blog;
</script>

<section class="w-full">
	<div class="container mx-auto py-10 md:px-6">
		<div class="m-auto mb-10 mt-6 max-w-screen-xl text-center md:flex md:items-center md:justify-center">
			<Title title="Latest Blog Articles" center />
		</div>

		<div class="flex w-full flex-col gap-5">
			{#if blog}
				{#each blog.data.reverse() as blog, index}
					{#if index < 4}
						{#if $locale === 'en'}
							{#if index % 2 == 0}
								<Blogitem1 title={blog.attributes.title} url="/{$locale}/blog/article/{blog.attributes.uid}" desc={blog.attributes.description} tags={blog.attributes.tags.tags} views={blog.attributes.views} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} />
							{:else}
								<Blogitem2 title={blog.attributes.title} url="/{$locale}/blog/article/{blog.attributes.uid}" desc={blog.attributes.description} tags={blog.attributes.tags.tags} views={blog.attributes.views} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} />
							{/if}
						{:else if $locale === 'de'}
							{#if index % 2 == 0}
								<Blogitem1 title={blog.attributes.localizations.data[0].attributes.title} url="/{$locale}/blog/article/{blog.attributes.uid}" views={blog.attributes.views} tags={blog.attributes.tags.tags} desc={blog.attributes.localizations.data[0].attributes.description} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} />
							{:else}
								<Blogitem2 title={blog.attributes.localizations.data[0].attributes.title} url="/{$locale}/blog/article/{blog.attributes.uid}" views={blog.attributes.views} tags={blog.attributes.tags.tags} desc={blog.attributes.localizations.data[0].attributes.description} img={`https://strapi.antiphil.de${blog?.attributes.media.data[0].attributes.url}`} date={formatDistance(subDays(blog.attributes.createdAt, 0), new Date(), { addSuffix: true })} />
							{/if}
						{/if}
					{/if}
				{/each}
			{/if}
		</div>
		<div class="mt-10 flex justify-center">
			<Button text="Visit blog page" link="/{$locale}/blog" />
		</div>
	</div>
</section>
