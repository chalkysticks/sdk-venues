import { ModelBase } from '@chalkysticks/sdk-core';
export default class ModelVenueMeta extends ModelBase {
    fields: string[];
    getGroup(): string;
    getKey(): string;
    getValue(): string;
}
