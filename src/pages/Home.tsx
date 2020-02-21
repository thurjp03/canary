import React from 'react';
import './Home.css';

import CompanyCard from '../components/CompanyCard'
import ReviewCard from '../components/ReviewCard'

import { RouteComponentProps } from "@reach/router"
import { YearValue, PayValue } from "./SubmitReview";


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

const Home = (props: RouteComponentProps) => {
  return (
    <div className="Home">
      <div className="reviews">
        <CompanyCard
          name="Amazon"
          description="Small book seller"
          image="https://s3.amazonaws.com/assets.knackhq.com/assets/5d1bb666c3eb0600104627ce/5e28933d75efad0019e346ab/original/amazonwebsite2000amazonlogo900.png"></CompanyCard>
        <CompanyCard
          name="Amazon"
          description="Small book seller"
          image="https://s3.amazonaws.com/assets.knackhq.com/assets/5d1bb666c3eb0600104627ce/5e28933d75efad0019e346ab/original/amazonwebsite2000amazonlogo900.png"></CompanyCard>
      </div>
      {/* <ReviewCard {...review}></ReviewCard> */}
    </div>
  );
}

export default Home;