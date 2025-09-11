import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST');
		return res.status(405).json({ error: 'Method Not Allowed' });
	}

	const { name, email, message } = req.body || {};
	if (!name || !email || !message) {
		return res.status(400).json({ error: 'Missing required fields' });
	}

	try {
		const subject = `New portfolio contact from ${name}`;
		const html = `
			<h2>New Message from Portfolio</h2>
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Message:</strong></p>
			<p>${(message as string).replace(/\n/g, '<br/>')}</p>
		`;

		await resend.emails.send({
			from: 'Portfolio Contact <onboarding@resend.dev>',
			to: ['hdharsh2799@gmail.com'],
			subject,
			html
		});

		return res.status(200).json({ ok: true });
	} catch (error: any) {
		console.error(error);
		return res.status(500).json({ error: 'Failed to send email' });
	}
}
