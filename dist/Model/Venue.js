"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VenueDetail_1 = require("../Collection/VenueDetail");
const VenueMedia_1 = require("../Collection/VenueMedia");
const VenueMeta_1 = require("../Collection/VenueMeta");
const sdk_core_1 = require("@chalkysticks/sdk-core");
class ModelVenue extends sdk_core_1.ModelBase {
    constructor() {
        super(...arguments);
        this.endpoint = 'venue';
        this.fields = [
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
    }
    get detail() {
        return this.hasMany('details', VenueDetail_1.default);
    }
    get media() {
        return this.hasMany('media', VenueMedia_1.default);
    }
    get metadata() {
        return this.hasMany('meta', VenueMeta_1.default);
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
exports.default = ModelVenue;
//# sourceMappingURL=Venue.js.map