import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelVenueMeta from '../Model/VenueMeta';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ CollectionVenueMeta                                                        │
 * │                                                                            │
 * │ @namespace Collection                                                      │
 * │ @package   SDK-Venues                                                      │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class CollectionVenueMeta extends CollectionBase {
    /**
     * Model object instantiated by this collection
     *
     * @type ModelVenueMeta
     */
    public model: any = ModelVenueMeta;
}
