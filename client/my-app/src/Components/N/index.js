import React from 'react';
import "./index.css";

const gamesData = [
  { id: 1, name: 'Football', imageUrl: 'https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?cs=srgb&dl=pexels-pixabay-209841.jpg&fm=jpg' },
  { id: 2, name: 'Basketball', imageUrl: 'https://www.shutterstock.com/image-photo/scoring-winning-points-basketball-game-600nw-173318291.jpg' },
  { id: 3, name: 'Cricket', imageUrl: 'https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=' },
  { id: 3, name: 'VolleyBall', imageUrl: 'https://www.shutterstock.com/shutterstock/photos/628377176/display_1500/stock-photo-volleyball-spike-hand-block-over-the-net-628377176.jpg' },
  { id: 3, name: 'Badminton', imageUrl: 'https://st3.depositphotos.com/12674628/15766/i/450/depositphotos_157668242-stock-photo-shuttlecock-on-badminton-rackets.jpg' },
  { id: 3, name: 'VolleyBall', imageUrl: 'https://media.istockphoto.com/id/502189498/photo/table-tennis-ball-and-bat.jpg?s=612x612&w=0&k=20&c=FJ2A35yQlHI-6KFoKUfMHjqpXXkIZo1wFRZFJWgWk68=' },
  // Add more game data as needed
];
  
const Home = () => {
  return (
    <div>
      <h1>Find all the equipment you need for your favorite sports!</h1>
      <div className="games-container">
        {gamesData.map(game => (
          <div key={game.id} className="game-item">
            <img src={game.imageUrl} alt={game.name} />
            <h3>{game.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};


  
export default Home;
  
