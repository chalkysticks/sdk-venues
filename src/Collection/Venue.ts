import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelVenue from '../Model/Venue';

/**
 * @class CollectionVenue
 * @package Collection
 * @project ChalkySticks SDK Venues
 */
export default class CollectionVenue extends CollectionBase<ModelVenue> {
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
     * @type ModelVenue
     */
    public model: ModelVenue = new ModelVenue();
}
