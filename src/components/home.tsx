import { useNavigate } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // TODO: Implement navigation to the next screen
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <WelcomeScreen onNavigate={handleNavigate} />
    </div>
  );
};

export default Home;
