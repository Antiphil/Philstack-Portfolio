/* import Nodemailer from 'nodemailer';
import { render } from 'svelte-email';
import mailtemplate from '$lib/components/modules/mailtemplate.svelte';

export const actions = {
	sendmail: async ({ cookies, request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const lastname = data.get('lastname');
		const mail = data.get('mail');
		const message = data.get('message');

		const emailHtml = render({
			template: mailtemplate,
			props: {
				name: mail
			}
		});
		const options = {
			from: mail,
			to: 'stehle@mailbox.org',
			subject: 'Philstack Mail',
			html: emailHtml
		};
		try {
			console.log('try start');
			transporter.sendMail(options);
			console.log('try end');
		} catch {
			console.log('Sending mail failed');
		}
	}
};
 */
