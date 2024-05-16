import type { PageLoad } from './$types';
import { i18nObject } from '$i18n/i18n-util';

export const load: PageLoad = async ({ parent }: any) => {
	// wait for `+layout.ts` to load dictionary and pass locale information
	const { locale } = await parent();
	// if you need to output a localized string in a `load` function,
	// you always need to create a new `i18nObject` instance in each `load` function
	// to not run into shared server state issues
	const LL = i18nObject(locale);

	console.info(LL.log({ fileName: '+page.ts' }));

	return {
		title: LL.title({ year: 2021 })
	};
};