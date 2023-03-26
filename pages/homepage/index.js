import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Navbar } from "../../components/Navbar";

const index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://reqres.in/api/users")
        .then((e) => {
          setData(e.data.data);
          setLoading(false);
        })
        .catch((e) => setLoading(false));
    }, 1000);
  }, []);
  console.log(data);
  return (
    <Box>
      <Navbar />
      {loading ? (
        <Flex justifyContent={"center"} mt={"50px"}>
          <BallTriangle
            margin={"auto"}
            height="80"
            width="80"
            radius="7"
            color="blue"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </Flex>
      ) : (
        <Grid pt={"50px"} margin={"auto"} templateColumns="repeat(2, 1fr)">
          {data.map((e) => (
            <Box pb={"20px"} margin={"auto"}>
              <Box w={"fit-content"} margin={"auto"}>
                <Image src={e.avatar} />
              </Box>
              <Box
                w={"fit-content"}
                margin={"auto"}
                fontSize={"18px"}
                fontWeight={500}
              >
                Name : - {e.first_name} {e.last_name}
              </Box>
              <Box>Email : - {e.email}</Box>
            </Box>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default index;
