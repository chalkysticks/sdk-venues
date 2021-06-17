import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelVenueMedia from '../Model/VenueMedia';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ CollectionVenueMedia                                                       │
 * │                                                                            │
 * │ @namespace Collection                                                      │
 * │ @package   SDK-Venues                                                      │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class CollectionVenueMedia extends CollectionBase {
    /**
     * Model object instantiated by this collection
     *
     * @type ModelVenueMedia
     */
    public model: any = ModelVenueMedia;
}
