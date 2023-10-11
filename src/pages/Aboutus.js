import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";

const AboutUsContainer = styled.div`
  background: #f7f7f7;
  padding: 20px;
  height: 120vh;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Heading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  padding-right: 100px;
  text-align: center;
`;

const Paragraph = styled.p`
  width: 100%;
  font-size: 18px;
  line-height: 1.6;
  color: #666;
`;

const Address = styled.address`
  font-style: normal;
  margin-top: 20px;
  font-size: 15px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 35px;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Header />
      <Content>
        <Heading>About Us</Heading>
        <Paragraph>
          Welcome to our music web! We are passionate about music and dedicated
          to providing you with the best music listening experience.
        </Paragraph>
        <Paragraph>
          Our team of music enthusiasts is constantly curating playlists,
          discovering new artists, and bringing you the latest hits. We believe
          that music has the power to inspire, connect, and uplift, and we want
          to share that magic with you.
        </Paragraph>
        <Paragraph>
          Whether you're a casual listener or a die-hard music lover, our
          platform is designed to cater to your musical preferences. Explore our
          vast collection of songs, create your playlists, and enjoy music like
          never before.
        </Paragraph>
        <Paragraph>
          Thank you for choosing us as your music destination. We hope you have
          a fantastic time exploring and listening to the tunes that move your
          soul.
        </Paragraph>
        <Address>
          123 Music Street <br />
          City, Country <br />
          Email: info@example.com <br />
          Phone: +1 (123) 456-7890
        </Address>
      </Content>
    </AboutUsContainer>
  );
};

export default AboutUs;
