import test from 'node:test';
import assert from 'node:assert/strict';
import { Collection, Model } from '../src';

// Setup
// ----------------------------------------------------------------------------

const collection: Collection.Venue = Collection.Venue.hydrate([
	{
		id: 1,
		created_at: '2016-02-10 17:34:40',
		name: 'Parlour',
		slug: 'parlour',
		status: 101,
		address: '250 W 86th St, New York, NY 10024, USA',
		city: 'New York',
		state: 'NY',
		country: 'US',
		zip: 10024,
		distance: null,
		type: 'bar',
		phone: '(212) 580-8923',
		phone_formatted: '(212) 580-8923',
		lat: 40.788383,
		lon: -73.977198,
		description: '',
		website: 'http://www.theparlour.com',
		notes: '',
		details: {
			data: [
				{
					id: 7095,
					group: 'details',
					key: 'has-food',
					value: 'Has Food',
				},
				{
					id: 7096,
					group: 'details',
					key: 'has-league',
					value: 'Has League',
				},
				{
					id: 7097,
					group: 'details',
					key: 'darts',
					value: 'Darts',
				},
			],
		},
		media: {
			data: [
				{
					id: 11,
					type: 'image',
					url: 'https://chalkysticks-cms.s3.amazonaws.com/parlour-brian.jpg',
					created_at: '2016-02-03 02:56:26',
					updated_at: '2016-02-03 02:56:26',
				},
				{
					id: 1055,
					type: 'image',
					url: 'https://chalkysticks-cms.s3.amazonaws.com/venue-photo-1-1576-lg.jpg',
					created_at: '2016-02-29 23:05:13',
					updated_at: '2016-02-29 23:05:13',
				},
			],
		},
		meta: {
			data: [
				{
					id: 19,
					group: 'basic',
					key: 'website',
					value: 'http://www.theparlour.com',
				},
			],
		},
	},
	{
		id: 2,
		created_at: '2016-02-10 17:34:40',
		name: 'Superfine',
		slug: 'superfine',
		status: 101,
		address: '126 Front St, Brooklyn, NY 11201, USA',
		city: 'Brooklyn',
		state: 'NY',
		country: 'US',
		zip: 11201,
		distance: null,
		type: 'bar',
		phone: '(646) 902-5859',
		phone_formatted: '(646) 902-5859',
		lat: 40.702237,
		lon: -73.987415,
		description: '',
		website: 'http://superfine.nyc',
		notes: '',
		details: {
			data: [
				{
					id: 24,
					group: 'details',
					key: 'has-food',
					value: 'Has Food',
				},
				{
					id: 25,
					group: 'details',
					key: '8-foot-table',
					value: "8' Table",
				},
				{
					id: 26,
					group: 'details',
					key: 'free-table',
					value: 'Free Table',
				},
			],
		},
		media: {
			data: [
				{
					id: 3,
					type: 'image',
					url: 'http://s3-media2.fl.yelpcdn.com/bphoto/MUZ_V8vO40rvw-4M8_mkkA/o.jpg',
					created_at: '2016-02-02 02:02:26',
					updated_at: '-0001-11-30 00:00:00',
				},
				{
					id: 4,
					type: 'image',
					url: 'http://s3-media4.fl.yelpcdn.com/bphoto/N3bsGWlrUrbra7M_9Vt03Q/o.jpg',
					created_at: '2016-02-02 02:02:26',
					updated_at: '-0001-11-30 00:00:00',
				},
				{
					id: 1081,
					type: 'image',
					url: 'https://chalkysticks-cms.s3.amazonaws.com/venue-photo-2-347-lg.jpg',
					created_at: '2016-03-01 07:57:48',
					updated_at: '2016-03-01 07:57:48',
				},
			],
		},
		meta: {
			data: [
				{
					id: 23,
					group: 'basic',
					key: 'website',
					value: 'http://superfine.nyc',
				},
			],
		},
	},
]);

test('Venue should have a name', () => {
	const model: Model.Venue = collection.at(1) as Model.Venue;

	assert.equal(model.getName(), 'Superfine', 'checking the name');
});
