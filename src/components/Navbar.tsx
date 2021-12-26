import {
  Stack,
  Box,
  Input,
  Icon,
  Text,
  Image,
  Grid,
  GridItem,
  Container,
  StackDivider,
} from "@chakra-ui/react";
import {FiPrinter} from "react-icons/fi";
import {AiOutlineSearch} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import React from "react";

import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <Box
      alignItems={"center"}
      backgroundColor={"primary.500"}
      className="navbar_container"
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      paddingY={"1px"}
      width={"100%"}
    >
      <Container
        alignSelf="center"
        direction={"column"}
        maxWidth="container.xl"
        my={"10px"}
        paddingX={"15px"}
        width={"100%"}
      >
        <Grid
          className="navbar_wrapper"
          templateColumns={{sm: "20% 80%", lg: "15% 55% 30%"}}
          templateRows={"repeat(2, 1fr)"}
          width={"100%"}
        >
          <GridItem>
            <Image objectFit={"cover"} src={logo} />
          </GridItem>
          <GridItem>
            <Stack
              alignItems={"center"}
              backgroundColor={"white"}
              direction={"row"}
              divider={<StackDivider />}
              justifyContent={"center"}
              maxWidth={{sm: "100%", md: "700px", lg: "100%"}}
              padding={"15px"}
            >
              <Input backgroundColor={"white"} variant={"unstyled"} />
              <Box alignItems={"center"} display={"flex"} justifyContent={"center"}>
                <Icon as={AiOutlineSearch} color={"gray.400"} height={6} width={6} />
              </Box>
            </Stack>
          </GridItem>
          <GridItem
            alignItems={"center"}
            display={{sm: "none", lg: "flex"}}
            flexDirection={"row"}
            justifyContent={"flex-end"}
          >
            <Text textAlign={"right"}>
              {" "}
              <Icon as={FiPrinter} /> Suscríbete al nivel 6, beneficios incluídos
            </Text>
          </GridItem>
          <GridItem display={"flex"} flexDirection={"row"}>
            <Stack alignItems={"center"} direction={"row"} justifyContent={"center"}>
              <Icon as={GoLocation} height={"6"} width={"8"} />
              <Stack alignSelf={"flex-end"} paddingY={"0"} spacing={"0"}>
                <Text>Envía a</Text>
                <Text>Buenos Aires</Text>
              </Stack>
            </Stack>
          </GridItem>
          <GridItem
            display={{sm: "none", md: "flex"}}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          >
            <Stack direction={"row"} spacing={"5"}>
              <Text>Categorías</Text>
              <Text>Ofertas</Text>
              <Text>Historial</Text>
              <Text>Supermercado</Text>
              <Text>Moda</Text>
              <Text>Vender</Text>
              <Text>Ayuda</Text>
            </Stack>
          </GridItem>
          <GridItem
            alignItems={"flex-end"}
            display={{sm: "none", lg: "flex"}}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            width={"100%"}
          >
            <Stack direction={"row"}>
              <Text>Categorías</Text>
              <Text>Ofertas</Text>
              <Text>Historial</Text>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
