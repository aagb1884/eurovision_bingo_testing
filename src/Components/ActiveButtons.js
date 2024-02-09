import './cliche.css'
import Button from './Button'


function ActiveButtons({ cardArray, isActive, setIsActive, setNumberOfActiveCardButtons, numberOfActiveCardButtons, checkIfBingoButtonIsActive}) {


  const toggleButton = (cliche) => {
    setIsActive(prevState => ({
      ...prevState,
      [cliche]: !prevState[cliche]
    }));
  };



  const buttons = cardArray.map((cliche, index) => {
      return (
        <Button
          key={index}
          cliche={cliche}
          index={index}
          isActive={isActive[cliche] || false}
          setIsActive={() => toggleButton(cliche)}
          setNumberOfActiveButtons={setNumberOfActiveCardButtons}
          numberOfActiveButtons={numberOfActiveCardButtons}
          checkIfBingoButtonIsActive={checkIfBingoButtonIsActive}
        />
      );
    });

    


  return (
    <div className='active-buttons-wrapper'>
      {buttons}
    </div>
  )

}



export default ActiveButtons