import { ModelBase } from '@chalkysticks/sdk-core';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ ModelVenueDetail                                                           │
 * │                                                                            │
 * │ @namespace Model                                                           │
 * │ @package   SDK-Venue                                                       │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class ModelVenueDetail extends ModelBase {
    /**
     * List of fields available
     *
     * @type string[]
     */
    public fields: string[] = [
        'id',
        'group',
        'key',
        'value',
    ];


    // region: Getters
    // ---------------------------------------------------------------------------

    /**
     * @return string
     */
    public getGroup(): string {
        return this.attr('group') as string;
    }

    /**
     * @return string
     */
    public getKey(): string {
        return this.attr('key') as string;
    }

    /**
     * @return string
     */
    public getValue(): string {
        return this.attr('value') as string;
    }

    // endregion: Getters

}