import React from 'react';
import './ReviewCard.css';

import { Stat } from './Stat'
import { Rate, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from "@reach/router";
import { YearValue, PayValue } from "../pages/SubmitReview";

import moment from "moment";

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

const rateColor = value => value > 3.5 ? '#30ADF2' : value > 1.5 ? '#F9E02B' : '#F23E30'; //2FF495

interface ReviewCardProps {
  overall_rating: number,
  culture_rating: number,
  work_rating: number,
  position_title: string,
  team: string,
  tools: string[],
  major: string,
  year: YearValue,
  timestamp: Date,
  pay: PayValue,
  note?: string
}

const ReviewCard = ({ overall_rating, culture_rating, work_rating, position_title, pay, tools, major, team, year, timestamp, note="" }: ReviewCardProps) => {
  return (
    <div className="review-card">
      <div className="review-card__header">
        <div className="review-card__overall-rating" style={{ background: rateColor(overall_rating) }}>{overall_rating}<span className="divisor">/5</span></div>
        <div className="review-card__stats">
          <Stat title="Culture">
            <Rate character="●" style={{ color: rateColor(culture_rating) }} value={culture_rating} disabled allowHalf />
          </Stat>
          <Stat title="Work Satisfaction">
            <Rate character="●" style={{ color: rateColor(work_rating)}} value={work_rating} disabled allowHalf />
          </Stat>
        </div>
        <div className="review-card__meta">
          <div className="review-card__note">{note}</div>
          <div className="review-card__date">{moment(timestamp).format("MM/DD/YY")}</div>
        </div>
      </div>
      <div className="review-card__content">
        <h2 className="review-card__position">{position_title} <span className="review-card__team">{team}</span></h2>
        <div className="review-card__description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </div>
        <div className="review-card__footer">
          <Stat title="Pay">
            <PayDisplay {...pay} />
          </Stat>
          <Stat title="Tools">
            {tools.map((tool, i) => <span className="review-card__tool" key={i}>{tool}</span>)}
          </Stat>
          <Stat title="Major">
            {major}
          </Stat>
          <Stat title="Year">
            {year.grad_level ? year.grad_level.charAt(0).toUpperCase() + year.grad_level.substring(1) : ''}, {year.year} year
          </Stat>
          <div className="review-card__view">
            <Link to="/">Read more <ArrowRightOutlined/></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
