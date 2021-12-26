import React from "react";
import {Link, Box, Stack, Text} from "@chakra-ui/react";

import * as mock from "../../product/mock";

const HomeScreen: React.FC = () => {
  const product = mock.default.product;
  const thumbnail = product.pictures.filter((pic) => pic.id === product.thumbnail_id)[0];

  return (
    <Box backgroundColor={"white"}>
      <br />
      <Stack
        alignItems={"center"}
        direction="row"
        justifyContent={"flex-start"}
        padding={"30px"}
        spacing={"20px"}
      >
        <Box
          backgroundImage={thumbnail.url}
          backgroundSize={"contain"}
          borderRadius={"8px"}
          height={"200px"}
          width={"200px"}
        />
        <Stack alignSelf={"flex-start"} direction={"column"}>
          <Box>
            <Text fontSize={"24px"} fontWeight={"thin"}>
              {product.title}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"28px"}>
              {product.price} {product.currency_id}
            </Text>
          </Box>
          {product.shipping.free_shipping ? (
            <Box
              backgroundColor={"green.100"}
              borderRadius={"5px"}
              padding={"5px"}
              width={"max-content"}
            >
              <Text color={"green.500"} fontSize={"14px"} fontWeight={"bold"}>
                Envío gratis
              </Text>
            </Box>
          ) : null}
          <Link href="/productId">Ver página de detalle de producto</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeScreen;
