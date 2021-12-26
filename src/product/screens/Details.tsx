import React from "react";
import {
  Box,
  Stack,
  Table,
  Text,
  Td,
  Tr,
  Tbody,
  StackDivider,
  Grid,
  Container,
  Link,
} from "@chakra-ui/react";

import {Product} from "../types";
import mock from "../mock";
import Carrousel from "../../components/Carrousel";
import QuestionBox from "../../components/QuestionBox";
import RightPanel from "../../components/RightPanel";
import ProductViewer from "../../components/ProductViewer";

// 2. Update the breakpoints as key-value pairs

// 3. Extend the theme

export interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Stack direction={"column"}>
      <Container
        alignSelf="center"
        direction={"column"}
        maxWidth="container.xl"
        mt="10px"
        my={"10px"}
        px={0}
      >
        <Stack alignSelf={"center"} direction={"row"} my={"10px"}>
          <Stack direction={"column"}>
            <Text>
              <Text as="span" fontWeight={"500"}>
                Tambíen puede interesarte
              </Text>
              : pulpito reversible - furrball - peluche
            </Text>
            <Text>
              <Link href={"/"}>Volver al listado</Link> | Juegos y juguetes {">"} Peluches
            </Text>
          </Stack>
        </Stack>
      </Container>
      <Stack
        backgroundColor={"white"}
        borderRadius={"3px"}
        className="main-content-wrapper"
        direction={"row"}
        padding={"10px"}
        width={"100%"}
      >
        <Stack
          alignItems={"center"}
          className="left-panel-wrapper"
          direction={"column"}
          justifyContent={"center"}
          spacing={"40px"}
          width={{sm: "100%", lg: "70%"}}
        >
          <ProductViewer product={product} />
          <Stack
            borderTop={"1px solid"}
            borderTopColor={"gray.200"}
            className="sections_wrapper"
            direction={"column"}
            divider={<StackDivider borderColor="gray.200" />}
            pt="50px"
            spacing={"50px"}
            width={"720px"}
          >
            <Stack className="section_wrapper_1" direction={"column"} spacing={"20px"}>
              <Text fontSize={"24px"}>Publicaciones del vendedor</Text>
              <Carrousel product={product} />
              <Text color={"#1259c3"} fontSize={"14px"} pl={"10px"}>
                Ver más publicaciones del vendedor
              </Text>
            </Stack>
            <Stack className="section_wrapper_2" spacing={"30px"}>
              <Text fontSize={"24px"}>Características principales</Text>
              <Table variant={"striped"}>
                <Tbody>
                  {product.attributes
                    .filter((attribute: any) =>
                      ["ANIMAL", "BRAND", "CHARACTER", "FRANCHISE", "MODEL"].includes(attribute.id),
                    )
                    .map((attribute: any, attributeIdx: any) => (
                      <Tr key={attributeIdx}>
                        <Td fontWeight={"500"} width={"20%"}>
                          {attribute.name}
                        </Td>
                        <Td width={"80%"}>{attribute.values[0].name}</Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
              <Stack direction={"column"} spacing={"20px"}>
                <Text fontSize={"20px"}>Otras características</Text>
                <Grid fontSize={"14px"} rowGap={"10px"} templateColumns={"repeat(2, 1fr)"}>
                  {product.attributes
                    .filter((attribute: any) =>
                      ["IS_HYPOALLERGENIC_MATERIAL", "MATERIAL", "HEIGHT", "WIDTH"].includes(
                        attribute.id,
                      ),
                    )
                    .map((attribute: any, attributeIdx: any) => (
                      <Text key={attributeIdx}>
                        <Text as="span" fontWeight={"500"}>
                          {attribute.name}
                        </Text>
                        : {attribute.values[0].name}
                      </Text>
                    ))}
                </Grid>
              </Stack>
            </Stack>
            <QuestionBox />
          </Stack>
          <Box className="spacer" height={"50px"} />
        </Stack>
        <RightPanel product={product} />
      </Stack>
    </Stack>
  );
};

export default DetailsScreen;
