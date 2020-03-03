import React from 'react';
import './test.less'
import './App.css';

import Home from './pages/Home'

import { Router, Link, RouteComponentProps, navigate } from "@reach/router";
import { CookiesProvider } from 'react-cookie';
import { PageHeader, Button, Menu  } from 'antd';
import SubmitReview from './pages/SubmitReview';
import Review from './pages/Review'
import Headroom from 'react-headroom'

import logo from './images/canaryLogo-img.png';

// interface HomeProps extends RouteComponentProps { children?: any }
// const Home: React.SFC<HomeProps> = props => (
//   <div className="home">
//     <h1>Home</h1>
//     <Link to="/reviews/1">Review 1</Link>
//     <Link to="/reviews/2">Review 2</Link>
//     {props.children}
//   </div>
// )

// const reviews = [
//   { a: 'test1', b: 'test3' },
//   { a: 'test2', b: 'test4' },
// ]

// interface ReviewProps extends RouteComponentProps { reviewID?: number }
// const Review: React.SFC<ReviewProps> = props => { 
//   const review = props.reviewID ? reviews[props.reviewID - 1]: ({a: 'fail', b: ''});
//   return (
//     <div className="review">{review.a} {review.b}</div>
//   )
// }

const ReviewNotFound: React.SFC<RouteComponentProps> = props => (
  <div className="not-found">
    <h1>Review not found</h1>
  </div>
)

const { SubMenu } = Menu;

  // < PageHeader title = {< Link to = "/" > <img className="logo" src={logo} /></Link>}></PageHeader >

const App = () => {
  return (
    <CookiesProvider>
      <div className="App">
        <Headroom>
          < Link to="/" style={{margin: 'auto 30px'}} > <img className="logo" src={logo}/></Link>
          <Menu style={{height: "100%", marginTop: 'auto'}} mode="horizontal" selectedKeys={['submit']}>
            <Menu.Item key="submit"><Link to="/submit">✎ Write a review</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
          </Menu>
        </Headroom>
        <div className="background"></div>
        {/* <Router>
          <Home path="/">
            <Review path="/reviews/:reviewID"></Review>
          </Home>
        </Router> */}
        {/* <Link to="/">Home</Link>.
        <Link to="/submit">Submit Review</Link> */}
        <div className="content">
          <Router primary={false}>
            <Home path="/"></Home>
            <Review path="/reviews/:reviewID" />
            <SubmitReview path="/submit" />
            <ReviewNotFound path="/reviews/not-found" />
          </Router>
        </div>
      </div>
    </CookiesProvider>
  );
}

export default App;
