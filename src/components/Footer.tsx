import React from "react";
import {Box, Stack, Text} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Stack
      alignItems={"center"}
      backgroundColor={"white"}
      className="footer_wrapper"
      direction={"column"}
      justifyContent={"center"}
      marginTop={"150px"}
      position={"relative"}
      py={"20px"}
    >
      <Box
        backgroundColor={"white"}
        borderRadius={"5px"}
        color={"gray.500"}
        fontSize={"15px"}
        padding={"10px 20px"}
        position={"absolute"}
        top={"-40px"}
        width={"max-content"}
      >
        Más información{" "}
      </Box>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        spacing={"10px"}
        width={{sm: "80%", lg: "1185px"}}
      >
        <Stack direction={{sm: "column", lg: "row"}} spacing={"15px"}>
          <Text>Trabaja con nosotros</Text>
          <Text>Términos y condiciones</Text>
          <Text>Cómo cuidamos tu privacidad</Text>
          <Text>Información al usuario financiero</Text>
          <Text>Ayuda</Text>
          <Text>Defensa del Consumidor</Text>
        </Stack>
        <Text color="gray.500">
          Este página trata simplemente de un challenge de desarrollo web con React JS
        </Text>
      </Stack>
    </Stack>
  );
}
