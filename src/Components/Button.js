const Button = ({ cliche, index, isActive, setIsActive, numberOfActiveButtons, setNumberOfActiveButtons, checkIfBingoButtonIsActive}) => {

    const handleClick = () => {
        setIsActive(!isActive);
        addActiveButtons();
        checkIfBingoButtonIsActive();
        console.log(numberOfActiveButtons)
      };

    const addActiveButtons = () => {
      if (!isActive && numberOfActiveButtons <= 6) {
        setNumberOfActiveButtons(numberOfActiveButtons += 1)
      } 
      else {setNumberOfActiveButtons(0)}
    }

    return (
        <div className={`grid-item ${isActive ? 'active' : ''}`}>
        <button
          onClick={handleClick}
          className={`euro-btn ${index + 1} ${isActive ? 'active' : ''}`}
          type="button"
          data-testid="card-button"
        >
          {cliche}
        </button>
      </div>

    );
}

export default Button;