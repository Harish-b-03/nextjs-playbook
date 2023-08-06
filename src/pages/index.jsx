import Layout from "../containers/layout/Layout";
import ProductCard from "../components/ProductCard";

export default function Home({products}) {
    return (
        <Layout>
            <div className="w-full h-full flex flex-wrap space-x-3">
                {
                    products?.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                }
            </div>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const res_products = await fetch("https://fakestoreapi.com/products");
    const products = await res_products.json();

    return { props: {products} }
}