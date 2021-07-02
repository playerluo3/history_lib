import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
    return (
        <div className="cards">
            <h1>Travel into ancient China</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/chunqiu.png"
                            text="The Spring and Autumn period was a period in Chinese history from approximately 771 to 476 BCE"
                            label="Add Favorites"
                            path="/chunqiu"
                        />
                        <CardItem
                            src="images/zhanguo.png"
                            text="The Warring States period was an era in ancient Chinese history characterized by warfare... "
                            label="Add Favorites"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/qin.png"
                            text="The Qin dynasty was the first dynasty of Imperial China, lasting from 221 to 206 BC."
                            label="Add Favorites"
                            path="/services"
                        />
                        <CardItem
                            src="images/tang.png"
                            text="The Tang dynasty, or Tang Empire, was an imperial dynasty of China that ruled from 618 to 907, with an interregnum between 690 and 705"
                            label="Add Favorites"
                            path="/services"
                        />
                        <CardItem
                            src="images/song.png"
                            text="Northern Song Dynasty (February 4, 960-March 20, 1127), the ancient Chinese dynasty."
                            label="Add Favorites"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
