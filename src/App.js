import frogger from './images/frogger.png';
import breakout from './images/BREAKOUT.png'
import pacman from './images/PACMAN.png';
import snake from './images/SNAKE.png';
import space from './images/SPACE-INVADER.png';
import Game from './Game'
import sf from './images/sf.png';

function App() {
  return (
    <div className="App">
      <div className=" w-full h-auto lg:h-screen bg-[rgb(26,30,77)] px-20 cursor-pointer">
        <div className="w-[1024px] pb-20 block md:flex items-center"> 
          <h1 className="text-white text-[5rem]"> <span className='text-[rgb(199,6,123)]'>RETRO</span>  GAME</h1>
          <p className='md:ml-20 italic text-white' >!PLAY EVERYWHERE</p>
        </div>
        <div className="w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 w-[50%] lg:grid-cols-3 gap-10 "> 
          <Game src={frogger} title="FROGGER" link="https://waterrain04.github.io/frogger_game/" repo ="https://github.com/waterrain04/frogger_game"/>
          <Game src={breakout} title="BREAKOUT" link="https://waterrain04.github.io/breakout-game/" repo="https://github.com/waterrain04/breakout-game"/>
          <Game src={pacman} title="PACMAN" link="https://waterrain04.github.io/pacmanGame/" repo="https://github.com/waterrain04/pacmanGame"/>
          <Game src={snake} title="SNAKE" link="https://waterrain04.github.io/mysnake_game/" repo="https://github.com/waterrain04/mysnake_game"/>
          <Game src={sf} title="FIGHTER" link="https://waterrain04.github.io/street-fighter/" repo="https://github.com/waterrain04/street-fighter"/>
          <Game src={space} title="SPACEINVADER" link="https://waterrain04.github.io/SPACE-INVADER/" repo="https://github.com/waterrain04/SPACE-INVADER"/>

        </div>

      </div>
    </div>
  );
}

export default App;
