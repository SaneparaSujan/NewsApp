import React from 'react';

const NewsItem = ({ title, description, imageurl, newsurl, author, date, source }) => {
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className='badge rounded-pill bg-danger'>{source}</span>
        </div>
        <img
          src={imageurl ? imageurl : "https://imageio.forbes.com/specials-images/imageserve/67fed3f128b4d5566865db7c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"}
          className="card-img-top"
          alt="news"
        />
        <div className="card-body">
          <h5 className="card-title">{title || ''}</h5>
          <p className="card-text">{description || ''}</p>
          <p className='card-text'><small className='text-muted'>By {author || 'Unknown'} on {new Date(date).toGMTString()}</small></p>
          <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-dark">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
