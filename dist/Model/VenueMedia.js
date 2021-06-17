"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
class ModelVenueMedia extends sdk_core_1.ModelBase {
    constructor() {
        super(...arguments);
        this.fields = [
            'id',
            'type',
            'url',
            'created_at',
            'updated_at',
        ];
    }
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
exports.default = ModelVenueMedia;
//# sourceMappingURL=VenueMedia.js.map