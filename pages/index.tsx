import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { MenuItem } from "../intefaces/menu.interface";
import { withLayout } from "../layout/Layout";

function Home({ menu }: HomeProps) {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
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
      <ul>
        {menu.map((el, i) => <li key={el._id.secondCategory}>{el._id.secondCategory}</li>)}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
