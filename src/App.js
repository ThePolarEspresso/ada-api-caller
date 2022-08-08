import axios from 'axios';
import React, { useState, useRef } from 'react';

export default function App() {
  const bearerToken = '[bearer token]';

  let vin = '1C4SDJET7KC500079'; // default vin in case user doesn't enter one
  const adaUrl = 'https://api.dev.alldataapp.com';
  let screenshot = '../screenshot.bmp'
  const vinRef = useRef();

  // state for the results div, with a default value of an empty array
  const [results, setResults] = useState([]); 

  /**
   * Function that determines the data to be fetched when the user hits
   * submit; prints the data to the webpage
   */
  function handleSubmit() {
    const selection = document.getElementById('selection').value;

    let endpoint;
    if (selection === 'vinDetails')
      endpoint = `/v1/vin/${vin}`;
    else if (selection === 'lastKnown')
      endpoint = `/v1/vin/${vin}/data/lastknown`;

    const urlToFetch = `${adaUrl}${endpoint}`

    let req = {
      method: 'get',
      url: urlToFetch,
      headers: {
        'Authorization': bearerToken
      }
    }

    getData(req);
    // fetch data every second 
    //let interval = setInterval(() => getData(req), 5000)
    //let interval = setInterval(() => setImage(), 1000)
  }

  /**
   * Function that performs a get call to retrieve the desired data
   * 
   * @param {*} req 
   */
  function getData(req) {
    axios(req)
    .then(res => {
      setResults(JSON.stringify(res.data));
    }, error => {
      setResults("Error, data not retrieved.");
      console.log(error);
    })
  } 

  // function setImage() {
  //   if (screenshot === '../screenshot.bmp') {
  //     screenshot = '../screenshot2.bmp';
  //     console.log("first");
  //   } else {
  //     screenshot = '../screenshot.bmp';
  //     console.log("second");
  //   }
  // }

  function handleAddVin(e) {
    const vinEntry = vinRef.current.value;
    if (vinEntry === '') return;
    vin = vinEntry;
    vinRef.current.value = null;
  }

  return (
    <>
      <header>
        <h1>ADA API Caller</h1>
      </header>
      <input ref={ vinRef } type="text" placeholder="Enter VIN" />
      <button onClick={ handleAddVin }>Submit VIN</button>
      <br></br>
      <p>Choose an operation:</p>
      <select id="selection">
        <option value="vinDetails">VIN Details</option>
        <option value="lastKnown">Last Known Data</option>
      </select>
      <br></br><br></br>
      <button onClick={ handleSubmit }>Submit</button>
      <br></br><br></br>
      <img src={ screenshot } alt="HU screenshot"/>
      <br></br><br></br>
      <div> { results } </div>
    </>
  )
}

