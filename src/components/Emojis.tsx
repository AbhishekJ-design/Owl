import bullsEye from "../assets/bulls_eye.webp";
import thumbsUp from "../assets/thumbs_up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojisMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };

  return <Image {...emojisMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emojis;
