import { categories } from "../data/data"

const Category = () => {
  console.log(categories)
  return (
    <div className='max-w-[1640px] mx-auto p-4 pb-12 md:pt-12'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold text-orange-600'>Top Rated Menu Items</h1>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            { categories.map((category, index) => (
                <div key={index} className="border hover:scale-105 duration-300 shadow-xl flex justify-between items-center bg-gray-200 p-4 rounded">
                    <h3 className="font-bold text-2xl">{category.name}</h3>
                    <img className="ml-6 w-full h-[100px]" src={category.image} alt={category.name} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category