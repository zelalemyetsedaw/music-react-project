import React from "react";
import styled from "@emotion/styled";
import image from "../images/head.gif";
import image2 from "../images/wave1.svg";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  background: #f7f7f7;
  width: 100vw;
  position: fixed;
  font-style: italic;
  font-family: sans-serif;
`;

const ContentContainer = styled.div`
  margin: 0;
  height: 80vh;
  width: 100vw;
  background: url(${(props) => props.image}) no-repeat;
  background-size: 100% -10rem;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  
  .image{
    margin-top: -5rem;
    margin-left: 6rem;
    width: 30vw;

    @media (max-width: 769px) {
      filter: blur(6px);
      margin-left: 3rem;
     
      
    }
    @media(max-width: 1062px){
      margin-left: 0rem;
      width: 27vw;
    }
    
    
  }
  .content{
    padding-left: 40px;
    margin-top: -4rem;
    margin-left: -30rem;
    width: 50vw;
    animation: animate 1s ease 1;

    @media (max-width: 768px) {
      width: 85vw;
      z-index: 1;
      
     
      
    }

    h1{
      margin: 0;
      font-size: 3rem;
      color: black;
    }

    h3{
      font-size: 2rem;
      color: yellow;
      margin: 0;
      
    }

    p{
      
      font-size: 1rem;
      color: black;
    }
  
  `;

const AddButton = styled.button`
  height: 2.5rem;
  width: 8rem;
  background: yellow;
  color: black;
  border-radius: 5rem;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  margin: 1rem 0.2rem;
  border: none;
`;

const Home = () => {
  return (
    <MainContainer>
      <Header />

      <ContentContainer image={image2}>
        <div class="image">
          <img src={image} alt="" />
        </div>

        <div class="content">
          <h1> Life's Rhythm</h1>
          <h3> Experience the music like never before </h3>
          <p>
            {" "}
            Welcome to our music web! We are passionate about music and dedicated<br/>
            to providing you with the best music listening experience.
          </p>
          <div>
            <Link to={`/`}>
              <AddButton>get started</AddButton>
            </Link>
            <Link to={`/aboutus`}>
              <AddButton>read more</AddButton>{" "}
            </Link>
          </div>
        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default Home;
