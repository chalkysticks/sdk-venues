import * as Collection from '../Collection';
import { Model } from '@chalkysticks/sdk-core';
export class Venue extends Model.Base {
    constructor() {
        super(...arguments);
        this.endpoint = 'venues';
        this.fields = [
            'id',
            'name',
            'slug',
            'description',
            'website',
            'phone',
            'notes',
            'status',
            'address',
            'city',
            'state',
            'country',
            'zip',
            'type',
            'lat',
            'long',
            'created_at',
            'updated_at',
        ];
    }
    get detail() {
        return this.hasMany('details', Collection.VenueDetail);
    }
    get media() {
        return this.hasMany('media', Collection.VenueMedia);
    }
    get metadata() {
        return this.hasMany('meta', Collection.VenueMeta);
    }
    getAddress() {
        return this.attr('address');
    }
    getCity() {
        return this.attr('city');
    }
    getCountry() {
        return this.attr('country');
    }
    getCreatedAt() {
        return this.attr('created_at');
    }
    getDescription() {
        return this.attr('description');
    }
    getLatitude() {
        return parseFloat(this.attr('lat'));
    }
    getLongitude() {
        return parseFloat(this.attr('lon'));
    }
    getName() {
        return this.attr('name');
    }
    getNotes() {
        return this.attr('notes');
    }
    getPhone() {
        return this.attr('phone');
    }
    getSlug() {
        return this.attr('slug');
    }
    getState() {
        return this.attr('state');
    }
    getStatus() {
        return parseFloat(this.attr('status'));
    }
    getType() {
        return this.attr('type');
    }
    getUpdatedAt() {
        return this.attr('updated_at');
    }
    getWebsite() {
        return this.attr('website');
    }
    getZip() {
        return this.attr('zip');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVudWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTW9kZWwvVmVudWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLFVBQVUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTy9DLE1BQU0sT0FBTyxLQUFNLFNBQVEsS0FBSyxDQUFDLElBQUk7SUFBckM7O1FBT1csYUFBUSxHQUFXLFFBQVEsQ0FBQztRQU81QixXQUFNLEdBQWE7WUFDdEIsSUFBSTtZQUNKLE1BQU07WUFDTixNQUFNO1lBQ04sYUFBYTtZQUNiLFNBQVM7WUFDVCxPQUFPO1lBQ1AsT0FBTztZQUNQLFFBQVE7WUFDUixTQUFTO1lBQ1QsTUFBTTtZQUNOLE9BQU87WUFDUCxTQUFTO1lBQ1QsS0FBSztZQUNMLE1BQU07WUFDTixLQUFLO1lBQ0wsTUFBTTtZQUNOLFlBQVk7WUFDWixZQUFZO1NBQ2YsQ0FBQztJQThJTixDQUFDO0lBeklHLElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQVVNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFXLENBQUM7SUFDMUMsQ0FBQztJQUtNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFXLENBQUM7SUFDdkMsQ0FBQztJQUtNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFXLENBQUM7SUFDMUMsQ0FBQztJQUtNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFXLENBQUM7SUFDN0MsQ0FBQztJQUtNLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBVyxDQUFDO0lBQzlDLENBQUM7SUFLTSxXQUFXO1FBQ2QsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFLTSxZQUFZO1FBQ2YsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFLTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFLTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFLTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFLTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFLTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFLTSxTQUFTO1FBQ1osT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFLTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFLTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBVyxDQUFDO0lBQzdDLENBQUM7SUFLTSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBVyxDQUFDO0lBQzFDLENBQUM7SUFLTSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBVyxDQUFDO0lBQ3RDLENBQUM7Q0FHSiJ9