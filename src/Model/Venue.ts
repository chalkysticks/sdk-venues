import * as Collection from '../Collection';
import { Model } from '@chalkysticks/sdk-core';

/**
 * @class Venue
 * @package Model
 * @project ChalkySticks SDK Venues
 */
export class Venue extends Model.Base {
    /**
     * Endpoint key
     * e.g. https://api.chalkysticks.com/v3/venue
     *
     * @type string
     */
    public endpoint: string = 'venues';

    /**
     * List of fields available
     *
     * @type string[]
     */
    public fields: string[] = [
        'id',
        'name',
        'slug',
        'description',
        'website',
        'phone',
        'notes',
        'status',
        'address',
        'city',
        'state',
        'country',
        'zip',
        'type',
        'lat',
        'long',
        'created_at',
        'updated_at',
    ];

    // region: Relationships
    // ---------------------------------------------------------------------------

    public get detail(): Collection.VenueDetail {
        return this.hasMany('details', Collection.VenueDetail);
    }

    public get media(): Collection.VenueMedia {
        return this.hasMany('media', Collection.VenueMedia);
    }

    public get metadata(): Collection.VenueMeta {
        return this.hasMany('meta', Collection.VenueMeta);
    }

    // endregion: Relationships

    // region: Getters
    // ---------------------------------------------------------------------------

    /**
     * @return string
     */
    public getAddress(): string {
        return this.attr('address') as string;
    }

    /**
     * @return string
     */
    public getCity(): string {
        return this.attr('city') as string;
    }

    /**
     * @return string
     */
    public getCountry(): string {
        return this.attr('country') as string;
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
    public getDescription(): string {
        return this.attr('description') as string;
    }

    /**
     * @return number
     */
    public getLatitude(): number {
        return parseFloat(this.attr('lat') as string);
    }

    /**
     * @return number
     */
    public getLongitude(): number {
        return parseFloat(this.attr('lon') as string);
    }

    /**
     * @return string
     */
    public getName(): string {
        return this.attr('name') as string;
    }

    /**
     * @return string
     */
    public getNotes(): string {
        return this.attr('notes') as string;
    }

    /**
     * @return string
     */
    public getPhone(): string {
        return this.attr('phone') as string;
    }

    /**
     * @return string
     */
    public getSlug(): string {
        return this.attr('slug') as string;
    }

    /**
     * @return string
     */
    public getState(): string {
        return this.attr('state') as string;
    }

    /**
     * @return string
     */
    public getStatus(): number {
        return parseFloat(this.attr('status') as string);
    }

    /**
     * @return string
     */
    public getType(): string {
        return this.attr('type') as string;
    }

    /**
     * @return string
     */
    public getUpdatedAt(): string {
        return this.attr('updated_at') as string;
    }

    /**
     * @return string
     */
    public getWebsite(): string {
        return this.attr('website') as string;
    }

    /**
     * @return string
     */
    public getZip(): string {
        return this.attr('zip') as string;
    }

    // endregion: Getters
}
