const Finish = ({ score, username }) => {
    return (
        <div className='score-section'>
            You scored {score} {username}
        </div>
    ) 
}

export default Finish;