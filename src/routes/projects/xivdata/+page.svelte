<script>
// @ts-nocheck

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


    <div class="p-10  prose-lg prose-pink">
        {#if data}
            {@html data.data?.attributes?.content}
        {/if}
    </div>
