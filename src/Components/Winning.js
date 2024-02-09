import { useState } from "react";
import soundfile from "../audio/euphoria_excerpt.mp3";

const Winning = ({checkIfBingoButtonIsActive, isBingoButtonActive}) => {
   const [showGif, setShowGif] = useState(false);

    function play() {
                var audio = document.getElementById("audio");
                audio.play();
                setShowGif(true);

                setTimeout(()=> {
                    audio.pause();
                    setShowGif(false);
                }, 7000)
              }

 
  
// get grid buttons working then set button below to be disabled until all six buttons are pressed/active

    return ( 
        <section className='bingo'>
            <audio id="audio" src={soundfile}>BINGO</audio>
            <button type="button" 
                    data-testid="audio-button" 
                    id="bingo" 
                    className={`bingo ${isBingoButtonActive ? '' : 'disabled'}`}
                    disabled={!isBingoButtonActive}
                    onClick={play} 
                    >BINGO</button>
                     {showGif && <img className="ticker-tape" src="/images/ticker_tape.gif" alt="Ticker Tape gif" />} 
             </section>
    );
    }


export default Winning;

