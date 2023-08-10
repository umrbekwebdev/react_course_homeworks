import React from 'react'

function Card({ id,calories,name,term }) {
  return (
    <div className='card'>
        <div className="card-header">
              <img src={`https://img.foxes.cool/happy/${id}.jpg?width=200&height=200`} alt={name} />
        </div>
        <div className="card-body">
            <h6>{name}</h6>
            <p>{term}</p>
        </div>
        <div className="card-footer">
            <div className="btn btn-success"><strong>calories:</strong> {calories}</div>
        </div>
    </div>
  )
}

export default Card