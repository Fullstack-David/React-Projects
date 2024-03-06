
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
      name: "Superman",
      titel: "Superhjälte",
      content: "Superman, när han inte räddar världen, njuter av att flyga genom skyn, utforska rymden och använda sina krafter för att hjälpa människor i nöd.",
      profile: profile,
    },
    {
      name: "Batman",
      titel: "Rik",
      content: "Batman tillbringar sina nätter med att lösa gåtor och bekämpa brott i Gothams skuggor, en hobby som drivs av hans önskan om rättvisa.",
      profile: tele,
    },
    {
      name:"Cat Woman",
      titel: "RAARRR",
      content: "Catwoman ägnar sig åt akrobatik och inbrott, en passion för äventyr och att utmana sina gränser, alltid balanserande på lagens gräns.",
      profile: math,
    },
    {
      name: "Hulk Smash",
      titel: "Smash",
      content: "Hulk, trots sin vilda natur, hittar lugn i ensamheten, ofta söker han frid i avlägsna och orörda naturområden långt från civilisationens kaos.",
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
