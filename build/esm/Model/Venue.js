import CollectionVenueDetail from '../Collection/VenueDetail';
import CollectionVenueMedia from '../Collection/VenueMedia';
import CollectionVenueMeta from '../Collection/VenueMeta';
import { ModelBase } from '@chalkysticks/sdk-core';
export default class ModelVenue extends ModelBase {
    endpoint = 'venues';
    fields = [
        'id',
        'name',
        'slug',
        'description',
        'website',
        'phone',
        'notes',
        'status',
        'address',
        'city',
        'state',
        'country',
        'zip',
        'type',
        'lat',
        'long',
        'created_at',
        'updated_at',
    ];
    get detail() {
        return this.hasMany('details', CollectionVenueDetail);
    }
    get media() {
        return this.hasMany('media', CollectionVenueMedia);
    }
    get metadata() {
        return this.hasMany('meta', CollectionVenueMeta);
    }
    getAddress() {
        return this.attr('address');
    }
    getCity() {
        return this.attr('city');
    }
    getCountry() {
        return this.attr('country');
    }
    getCreatedAt() {
        return this.attr('created_at');
    }
    getDescription() {
        return this.attr('description');
    }
    getLatitude() {
        return parseFloat(this.attr('lat'));
    }
    getLongitude() {
        return parseFloat(this.attr('lon'));
    }
    getName() {
        return this.attr('name');
    }
    getNotes() {
        return this.attr('notes');
    }
    getPhone() {
        return this.attr('phone');
    }
    getSlug() {
        return this.attr('slug');
    }
    getState() {
        return this.attr('state');
    }
    getStatus() {
        return parseFloat(this.attr('status'));
    }
    getType() {
        return this.attr('type');
    }
    getUpdatedAt() {
        return this.attr('updated_at');
    }
    getWebsite() {
        return this.attr('website');
    }
    getZip() {
        return this.attr('zip');
    }
}
//# sourceMappingURL=Venue.js.map