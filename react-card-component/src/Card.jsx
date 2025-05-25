
import profilePic from './assets/Chris profile.jpg'


function Card(){

  return(
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile picture"/>
      <h2 className="card-title">Chris Card</h2>
      <p className= "card-text">I make software applications and play video game</p>
    </div>
  );
  
}

export default Card 