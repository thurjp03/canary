import React from 'react';
import './Home.css';

import CompanyCard from '../components/CompanyCard'
import ReviewCard from '../components/ReviewCard'

import { RouteComponentProps } from "@reach/router"
import { reviews } from '../reviews'

import { Input } from 'antd'

interface HomeProps extends RouteComponentProps { children?: any }
const Home = (props: HomeProps) => {
  console.log(props)
  return (
    <div className="Home">
      <div className="search">
        <Input.Search 
          placeholder="input search text"
          onSearch={value => console.log(value)}
        />
      </div>
      <div className="reviews">
        {reviews.slice(0, 10).map((review, i) => <CompanyCard key={i} name={review.company.name} image={review.company.image} description={review.company.description} reviews={[review]}/>)}
      </div>
      <div className="children">
        {props.children}
      </div>
    </div>
  );
}

export default Home;