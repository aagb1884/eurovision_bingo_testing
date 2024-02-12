const Button = ({ index, isActive, handleClick, cliche}) => {
  return (
      <div className={`grid-item ${isActive ? 'active' : ''}`}>
          <button
              onClick={handleClick}
              className={`euro-btn ${index + 1}${isActive ? ' active' : ''}`}
              type="button"
              data-testid="card-button"
          >
              {cliche}
          </button>
      </div>
  );
}

export default Button;