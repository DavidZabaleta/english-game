import React, { useState } from 'react';
import { questions } from '../data/questions';
import Finish from './finish';
import './styles/game-handler.css'

const GameHandler = ({ username }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOption = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 100);
		}

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (
		<>
			{showScore 
            ? <Finish score={score} username={username}/>
            : (
				<div className='question-body'>
					<div className='question-header'>
						<label>Level {currentQuestion + 1}</label>
						<h1>English-Easy</h1>
						<label>Score: {score}</label>
					</div>
					<div className='question-section'>
						<div className='question-text'>
							<p>{questions[currentQuestion].questionText}</p>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOption(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default GameHandler;