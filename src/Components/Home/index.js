import { Container, Grid} from "@material-ui/core";
import React from "react";
import Card from "../Card/index";
import Video from "../Videos/index";

const Home = ({ value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Container>
          <Grid container justify="center">
            {Video.map((item, index) => {
              return (
                <Card
                  name={item.name}
                  url={item.url}
                  image={item.image}
                  key={index}
                />
              );
            })}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Home;
