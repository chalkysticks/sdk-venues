import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelVenue from '../Model/Venue';
export default class CollectionVenue extends CollectionBase<ModelVenue> {
    endpoint: string;
    model: ModelVenue;
}
