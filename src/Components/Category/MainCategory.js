import React from 'react'
import { mainCatagoryFoods } from 'Utils/mainCatagoryFoods'
import './MainCategory.css'

function MainCategory() {
  return (
    <div className="main-category">
      {mainCatagoryFoods.map((item) => {
        return (
          <div key={item.name} className="image">
            <img
              className="image__img"
              src={item.img}
              width="40%"
              height="20%"
            />
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">{item.name}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MainCategory
