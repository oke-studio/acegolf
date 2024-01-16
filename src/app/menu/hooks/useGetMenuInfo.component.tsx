import { google } from 'googleapis';
import { NextApiHandler, NextApiResponse } from 'next';

export default async function useGetMenuInfo(
	req: NextApiHandler,
	res: NextApiResponse,
) {
	console.log('here');
	try {
		const auth = new google.auth.GoogleAuth({
			// credentials: {
			//   client_email: process.env.GOOGLE_CLIENT_EMAIL,
			//   private_key: process.env.GOOGLE_PRIVATE_KEYS?.replace(/\\n/g, '\n'),
			// },
			keyFile: '../../../secrets.json',
			scopes: ['https://www.googleapis.com/spreadsheets'],
		});

		const sheets = google.sheets({
			auth,
			version: 'v4',
		});

		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
		});

		return res.status(200).json({ data: response.data });

		console.log(response.data);

		console.log(auth);

		// console.log(
		//   await sheets.spreadsheets.values.get({
		//     spreadsheetId: process.env.GOOGLE_SHEET_ID,
		//   }),
		// );
		// console.log('here>>');
	} catch (e) {
		return res.status(500).send({ message: 'Something went wrong' });
	}
}
