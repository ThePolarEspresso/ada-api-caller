import axios from 'axios';
import React, { useState, useRef } from 'react';

const adaUrl = 'https://api.dev.alldataapp.com';
const bearerToken = 'Bearer eyJraWQiOiJaYmJJZXZIQ3F4RmdhV0Rva2RVQ1ZUTUhcL1N3U1dMaHlpR0hwdnJzVGdiMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlMzIwYzZjNy01YjhiLTQxZmQtYmIxOC0yODFlMTJhNmVlZTUiLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbi1ldSIsImFkbWluLW5hIiwiY3JlYXRvci1uYSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl95ZzdxenpLelQiLCJjbGllbnRfaWQiOiIzZjZwbDhvdXQ3a2ZqZGdxMWhuYjEzMmtsNiIsImV2ZW50X2lkIjoiMGM3NzlmNTgtYWQ2NS00MDJmLWEzMTUtNGJhZGU4ZTUyYmE3IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY1NDYxNDQ2NywiZXhwIjoxNjU0NzAwODY3LCJpYXQiOjE2NTQ2MTQ0NjcsImp0aSI6IjVmMGU2MzI1LWRmYTQtNDljOS04ZTA1LWQzNWU5YTAzYTNmNCIsInVzZXJuYW1lIjoiYW5uYS5jYXJ2YWxob0BzdGVsbGFudGlzLmNvbSJ9.MBZ_lAZR9tmjxTVhJDStkLfUEwgkLwwZ6Oq3nS3yDMN1AtXVJUCi7jlKplVHGfl-ryB6EqcMjd3qahBglQdufavvWw-ekrQMxNLkE-uSZLHLLmc3hI7LyMyCqKV1CHxo_p9K1Uzw0x85--9Oj6yWX79ChEdg7n9P2QA-IiNWidxfGSmOYor0rfaXX60QcXuPtDL0-4wAw8q5COz_HMlFklfH857ItegfnI0l7s_BF9-druSlpSxr-G70m9mfTNrRYy8s1b-NWXc0IYtejmPcMqT7KrIbXqGKjq4p9fJNHC2E92UVL3tSiOJDqBkwwVM7ZzL222QDDig6naHlfPKr2A';
const vin = '1C4SDJET7KC500079';

const vinDetails = `/v1/vin/${vin}`;
const lastKnown = `/v1/vin/${vin}/data/lastknown`;

export default function App() {
  return (
    <>
      <select id="selection">
        <option value="vinDetails">vin details</option>
        <option value="lastKnown">last known</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
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
  if (selection === 'vinDetails') {
    endpoint = `${vinDetails}`;
  }
  else if (selection === 'lastKnown') {
    endpoint = `${lastKnown}`;
  }

  const urlToFetch = `${adaUrl}${endpoint}`

  let req = {
    method: 'get',
    url: urlToFetch,
    headers: {
      'Authorization': bearerToken
    }
  }

  // fetch data every second 
  let interval = setInterval(() => getData(req), 5000)
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