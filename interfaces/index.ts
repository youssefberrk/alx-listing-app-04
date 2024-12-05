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
  