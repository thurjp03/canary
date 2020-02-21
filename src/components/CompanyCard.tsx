import React from 'react';
import './CompanyCard.css';

import { Card, Rate, Tooltip } from 'antd';
import { Link } from "@reach/router";
import { Stat } from './Stat'

import { YearValue, PayValue } from "../pages/SubmitReview";

import ReviewCard from './ReviewCard';

const CompanyMeta = ({  }: {  }) => (
  <div className="company-meta">
    test
  </div>
)

const review = {
  position_title: "Product Designer",
  pay: ({
    type: 'hourly',
    amount: 20,
    currency: 'USD'
  }) as PayValue,
  overall_rating: 3.5,
  culture_rating: 2,
  work_rating: 5,
  year: ({
    grad_level: 'undergraduate',
    year: '3rd'
  }) as YearValue,
  school: 'Georgia Institute of Technology',
  major: 'Computational Media',
  tools: ['Illustrator', 'React'],
  team: 'AWS',
  company: 'Amazon',
  timestamp: new Date()
}

const CompanyCard = ({ name, description, image }: { name: string, description: string, image: string }) =>  (
  <div className="company-card">
    <div className="company-card__header">
      <div className="company-card__left">
        <img src={image} alt={name} className="company-card__img" />
        <span className="company-card__title">
          <h2 className="company-card__name">{name}</h2>
          <div className="company-card__description">{description}</div>
        </span>
      </div>
      <div className="company-card__right">
        {/* <div className="company-card__stats"> */}
          <Stat title="Overall">
            4.32
          </Stat>
          <Stat title="Culture">
            4.32
          </Stat>
          <Stat title="Work">
            4.32
          </Stat>
        {/* </div> */}
      </div>
    </div>
    <div className="company-card__more">
      <Link to="/">More details about this company...</Link>
    </div>
    <div className="company-card__reviews">
      <ReviewCard {...review} />
    </div>
  </div>
);

export default CompanyCard;
