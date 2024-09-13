import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className='card' >
      <h1  className='text-center'>Welcome to Our Survey</h1>
      <div className='btn-center'>
      <button onClick={() => navigate('/survey')} className='btn-start'>Start Survey</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
