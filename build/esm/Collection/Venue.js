import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';
export class Venue extends Collection.Base {
    constructor() {
        super(...arguments);
        this.endpoint = 'venues';
        this.model = new Model.Venue();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVudWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29sbGVjdGlvbi9WZW51ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLENBQUM7QUFPbEMsTUFBTSxPQUFPLEtBQU0sU0FBUSxVQUFVLENBQUMsSUFBaUI7SUFBdkQ7O1FBT1csYUFBUSxHQUFXLFFBQVEsQ0FBQztRQU81QixVQUFLLEdBQWdCLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xELENBQUM7Q0FBQSJ9