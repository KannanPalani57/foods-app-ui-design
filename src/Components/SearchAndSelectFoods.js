import React from 'react'
import { Col } from 'antd'
import { foodItems } from 'Utils/foodItems'
import './SearchAndSelectFoods.css'

function SearchAndSelectFoods() {
  return (
    <>
      <Col>
        <input className="inputTag" type="text" placeholder="Search Items" />
      </Col>
      <Col>
        <div className="foodCard">
          {foodItems.map((item) => {
            return (
              <div key={item.name} className="card">
                <div>
                  <h5 style={{ fontWeight: 'bold' }}>{item.name}</h5>
                  <p style={{ color: 'gray' }}>250g</p>
                  <h4 style={{ fontWeight: 'bold' }}>{item.price}</h4>
                </div>
                <div>
                  <img key={item.id} className="card-image" src={item.img} />
                </div>
              </div>
            )
          })}
        </div>
      </Col>
    </>
  )
}

export default SearchAndSelectFoods
