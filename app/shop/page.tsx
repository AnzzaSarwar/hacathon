import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Shop from "@/components/Shop";
import Brand from "@/components/Brand"
import Footer from "@/components/Footer";
import Products from "@/components/Products"
import ProductCards from "../products/page";
export default function ShopPage() {
    return (
      <div>
        <Navbar />
      <Header />
      <ProductCards />
      <Shop />
      <Brand />
      <Footer />
      <Products />
      </div>
    );
  }
  