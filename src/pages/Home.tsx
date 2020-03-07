import React from 'react';
import './Home.css';

import CompanyCard from '../components/CompanyCard'
import ReviewCard from '../components/ReviewCard'

import { Button } from 'antd'

import { RouteComponentProps, navigate } from "@reach/router"
import { reviews } from '../reviews'

import { Input } from 'antd'

interface HomeProps extends RouteComponentProps { children?: any }
const Home = (props: HomeProps) => {
  return (
    <div className="Home">
      <div className="jumbotron">
        <div className="jumbotron__content">
          <h1>Don't go into your internship <b>blind</b></h1>
          <div className="jumbotron__review">
            Empower your peers &ensp; <Button type="primary">✎ Write a Review</Button>
          </div>
        </div>
        {/* <p className="jumbotron__subtitle">Read reviews from other students about their internship and co-op experiences, so you can find an experience you'll love.</p> */}
        
      </div>
      {/* <div className="write-review">
        Empower your fellow students:
        <br/>
        <Button type="primary">Write a Review</Button>
      </div> */}

      <div className="search">
        <Input.Search 
          placeholder="search reviews"
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