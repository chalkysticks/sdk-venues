import { ModelBase } from '@chalkysticks/sdk-core';
export default class ModelVenueMedia extends ModelBase {
    fields = [
        'id',
        'type',
        'url',
        'created_at',
        'updated_at',
    ];
    getType() {
        return this.attr('type');
    }
    getUrl() {
        return this.attr('url');
    }
    getCreatedAt() {
        return this.attr('created_at');
    }
    getUpdatedAt() {
        return this.attr('updated_at');
    }
}
//# sourceMappingURL=VenueMedia.js.map