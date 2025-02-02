export const sampleDestinations = [
    {
        id: '1',
        name: 'Paris, France',
        description: 'The City of Light featuring iconic landmarks and rich culture',
        imageUrl: 'https://example.com/paris.jpg',
        attractions: [
            {
                name: 'Eiffel Tower',
                description: 'Iconic iron lattice tower on the Champ de Mars',
                imageUrl: 'https://example.com/eiffel.jpg',
                price: 25,
                location: {
                    latitude: 48.8584,
                    longitude: 2.2945,
                    address: 'Champ de Mars, 5 Avenue Anatole France'
                }
            }
        ],
        hotels: [
            {
                name: 'Le Grand Hotel',
                description: 'Luxury hotel in the heart of Paris',
                imageUrl: 'https://example.com/legrand.jpg',
                pricePerNight: 300,
                rating: 4.5,
                amenities: ['WiFi', 'Spa', 'Restaurant'],
                location: {
                    latitude: 48.8714,
                    longitude: 2.3077,
                    address: '2 Rue Scribe'
                }
            }
        ],
        restaurants: [
            {
                name: 'Le Petit Bistro',
                cuisine: 'French',
                priceRange: '$$$',
                rating: 4.8,
                location: {
                    latitude: 48.8647,
                    longitude: 2.3125,
                    address: '15 Rue de la Paix'
                }
            }
        ],
        estimatedCost: 200,
        reviews: [
            {
                userId: 'user1',
                rating: 5,
                comment: 'Amazing city!',
                date: new Date('2024-01-15')
            }
        ],
        localTips: [
            'Visit Montmartre early in the morning to avoid crowds',
            'Buy museum passes for better value'
        ]
    }
];
