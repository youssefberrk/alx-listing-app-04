export interface CardProps {
    title: string;                // Title displayed on the card
    description: string;          // Description or subtitle
    imageUrl?: string;            // Optional image URL for the card
    onClick?: () => void;         // Optional callback function for card click events
}
export interface ButtonProps {
    label: string;                // Button text
    onClick: () => void;          // Callback function when the button is clicked
    variant?: 'primary' | 'secondary'; // Optional button style variant
}
// interfaces/index.ts

export interface GeoProps {
    lat: string;
    lng: string;
  }
  
  export interface AddressProps {
    state: string;
    city: string;
    country: string;
  }
  
  export interface OffersProps {
    bed: string;
    shower: string;
    occupants: string;
  }
  
  export interface PropertyProps {
    name: string;
    address: AddressProps;
    rating: number;
    category: string[];
    price: number;
    offers: OffersProps;
    image: string;
    discount: string;
  }
  
  export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
    {
      name: "Villa Ocean Breeze",
      address: {
        state: "Seminyak",
        city: "Bali",
        country: "Indonesia"
      },
      rating: 4.89,
      category: ["Luxury Villa", "Pool", "Free Parking"],
      price: 3200,
      offers: {
        bed: "3",
        shower: "3",
        occupants: "4-6"
      },
      image: "https://example.com/image1.jpg",
      discount: ""
    },
    {
      name: "Mountain Escape Chalet",
      address: {
        state: "Aspen",
        city: "Colorado",
        country: "USA"
      },
      rating: 4.70,
      category: ["Mountain View", "Fireplace", "Self Checkin"],
      price: 1800,
      offers: {
        bed: "4",
        shower: "2",
        occupants: "5-7"
      },
      image: "https://example.com/image2.jpg",
      discount: "30"
    },
    {
      name: "Cozy Desert Retreat",
      address: {
        state: "Palm Springs",
        city: "California",
        country: "USA"
      },
      rating: 4.92,
      category: ["Desert View", "Pet Friendly", "Self Checkin"],
      price: 1500,
      offers: {
        bed: "2",
        shower: "1",
        occupants: "2-3"
      },
      image: "https://example.com/image3.jpg",
      discount: ""
    },
    {
      name: "City Lights Penthouse",
      address: {
        state: "New York",
        city: "New York",
        country: "USA"
      },
      rating: 4.85,
      category: ["City View", "Free WiFi", "24h Checkin"],
      price: 4500,
      offers: {
        bed: "2",
        shower: "2",
        occupants: "2-4"
      },
      image: "https://example.com/image4.jpg",
      discount: "15"
    },
    // Add other properties...
  ];
  