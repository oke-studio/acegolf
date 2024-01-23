import Error from 'next/error';
import { NextResponse } from 'next/server';

export async function getAceQuery<T>(
	type:
		| 'activeMenu'
		| 'activePromotions'
		| 'activeHowItWorks'
		| 'activeEvents'
		| 'activeDate'
		| 'activePriceGrid',
): Promise<T> {
	const response = await fetch('/api/ace');

	if (!response.ok) {
		return Promise.reject(new Error({ statusCode: 404 }));
	}

	const data = await response.json();
	return data[type] as T;
}
