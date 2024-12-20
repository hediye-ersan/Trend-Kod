export default function BestsellerProducts() {
    const products = [
      {
        id: 1,
        image: "/images/bestseller-1.svg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        salePrice: 6.48,
      },
      {
        id: 2,
        image: "/images/bestseller-2.svg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        salePrice: 6.48,
      },
      {
        id: 3,
        image: "/images/bestseller-3.svg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        salePrice: 6.48,
      },
      {
        id: 4,
        image: "/images/bestseller-4.svg",
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        salePrice: 6.48,
      },
    ]
  
    return (
      <div className="w-full max-w-md mx-auto p-4">
        <h2 className="text-xl font-bold mb-6">BESTSELLER PRODUCTS</h2>
        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.department}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-green-600 font-medium">
                    ${product.salePrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  