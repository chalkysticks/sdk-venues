import { Model } from '@chalkysticks/sdk-core';
export class VenueDetail extends Model.Base {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVudWVEZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTW9kZWwvVmVudWVEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTy9DLE1BQU0sT0FBTyxXQUFZLFNBQVEsS0FBSyxDQUFDLElBQUk7SUFBM0M7O1FBTVcsV0FBTSxHQUFhO1lBQ3RCLElBQUk7WUFDSixPQUFPO1lBQ1AsS0FBSztZQUNMLE9BQU87U0FDVixDQUFDO0lBMkJOLENBQUM7SUFuQlUsUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQVcsQ0FBQztJQUN4QyxDQUFDO0lBS00sTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQVcsQ0FBQztJQUN0QyxDQUFDO0lBS00sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQVcsQ0FBQztJQUN4QyxDQUFDO0NBR0oifQ==