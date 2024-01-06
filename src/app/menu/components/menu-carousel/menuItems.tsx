export interface MenuItem {
  name: string;
  price: string;
  ingredients: string[];
}

interface Menu {
  option: 'Big Bites' | 'Small Bites' | 'Desert' | 'About the Kitchen';
  items: MenuItem[];
}

export const MenuOptions: Menu[] = [
  {
    option: 'Big Bites',
    items: [
      {
        name: 'Nori dusted Kettle Chips w/ Yuzu Kosho and Chive Sour Cream',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Rice Paper Slaw with sakura shrimp',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Tamarind Leche de Tigre with prawn chips',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Black Garlic Bruschetta w/ homemade riccota',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name:
          'Burrata w/ House chili crisp and Cucumber salad with black vinegar and Scallion pancake',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Build your own taco board',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: '5 spice duck breast',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Curry and salted egg fish taco',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Bun bo hue Taco',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
    ],
  },
  {
    option: 'Small Bites',
    items: [
      {
        name: 'Nori dusted Kettle Chips w/ Yuzu Kosho and Chive Sour Cream',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Rice Paper Slaw with sakura shrimp',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Tamarind Leche de Tigre with prawn chips',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Black Garlic Bruschetta w/ homemade riccota',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name:
          'Burrata w/ House chili crisp and Cucumber salad with black vinegar and Scallion pancake',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Build your own taco board',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: '5 spice duck breast',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Curry and salted egg fish taco',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Bun bo hue Taco',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
    ],
  },
  {
    option: 'Desert',
    items: [
      {
        name: 'Nori dusted Kettle Chips w/ Yuzu Kosho and Chive Sour Cream',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Rice Paper Slaw with sakura shrimp',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Tamarind Leche de Tigre with prawn chips',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Black Garlic Bruschetta w/ homemade riccota',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name:
          'Burrata w/ House chili crisp and Cucumber salad with black vinegar and Scallion pancake',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Build your own taco board',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: '5 spice duck breast',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Curry and salted egg fish taco',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
      {
        name: 'Bun bo hue Taco',
        price: '$50.00',
        ingredients: ['TOMATO SAUCE', ' BASIL', 'MOZZARELLA', 'PARMESAN'],
      },
    ],
  },
];
