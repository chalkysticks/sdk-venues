"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueDetail = void 0;
const sdk_core_1 = require("@chalkysticks/sdk-core");
class VenueDetail extends sdk_core_1.Model.Base {
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
exports.VenueDetail = VenueDetail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVudWVEZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTW9kZWwvVmVudWVEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQStDO0FBTy9DLE1BQWEsV0FBWSxTQUFRLGdCQUFLLENBQUMsSUFBSTtJQUEzQzs7UUFNVyxXQUFNLEdBQWE7WUFDdEIsSUFBSTtZQUNKLE9BQU87WUFDUCxLQUFLO1lBQ0wsT0FBTztTQUNWLENBQUM7SUEyQk4sQ0FBQztJQW5CVSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFLTSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFLTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBVyxDQUFDO0lBQ3hDLENBQUM7Q0FHSjtBQXRDRCxrQ0FzQ0MifQ==