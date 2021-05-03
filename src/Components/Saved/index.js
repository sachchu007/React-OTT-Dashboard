import { Container, Grid } from "@material-ui/core";
import React from "react";
import Card from "../Card/index";
import Video from "../Videos/index";

const Saved = ({ value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Container>
          <Grid container justify="center">
            {Video.map((item, index) => {
              if (item.liked) {
                return (
                  <Card
                    name={item.name}
                    url={item.url}
                    image={item.image}
                    key={index}
                  />
                );
              }
              else{
                return(null)
              }
            })}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Saved;
