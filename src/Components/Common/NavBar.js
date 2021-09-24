import React from 'react'
// import { ThunderboltFilled } from '@ant-design/icons'

import { Space } from 'antd'
import './NavBar.css'

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-title">
        <Space>
          <div>
            <i
              style={{
                fontSize: '1.4rem',
                color: '#C70039'
              }}
              className="fas fa-ellipsis-v"
            ></i>
            <i
              style={{
                fontSize: '1.4rem',
                color: '#C70039'
              }}
              className="fas fa-ellipsis-v"
            ></i>
            <i
              style={{
                fontSize: '1.4rem',
                color: '#C70039'
              }}
              className="fas fa-ellipsis-v"
            ></i>
          </div>
          <div className="site-title">
            {/* <div className="thunder-icon">
              <ThunderboltFilled
                style={{
                  marginTop: '.2em',
                  marginLeft: '.25em',
                  fontSize: '1.8rem',
                  color: '#fff'
                }}
              />
            </div> */}
            <div>
              <div className="title-main">
                <h3
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    marginTop: '1.8em',
                    paddingLeft: '2em'
                  }}
                >
                  Fizzy System
                </h3>
                <p
                  style={{
                    position: 'relative',
                    left: '3.8em',
                    fontSize: '0.8em',
                    color: 'gray',
                    bottom: '1.2em'
                  }}
                >
                  Ordering make it easy
                </p>
              </div>
            </div>
          </div>
        </Space>
      </div>
      <div className="nav-items">
        <i
          style={{
            marginLeft: '2em',
            cursor: 'pointer',
            fontSize: '1.4rem',
            color: '#ffae42'
          }}
          className="fas fa-home"
        ></i>
        <i
          style={{
            marginLeft: '2em',
            cursor: 'pointer',
            fontSize: '1.4rem',
            color: '#ffae42'
          }}
          className="far fa-bell"
        ></i>
        <i
          style={{
            marginLeft: '2em',
            cursor: 'pointer',
            fontSize: '1.4rem',
            color: '#ffae42'
          }}
          className="fas fa-user"
        ></i>
      </div>
    </div>
  )
}

export default NavBar
