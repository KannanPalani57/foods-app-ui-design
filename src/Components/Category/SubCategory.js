import React from 'react'
import { subCategoryFoods } from 'Utils/subCategoryFoods'
import './SubCategory.css'

function SubCategory() {
  return (
    <div className="sub-category">
      <p className="sub-cat-text">Sub Category</p>

      {subCategoryFoods.map((item) => {
        return <img key={item.id} className="sub-image" src={item.img} />
      })}
    </div>
  )
}

export default SubCategory
