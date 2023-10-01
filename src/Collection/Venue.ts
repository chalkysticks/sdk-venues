import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';

/**
 * @class Venue
 * @package Collection
 * @project ChalkySticks SDK Venues
 */
export class Venue extends Collection.Base<Model.Venue> {
    /**
     * Endpoint key
     * e.g. https://api.chalkysticks.com/v1/venue
     *
     * @type string
     */
    public endpoint: string = 'venues';

    /**
     * Model object instantiated by this collection
     *
     * @type Model.Venue
     */
    public model: Model.Venue = new Model.Venue();
}
