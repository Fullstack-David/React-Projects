import { useState } from 'react'
import './App.css'
import UserGreeting from './components/UserGreeting';
import List from './components/List';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Exercise 👨🏻‍💻</h1>  
      <hr />
      <UserGreeting isLoggedIn={true} username={"BroCode"} />
      <List/>
    </>
  );
}


 