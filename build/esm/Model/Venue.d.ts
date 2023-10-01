import * as Collection from '../Collection';
import { Model } from '@chalkysticks/sdk-core';
export declare class Venue extends Model.Base {
    endpoint: string;
    fields: string[];
    get detail(): Collection.VenueDetail;
    get media(): Collection.VenueMedia;
    get metadata(): Collection.VenueMeta;
    getAddress(): string;
    getCity(): string;
    getCountry(): string;
    getCreatedAt(): string;
    getDescription(): string;
    getLatitude(): number;
    getLongitude(): number;
    getName(): string;
    getNotes(): string;
    getPhone(): string;
    getSlug(): string;
    getState(): string;
    getStatus(): number;
    getType(): string;
    getUpdatedAt(): string;
    getWebsite(): string;
    getZip(): string;
}
