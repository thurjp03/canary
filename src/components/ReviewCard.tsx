import React from 'react';

import { Card } from 'antd';

const ReviewCard = () => {
  return (
    <div className="review-card">
      <div className="review-card__demographics">
        <div className="review-card__position">
          <div className="review-card__position-title"></div>
          <div className="review-card__pay"></div>
        </div>
        <div className="review-card__school"></div>
        <div className="review-card__major"></div>
      </div>
    </div>
  );
}

export default ReviewCard;
