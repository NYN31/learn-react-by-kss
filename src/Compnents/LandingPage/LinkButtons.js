import {Button, Flex, SimpleGrid} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {Urls} from '../Common/AllUrls';

const LinkButtons = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="row" pt="20px">
      <SimpleGrid
        columns = {{lg: 3, base: 1}}
        direction={['column', 'row']}
        //p="20px"
        align="center"
        minChildWidth={{lg: "400px", base: "96%"}}
      >
        {
          Urls.map(url => {
            return <Button
              key={url.path}
              m={2}
              bg="#0077C0"
              color="#FFF"
              _hover={{
                bg: "#0077C0 !important",
                color: "#FFF !important"
              }}
              onClick={() => navigate(url.path)}
            >
              {url.title}
            </Button>
          })
        }
      </SimpleGrid>
    </Flex>
  );
};

export default LinkButtons;