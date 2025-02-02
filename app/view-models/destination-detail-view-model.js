import { Observable } from '@nativescript/core';
export class DestinationDetailViewModel extends Observable {
    constructor(destination) {
        super();
        this._destination = destination;
    }
    get destination() {
        return this._destination;
    }
    addToItinerary() {
        // TODO: Implement itinerary functionality
        console.log(`Adding ${this._destination.name} to itinerary`);
    }
}
