import CollectionVenueDetail from '../Collection/VenueDetail';
import CollectionVenueMedia from '../Collection/VenueMedia';
import CollectionVenueMeta from '../Collection/VenueMeta';
import { ModelBase } from '@chalkysticks/sdk-core';
export default class ModelVenue extends ModelBase {
    endpoint: string;
    fields: string[];
    get detail(): CollectionVenueDetail;
    get media(): CollectionVenueMedia;
    get metadata(): CollectionVenueMeta;
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
