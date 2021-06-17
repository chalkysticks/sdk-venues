"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
const VenueMeta_1 = require("../Model/VenueMeta");
class CollectionVenueMeta extends sdk_core_1.CollectionBase {
    constructor() {
        super(...arguments);
        this.model = VenueMeta_1.default;
    }
}
exports.default = CollectionVenueMeta;
//# sourceMappingURL=VenueMeta.js.map