import React from 'react';
import './CompanyCard.css';

import { Card, Rate } from 'antd';

const CompanyMeta = ({  }: {  }) => (
  <div className="company-meta">
    test
  </div>
)

const CompanyCard = ({ name, description, image }: { name: string, description: string, image: string }) =>  (
  <Card className="company-card">
    {/* <Card.Meta title={name} avatar={<img className="company-image" src={image}/>} description={<CompanyMeta/>}/>
    <div className="content">
      Content
    </div> */}
    <div className="company-card__company-details">
      <div className="company-card__meta">
        <img className="company-card__main-image" src={image} />
        <div className="company-card__detail ant-card-meta-detail">
          <div className="company-card__title ant-card-meta-title">{name}</div>
          <div className="company-card__description ant-card-meta-description">{description}</div>
        </div>
      </div>
      <table className="company-card__company-stats">
        <tbody>
          <tr className="company-card__company-stat">
            <td>Overall rating</td>
            <td><Rate character="●" value={3.5} disabled allowHalf /></td>
          </tr>
          <tr className="company-card__company-stat">
            <td>Culture</td>
            <td><Rate character="●" value={1.5} disabled  allowHalf /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="company-card__content">
stest
    </div>
  </Card>
);

export default CompanyCard;
