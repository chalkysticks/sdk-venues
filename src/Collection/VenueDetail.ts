import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelVenueDetail from '../Model/VenueDetail';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ CollectionVenueDetail                                                      │
 * │                                                                            │
 * │ @namespace Collection                                                      │
 * │ @package   SDK-Venues                                                      │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class CollectionVenueDetail extends CollectionBase {
    /**
     * Model object instantiated by this collection
     *
     * @type ModelVenueDetail
     */
    public model: any = ModelVenueDetail;
}
