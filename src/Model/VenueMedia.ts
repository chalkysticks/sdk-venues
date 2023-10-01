import { Model } from '@chalkysticks/sdk-core';

/**
 * @class VenueMedia
 * @package Model
 * @project ChalkySticks SDK Venues
 */
export class VenueMedia extends Model.Base {
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
	 * e.g. image, video
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
