"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
const VenueMedia_1 = require("../Model/VenueMedia");
class CollectionVenueMedia extends sdk_core_1.CollectionBase {
    constructor() {
        super(...arguments);
        this.model = VenueMedia_1.default;
    }
}
exports.default = CollectionVenueMedia;
//# sourceMappingURL=VenueMedia.js.map