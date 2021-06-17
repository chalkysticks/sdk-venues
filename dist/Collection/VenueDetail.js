"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
const VenueDetail_1 = require("../Model/VenueDetail");
class CollectionVenueDetail extends sdk_core_1.CollectionBase {
    constructor() {
        super(...arguments);
        this.model = VenueDetail_1.default;
    }
}
exports.default = CollectionVenueDetail;
//# sourceMappingURL=VenueDetail.js.map