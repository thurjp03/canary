import React from 'react';
import './Home.css';

import CompanyCard from '../components/CompanyCard'
import ReviewCard from '../components/ReviewCard'

import { RouteComponentProps } from "@reach/router"

const Home = (props: RouteComponentProps) => {
  return (
    <div className="Home">
      <CompanyCard
        name="Amazon"
        description="Small book seller"
        image="https://s3.amazonaws.com/assets.knackhq.com/assets/5d1bb666c3eb0600104627ce/5e28933d75efad0019e346ab/original/amazonwebsite2000amazonlogo900.png"></CompanyCard>
      {/* <ReviewCard></ReviewCard> */}
    </div>
  );
}

export default Home;