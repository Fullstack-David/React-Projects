import { useState, useEffect } from 'react'

const DogPic = () => {
    const [dogPic, setDogPic] = useState(null);
    const [newDog, setNewDog] = useState(0)

// 2 olika sätt att skriva useEffect
// alt 1:
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")

            .then((response) => response.json())
            .then((data) => setDogPic(data.message));
    }, [newDog])

// alt 2:
    // useEffect(() => {
    //     const fetchPics = async () => {
    //         try {
    //             const response = await fetch("https://dog.ceo/api/breeds/image/random");
    //             const data = await response.json();
    //             setDogPic(data.message);
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchPics()
                
    // }, [newDog]);


    return (
        <div className='dog-pic'>
            <img src={dogPic} alt="dog picture" />
            <button onClick={() => setNewDog((prev) => prev + 1)}>Get new dog</button>
          
        </div>
    );
}

export default DogPic
/** 
Svårt att förklara enkelt men att sätta en fetch-anrop direkt i en useState-uppdateringsfunktion i React är inte en rekommenderad praxis. Vi vill separera ansvar, en useStates huvudansvar är att hålla och uppdatera komponentens lokala tillstånd. Det skulle kräva onödigt komplex kod att synka tillståndsuppdateringar. Att sätta ett fetch anrop direkt i useState eller i komponentens renderingsflöde utan att kontrollera dess beroenden (som vi har möjlighet med i useEffect) kan leda till okontrollerade re-renderingar. Vi kommer se lite mer okontrollerade re-renderingar  i nästa exempel. Allmänt så använder React communityt useEffect för dessa jobb.
*/