import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);        
      },
      (err)=>{
        console.log("error");
      },
      {
        timeout:30000,
      }
    );
  }, []);

  return ( 
    <div id="app" >
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
              <label htmlFor="github_username">Usuario do Github</label>
              <input name="github_username" id="github_username" required/>
          </div> 

          <div className="input-block">
            <label htmlFor="techs" >Tecnologias</label>
            <input name="techs" id="techs" required/>        
          </div> 

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude" >Latitude</label>
              <input 
              type="number" 
              name="latitude"
               id="latitude" 
               value={latitude} 
               onChange={e=> setLatitude(e.target.value)}
               required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude" >Longitude</label>
              <input type="number" name="longitude" id="longitude" value={longitude} onChange={e=> setLongitude(e.target.value)} required/>
            </div> 
          </div>
          
          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
          <ul>
            <li className="dev-item">
               <header>
                 <img src="https://avatars1.githubusercontent.com/u/6765854?s=400&u=9017a74b338733661f761b4147419da59dc5b610&v=4" alt="" />
                 <div className="user-info">
                   <strong>Vinicius Vasoncelos</strong>
                   <span>ReactJS, NodeJS</span>                   
                 </div>                 
               </header>
               <p>Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric.</p>
               <a href="https://github.com/vinilitaiff">Acessar perfil no Github</a>
            </li>   
            <li className="dev-item">
               <header>
                 <img src="https://avatars1.githubusercontent.com/u/6765854?s=400&u=9017a74b338733661f761b4147419da59dc5b610&v=4" alt="" />
                 <div className="user-info">
                   <strong>Vinicius Vasoncelos</strong>
                   <span>ReactJS, NodeJS</span>                   
                 </div>                 
               </header>
               <p>Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric.</p>
               <a href="https://github.com/vinilitaiff">Acessar perfil no Github</a>
            </li> 
            <li className="dev-item">
               <header>
                 <img src="https://avatars1.githubusercontent.com/u/6765854?s=400&u=9017a74b338733661f761b4147419da59dc5b610&v=4" alt="" />
                 <div className="user-info">
                   <strong>Vinicius Vasoncelos</strong>
                   <span>ReactJS, NodeJS</span>                   
                 </div>                 
               </header>
               <p>Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric.</p>
               <a href="https://github.com/vinilitaiff">Acessar perfil no Github</a>
            </li> 
             <li className="dev-item">
               <header>
                 <img src="https://avatars1.githubusercontent.com/u/6765854?s=400&u=9017a74b338733661f761b4147419da59dc5b610&v=4" alt="" />
                 <div className="user-info">
                   <strong>Vinicius Vasoncelos</strong>
                   <span>ReactJS, NodeJS</span>                   
                 </div>                 
               </header>
               <p>Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric.</p>
               <a href="https://github.com/vinilitaiff">Acessar perfil no Github</a>
            </li>          
          </ul>
      </main>
    </div>
  );
} 

export default App;
 