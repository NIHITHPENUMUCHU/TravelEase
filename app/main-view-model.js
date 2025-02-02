import { Observable } from '@nativescript/core';
import { sampleDestinations } from './models/destination';
import { Frame } from '@nativescript/core';
export class MainViewModel extends Observable {
    constructor() {
        super();
        this._searchQuery = '';
        this._selectedTabIndex = 0;
        this._mapUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=-180,-90,180,90&layer=mapnik';
        this._userProfile = {
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://example.com/avatar.jpg',
            reviews: []
        };
        this._destinations = sampleDestinations;
    }
    get destinations() {
        return this._destinations;
    }
    get searchQuery() {
        return this._searchQuery;
    }
    get selectedTabIndex() {
        return this._selectedTabIndex;
    }
    get mapUrl() {
        return this._mapUrl;
    }
    get userProfile() {
        return this._userProfile;
    }
    set searchQuery(value) {
        if (this._searchQuery !== value) {
            this._searchQuery = value;
            this.notifyPropertyChange('searchQuery', value);
        }
    }
    onSearch() {
        if (!this._searchQuery) {
            this._destinations = sampleDestinations;
        }
        else {
            this._destinations = sampleDestinations.filter(dest => dest.name.toLowerCase().includes(this._searchQuery.toLowerCase()) ||
                dest.description.toLowerCase().includes(this._searchQuery.toLowerCase()));
        }
        this.notifyPropertyChange('destinations', this._destinations);
    }
    onDestinationTap(args) {
        const destination = this._destinations[args.index];
        Frame.topmost().navigate({
            moduleName: 'views/destination-detail-page',
            context: destination
        });
    }
    showItinerary() {
        Frame.topmost().navigate({
            moduleName: 'views/itinerary-page'
        });
    }
    editProfile() {
        // TODO: Implement profile editing
        console.log('Editing profile...');
    }
}
