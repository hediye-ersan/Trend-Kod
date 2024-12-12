function CategoryCard({title, subtitle, image}) {
    return(
        <section>
            <div  className="flex flex-col items-center justify-center py-12">
                <h3 className="text-h3 font-bold text-center">Shop</h3>
                <div className="flex gap-2 pt-10">
                    <h6 className="text-h6">Home</h6>
                    <img src="/icons/chevron-right.svg"/>
                    <h6 className="text-h6">Shop</h6>
                </div>
            </div>

            <div>
                <div style={{backgroundImage: `url(${image})`}}>
                    <div>
                    <h5>{title}</h5>
                    <h6>{subtitle}</h6>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
const CategoryList =() => {
const images= [
    './images/Category1.png',
    './images/Category2.png',
    './images/Category3.png',
    './images/Category4.png',
    './images/Category5.png',
]
}
//TODO: Create a list of category cards

export default CategoryCard;