import React from 'react';
import { Row, Col } from 'react-bootstrap';
import arrow from '../images/arrow-img.svg';
import calendar from '../images/calendar.svg';

const MainArticle = ({ articleData }) => {
  return (
    <>
      {articleData.length ? (
        articleData.map((a) => {
          return (
            <Row className='article-box' key={a.id}>
              <Col xs={2}>
                <div className='article-profile'></div>
              </Col>
              <Col xs={8}>
                <div key={a.id} className='article-title'>
                  {a.title}
                  <Row>
                    <Col>
                      <div className='article-byline'>{a.byline}</div>
                    </Col>
                    <Col>
                      <span className='cal-icon'>
                        <img src={calendar} alt='' />
                      </span>
                      <span className='article-publish '>
                        {a.published_date}
                      </span>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className='arrow'>
                <a href={a.url}>
                  <img src={arrow} alt='' />
                </a>
              </Col>
            </Row>
          );
        })
      ) : (
        <>
          <div className='loader'>No Article Found ...</div>
        </>
      )}
    </>
  );
};

export default MainArticle;
