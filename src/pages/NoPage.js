import React from "react";
import Header from "../components/Header";
import styled from "@emotion/styled";

const Text = styled.p`
  margin: auto;
  text-align: center;
`;
const NoPage = () => {
  return (
    <div>
      <Header />
      <Text> Oops page not found</Text>
    </div>
  );
};

export default NoPage;
