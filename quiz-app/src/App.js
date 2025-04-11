import React, { useState } from 'react';
import './App.css';

const quizData = [
    { question: 'What is the filipino term of cat?', options: ['Pusa', 'Aso', 'Lion', 'Juan Luna'], correctAnswer: 'Pusa' },
    { question: 'How many stars in the Philippine flag?', options: ['5', '3', '12', '6'], correctAnswer: '3' },
    { question: 'Who wrote "Noli me tangere"?', options: ['William Shakespeare', 'Dr. Jose Rizal', 'Andrei Jose', 'Jay Mark'], correctAnswer: 'Dr. Jose Rizal' }
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setShowResult(false);
        setScore(0);
    };

    return (
        <div className="container">
            <h1>Quiz App</h1>
            {showResult ? (
                <div className="result">
                    <p>Your score: {score} out of {quizData.length}</p>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <>
                    <div className="question">
                        <p>{quizData[currentQuestion].question}</p>
                    </div>
                    <div className="options">
                        {quizData[currentQuestion].options.map((option, index) => (
                            <div key={index} className="option" onClick={() => handleAnswerClick(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
