import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'collection-selector',
	name: 'Collection Selector',
	icon: 'database',
	description: 'Select collection from the database(string based).',
	component: InterfaceComponent,
	options: [
		{
			field: 'starts_with',
			type: 'string',
			name: 'Starts With',
			meta: {
				interface: 'input',
				width: 'full',
				options: {
					placeholder: 'example_',
				},
				note: "Filter collections based on prefix string. Keep blank for listing all collections."
			},
		},
	],
	types: ['string'],
});
