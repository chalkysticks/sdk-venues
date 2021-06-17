import { ModelBase } from '@chalkysticks/sdk-core';
export default class ModelVenue extends ModelBase {
    endpoint: string;
    fields: string[];
    getName(): string;
    getSlug(): string;
}
