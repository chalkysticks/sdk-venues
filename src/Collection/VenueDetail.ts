import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';

/**
 * @class VenueDetail
 * @package Collection
 * @project ChalkySticks SDK Venues
 */
export class VenueDetail extends Collection.Base<Model.VenueDetail> {
    /**
     * Model object instantiated by this collection
     *
     * @type Model.VenueDetail
     */
    public model: Model.VenueDetail = new Model.VenueDetail();
}
