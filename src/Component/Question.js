import React from 'react';

const Question = ({ question, onAnswer, currentAnswer }) => {
  const handleRatingClick = (value) => {
    onAnswer(question.id, value); 
  };

  if (question.type === 'rating') {
    return (
      <div className="rating-buttons">
         {[...Array(question.scale).keys()].map((num) => (
          <button
            key={num + 1}
            onClick={() => handleRatingClick(num + 1)}
            className={`rating-btn ${currentAnswer === num + 1 ? 'selected' : ''}`}
          >
            {num + 1}
          </button>
        ))}
      </div>
    );
  } else if (question.type === 'text') {
    return (
    <div className="card-btn text-width">
        <textarea  
        value={currentAnswer || ''}
        onChange={(e) => onAnswer(question.id, e.target.value)}
        placeholder="Your answer..."
      />
    </div>
    );
  }

  return null;
};

export default Question;
