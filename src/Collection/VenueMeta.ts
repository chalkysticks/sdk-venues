import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';

/**
 * @class VenueMeta
 * @package Collection
 * @project ChalkySticks SDK Venues
 */
export class VenueMeta extends Collection.Base<Model.VenueMeta> {
    /**
     * Model object instantiated by this collection
     *
     * @type Model.VenueMeta
     */
    public model: Model.VenueMeta = new Model.VenueMeta();
}
