import { writable } from 'svelte/store';

export const navOpen = writable(false);

//write a function to toggle the navOpen store
export function toggleNav() {
	navOpen.update((value) => !value);
}
