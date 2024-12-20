import CategoriesCard from "../components/CategoriesCard";
import IconList from "../components/IconCard";
import ProductCardList from "../components/ProductCard";
import Footer from "../layout/Footer";
import Navbar from "../layout/Header";

function ShopPage() {

    return (
        <>
        <Navbar />
        <CategoriesCard/>
        <ProductCardList/>
        <IconList/>
        <Footer/>
        </>
    );
}

export default ShopPage;