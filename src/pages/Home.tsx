import React from 'react';
import './Home.css';

import CompanyCard from '../components/CompanyCard'
import ReviewCard from '../components/ReviewCard'
import { Input, Form, Button, Select, AutoComplete, Radio, Tooltip, Timeline, Steps, Checkbox } from 'antd/es';

import { RouteComponentProps } from "@reach/router"
import { reviews } from '../reviews'

interface HomeProps extends RouteComponentProps { children?: any }
const Home = (props: HomeProps) => {
  console.log(props)
  return (
    <div className="Home">
      <div className="reviews">
        {reviews.slice(0, 10).map((review, i) => <CompanyCard key={i} name={review.company.name} image={review.company.image} description={review.company.description} reviews={[review]}/>)}
      </div>
      <div className="children">
        {props.children}
      </div>
      <Radio.Group defaultValue="internship" value="internship">
        <Radio.Button value="internship">Internship</Radio.Button>
        <Radio.Button value="co-op">Co-op</Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default Home;