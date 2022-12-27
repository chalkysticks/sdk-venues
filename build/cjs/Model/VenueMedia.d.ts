import { ModelBase } from '@chalkysticks/sdk-core';
export default class ModelVenueMedia extends ModelBase {
    fields: string[];
    getType(): string;
    getUrl(): string;
    getCreatedAt(): string;
    getUpdatedAt(): string;
}
