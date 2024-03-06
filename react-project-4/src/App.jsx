
import './App.css'
import Card from './components/Card'
import Student from './components/Student';
import Message from './components/Message';
import Garage from './components/Garage';
import Greeting from './components/Greeting';


function App() {

  return (
    
    <>
      <Greeting name="Sofie" isLoggedIn="false" />
      <Message name="David"/>
      <Garage />
      <Student name="David" age={28} isStudent={true} />
      <Student name="Batman" age={35} isStudent={false} />
      <Student />
      <Card name="David Heidari" age="30" content="Jag gillar att träna och kolla på Netflix!"/>
      <Card name="Sofie Kleberg" age="32" content="Gillar att designa och äta god mat" />
      <Card name="Abbas Heidari" age="35" content="Gillar att äta och kolla på TV" />
      
    </>
    
  );
}

export default App;
