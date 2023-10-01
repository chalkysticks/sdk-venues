"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueMeta = void 0;
const sdk_core_1 = require("@chalkysticks/sdk-core");
class VenueMeta extends sdk_core_1.Model.Base {
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
exports.VenueMeta = VenueMeta;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVudWVNZXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL01vZGVsL1ZlbnVlTWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBK0M7QUFPL0MsTUFBYSxTQUFVLFNBQVEsZ0JBQUssQ0FBQyxJQUFJO0lBQXpDOztRQU1XLFdBQU0sR0FBYTtZQUN0QixJQUFJO1lBQ0osT0FBTztZQUNQLEtBQUs7WUFDTCxPQUFPO1NBQ1YsQ0FBQztJQTJCTixDQUFDO0lBbkJVLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFXLENBQUM7SUFDeEMsQ0FBQztJQUtNLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFXLENBQUM7SUFDdEMsQ0FBQztJQUtNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFXLENBQUM7SUFDeEMsQ0FBQztDQUdKO0FBdENELDhCQXNDQyJ9