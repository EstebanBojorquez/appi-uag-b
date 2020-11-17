import React from 'react';
import { Link } from 'react-router-dom';

const InfoSection = props => (
  <section className={`bx--row ${props.className} info-section`}>
    <div className="bx--col-md-8 bx--col-lg-4">
      <h3 className="info-section__heading">{props.heading}</h3>
    </div>
    {props.children}
  </section>
);

const InfoCard = props => {
  return (
    <div
      className={`info-card bx--col-md-4 bx--col-lg-4 ${
        props.offset ? `bx--offset-lg-4` : null
      }`}>
      <Link to="/">
        <h4 className="info-card__heading">
          <strong>{props.prefix}</strong>
          {` - ${props.heading}`}
        </h4>
        {props.body ? <p className="info-card__body">{props.body}</p> : null}
        {props.icon}
      </Link>
    </div>
  );
};

export { InfoSection, InfoCard };
