// import axios from "axios";
// import { GetStaticProps } from "next";
// import { useState } from "react";
// import { Button, Htag, P, Rating, Tag } from "../components";
// import { MenuItem } from "../intefaces/menu.interface";
// import { withLayout } from "../layout/Layout";

// function Course({ menu }: CourseProps) {

//   const [rating, setRating] = useState<number>(4);

//   return (
//     <>

//     </>
//   );
// }

// export default withLayout(Course);

// export const getStaticProps: GetStaticProps<CourseProps> = async () => {
//   const firstCategory = 0;

//   const { data: menu } = await axios.post<CourseProps[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });

//   return {
//     props: {
//       menu,
//       firstCategory
//     }
//   };
// };

// interface CourseProps extends Record<string, unknown> {
//   menu: MenuItem[];
//   firstCategory: number;
// }
