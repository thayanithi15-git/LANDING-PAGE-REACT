
import Car from './Car';
import Bus from './bus';
import Below from './below';
import './Code.css'
import myImage from './car transparent.png';

function Code()
{
  const brand='Aadi';
  return(
    <div className='body'>
    <div className='page'>
      <h1 className='land'>FEEL THE  <div className='adrenaline'>ADRENALINE</div></h1>
      <h1 className='land2'>CONQUER  THE  <div className='road'>ROAD</div></h1>
      <input className="inp" type='text' placeholder='search your cars'></input>
      <button className='search'><h1 className='se'>SEARCH</h1></button>
      <Car/>
    </div>
      <Below/>
    </div>
  );
}

export default Code;