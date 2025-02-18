import { Button } from "./ui/button";

interface WelcomeScreenProps {
  onNavigate?: () => void;
}

const WelcomeScreen = ({ onNavigate = () => {} }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to Karaoke
        </h1>
        <Button
          onClick={onNavigate}
          size="lg"
          className="bg-white text-blue-600 hover:bg-blue-50"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
