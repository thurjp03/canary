import React from 'react';
import './ReviewCard.css';

import { Card } from 'antd';

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
    </div>
  );
}

export default ReviewCard;
