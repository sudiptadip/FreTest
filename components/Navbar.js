import { Flex, } from "@chakra-ui/react"
import Link from "next/link"


export const Navbar = () => {
  return (
    <Flex
    justifyContent={"space-evenly"}
    h={"80px"}
    border={"1px solid black"}
    alignItems={"center"}
    fontSize={"21px"}
    bg={"twitter.500"}
    color={"white"}
    fontWeight={"500"}
    boxShadow={"2xl"}
  >
    <Link href={''}>Home</Link>
    <Link href={''} >About</Link>
    <Link href={''} >Contact</Link>
    <Link href="/">Sign in</Link>
  </Flex>
  )
}
