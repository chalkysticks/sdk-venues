import { ModelBase } from '@chalkysticks/sdk-core';
export default class ModelVenueDetail extends ModelBase {
    fields = [
        'id',
        'group',
        'key',
        'value',
    ];
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
//# sourceMappingURL=VenueDetail.js.map