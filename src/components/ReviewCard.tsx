import React from 'react';
import './ReviewCard.css';

import { Rate } from 'antd';

const currencyMap = {
  USD: '$'
}

const payTypeMap = {
  hourly: '/hr',
  monthly: '/month',
  lump: ' total',
}

const PayDisplay = ({ type, amount, currency }) => (
  <span className="pay-display">
    <span className="pay-display__amount"><span className="pay-display__symbol">{currencyMap[currency]}</span>{amount}</span>
    <span className="pay-display__type">{payTypeMap[type]}</span>
  </span>
)

const ReviewCard = ({ position_title, pay, school, major }) => {
  return (
    <div className="review-card">
      <div className="review-card__demographics">
        <div className="review-card__position">
          <div className="review-card__position-title">{position_title}</div>
          <div className="review-card__pay">Paid <PayDisplay {...pay}/></div>
        </div>
        <div className="review-card__student">
          <div className="review-card__major">{major} major</div>
          <div className="review-card__school">{school}</div>
        </div>
      </div>
      <div className="review-card__content">
        <div className="review-card__stats">
          <div className="stat__label">Overall rating</div>
          <div className="stat__value">4.32</div>
          <div className="stat__label">Culture</div>
          <div className="stat__value">
            <Rate style={{
              fontSize: '27px',
              lineHeight: '25px',
              position: 'relative',
              bottom: '4px'
            }} character="●" value={2.5} disabled allowHalf />
          </div>
          <div className="stat__label">Work difficulty</div>
          <div className="stat__value">
            <Rate style={{
              fontSize: '27px',
              lineHeight: '25px',
              position: 'relative',
              bottom: '4px'
            }} character="●" value={4} disabled allowHalf />
          </div>
        </div>
        <div className="review-card__text">
          <div className="review-card__text-item">
            <h3 className="text-item__label">Impressions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet, est sed vulputate fermentum, dolor odio ullamcorper libero, quis cursus diam metus sit amet nunc. Fusce volutpat rutrum libero.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
