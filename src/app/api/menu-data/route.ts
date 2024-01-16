import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import path from 'path';

import { JWT, GoogleAuth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import Error from 'next/error';

import cred from '../../../../secrets.json';

export async function GET(request: Request) {
	// const header = {
	//   alg: 'RS256',
	//   typ: 'JWT',
	// };

	// const claimSet = {
	//   iss: cred.client_email,
	//   iat: 1328554385,
	//   exp: 1328550785,
	//   aud: 'https://oauth2.googleapis.com/token',
	//   scope: 'https://www.googleapis.com/auth/spreadsheets.read_only',
	// };

	// function toBase64URL(json) {
	//   const jsonString = JSON.stringify(json);
	//   const btyeArray = Buffer.from(jsonString);
	//   return btyeArray
	//     .toString('base64')
	//     .replace(/\+/g, '-')
	//     .replace(/\//g, '_')
	//     .replace(/=/g, '');
	// }

	// const encodedHeader = toBase64URL(header);
	// const encodedClaimSet = toBase64URL(claimSet);

	// const res = await fetch('https://oauth2.googleapis.com/token', {
	//   method: 'POST',
	//   headers: {
	//     'Content-Type': 'application/x-www-form-urlencoded',
	//     'grant-type':
	//       'urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3NjEzMjY3OTgwNjktcjVtbGpsbG4xcmQ0bHJiaGc3NWVmZ2lncDM2bTc4ajVAZGV2ZWxvcGVyLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvcHJlZGljdGlvbiIsImF1ZCI6Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi90b2tlbiIsImV4cCI6MTMyODU3MzM4MSwiaWF0IjoxMzI4NTY5NzgxfQ.ixOUGehweEVX_UKXv5BbbwVEdcz6AYS-6uQV6fGorGKrHf3LIJnyREw9evE-gs2bmMaQI5_UbabvI4k-mQE4kBqtmSpTzxYBL1TCd7Kv5nTZoUC1CmwmWCFqT9RE6D7XSgPUh_jF1qskLa2w0rxMSjwruNKbysgRNctZPln7cqQ',
	//   },
	// });

	const auth = new GoogleAuth({
		scopes: 'https://www.googleapis.com/auth/spreadsheets.read_only',
		clientOptions: {
			lifetime: 50000,
		},
	});

	// const client = await auth.getClient();
	// const token = await client.getAccessToken();

	// const req = await auth.getIdTokenClient(
	//   'https://oauth2.googleapis.com/token',
	// );

	// const authURL = req.generateAuthUrl({
	//   access_type: 'offline',
	//   scope: ['https://www.googleapis.com/auth/spreadsheets.read_only'],
	//   client_id: cred.client_id,
	//   redirect_uri: 'https://localhost:3000',
	// });

	google.sheets('v4').spreadsheets.values.get(
		{
			auth,
			spreadsheetId: process.env.SHEET_ID,
			range: 'Food Menu',
		},
		(err, res) => {
			console.log('here', err);
		},
	);

	// const token = req.getAccessToken((err, res) => {
	//   if (err) {
	//     console.log('her', err);
	//     throw err;
	//   }

	//   console.log(res);
	// });
	// const prxojectId = await auth.getProjectId();
	// const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
	// const res = await client.request({ url });
	return NextResponse.json({ data: 'hi' });
}

type SheetsTab = {
	animal: string;
};
