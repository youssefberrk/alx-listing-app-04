import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { UI_TEXT } from '@/constants';
import Image from "next/image"; // Import Image from Next.js to optimize image loading
import heroBg from "../public/images/hero-bg.jpg"; // Import your background image
import FilterSection from '@/components/common/FilterSection'; // Import the FilterSection component
import { PROPERTYLISTINGSAMPLE } from '@/constants'; // Import PROPERTYLISTINGSAMPLE

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl text-center">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <FilterSection />

      {/* Property Listings Section */}
      <div className="w-full px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Explore Our Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <Card key={property.name} className="max-w-xs mx-auto">
              <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${property.image})` }} />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{property.name}</h3>
                <p className="text-sm text-gray-600">{`${property.address.city}, ${property.address.country}`}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">⭐ {property.rating}</span>
                </div>
                <p className="mt-2 text-lg font-semibold">{`$${property.price} / night`}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Call-to-action Button */}
      <Button label={UI_TEXT.BUTTON_LABEL_PLACEHOLDER} onClick={() => alert('Button clicked!')} />
    </div>
  );
};

export default Home;
