import axios from 'axios';
import React, { useState, useRef } from 'react';

const bearerToken = 'Bearer eyJraWQiOiJaYmJJZXZIQ3F4RmdhV0Rva2RVQ1ZUTUhcL1N3U1dMaHlpR0hwdnJzVGdiMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4N2VmMjExNi02MTg1LTQwMmYtODQ4OC0yMzhkOTViOWE1ODciLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTJfeWc3cXp6S3pUX0dvb2dsZSIsImFkbWluLW5hIiwiY3JlYXRvci1uYSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl95ZzdxenpLelQiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiIzZjZwbDhvdXQ3a2ZqZGdxMWhuYjEzMmtsNiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gb3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhdXRoX3RpbWUiOjE2NTQ3MDY0MTcsImV4cCI6MTY1NDc5MjgxNywiaWF0IjoxNjU0NzA2NDE3LCJqdGkiOiI5ODkxMDQwNC1jNDRiLTQ3ZTEtOGE5OC0yMjk4OTRhMTY0NGUiLCJ1c2VybmFtZSI6Ikdvb2dsZV8xMDU2NzA5MTU2Mzg3NjAzNDMwNDcifQ.SgHin3vNvM7Ck9-sB00Slb9xD4adOE1UtqCDbIRdT6PIhQlDmuorXhJCY9xplleFAyif8bNqK9Y1Uu3qGdFnRy5GrJdliOrT7eguAQKxPaFv9PfTED5IcmVdWUwvdvWr6mIM0QnjywTER0CeSNvpZ2uykYSA-pyTVk9MdTtJIuM7gkj_6yJG5vWBJxV_c8Lcw-kZ9j1d9QsGI1mkJMAXr5L21iyCX4vj8K_S3h5g1bZWeo-MZ3Geqw7J9PpruLTaHMuuyxE5rRvWRbGTItqTyaQuVDiAej82dImIuYIa-GIAJKtr0btEA86Uaj1y_MF0v-HVEBLhxpEe3XgmyBsB5A';
const vin = '1C4SDJET7KC500079';

const adaUrl = 'https://api.dev.alldataapp.com';
const vinDetails = `/v1/vin/${vin}`;
const lastKnown = `/v1/vin/${vin}/data/lastknown`;

let screenshot = '../screenshot.bmp'

export default function App() {
  return (
    <>
      <select id="selection">
        <option value="vinDetails">vin details</option>
        <option value="lastKnown">last known</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
      <img src={screenshot}/>
    </>
  )
}

/**
 * Function that determines the data to be fetched when the user hits
 * submit; prints the data to the webpage
 */
function handleSubmit() {
  const selection = document.getElementById('selection').value;

  let endpoint;
  if (selection === 'vinDetails')
    endpoint = `${vinDetails}`;
  else if (selection === 'lastKnown')
    endpoint = `${lastKnown}`;

  const urlToFetch = `${adaUrl}${endpoint}`

  let req = {
    method: 'get',
    url: urlToFetch,
    headers: {
      'Authorization': bearerToken
    }
  }

  // fetch data every second 
  //let interval = setInterval(() => getData(req), 5000)
  let interval = setInterval(() => setImage(), 1000)
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