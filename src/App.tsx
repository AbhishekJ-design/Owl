import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGride from "./components/GameGride";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px, 1fr",
      }}
    >
      <GridItem area={"nav"}>
        {" "}
        <Nav />{" "}
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenereList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGride selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
