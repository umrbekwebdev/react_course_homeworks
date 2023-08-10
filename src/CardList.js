import React from 'react'
import Card from './Card'

function CardList({ foods }) {
    return (
    <div className='d-flex flex-wrap gap-4'>
        {foods.map(food => <Card key={food.id} id={food.id} 
            calories={food.calories} name={food.foodName} term={food.foodType} />)}
    </div>
    )
}

export default CardList