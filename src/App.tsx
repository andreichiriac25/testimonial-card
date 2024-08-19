import "./App.css";

import avatarURL from "../public/img/profile-thumbnail.png";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";

function App() {
  return (
    <div className="app">
      <TestimonialCard
        firstName="Sarah"
        lastName="Dole"
        userName="sarahdole"
        avatarURL={avatarURL}
        description="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
      />
    </div>
  );
}

export default App;
