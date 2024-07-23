import { HStack, SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGride = ({ gameQuery }: Props) => {
  const { data, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <HStack margin={3}>
            <GameCardContainer key={skeleton}>
              <GameCardSkelton />
            </GameCardContainer>
          </HStack>
        ))}
      {data.map((game) => (
        <HStack margin={3}>
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        </HStack>
      ))}
    </SimpleGrid>
  );
};

export default GameGride;
