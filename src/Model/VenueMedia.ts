import { ModelBase } from '@chalkysticks/sdk-core';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ ModelVenueMedia                                                            │
 * │                                                                            │
 * │ @namespace Model                                                           │
 * │ @package   SDK-Venue                                                       │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class ModelVenueMedia extends ModelBase {
    /**
     * List of fields available
     *
     * @type string[]
     */
    public fields: string[] = [
        'id',
        'type',
        'url',
        'created_at',
        'updated_at',
    ];


    // region: Getters
    // ---------------------------------------------------------------------------

    /**
     * @return string
     */
    public getType(): string {
        return this.attr('type') as string;
    }

    /**
     * @return string
     */
    public getUrl(): string {
        return this.attr('url') as string;
    }

    /**
     * @return string
     */
    public getCreatedAt(): string {
        return this.attr('created_at') as string;
    }

    /**
     * @return string
     */
    public getUpdatedAt(): string {
        return this.attr('updated_at') as string;
    }

    // endregion: Getters

}
