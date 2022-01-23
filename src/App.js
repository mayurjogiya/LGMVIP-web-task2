import React, { useState } from 'react';
import { BarLoader, ClockLoader, HashLoader } from 'react-spinners';
import './App.css';
const style = {
position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"};

function App() {
    function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(2);
        }, delayInms);
      });
    }
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadUsers = async() => {
      setLoading(true);
      const response = await fetch("https://reqres.in/api/users?page=1");
      const jsonResponse = await response.json();
      await delay(3000);
      setUser(jsonResponse.data);
      setLoading(false);
    }
  return (
    <div className="App">
      <nav>
        <h1>Focus of Tiger</h1>
        <button onClick={loadUsers}>Get Users</button>
      </nav>
      {loading ? <HashLoader color='black' css={style} size={150}/> : <>
        {users.map(({ id, first_name, last_name, avatar, email}) => (
        <div className='card'>
          <div className='cards'>
            
            <img src={avatar} alt=''/>  
            
            <div className='dis'>
              <br></br>
              <h3>ID : </h3> <p>{id}</p>
              <br></br>
              <h3>NAME : </h3> <p>{first_name} {last_name}</p>
              <br></br>
              <h3> EMAIL : </h3> <p>{email}</p>
            </div>
            
            <button id='km'>Know More</button>
            <button id='sm'>Send Mail</button>  

          </div>
        </div>
        ))}
        </>
}
    </div>
  );
}

export default App;
