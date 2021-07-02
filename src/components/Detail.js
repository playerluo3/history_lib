import React from 'react'
import Button from './Button'
import './Detail.css'

const Detail = ({ children }) => {
    return (
        <div className="detail-container">
            {/* <video src="/videos/history.m4v" autoPlay loop muted /> */}
            <h1>{children}</h1>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    WATCH VIDEO<i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default Detail
