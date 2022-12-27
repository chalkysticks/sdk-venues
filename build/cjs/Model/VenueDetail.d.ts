import { ModelBase } from '@chalkysticks/sdk-core';
export default class ModelVenueDetail extends ModelBase {
    fields: string[];
    getGroup(): string;
    getKey(): string;
    getValue(): string;
}
