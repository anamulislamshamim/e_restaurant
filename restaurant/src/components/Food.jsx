import { useState } from 'react';
import { data } from '../data/data';

const Food = () => {
  const [food, setFood] = useState(data)

  // filter type burger/pizza/etc
  const filterType = (category) => {
    setFood(
        data.filter((item) => item.category === category)
    )
  }

  // filter by prices 
  const filterByPrice = (price) => {
    setFood(
        data.filter((item) => item.price === price)
    )
  }

  return (
    <div className='max-w-[1640px]  mx-auto px-4 py-12'>
        <h1 className='text-center text-orange-600 text-2xl md:text-3xl lg:text-4xl font-bold'>Top Rated Menu Items</h1>
        {/* filter row  */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* filter types  */}
            <div className='md:mb-3'>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex flex-wrap mt-1'>
                    <button onClick={() => setFood(data)} className='duration-300 m-1 border-orange-600 font-semibold hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className='duration-300 m-1 border-orange-600 font-semibold hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className='duration-300 m-1 border-orange-600 font-semibold hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='duration-300 m-1 border-orange-600 font-semibold hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={() => filterType('chicken')} className='duration-300 m-1 border-orange-600 font-semibold hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>

            {/* filter price  */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex flex-wrap mt-1'>
                    <button onClick={() => filterByPrice('$')} className='duration-300 m-1 border-orange-600 font-semibold hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={() => filterByPrice('$$')} className='duration-300 m-1 border-orange-600 font-semibold hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={() => filterByPrice('$$$')} className='duration-300 m-1 border-orange-600 font-semibold hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={() => filterByPrice('$$$$')} className='duration-300 m-1 border-orange-600 font-semibold hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>
        {/* display foods  */}
        <div className='mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            { food.map((item, index) => (
                <div key={index} className='hover:scale-105 duration-300 border shadow rounded-xl'>
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                    <div className='flex justify-between items-center px-2 pt-4 pb-2'>
                        <h2 className='font-semibold text-xl'>{ item.name }</h2>
                        <span className='ml-2 bg-orange-600 min-w-[80px] max-h-[30px] text-center px-3 py-1 rounded-full text-white font-semibold'>{item.price}</span>
                    </div>
                </div>
            )) }
        </div>
    </div>
  )
}

export default Food