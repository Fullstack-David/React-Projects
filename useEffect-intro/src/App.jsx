import DogPic from './components/DogPic';
import ResizeComponent from './components/ResizeComponent';
import FetchPost from './components/FetchPost';
import MessageCounter from './components/MessageCounter';
import Timer from './components/Timer';
import UdemyColtReact from "./components/UdemyColtReact"
import ShopingList from './components/ShopingList';



function App() {

  return (
    <div className='App'>
      <ShopingList/> 
      <Timer />
      <hr />
      <FetchPost />
      <hr />
      <MessageCounter />
      <hr />
      <DogPic />
      <hr />
      <ResizeComponent />
      <hr />
      <UdemyColtReact  alt1="🔥" alt2="Win" alt3="🔥"/>
      <UdemyColtReact  alt1="🔥" alt2="No" alt3="🔥"/>
      
    </div>
  );
}

export default App



   