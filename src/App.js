// demonstrates lists, react hooks, css modules, axios

import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';

import './App.css';

import Card from './Card/Card';
import MyComponent from './MyComponent';

const App = props => {
  const [cardState, setCardState] = useState({
    cards: []
  });


  useEffect(() => {
    let url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=ad58c91918a08a37eb84e520e6b139e6&hash=68c1f8f84569b536f39d402fc1e6807f&limit=4";
    axios.get(url)
      .then(response => {
        setCardState({
          cards: [...response.data.data.results]
        });
      });
    }, [])

  // useEffect(() => {
  //   let url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=ad58c91918a08a37eb84e520e6b139e6&hash=68c1f8f84569b536f39d402fc1e6807f&limit=4";
  //   axios.get(url)
  //     .then(response => {
  //       setCardState({
  //         cards: [...response.data.data.results]
  //       });
  //     });
  //   }, [])

  // useLayoutEffect(() => {
  //   let url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=ad58c91918a08a37eb84e520e6b139e6&hash=68c1f8f84569b536f39d402fc1e6807f&limit=4&offset=4";
  //   axios.get(url)
  //     .then(response => {
  //       setCardState({
  //         cards: [...cardState.cards, ...response.data.data.results]
  //       });
  //     });
  // }, [])

  // useEffect(() => {
  //   let url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=ad58c91918a08a37eb84e520e6b139e6&hash=68c1f8f84569b536f39d402fc1e6807f&limit=25";
  //   axios.get(url)
  //     .then(response => {
  //       setCardState({
  //         cards: [...response.data.data.results]
  //       });
  //     });
  // }, [])

  let item = (
    <div>
      {cardState.cards.map((card) => {
        let imgUrl = `${card.thumbnail.path}/portrait_incredible.${card.thumbnail.extension}`;
        return <Card key={card.id} name={card.name} id={card.id} img={imgUrl}/>
      })}
    </div>
  );

  return (
    <div className="App">
      <h1>Comic Heros!</h1>
      {/* <MyComponent /> */}
      <div className="card-container">
        {item}
      </div>
      
    </div>
  );

}

export default App;
