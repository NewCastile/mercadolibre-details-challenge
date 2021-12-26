import React from "react";
import {Box, Container} from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Box backgroundColor={"#ededed"} className="app">
      <Navbar />
      <Container
        alignSelf="center"
        maxWidth="container.xl"
        minHeight={"100vh"}
        mt="10px"
        paddingX={"15px"}
      >
        <Routes />
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
