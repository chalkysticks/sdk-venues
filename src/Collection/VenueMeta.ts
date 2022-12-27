import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelVenueMeta from '../Model/VenueMeta';

/**
 * @class CollectionVenueMeta
 * @package Collection
 * @project ChalkySticks SDK Venues
 */
export default class CollectionVenueMeta extends CollectionBase<ModelVenueMeta> {
    /**
     * Model object instantiated by this collection
     *
     * @type ModelVenueMeta
     */
    public model: ModelVenueMeta = new ModelVenueMeta();
}
