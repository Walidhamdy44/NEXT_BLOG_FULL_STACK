import CardsContainer from "@/components/Home/CardsContainer";

import Catagores from "@/components/Home/Catagores";
import Landing from "@/components/Home/Landing";
import SideBar from "@/components/Home/SideBar";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <PrimeReactProvider>
      <div className="min-h-[100vh]">
        <Landing />
        <Catagores />
        <div className="flex items-start justify-between gap-4 max-md:flex-col my-[30px]">
          <CardsContainer page={page} />
          <SideBar />
        </div>
      </div>
    </PrimeReactProvider>
  );
}
