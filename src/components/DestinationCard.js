import React from 'react'

function DestinationCard({ destination }) {
    return (
        <div>
            <div key={destination.city} className='card-container flex items-center rounded-lg bg-white shadow-lg overflow-hidden'>
                <img src={destination.imageUrl} alt={destination.imageAlt} className='card-image h-32 w-32 flex-shrink-0 object-cover object-center' />
                <div className='card-body px-6 py-4'>
                    <h3 className='card-title text-lg font-semibold text-gray-800 uppercase'>{destination.city}</h3>
                    <p className='card-text text-gray-600'>${destination.averagePrice} / night average</p>
                    <div className='mt-4'>
                        <a href='#' className='text-indigo-500 hover:text-indigo-400 font-semibold text-sm'>Explore {destination.propertyCount} properties</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard
