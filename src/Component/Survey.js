import React, { useState } from 'react';
import Question from './Question';
import ConfirmationDialog from './ConfirmationDialog';

const Survey = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    { id: 1, text: "How satisfied are you with our products?", type: "rating", scale: 5 },
    { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
    { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
    { id: 4, text: "On a scale of 1-10, how would you recommend us?", type: "rating", scale: 10 },
    { id: 5, text: "What could we do to improve our service?", type: "text" },
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowConfirmation(true); 
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
     localStorage.setItem('surveyAnswers', JSON.stringify(answers));
    setShowConfirmation(false);
    window.location.href = '/thank-you'; 
  };

  const handleCloseConfirmation = () => setShowConfirmation(false);

  return (
    <div className='card'>
      <h2 className='card-btn'>Customer Survey {currentQuestionIndex + 1}/{questions.length}</h2>
      <h3 className="card-btn">{questions[currentQuestionIndex].id}: {questions[currentQuestionIndex].text}</h3>
      <Question  
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        currentAnswer={answers[questions[currentQuestionIndex].id]}
      />
      <div className="btn">
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} className="blue">Previous</button>
        <button onClick={handleNext} className="pink">Next</button>
      </div>

      <ConfirmationDialog 
        show={showConfirmation} 
        onConfirm={handleSubmit} 
        onClose={handleCloseConfirmation} 
      />
    </div>
  );
};

export default Survey;
