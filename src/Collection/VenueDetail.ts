import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelVenueDetail from '../Model/VenueDetail';

/**
 * @class CollectionVenueDetail
 * @package Collection
 * @project ChalkySticks SDK Venues
 */
export default class CollectionVenueDetail extends CollectionBase<ModelVenueDetail> {
    /**
     * Model object instantiated by this collection
     *
     * @type ModelVenueDetail
     */
    public model: ModelVenueDetail = new ModelVenueDetail();
}
