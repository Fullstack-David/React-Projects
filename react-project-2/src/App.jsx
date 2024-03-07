
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


// import images
import profile from "./assets/ai.png";
import reser from "./assets/reser.png";
import unemployed from "./assets/unemployed.png";
import teacher from "./assets/teacher.png";

function App() {
  const cardData = [
    {
      name: "Anna",
      titel: "Student",
      content: "Anna is studying art",
      profile: profile
    },
    {
      name: "Sara",
      titel: "Teacher",
      content: "Sara is math teacher and she likes her job",
      profile: teacher
    },
    {
      name: "Maja",
      titel: "Unemployed",
      content: "Maja is unemployed right now and looking for a job",
      profile: unemployed
    },
    {
      name: "Erik",
      titel: "Adventurer",
      content: "Erik likes to travel alot and he has been traveled to many countries",
      profile: reser
    }
  ]

  return (
    <>
      <Nav/>
      <Header cards={ cardData} />
      <Main />
      <Footer/>
    </>
  )
}

export default App
