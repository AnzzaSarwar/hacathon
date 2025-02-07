import Head from "next/head";
import Navbar from "../components/Navbar"; // Ensure the path is correct
import Hero2 from "../components/Hero2"; // Ensure the path is correct
import Header from "@/components/Header"; // Ensure the path is correct
import EditorsPick from "@/components/EditorPicks"; // Ensure the path is correct
import BestSeller from "@/components/BestSeller"; // Ensure the path is correct
import Crasual from "@/components/Crasual"; // Ensure the path is correct
import BlogDesign from "@/components/BlogDesign"; // Ensure the path is correct
import Footer from "@/components/Footer"; // Ensure the path is correct
import ProductCards from "./products/page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Featured Posts</title>
        <meta name="description" content="Featured blog posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Content */}
      <Navbar />
      <Header />
      <Hero2 />
      <EditorsPick />
      <ProductCards />
      <BestSeller />
      <Crasual />
      <BlogDesign />
      
      <Footer />
    </>
  );
}
