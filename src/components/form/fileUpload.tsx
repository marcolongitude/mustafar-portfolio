import React from "react";
import {
    AspectRatio,
    Box,
    Container,
    Heading,
    Input,
    Stack,
    Text
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";


export function FileUpload() {
    const [value, setValue] = React.useState("")
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        console.log(event.target.value)
        setValue(event.target.value)
    }
    const controls = useAnimation();
    const startAnimation = () => controls.start("hover");
    const stopAnimation = () => controls.stop();
    return (
        <Container display="flex" justifyContent="center" alignItems="center" flexDir='column'>
            {value &&
                <Text color="teal.500" mb="8px">Arquivo: {value}</Text>
            }
            <AspectRatio width="64" ratio={4}>
                <Box
                    borderColor="gray.300"
                    borderStyle="dashed"
                    borderWidth="2px"
                    rounded="md"
                    shadow="sm"
                    role="group"
                    transition="all 150ms ease-in-out"
                    _hover={{
                        shadow: "md"
                    }}
                    as={motion.div}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                >
                    <Stack p="8" textAlign="center" spacing="1">
                        <Heading fontSize="sm" color="teal.500" fontWeight="400">
                            Carregue suas imagens clicando aqui
                        </Heading>
                    </Stack>
                    <Input
                        value={value}
                        onChange={handleChange}
                        type="file"
                        position="absolute"
                        top="0"
                        left="0"
                        opacity="0"
                        aria-hidden="true"
                        accept="image/*"
                        onDragEnter={startAnimation}
                        onDragLeave={stopAnimation}
                    />
                </Box>
            </AspectRatio>
        </Container>
    );
}
