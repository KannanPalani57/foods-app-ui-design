import React from 'react'
import { Row, Col } from 'antd'
import MainCategory from 'Components/Category/MainCategory'
import SubCategory from 'Components/Category/SubCategory'
import SearchAndSelectFoods from 'Components/SearchAndSelectFoods'
import BillSection from 'Components/BillSection'
import './FoodCategory.css'

function FoodCategory() {
  return (
    <>
      <Row>
        <Col className="food-first-column" xs={24} xl={7}>
          <Row xs={24}>
            <MainCategory />
            <SubCategory />
          </Row>
        </Col>
        <Col className="food-middle-column" xs={24} xl={11}>
          <SearchAndSelectFoods />
        </Col>
        <Col className="food-third-column" xs={24} xl={6}>
          <BillSection />
        </Col>
      </Row>
    </>
  )
}

export default FoodCategory
