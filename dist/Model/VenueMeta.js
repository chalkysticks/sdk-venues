"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
class ModelVenueMeta extends sdk_core_1.ModelBase {
    constructor() {
        super(...arguments);
        this.fields = [
            'id',
            'group',
            'key',
            'value',
        ];
    }
    getGroup() {
        return this.attr('group');
    }
    getKey() {
        return this.attr('key');
    }
    getValue() {
        return this.attr('value');
    }
}
exports.default = ModelVenueMeta;
//# sourceMappingURL=VenueMeta.js.map