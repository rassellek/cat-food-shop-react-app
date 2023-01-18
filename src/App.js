import React from 'react'
import Header from '../src/components/Header/Header'
import Card from '../src/components/Card/Card'
import product from './data/products.js'
import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.cardsDisplay}>
        {product.map((product) => (
          <Card
            name={product.name}
            flavorName={product.flavors.foieGras.flavorName}
            flavorDescription={product.flavors.foieGras.flavorDescription}
            weight={product.weight}
            isAvailable={product.flavors.foieGras.isAvailable}
            image={product.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App
