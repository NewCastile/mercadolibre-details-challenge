import {Box, Button, Stack, Text} from "@chakra-ui/react";
import React, {useEffect, useRef, useState} from "react";

import {Props} from "../product/screens/Details";

export default function Carrousel({product}: Props) {
  const carrouselRef = useRef<HTMLDivElement>(null);
  const pictures = product.pictures
    .concat(product.pictures.slice(0, 2))
    .concat(product.pictures.slice(0, 3))
    .concat(product.pictures.slice(0, 3))
    .concat(product.pictures.slice(0, 3))
    .concat(product.pictures.slice(0, 3))
    .concat(product.pictures.slice(0, 3));
  const [carrouselPageIdx, setCarrouselPageIdx] = useState<number>(1);

  useEffect(
    function () {
      const carrousel = carrouselRef.current as HTMLDivElement;

      if (carrouselPageIdx === 1) {
        carrousel.style.transform = `translateX(${0}px)`;

        return undefined;
      }
      carrousel.style.transform = `translateX(${carrouselPageIdx * -240}px)`;
    },
    [carrouselPageIdx],
  );

  return (
    <Box position={"relative"}>
      <Box className="carrousel_wrapper" overflow={"hidden"}>
        <Box
          ref={carrouselRef}
          className="carrousel"
          display={"flex"}
          flexDirection={"row"}
          width={"max-content"}
        >
          {pictures.map((picture, pictureIdx) => {
            return (
              <Stack
                key={pictureIdx}
                border={"1px solid"}
                borderColor={"gray.200"}
                borderRadius={"5px"}
                className="publication_wrapper"
                direction={"column"}
                height={"max-content"}
                mx={"5px"}
                width={"230px"}
              >
                <Box
                  backgroundImage={picture.url}
                  backgroundPosition={"center"}
                  backgroundRepeat={"no-repeat"}
                  backgroundSize={"contain"}
                  borderBottom={"1px solid"}
                  borderBottomColor={"gray.200"}
                  className="image_wrapper"
                  height={"200px"}
                  width={"100%"}
                />
                <Stack
                  className="prod_info_wrapper"
                  direction={"column"}
                  height={"40%"}
                  padding={"15px"}
                >
                  <Text className="prod_price">{product.currency_id}111</Text>
                  <Text color={"#24b268"}>Envío gratis</Text>
                  <Text>{product.title}</Text>
                </Stack>
              </Stack>
            );
          })}
        </Box>
      </Box>
      {carrouselPageIdx === 1 ? null : (
        <Button
          appearance={"none"}
          backgroundColor={"white"}
          borderRadius={"100%"}
          boxShadow={"0 3px 3px 0 rgba(147, 147, 147, 0.5)"}
          className="carrousel_next_button"
          height={"60px"}
          left={"-30px"}
          position={"absolute"}
          top="100px"
          width={"60px"}
          onClick={() => {
            setCarrouselPageIdx((old) => old - 1);
          }}
        >
          <Text color={"#3483fa"} fontSize={"24px"} fontWeight={"800"}>
            {"<"}
          </Text>
        </Button>
      )}
      {carrouselPageIdx * 3 === pictures.length ? null : (
        <Button
          appearance={"none"}
          backgroundColor={"white"}
          borderRadius={"100%"}
          boxShadow={"0 3px 3px 0 rgba(147, 147, 147, 0.5)"}
          className="carrousel_next_button"
          height={"60px"}
          position={"absolute"}
          right={"-30px"}
          top="100px"
          width={"60px"}
          onClick={() => {
            setCarrouselPageIdx((old) => old + 1);
          }}
        >
          <Text color={"#3483fa"} fontSize={"24px"} fontWeight={"800"}>
            {">"}
          </Text>
        </Button>
      )}
    </Box>
  );
}
