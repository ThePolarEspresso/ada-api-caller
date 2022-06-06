import axios from 'axios';

const adaUrl = 'https://api.dev.alldataapp.com';
const bearerToken = 'Bearer eyJraWQiOiJaYmJJZXZIQ3F4RmdhV0Rva2RVQ1ZUTUhcL1N3U1dMaHlpR0hwdnJzVGdiMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlMzIwYzZjNy01YjhiLTQxZmQtYmIxOC0yODFlMTJhNmVlZTUiLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbi1ldSIsImFkbWluLW5hIiwiY3JlYXRvci1uYSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl95ZzdxenpLelQiLCJjbGllbnRfaWQiOiIzZjZwbDhvdXQ3a2ZqZGdxMWhuYjEzMmtsNiIsImV2ZW50X2lkIjoiNTNjZDYwNjMtMGI2My00YTY5LWIzMmQtMGZkZGU1YWM4NWQ3IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY1NDUyNzcxNywiZXhwIjoxNjU0NjE0MTE3LCJpYXQiOjE2NTQ1Mjc3MTcsImp0aSI6ImVkZmM0OTc0LTY3YmUtNDRmMS1iZjlmLWRiMzdlMzEwODg2ZCIsInVzZXJuYW1lIjoiYW5uYS5jYXJ2YWxob0BzdGVsbGFudGlzLmNvbSJ9.IlocvCYr4xMjhfwvHPwH9Z99nEzqHC3lUWLg2QMndY5zpFRI0HRkIhKPxoFMFapTLHeNVzg03x7Eof2bGUT0hucvqAHEmDmTkGnxvWP-SujopmUP57Z9UuPU-ngtqC4_fNqD5kiCW0WLRtdbfDN8FsHq6GHVLHO5vtxotkP1uB_cSHlMtilgPnA0McdS_BuKT0QxplhHQPYCd7ErZkSmFMmbo-eOIHHm8CBDK-AK_uhoi6fnWbl-hY76GZ3MBaznqKgqiVQov7U7DJwYojqjPi5FFKtYmClztnBy3tkUveLmEelQF3aLW0uPopM_XR60f52dF40o2gzTv_TjtqwAoQ';
const vin = '1C4SDJET7KC500079';

const vinDetails = `/v1/vin/${vin}`;
const lastKnown = `/v1/vin/${vin}/data/lastknown`;

let urlToFetch = `${adaUrl}${lastKnown}`;

export default function App() {
  let req = {
    method: 'get',
    url: urlToFetch,
    headers: {
      'Authorization': bearerToken
    }
  }

  getData(req)
}

function getData(req) {
  axios(req)
  .then((res) => {
    console.log(res.data);
    document.write(JSON.stringify(res.data))
  }, (error) => {
    console.log(error)
  });
}
