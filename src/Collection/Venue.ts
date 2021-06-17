import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelVenue from '../Model/Venue';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ CollectionVenue                                                            │
 * │                                                                            │
 * │ @namespace Collection                                                      │
 * │ @package   SDK-Venues                                                      │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class CollectionVenue extends CollectionBase {
    /**
     * Endpoint key
     * e.g. https://api.chalkysticks.com/v1/venue
     *
     * @type string
     */
    public endpoint: string = 'venue';

    /**
     * Model object instantiated by this collection
     *
     * @type ModelVenue
     */
    public model: any = ModelVenue;
}
