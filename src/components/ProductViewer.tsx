import {Stack, Box, Button} from "@chakra-ui/react";
import React, {useRef, useState} from "react";

import {Props} from "../product/screens/Details";

export default function ProductViewer({product}: Props) {
  const currentImageIdxRef = useRef<number>(1);
  const [currentImage, setCurrentImage] = useState(product.pictures[0]);

  return (
    <Stack className="product_viewer_wrapper" direction={{sm: "column", lg: "row"}} width={"100%"}>
      <Stack
        alignItems={"center"}
        className="gallery-column"
        display={{sm: "none", lg: "flex"}}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        spacing={"10px"}
        width="10%"
      >
        {product.pictures.map((picture, pictureIdx) => {
          const pictureUrl = picture.url;

          return (
            <Box
              key={pictureIdx}
              backgroundImage={pictureUrl}
              backgroundPosition={"center"}
              backgroundRepeat={"no-repeat"}
              backgroundSize={"contain"}
              border={"1px solid"}
              borderColor={picture.id === currentImage.id ? "blue.500" : "gray.300"}
              borderRadius={"5px"}
              height={"60px"}
              width={"60px"}
              onClick={() => {
                setCurrentImage(picture);
              }}
            />
          );
        })}
      </Stack>
      <Box
        alignSelf={"center"}
        backgroundColor={"gray.200"}
        borderRadius={"5px"}
        display={{lg: "none"}}
        fontWeight={"500"}
        padding={" 5px 15px "}
      >
        {currentImageIdxRef.current as number} / {product.pictures.length}
      </Box>
      <Box
        backgroundImage={currentImage.url}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"contain"}
        className="current_image_displayer"
        height={"500px"}
        marginY={"20px"}
        pr={"40px"}
        width={{sm: "100%", lg: "90%"}}
      />
      <Stack
        alignSelf={"center"}
        direction="row"
        display={{lg: "none"}}
        spacing={"15px"}
        width={"max-content"}
      >
        <Button
          onClick={() => {
            if (currentImageIdxRef.current === 1) return null;
            currentImageIdxRef.current = currentImageIdxRef.current - 1;
            setCurrentImage(product.pictures[currentImageIdxRef.current - 1]);
          }}
        >
          {"<"}
        </Button>
        <Button
          onClick={() => {
            if (currentImageIdxRef.current === product.pictures.length) return null;
            currentImageIdxRef.current = currentImageIdxRef.current + 1;
            setCurrentImage(product.pictures[currentImageIdxRef.current - 1]);
          }}
        >
          {" "}
          {">"}
        </Button>
      </Stack>
    </Stack>
  );
}
