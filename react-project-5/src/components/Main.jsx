

const Main = ({ cards}) => {
  return (
    
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
  );
}

export default Main;