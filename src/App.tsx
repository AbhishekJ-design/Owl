import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGride from "./components/GameGride";
import GenereList from "./components/GenereList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        {" "}
        <Nav />{" "}
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"}>
          <GenereList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGride />
      </GridItem>
    </Grid>
  );
}

export default App;
