import { writable } from 'svelte/store';

//https://strapi.antiphil.de/api/751c26bc5ac6625b42d38a6bd6a284e4242d25612b7773ad302c034be7ea5d24e6652f46b47a5d0553bc93cde91a700bf17f2b3cc86d3ca4445b7406f765d3f4157065a40d6ed63eec59bcf2d2feca9ce0107f2b235057027245e2046cbf041c014d1448b280425e78f307f2bc6674156b3874feb748c6d502bcdeae1bb8fc16
//751c26bc5ac6625b42d38a6bd6a284e4242d25612b7773ad302c034be7ea5d24e6652f46b47a5d0553bc93cde91a700bf17f2b3cc86d3ca4445b7406f765d3f4157065a40d6ed63eec59bcf2d2feca9ce0107f2b235057027245e2046cbf041c014d1448b280425e78f307f2bc6674156b3874feb748c6d502bcdeae1bb8fc16

export const blogStore = writable([]);

// Funktion zum Aktualisieren des Stores mit Daten aus der API
export async function fetchDataFromAPI() {
	try {
		const response = await fetch('https://strapi.antiphil.de/api/blogposts');
		const data = await response.json();
		// Setze die Daten im Store
		blogStore.set(data);
	} catch (error) {
		console.error('Fehler beim Abrufen der Blog Daten:', error);
	}
}
fetchDataFromAPI();
