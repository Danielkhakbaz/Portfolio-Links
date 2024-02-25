import AboutMe from "components/app/about-me/about-me";
import Cards from "components/app/cards/cards";

const HomePage = async () => {
  return (
    <main className="w-full flex flex-col items-center grow lg:w-3/5">
      <AboutMe />
      <Cards />
    </main>
  );
};

export default HomePage;
