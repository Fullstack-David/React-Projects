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
      {/* davids som står här måste skickas vidare exakt som 
      det är annars kommer den inte att funka */}
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
      <UdemyColtReact  alt1="🔥" alt2="🔥" alt3="🔥"/>
      <UdemyColtReact  alt1="🔥" alt2="No" alt3="🔥"/>
      
    </div>
  );
}

export default App



   