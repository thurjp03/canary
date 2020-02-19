import React from 'react';
import './CompanyCard.css';

import { Card, Rate, Tooltip } from 'antd';
import { Link } from "@reach/router";

import ReviewCard from './ReviewCard';

const CompanyMeta = ({  }: {  }) => (
  <div className="company-meta">
    test
  </div>
)

const review = {
  position_title: "Product Designer",
  pay: {
    type: 'hourly',
    amount: 20,
    currency: 'USD'
  },
  overall_rating: 3.5,
  year: {
    grad_level: 'undergraduate',
    year: '3rd'
  },
  school: 'Georgia Institute of Technology',
  major: 'Computational Media'
}

const CompanyCard = ({ name, description, image }: { name: string, description: string, image: string }) =>  (
  <Card style={{display: 'block'}}>
    {/* <Card.Meta title={name} avatar={<img className="company-image" src={image}/>} description={<CompanyMeta/>}/>
    <div className="content">
      Content
    </div> */}
    <div className="company-card">
      <div className="company-card__company-details">
        <div className="company-card__meta">
          <img className="company-card__main-image" src={image} />
          <div className="company-card__detail ant-card-meta-detail">
            <div className="company-card__title ant-card-meta-title">{name}</div>
            <div className="company-card__description ant-card-meta-description">{description}</div>
          </div>
        </div>
        <div className="company-card__stats stats">
          {/* <div className="company-stats__stat"> */}
            <div className="stat__label">Overall rating</div>
            <div className="stat__value">4.32</div>
          {/* </div> */}
          {/* <div className="company-stats__stat"> */}
            <div className="stat__label">Culture</div>
            <div className="stat__value">
              <Rate style={{
                fontSize: '27px',
                lineHeight: '25px'
              }} character="●" value={2.5} disabled allowHalf />
            </div>
          {/* </div> */}
          {/* <div className="company-stats__stat"> */}
            <div className="stat__label">Work difficulty</div>
            <div className="stat__value">
              <Rate style={{
                fontSize: '27px',
                lineHeight: '25px'
              }} character="●" value={4} disabled allowHalf />
            </div>
          {/* </div> */}
        </div>
        <div className="company-card__more">
          <Link to="/" >More company details...</Link>
        </div>
      </div>
      <div className="company-card__content">
        <Card style={{ display: 'block' }}>
          <div className="note">Most relevant review</div>
          <ReviewCard {...review} />
        </Card>
        <div className="company-card__more-reviews">
          <Link to="/">Read {5} more relevant reviews or all {63} {"Amazon"} reviews...</Link>
        </div>
      </div>
    </div>
  </Card>
);

export default CompanyCard;
