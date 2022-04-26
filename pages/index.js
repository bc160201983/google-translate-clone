import Head from "next/head";
import Image from "next/image";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      {/* <NavBar />
      <Menu /> */}
      <div className="max-w-7xl mx-auto mt-[10%]">
        <Main />
      </div>
    </>
  );
}
