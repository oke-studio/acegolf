import { TypeMenuItemFields, TypeMenuFields } from '@/types/contentful';

export type MenuItem = TypeMenuItemFields;

export const MENU_COLLECTIONS = [
	'smallBitesCollection',
	'bigBitesCollection',
	'dessertsCollection',
	'drinksCollection',
];

export const MENU_IMAGES = [
	'smallBitesImages',
	'bigBitesImages',
	'dessertsImages',
	'drinksImages',
];

export type MenuCollectionsType = keyof Pick<
	TypeMenuFields,
	| 'bigBitesCollection'
	| 'dessertsCollection'
	| 'drinksCollection'
	| 'smallBitesCollection'
>;

export type MenuImageType = keyof Pick<
	TypeMenuFields,
	'bigBitesImage' | 'dessertsImage' | 'drinksImage' | 'smallBitesImage'
>;

// export const MenuOptions: Menu[] = [
// 	{
// 		option: 'Big Bites',
// 		items: [
// 			{
// 				name: 'Nori dusted Kettle Chips w/ Yuzu Kosho and Chive Sour Cream',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Rice Paper Slaw with sakura shrimp',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Tamarind Leche de Tigre with prawn chips',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Black Garlic Bruschetta w/ homemade riccota',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name:
// 					'Burrata w/ House chili crisp and Cucumber salad with black vinegar and Scallion pancake',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Build your own taco board',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: '5 spice duck breast',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Curry and salted egg fish taco',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Bun bo hue Taco',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 		],
// 	},
// 	{
// 		option: 'Small Bites',
// 		items: [
// 			{
// 				name: 'Nori dusted Kettle Chips w/ Yuzu Kosho and Chive Sour Cream',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Rice Paper Slaw with sakura shrimp',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Tamarind Leche de Tigre with prawn chips',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Black Garlic Bruschetta w/ homemade riccota',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name:
// 					'Burrata w/ House chili crisp and Cucumber salad with black vinegar and Scallion pancake',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Build your own taco board',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: '5 spice duck breast',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Curry and salted egg fish taco',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Bun bo hue Taco',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 		],
// 	},
// 	{
// 		option: 'Desert',
// 		items: [
// 			{
// 				name: 'Nori dusted Kettle Chips w/ Yuzu Kosho and Chive Sour Cream',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Rice Paper Slaw with sakura shrimp',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Tamarind Leche de Tigre with prawn chips',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Black Garlic Bruschetta w/ homemade riccota',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name:
// 					'Burrata w/ House chili crisp and Cucumber salad with black vinegar and Scallion pancake',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Build your own taco board',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: '5 spice duck breast',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Curry and salted egg fish taco',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 			{
// 				name: 'Bun bo hue Taco',
// 				price: '$50.00',
// 				ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
// 			},
// 		],
// 	},
// ];
