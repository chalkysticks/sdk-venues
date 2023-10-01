"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueMedia = void 0;
const sdk_core_1 = require("@chalkysticks/sdk-core");
class VenueMedia extends sdk_core_1.Model.Base {
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
exports.VenueMedia = VenueMedia;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVudWVNZWRpYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2RlbC9WZW51ZU1lZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUErQztBQU8vQyxNQUFhLFVBQVcsU0FBUSxnQkFBSyxDQUFDLElBQUk7SUFBMUM7O1FBTVcsV0FBTSxHQUFhO1lBQ3RCLElBQUk7WUFDSixNQUFNO1lBQ04sS0FBSztZQUNMLFlBQVk7WUFDWixZQUFZO1NBQ2YsQ0FBQztJQW1DTixDQUFDO0lBMUJVLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFXLENBQUM7SUFDdkMsQ0FBQztJQUtNLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFXLENBQUM7SUFDdEMsQ0FBQztJQUtNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFXLENBQUM7SUFDN0MsQ0FBQztJQUtNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFXLENBQUM7SUFDN0MsQ0FBQztDQUdKO0FBL0NELGdDQStDQyJ9