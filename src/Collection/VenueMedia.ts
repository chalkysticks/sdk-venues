import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';

/**
 * @class VenueMedia
 * @package Collection
 * @project ChalkySticks SDK Venues
 */
export class VenueMedia extends Collection.Base<Model.VenueMedia> {
    /**
     * Model object instantiated by this collection
     *
     * @type Model.VenueMedia
     */
    public model: Model.VenueMedia = new Model.VenueMedia();
}
