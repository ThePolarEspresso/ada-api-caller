import axios from 'axios';
import React, { useState, useRef } from 'react';

const bearerToken = 'Bearer eyJraWQiOiJaYmJJZXZIQ3F4RmdhV0Rva2RVQ1ZUTUhcL1N3U1dMaHlpR0hwdnJzVGdiMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMWMxNDVhYi03ZTVhLTQwMGYtYjg5Ny05MmIzMWMyMGM5MDAiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTJfeWc3cXp6S3pUX0dvb2dsZSIsImFkbWluLWV1IiwiYWRtaW4tbmEiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfeWc3cXp6S3pUIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiM2Y2cGw4b3V0N2tmamRncTFobmIxMzJrbDYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU0Nzg0MTE1LCJleHAiOjE2NTQ4NzA1MTUsImlhdCI6MTY1NDc4NDExNSwianRpIjoiYTcyZTU1N2MtZGJhZi00MmJhLTgxZjYtN2Y2ZjhkNjIzOTY0IiwidXNlcm5hbWUiOiJHb29nbGVfMTA0OTQyMTc3ODMzOTU1NzAyMjg4In0.FiwcfJ8gkL6qcpi-eUxU2kSBHEuB-xJkG2050oyFM3kZaowqNJcAm9KKlB_ANxeArDPX0OnowcLQ3JC64nu3MjxZjgeaCPmuSBEgipWIvjCk8aXmGQv1Cz3QZAsLdK49fKsNsPAzB4JsIvEt8lYGv5xxYXuqefPnfh6yjWdAzRi04ZzdEApxyannGQVUvBoT1VsYfWlv9tr_h3kpBVJ1wyBrPcDUwAFgS4hPuNy26vj4YKBMUM5MNpfLmm0xW8QQ3RRJrOV6VWtUhEzUXlcasJkkhBq_naduKz234fwM2p4iQ_B58z168svbkuF_AFdEBoB6FLvVGN7Ayl4gclqdbA';

export default function App() {
  const vin = '1C4SDJET7KC500079';
  const adaUrl = 'https://api.dev.alldataapp.com';
  let screenshot = '../screenshot.bmp'
  const vinRef = useRef();

  /**
 * Function that determines the data to be fetched when the user hits
 * submit; prints the data to the webpage
 */
function handleSubmit() {
  const selection = document.getElementById('selection').value;
  const vin = vinRef.current.value;
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
    document.write(JSON.stringify(res.data))
  }, error => {
    console.log(error)
  })
}

function setImage() {
  if (screenshot === '../screenshot.bmp') {
    screenshot = '../screenshot2.bmp';
    console.log("first");
  } else {
    screenshot = '../screenshot.bmp';
    console.log("second");
  }
}

  return (
    <>
      <input ref={ vinRef } type="text" placeholder="Enter VIN here" />
      <br></br>
      <select id="selection">
        <option value="vinDetails">VIN Details</option>
        <option value="lastKnown">Last Known Data</option>
      </select>
      <button onClick={ handleSubmit }>Submit</button>
      <img src={ screenshot }/>
    </>
  )
}

