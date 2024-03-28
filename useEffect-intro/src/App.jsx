import DogPic from './components/DogPic';
import ResizeComponent from './components/ResizeComponent';
import FetchPost from './components/FetchPost';
import MessageCounter from './components/MessageCounter';
import Timer from './components/Timer';
import UdemyColtReact from "./components/UdemyColtReact"
import ShopingList from './components/ShopingList';

const data = [
  {name: "Egg", price: 10 + " kr", isCompleted: true },
  {name: "Milk", price: 2 + " kr", isCompleted: false },
  {name: "Fish", price: 20 + " kr", isCompleted: false },
  {name: "Bread", price: 3 + " kr", isCompleted: true }
]

function App() {

  return (
    <div className='App'>
      <ShopingList items={data}/>
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
