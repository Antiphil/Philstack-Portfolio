import { writable } from 'svelte/store';

const navOpen = writable(false);

function toggleNav() {
	navOpen.update((state) => !state);
}

export { navOpen, toggleNav };
