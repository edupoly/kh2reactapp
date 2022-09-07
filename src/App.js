import React from 'react';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import HCounter from './HCounter';
import Comp1 from './Comp1';
import MyContext from './MyContext';
import EventHandling from './EventHandling';
const details = {
  pname:'mobile',
  price:21304,
  model:'one+',
  rating:4.6
}
function App() {
  const [firstname, setFirstname] = React.useState('praveen')
  return (
    <MyContext.Provider value={details}>
      <div className="betterview">
        <EventHandling></EventHandling>
        <h1 className='bluecol'>Welcome to React Application development</h1>
        <h1>{firstname}</h1>
        <Comp1 fn={firstname}></Comp1>
        <Todolist></Todolist>
        <Counter></Counter>
        <HCounter></HCounter>
      </div>
    </MyContext.Provider>
  );
}

export default App;
