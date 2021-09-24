import React from 'react'
import { billItems } from 'Utils/billItems'
import './BillSection.css'

function BillSection() {
  return (
    <>
      <div className="btns">
        <button>
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa fa-inbox" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa fa-retweet" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa fa-ship" aria-hidden="true"></i>
        </button>
      </div>

      <div className="bill-section">
        <div className="bill-header">
          <div>
            <h2
              style={{
                fontWeight: 'bold',
                marginLeft: '0.4em',
                marginTop: '0.3em'
              }}
            >
              Bill
            </h2>
          </div>
          <div>
            <button className="clearAll">clear all</button>
            <button className="billbtn">
              <i className="fa fa-inbox" aria-hidden="true"></i>
            </button>
            <button className="billbtn">
              <i className="fa fa-retweet" aria-hidden="true"></i>
            </button>
            <button className="billbtn">
              <i className="fa fa-ship" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="bill-items">
          {billItems.map((item) => {
            return (
              <div key={item.name} className="bill-card">
                <img key={item.id} className="card-image img" src={item.img} />
                <h4 style={{ fontWeight: 'bold', marginLeft: '.3em' }}>
                  {item.name}
                </h4>
                <h4
                  style={{
                    fontWeight: 'bold',
                    marginLeft: '.8em',
                    color: 'green'
                  }}
                >
                  {item.price}
                </h4>
                <div className="bill-area-btns">
                  <button
                    style={{
                      background: 'red',
                      color: 'white',
                      borderRadius: '50%',
                      border: 'none',
                      marginBottom: '0.5em'
                    }}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                  <button
                    style={{
                      background: 'green',
                      color: 'white',
                      borderRadius: '50%',
                      border: 'none'
                    }}
                  >
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        {/* bill */}
        <div className="bill-list">
          <div className="list-item">
            <h3>Subtotal</h3>
            <h3>$18.25</h3>
          </div>
          <div className="list-item">
            <h3>Discounts</h3>
            <h3>-$3.50</h3>
          </div>
          <div className="list-item">
            <h3>Total</h3>
            <h3>$15.10</h3>
          </div>
        </div>
        {/* pay now btn */}
        <div className="pay-now-section">
          <button className="pay-now-btn">
            <i className="fas fa-money-check"></i>
            <span style={{ marginLeft: '0.5em' }}>Pay Now</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default BillSection
