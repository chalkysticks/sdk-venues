import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelVenueMedia from '../Model/VenueMedia';

/**
 * @class CollectionVenueMedia
 * @package Collection
 * @project ChalkySticks SDK Venues
 */
export default class CollectionVenueMedia extends CollectionBase<ModelVenueMedia> {
    /**
     * Model object instantiated by this collection
     *
     * @type ModelVenueMedia
     */
    public model: ModelVenueMedia = new ModelVenueMedia();
}
