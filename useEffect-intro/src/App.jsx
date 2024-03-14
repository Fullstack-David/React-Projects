import DogPic from './components/DogPic';
import ResizeComponent from './components/ResizeComponent';
import FetchPost from './components/FetchPost';
import MessageCounter from './components/MessageCounter';
import Timer from './components/Timer';

function App() {

  return (
    <div className='App'>
      <Timer />
      <hr />
      <FetchPost />
      <hr />
      <MessageCounter />
      <hr />
      <DogPic />
      <hr />
      <ResizeComponent />
      

    </div>
  );
}

export default App
