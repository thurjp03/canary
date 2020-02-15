import React from 'react';
import './CompanyCard.css';

import { Card, Rate, Statistic } from 'antd';
import { Link } from "@reach/router";

import Review from './ReviewCard';

const CompanyMeta = ({  }: {  }) => (
  <div className="company-meta">
    test
  </div>
)

const CompanyCard = ({ name, description, image }: { name: string, description: string, image: string }) =>  (
  <Card>
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
        <div className="company-card__company-stats">
          <table>
            <tbody>
              {/* <tr className="company-card__company-stat">
                <td>Overall rating</td>
                <td><Rate style={{
                  fontSize: '27px',
                  lineHeight: '25px'
                }} character="●" value={3.5} disabled allowHalf /></td>
              </tr> */}
              <tr className="company-card__company-stat">
                <td valign="bottom" style={{ paddingBottom: '8px' }}>Overall rating</td>
                <td><span style={{ fontWeight: 700, fontSize: '30px' }}>4.32</span></td>
              </tr>
              <tr className="company-card__company-stat">
                <td>Culture</td>
                <td><Rate style={{
                  fontSize: '27px',
                  lineHeight: '25px'
                }} character="●" value={1.5} disabled allowHalf /></td>
              </tr>
              <tr className="company-card__company-stat">
                <td>Work difficulty</td>
                <td><Rate style={{
                  fontSize: '27px',
                  lineHeight: '25px'
                }} character="●" value={4} disabled allowHalf /></td>
              </tr>
              <tr className="company-card__company-stat">
                <td>Average pay</td>
                <td>$20/hr, $6000 sum</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="company-card__more">
          <Link to="/" >More company details...</Link>
        </div>
      </div>
      <div className="company-card__content">
        <div className="note">Most relevant review</div>
        <Review/>
      </div>
    </div>
  </Card>
);

export default CompanyCard;
