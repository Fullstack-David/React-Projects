const Header = ({cards}) => {
  return (
    <header className='header'>
      <div className="text-content">
      <h1>Welcome to my React page</h1>
      <p>Lorem ipsum dolor sit amet consectetur ipsa perferendis quis quae in.</p>
      </div>
      <div className="card-container">
        
        
      {cards.map((card, index) => 
        <div className='card'>
          
          <img className="card-img" src={card.profile} alt="profile-picture" />
          <h2 className="card-name">{card.name} </h2>
          <h4 className="card-titel">{card.titel}</h4>
          <p className="card-para">{card.isStudent ? "Yes" : "No"}</p>

          <p text-titel>{card.content}</p>
        </div>
      )}
      </div>


    </header>
  );
}

export default Header