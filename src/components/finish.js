import './styles/finish.css'

const Finish = ({ score, username }) => {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className='score-section'>
            <h1>English-Easy</h1>
            <label>{username} your score is: {score}</label>
            {(score >= 400)
                ? <p>You win! 🎉</p>
                : <p>You lose! The score should be more than 400 to win</p>
            }
            <button onClick={refreshPage}>Finish</button>
        </div>
    ) 
}

export default Finish;