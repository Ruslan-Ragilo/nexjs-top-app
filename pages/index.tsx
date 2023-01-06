import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";

export default function Home() {

  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag="h2">sadasd</Htag>
      <Button arrow="down" appearance="primary">Btn</Button>
      <Button arrow="rigth" appearance="ghost">Btn</Button>
      <P size="s">World</P>
      <P size="m">World</P>
      <P size="l">World</P>
      <Tag size="m" color="primary">World</Tag>
      <Tag size="s" color='red'>World</Tag>
      <Tag size="m" color="green">World</Tag>
      <Tag size="s" color='grey'>World</Tag>
      <Tag size="m" color='ghost'>World</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
}
