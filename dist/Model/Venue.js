"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
class ModelVenue extends sdk_core_1.ModelBase {
    constructor() {
        super(...arguments);
        this.endpoint = 'venue';
        this.fields = [
            'id',
            'name',
            'slug',
            'created_at',
            'updated_at',
        ];
    }
    getName() {
        return this.attr('name');
    }
    getSlug() {
        return this.attr('slug');
    }
}
exports.default = ModelVenue;
//# sourceMappingURL=Venue.js.map