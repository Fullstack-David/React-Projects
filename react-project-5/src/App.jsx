
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

// images
import profile from "./assets/profile.png";
import tele from "./assets/tele.png";
import math from "./assets/math.png";
import learning from "./assets/learning.png"


function App() {
  const cardData = [
    {
      name: "David Heidari",
      titel: "Student",
      content: "En engagerad IT-student tillbringar mycket tid med att lära sig nya teknologier.",
      profile: profile,
    },
    {
      name: "Sofie Kleberg",
      titel: "Student",
      content: "Sofie gillar att designa, äta gott mat, bada och vara på stranden.",
      profile: tele,
    },
    {
      name: "Matilda",
      titel: "Förskolelärare",
      content: "Matilda tycker om att äta godis, shoppa på secondhand och läsa bok.",
      profile: math,
    },
    {
      name: "Kalle",
      titel: "Sjuksköterska",
      content: "Kalle gilalr att träna på gymmet och hänga med vänner och spela tv-spel.",
      profile: learning,
    }


  ]

  return (
    <>
      <Navbar />
      <Main cards={cardData} />
      <Footer />
    </>
  );
}

export default App;
