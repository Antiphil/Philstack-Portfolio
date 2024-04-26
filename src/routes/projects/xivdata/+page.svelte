<script>
// @ts-nocheck
	import Blogframe from "$lib/files/layout/blogframe.svelte";

    let data;
	const fetchDataFromAPI = async () => {
		try {
			const response = await fetch('https://strapi.antiphil.de/api/project-xivdata?populate=*');
			data = await response.json();
		} catch (error) {
			console.error('Fehler beim Abrufen der xivdata Daten:', error);
		}
	};
	fetchDataFromAPI();
</script>
<Blogframe>
    <div class=""></div>
    <div class="p-10  prose-lg prose-pink">
        {#if data}
            {@html data.data?.attributes?.content}
        {/if}
    </div>
</Blogframe>