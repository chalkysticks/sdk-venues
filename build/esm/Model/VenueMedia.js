import { Model } from '@chalkysticks/sdk-core';
export class VenueMedia extends Model.Base {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVudWVNZWRpYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2RlbC9WZW51ZU1lZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU8vQyxNQUFNLE9BQU8sVUFBVyxTQUFRLEtBQUssQ0FBQyxJQUFJO0lBQTFDOztRQU1XLFdBQU0sR0FBYTtZQUN0QixJQUFJO1lBQ0osTUFBTTtZQUNOLEtBQUs7WUFDTCxZQUFZO1lBQ1osWUFBWTtTQUNmLENBQUM7SUFtQ04sQ0FBQztJQTFCVSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFLTSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFLTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBVyxDQUFDO0lBQzdDLENBQUM7SUFLTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBVyxDQUFDO0lBQzdDLENBQUM7Q0FHSiJ9