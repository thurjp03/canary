import React from 'react';
import './test.less'
import './App.css';

import Home from './pages/Home'

import { Router, Link, RouteComponentProps, navigate, Location, LocationProps, LocationProviderRenderFn, LocationContext } from "@reach/router";
import { InfoCircleOutlined, BarsOutlined, MenuOutlined } from '@ant-design/icons';
import { CookiesProvider } from 'react-cookie';
import { Button, Menu, Dropdown  } from 'antd';
import SubmitReview from './pages/SubmitReview';
import Review from './pages/Review'
import Headroom from 'react-headroom'
import { useMediaQuery } from 'react-responsive'

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

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/"><BarsOutlined /> Reviews</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/submit">✎  Write a review</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/about"><InfoCircleOutlined /> About</Link>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <div style={{ margin: '15px 15px 10px auto' }}>
      <Dropdown key="more" overlay={menu}>
        <Button
          style={{
            border: 'none',
            padding: 0,
          }}
        >
          <MenuOutlined
            style={{
              fontSize: 20,
              verticalAlign: 'top',
            }}
          />
        </Button>
      </Dropdown>
    </div>
  );
};

const App = () => {
  // const isSmall = useMediaQuery({ query: '(max-width: 630px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
  return (
    <CookiesProvider>
      <div className="App">
        <Headroom>
          <Location>
            {context => (
              <nav>
                {console.log(context.location)}
                < Link to="/" style={{ margin: 'auto 30px' }} > <img className="logo" src={logo} /></Link>
                {
                  isMobile ?
                    <DropdownMenu />
                    :
                    <Menu style={{ height: "100%", marginTop: 'auto' }} mode="horizontal" selectedKeys={[context.location.pathname.replace('/', '')||'reviews']}>
                      <Menu.Item key="reviews"><Link to="/"><BarsOutlined /> Reviews</Link></Menu.Item>
                      <Menu.Item key="submit"><Link to="/submit">✎ Write a review</Link></Menu.Item>
                      <Menu.Item key="about"><Link to="/about"><InfoCircleOutlined /> About</Link></Menu.Item>
                    </Menu>
                }
              </nav>
            )}
          </Location>
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
