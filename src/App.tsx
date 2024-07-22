import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGride from "./components/GameGride";
import GenereList from "./components/GenereList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/sortSelector";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectOrders={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGride gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
