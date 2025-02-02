import { Observable } from '@nativescript/core';
import { Destination, sampleDestinations } from './models/destination';
import { Frame } from '@nativescript/core';

export class MainViewModel extends Observable {
    private _destinations: Destination[];
    private _searchQuery: string = '';
    private _selectedTabIndex: number = 0;
    private _mapUrl: string = 'https://www.openstreetmap.org/export/embed.html?bbox=-180,-90,180,90&layer=mapnik';
    private _userProfile = {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://example.com/avatar.jpg',
        reviews: []
    };

    constructor() {
        super();
        this._destinations = sampleDestinations;
    }

    get destinations(): Destination[] {
        return this._destinations;
    }

    get searchQuery(): string {
        return this._searchQuery;
    }

    get selectedTabIndex(): number {
        return this._selectedTabIndex;
    }

    get mapUrl(): string {
        return this._mapUrl;
    }

    get userProfile() {
        return this._userProfile;
    }

    set searchQuery(value: string) {
        if (this._searchQuery !== value) {
            this._searchQuery = value;
            this.notifyPropertyChange('searchQuery', value);
        }
    }

    onSearch() {
        if (!this._searchQuery) {
            this._destinations = sampleDestinations;
        } else {
            this._destinations = sampleDestinations.filter(dest => 
                dest.name.toLowerCase().includes(this._searchQuery.toLowerCase()) ||
                dest.description.toLowerCase().includes(this._searchQuery.toLowerCase())
            );
        }
        this.notifyPropertyChange('destinations', this._destinations);
    }

    onDestinationTap(args: any) {
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