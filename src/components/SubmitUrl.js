import React, { useState } from 'react';
import axios from 'axios';


const SubmitUrl = () => {
  const [original, setOriginal] = useState('');
  const [shortUrl, setShortUrl] = useState('');
console.log(shortUrl, "hello ali")

  const handleChange = e => {
    const value = e.target.value;
    // get the original url from input
    setOriginal(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
      axios.post('http://localhost:4000/item', {
        originalUrl: original, 
        shortBaseUrl: 'http://localhost:4000'
      })
      .then(res => {
        // console.log('This is short url', res.data.shortUrl) ////
        setShortUrl(res.data.shortUrl)
      })
      .catch(err => {
        // console.log('Something wrong: ',err)
        alert('URL cannot be empty')
      })
  }

  return (
    <div className='App-header'>
      <form onSubmit={handleSubmit}>
        <input className='Form-menu'
          type='url'
          name='originalUrl'
          placeholder='Enter long url'
          value={original}
          onChange={handleChange}
        />
        <button className='btn' >Get Short URL</button>
      </form>
      {/* {console.log(shortUrl.indexOf('item') > -1)} */}
      {shortUrl.indexOf('item') > -1 ?
        <p className='App-link'>Loading...</p> : <h3 ><a target="blank" className='App-link' href={shortUrl}>{shortUrl}</a></h3>
      }
      {/* <h3 ><a target="blank" className='App-link' href={shortUrl}>{shortUrl}</a></h3>
      <p>{shortUrl}</p> */}
    </div>
  );
}

export default SubmitUrl;