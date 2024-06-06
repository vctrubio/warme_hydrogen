import { Await, useLoaderData, Link } from '@remix-run/react';
import { defer } from '@shopify/remix-oxygen';
import { Image, Money } from '@shopify/hydrogen';
import { Suspense } from 'react';

export async function loader({ context }) {
    const { storefront } = context;
    const getProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

    return defer({ getProducts });
}

export default function Productos() {
    const data = useLoaderData();

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Productos</h1>
            <ProductsAll products={data.getProducts} />
        </div>
    );
}

function ProductsAll({ products }) {
 return (
   <div className="recommended-products">
     <Suspense fallback={<div>Loading...</div>}>
       <Await resolve={products}>
         {({ products }) => (
           <div className="recommended-products-grid">
             {products.nodes.map((product) => (
               <Link
                 key={product.id}
                 className="recommended-product"
                 to={`/products/${product.handle}`}
               >
                 <Image
                   data={product.images.nodes[0]}
                   aspectRatio="1/1"
                   sizes="(min-width: 45em) 20vw, 50vw"
                 />
                 <h4>{product.title}</h4>
                 <small>
                   <Money data={product.priceRange.minVariantPrice} />
                 </small>
               </Link>
             ))}
           </div>
         )}
       </Await>
     </Suspense>
     <br />
   </div>
 );
}

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

//to CHANGE TO...
const ALL_PRODUCTS_QUERY = `#graphql
  fragment Product on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query AllProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...Product
      }
    }
  }
`;