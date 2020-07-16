import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import './App.css';

function App() {
  const Title = styled.h1`
    display: flex;
    justify-content: center;
  `;

  const Container = styled.div`
    max-width: 550px;
    width: 100%;
    margin: auto;
  `;

  const Description = styled.p`
    color: black;
    font-weight: 300;
    @media (max-width: 500px) {
      font-size: 0.75rem;
    }
  `;

  const Card = styled.div`
    color: #333;
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
      flex-direction: column;
      & button {
        width: 100%;
        margin-bottom: 4px;
        font-size: 0.65rem;
      }
    }
  `;

  const Button = styled.button`
    margin: 0 5px;
    padding: 8px 14px;
    background: rgba(155, 155, 155, 0.2);
    color: black;
    cursor: pointer;
    border: 1px solid #fff;
    outline: 0;
    font-weight: 300;
    :hover {
      opacity: 0.8;
    }
  `;

  // Button.defaultProps = {
  //   theme: {
  //     main: 'mediumseagreen',
  //   },
  // };

  // const theme = {
  //   main: 'palevioletred',
  // };

  const [jokers, setJokers] = useState([]);
  const [jokersToShow, setJokersToShow] = useState([]);
  const [likedJokes, setLikedJokes] = useState([]);
  const [firstName, setFirstName] = useState('first name');
  const [lastName, setLastName] = useState('last Name');

  useEffect(() => {
    fetchAndSetJokes();
    fetch('https://api.icndb.com/jokes')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setJokers(res.value);
        setJokersToShow(res.value.slice(0, 10));
        observeElement(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchAndSetJokes = () => {
    fetch(
      `https://api.icndb.com/jokes?firstName=${firstName}&lastName=${lastName}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setJokers(res.value);
        setJokersToShow(res.value.slice(0, 10));
        observeElement(false);
      })
      .catch((err) => console.log(err));
  };

  const likeJoke = (id) => {
    if (likedJokes.find((j) => j.id === id)) return;
    const likedJoke = jokers.find((j) => j.id === id);
    setLikedJokes([likedJoke, ...likedJokes]);
  };
  const UnlikeJoke = (id) => {
    const newLikedJokes = likedJokes.filter((j) => j.id !== id);
    setLikedJokes(newLikedJokes);
  };

  const addMoreJokes = () => {
    setJokersToShow(jokers.slice(0, jokersToShow.length + 10));
  };

  const changeName = (e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '') return;
    fetchAndSetJokes();
  };

  const observeElement = (bottomJoke) => {
    if (!bottomJoke) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          addMoreJokes();
          observer.unobserve(bottomJoke);
        }
      },
      {
        threshold: 1,
      }
    );
    const index = jokersToShow.length - 1;
    const bottomJokeId = `joke-${index}`;
    const bottomJokeEl = document.getElementById(bottomJokeId);
    observer.observe(bottomJokeEl);
  };

  useEffect(() => {
    const bottmJokeEl = document.getElementById(
      `joke-${jokersToShow.length - 1}`
    );
    observeElement(bottmJokeEl);
  }, [jokersToShow]);

  return (
    <div className="App">
      <Title>Chuck Norris Jokes</Title>
      <Container className="container">
        <form onSubmit={changeName}>
          <input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div className="card">
          {jokersToShow.map((joke) => (
            <div>
              <Description>{joke.joke}</Description>
              <Button onClick={() => likeJoke(joke.id)}>Like</Button>
              <Button onClick={() => UnlikeJoke(joke.id)}>UnLike</Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
