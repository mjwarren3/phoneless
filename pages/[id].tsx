import { GetStaticPaths, GetStaticProps } from 'next';
import { products } from '@/data/products'; // Adjust based on your data fetching
import { Product } from '@/interfaces/Product';
import PhoneLayout from '@/layouts/layout';
import { ChevronLeft, MoveLeft } from 'lucide-react';
import Link from 'next/link';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map(product => ({
    params: { id: product.name.replace(/\s+/g, '-').toLowerCase() }, // Example: convert name to URL-friendly ID
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params ?? {};
    const filteredProducts = products.filter(p => p.category.replace(/\s+/g, '-').toLowerCase() === id); // Match the ID transformation in getStaticPaths

    if (filteredProducts.length === 0) {
        return {
        notFound: true,
        };
    }

    return {
        props: {
            filteredProducts,
        },
    };
};


interface ProductProps {
    filteredProducts: Product[];
}

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
  const ProductPage: React.FC<ProductProps> = ({ filteredProducts }) => {
    return (
        <PhoneLayout>
            <div className="w-full grid grid-cols-1 gap-4 px-4 py-8">
                <div className="grid grid-cols-3">
                    <Link className="flex items-center text-xs w-full text-center" href="/"><ChevronLeft size={20} />Home</Link>
                    <p className="text-slate-700 font-semibold text-sm text-center w-full">{capitalizeFirstLetter(filteredProducts.at(0)?.category ?? '')}</p>
                </div>
                {filteredProducts.map((product) => (
                    <div key={product.name} className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
                        <img className="w-full" src={product.image_url} alt={product.name} />
                        <div className="px-6 py-2">
                        <div className="font-bold text-xl mb-2">{product.name}</div>
                        <p className="text-gray-500 text-sm">{product.description}</p>
                        </div>
                        <div className="px-6 pt-1 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.price}</span>
                        <Link className="text-sm text-gray-600 underline" href={product.link}>{product.link_text}</Link>
                        </div>
                        {product.tags.length > 0 && (
                            <>
                            <hr className="mb-2"></hr>
                            <div className="px-2 w-full flex justify-center">
                            {product.tags.map((tag) => (
                                <span key={tag} className="inline-block bg-emerald-100 rounded-full px-2 py-1 text-xs font-semibold text-emerald-700 mr-2 mb-2">
                                {tag}
                                </span>
                            ))}
                            </div>
                            </>
                        )}
                    </div>
                    ))}
            </div>
        </PhoneLayout>
    );
  };
  
  export default ProductPage;
