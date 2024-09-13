import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='card'>
      <h1 className='card-btn'>Thank you for your time!</h1>
      <p className='card-btn'>You will be redirected to the welcome screen shortly...</p>
    </div>
  );
};

export default ThankYouScreen;
