import { ModelBase } from '@chalkysticks/sdk-core';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ ModelVenue                                                                 │
 * │                                                                            │
 * │ @namespace Model                                                           │
 * │ @package   SDK-Venue                                                       │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class ModelVenue extends ModelBase {
    /**
     * Endpoint key
     * e.g. https://api.chalkysticks.com/v3/venue
     *
     * @type string
     */
    public endpoint: string = 'venue';

    /**
     * List of fields available
     *
     * @type string[]
     */
    public fields: string[] = [
        'id',
        'name',
        'slug',
        'created_at',
        'updated_at',
    ];


    // region: Getters
    // ---------------------------------------------------------------------------

    /**
     * Get Venue's name
     *
     * @return string
     */
    public getName(): string {
        return this.attr('name') as string;
    }

    /**
     * Get Venue's slug
     *
     * @return string
     */
    public getSlug(): string {
        return this.attr('slug') as string;
    }

    // endregion: Getters

}
