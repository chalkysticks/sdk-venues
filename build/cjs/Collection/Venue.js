"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
const Venue_1 = require("../Model/Venue");
class CollectionVenue extends sdk_core_1.CollectionBase {
    constructor() {
        super(...arguments);
        this.endpoint = 'venues';
        this.model = new Venue_1.default();
    }
}
exports.default = CollectionVenue;
//# sourceMappingURL=Venue.js.map