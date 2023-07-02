import { writable } from 'svelte/store';

export const navOpen = writable(false);

export function toggleNav() {
	navOpen.update((value) => !value);
}
