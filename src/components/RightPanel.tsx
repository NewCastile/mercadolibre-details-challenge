import {Button, Icon, Stack, Text} from "@chakra-ui/react";
import React from "react";
import {HiOutlineTruck} from "react-icons/hi";
import {IoMdReturnLeft} from "react-icons/io";
import {FiHeart} from "react-icons/fi";
import {GoLocation} from "react-icons/go";

import {Props} from "../product/screens/Details";

export default function RightPanel({product}: Props) {
  return (
    <Stack
      className="right-panel-wrapper"
      direction={"column"}
      display={{sm: "none", lg: "flex"}}
      spacing={5}
      width={"30%"}
    >
      <Stack
        border={"1px solid"}
        borderColor={"gray.300"}
        borderRadius={"8px"}
        className="product-panel"
        padding={"30px 20px"}
        spacing={5}
      >
        <Text color={"gray.500"}>
          {product.condition === "new" ? "Nuevo" : null}{" "}
          <span style={{padding: "0px 10px"}}>|</span> {product.sold_quantity} Vendidos
        </Text>
        <Stack alignItems={"center"} direction={"row"} justifyContent={"center"}>
          <Text fontSize={"1.3em"} fontWeight={"500"} width={"90%"}>
            {product.title}
          </Text>
          <Icon alignSelf={"flex-start"} as={FiHeart} color={"#3483fa"} h={8} pt="5px" w={8} />
        </Stack>
        <Text fontSize={"1.8em"} fontWeight={"400"}>
          {product.price} {product.currency_id}
        </Text>
        <Stack color={"gray.400"} direction={"row"}>
          <Icon as={HiOutlineTruck} color={"green.400"} h={5} w={5} />
          <Stack spacing={0}>
            <Text color={"green.400"}>Llega gratis mañana</Text>
            <Text fontSize={"14px"}>Solo en CABA y zonas de GBA</Text>
            <Text fontSize={"14px"}>Comprando dentro de las próximas 9 h </Text>
            <Text color={"#3483fa"} fontSize={"14px"}>
              <a href="#">Ver más formas de entrega</a>
            </Text>
          </Stack>
        </Stack>
        <Stack color={"gray.400"} direction={"row"}>
          <Icon as={IoMdReturnLeft} color={"green.400"} h={5} w={5} />
          <Stack spacing={0}>
            <Text color={"green.400"}>Devolución gratis</Text>
            <Text fontSize={"14px"}>Tenés 30 días desde que lo recibís.</Text>
            <Text color={"#3483fa"} fontSize={"14px"}>
              <a href="#">Conocer más</a>
            </Text>
          </Stack>
        </Stack>
        <Text fontWeight={"500"}>Stock Disponible</Text>
        <Text>
          Cantidad:{" "}
          <Text as="span" fontWeight={"500"}>
            1 unidad{" "}
          </Text>
          <Text as="span" color={"gray.500"}>
            ({product.available_quantity} disponibles)
          </Text>
        </Text>
        <Stack direction={"column"}>
          <Button
            backgroundColor={"#3483fa"}
            color={"white"}
            fontWeight={"500"}
            py={"25px"}
            width={"100%"}
          >
            Comprar ahora
          </Button>
          <Button
            backgroundColor={"secondary.100"}
            color={"#488ffa"}
            fontWeight={"500"}
            py={"25px"}
            width={"100%"}
          >
            Agregar al carrito
          </Button>
        </Stack>
      </Stack>
      <Stack
        border={"1px solid"}
        borderColor={"gray.300"}
        borderRadius={"8px"}
        className="seller-info"
        padding={"30px 20px"}
        spacing={"15px"}
      >
        <Text fontSize={"1.3em"} fontWeight={"500"}>
          Información sobre el vendedor
        </Text>
        <Stack className="seller_location" direction={"row"}>
          <Icon as={GoLocation} h={5} w={5} />
          <Stack direction={"column"}>
            <Text fontWeight={"500"}>Información sobre el vendedor</Text>
            <Text color={"gray.500"}>
              {product.seller_address.city.name}, {product.seller_address.state.name}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
