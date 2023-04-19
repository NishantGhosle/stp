import {
  AboutUs,
  Brands,
  Categories,
} from "../components/common/page-componets";
import { Hero } from "../components/home/home-3";

const HomeThree = () => {
  return (
    <div className="md:pt-[5.2rem] pt-10">
      <Hero />
      <div className="mt-10 px-[3%] md:px-[6%]">
        <AboutUs />
        <Categories />
        <Brands />
      </div>
    </div>
  );
};

export default HomeThree;
