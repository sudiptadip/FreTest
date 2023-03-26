import { Box, Button, FormLabel, Input, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

function Signin() {
  const [email,setEmail] = useState('')
  const [emailAndPasword] = useState({
    email: "prasenjit@gmail.com",
    password: "prasenjit@123"
  })
  const [password,setPassword] = useState('')
  const toast = useToast()
  const router = useRouter()

  function HandelSubmit(){
    if(email === '' || password === ''){
      toast({
        title: 'Fill all input boxes',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
    }
    else if(email === emailAndPasword.email && password === emailAndPasword.password){
      toast({
        title: 'Successfuly sign-in complite',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      router.push('/homepage')
    }else {
      toast({
        title: 'Wrong email and password',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <Box borderRadius={'15px'} boxShadow={'2xl'} padding={'20px'} w={'450px'} h={'500px'} border={'1px solid black'} margin={'auto'} mt={'100px'} >
      <Text mb={'50px'} fontSize={'4xl'} fontWeight={500} textAlign={'center'} >Sign Up</Text>
      <Box>
        <FormLabel>Email address</FormLabel>
        <Input
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"email"}
          value={email}
        />
      </Box>
      <Box mt={'20px'} >
        <FormLabel>Password</FormLabel>
        <Input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"password"}
          value={password}
        />
      </Box>
      <Box mt={'40px'} >
        <Button w={'100%'} colorScheme={'blue'} onClick={HandelSubmit} >Summit</Button>
      </Box>
    </Box>
  );
}

export default Signin;
