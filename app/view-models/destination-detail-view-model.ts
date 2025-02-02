import { Observable } from '@nativescript/core';
import { Destination } from '../models/destination';

export class DestinationDetailViewModel extends Observable {
    private _destination: Destination;

    constructor(destination: Destination) {
        super();
        this._destination = destination;
    }

    get destination(): Destination {
        return this._destination;
    }

    addToItinerary() {
        // TODO: Implement itinerary functionality
        console.log(`Adding ${this._destination.name} to itinerary`);
    }
}