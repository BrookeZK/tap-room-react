import React from 'react'
import Keg from './Keg'

var masterKegList = [
  {
    name: 'Thunderhead',
    pricePint: '5',
    price8oz: '3',
    brand: 'Pyramid Brewing Co.',
    type: 'IPA',
    remainingPints: '124',
    seasonal: 'false',
    locality: 'Pacific NorthWest',
    city: 'Seattle',
    state: 'Washington',
    country: 'USA'
  },
  {
    name: 'Proletariat Red',
    pricePint: '5',
    price8oz: '3',
    brand: 'Lompoc Brewing Co.',
    type: 'Red Ale',
    remainingPints: '64',
    seasonal: 'false',
    locality: 'Local to Town',
    city: 'Portland',
    state: 'Oregon',
    country: 'USA'
  },
  {
    name: 'Sleighr Winter Ale',
    pricePint: '6',
    price8oz: '3',
    brand: 'Ninkasi Brewing Co.',
    type: 'Dark Double Alt Ale',
    remainingPints: '20',
    seasonal: 'true',
    locality: 'Local to State',
    city: 'Eugene',
    state: 'Oregon',
    country: 'USA'
  },
  {
    name: 'Corona Extra',
    pricePint: '5',
    price8oz: '3',
    brand: 'Cervecería Modelo',
    type: 'Pale Lager',
    remainingPints: '9',
    seasonal: 'false',
    locality: 'Foreign',
    city: '',
    state: '',
    country: 'Mexico'
  },
  {
    name: 'Saigon Beer',
    pricePint: '7',
    price8oz: '3',
    brand: 'Sabeco',
    type: 'Lager',
    remainingPints: '124',
    seasonal: 'false',
    locality: 'Foreign',
    city: 'Ho Chi Minh City',
    state: '',
    country: 'Vietnam'
  },
  {
    name: 'Pabst Blue Ribbon',
    pricePint: '3',
    price8oz: '1',
    brand: 'Pabst Brewing Co.',
    type: 'Lager',
    remainingPints: '53',
    seasonal: 'false',
    locality: 'Midwest',
    city: 'Milwaukee',
    state: 'Wisconsin',
    country: 'USA'
  }
]

function KegList(){
  return(
    <div>
      <hr/>
      {masterKegList.map((keg, index) => 
        <keg name={keg.name}
          pricePint={keg.pricePint}
          price8oz={keg.price8oz}
          brand={keg.brand}
          type={keg.type}
          remainingPints={keg.remainingPints}
          seasonal={keg.seasonal}
          locality={keg.locality}
          city={keg.city}
          state={keg.state}
          country={keg.country}
          key={index}/>
      )}
    </div>
  )
}

export default KegList