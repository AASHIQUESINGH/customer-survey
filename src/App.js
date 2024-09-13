import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Survey from '../src/Component/Survey';
import ThankYouScreen from '../src/Component/ThankYouScreen';
import WelcomeScreen from '../src/Component/WelcomeScreen';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/thank-you" element={<ThankYouScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
