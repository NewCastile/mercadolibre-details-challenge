import {Stack, Text, Button, Input} from "@chakra-ui/react";
import React, {useRef} from "react";
import {useState} from "react";

export default function QuestionBox() {
  const [questions, setQuestions] = useState<string[]>([
    "¿De qué otro color tienen?",
    "¿Está disponible en alguna tienda cercana?",
    "¿Puede ir personalmente al local para cancelar?",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack className="section1_wrapper_3" spacing={"30px"}>
      <Text fontSize={"24px"}>Preguntas y Respuestas</Text>
      <Stack direction={"column"} spacing={"30px"}>
        <Text fontSize={"18px"} fontWeight={"500"}>
          ¿Qué quieres saber?
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Button backgroundColor={"secondary.100"} color={"#488ffa"} fontSize={"14px"} py={"25px"}>
            Costo y tiempo de envío
          </Button>
          <Button backgroundColor={"secondary.100"} color={"#488ffa"} fontSize={"14px"} py={"25px"}>
            Devoluciones gratis
          </Button>
          <Button backgroundColor={"secondary.100"} color={"#488ffa"} fontSize={"14px"} py={"25px"}>
            Medios de pago y promociones
          </Button>
          <Button backgroundColor={"secondary.100"} color={"#488ffa"} fontSize={"14px"} py={"25px"}>
            Garantía
          </Button>
        </Stack>
      </Stack>
      <Stack
        alignItems={"flex-start"}
        direction={"column"}
        justifyContent={"center"}
        spacing={"20px"}
      >
        <Text fontSize={"18px"} fontWeight={"500"}>
          Preguntale al vendedor
        </Text>
        <Stack direction={"row"} width={"100%"}>
          <Input ref={inputRef} placeholder="Escribe tu pregunta" width="80%" />
          <Button
            backgroundColor={"#3483fa"}
            color={"white"}
            fontWeight={"normal"}
            width="20%"
            onClick={() => {
              setQuestions((old) => [...old, (inputRef.current as HTMLInputElement).value]);
            }}
          >
            Preguntar
          </Button>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize={"18px"} fontWeight={"500"}>
          Últimas realizadas
        </Text>
        {questions.map((question, questionIdx) => {
          return <Text key={questionIdx}>{question}</Text>;
        })}
      </Stack>
    </Stack>
  );
}
