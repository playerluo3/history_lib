import React from 'react'
import Button from './Button'
import '../App.css'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            {/* <video src="/videos/history.m4v" autoPlay loop muted /> */}
            <h1>TIME OF ADVENTURE</h1>
            <p>What are you waiting</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    WATCH TRAILER<i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
