import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { UI_TEXT } from '@/constants';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-6">{UI_TEXT.CARD_TITLE_PLACEHOLDER}</h1>
      <Card
        title="Modern Apartment"
        description="A beautiful and spacious apartment in the city center."
        imageUrl="/assets/property.jpg"
      />
      <Button label={UI_TEXT.BUTTON_LABEL_PLACEHOLDER} onClick={() => alert('Button clicked!')} />
    </div>
  );
};

export default Home;
