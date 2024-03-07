
const Main = ({ cards }) => {
  // const [namn, setNamn] = setNamn("David");

  // function uppdateName(e) {
  //   setNamn(e.target.value);
    
  // }
  return (
    <>
      <div className="cards-container">
        {cards.map((card, index) => 
         <div className="card-div">
         <img className="card-img" src={card.profile} alt="profile-picture" />
         <h3 className="card-titel">{card.name}</h3>
         <h5 className="card-h3">{card.titel}</h5>
         <p className="card-content">{card.content}</p>
          <button className="btn btn-primary">View more</button>
       </div>
      )}
      </div>
      {/* <div>
        <h4>Name: {namn}</h4>          
        <input type="text" onChange={(e) => uppdateName(e)}/>
      </div> */}
      </>
  );
}

export default Main;