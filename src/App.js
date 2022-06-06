import axios from 'axios';

const adaUrl = 'https://api.dev.alldataapp.com';
const bearerToken = 'Bearer eyJraWQiOiJsdzFKcGdLNThEcThZNXJTSk9vQ1wvZnk0V1V0TVVcL1BQcTBMQ1d0cVlkWjA9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwYjM4YjE2Yy0yYzI1LTRjNTMtOTFlMi1hNmYwOWIyZTUzMGUiLCJjb2duaXRvOmdyb3VwcyI6WyJ2aW4tbWFuYWdlci1uYSIsImNyZWF0b3ItZXUiLCJ2aW4tbWFuYWdlci1ldSIsImNyZWF0b3ItbmEiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfZU5MSmhMeWtwIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiM3Budm5ldnBia2RxMWgyNHBtM201YjMzZzciLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU0NTIzNTAxLCJleHAiOjE2NTQ2MDk5MDEsImlhdCI6MTY1NDUyMzUwMSwianRpIjoiYTg1MzFlMjktZWRjNi00OWVjLTg5NDYtYTAxNmM4ZDRjZDE3IiwidXNlcm5hbWUiOiJHb29nbGVfMTA1NjcwOTE1NjM4NzYwMzQzMDQ3In0.iCKqyYyNO39pUVMcBA5KMlGOV4GJXlpjFS_CPCfLg6koo7lDq_uhLEn1x0Ddfhi284aeiyWu8Y1C81Bw2wOCbl7rEm6maBKWEOG90q_lXPCXh9Er9CX9jCZKb3na3xU-L5Kv4jHc-n82Brt4gL8HI0dr4M1GTClnxvT9UHiFhBNQt3kY0D1spxr3VZvC8NCHoS_cpBmo5lgDsWtB584wZia2y9HvcI6kFZZkgZLAWrgX1cMTWY4pyiXMIokdY-8oj0ab4HCur4dt54i4JtVnylv0sjMQrVWsWSg7HNUuOuTKKt6caQlu1xpw5HxPTaztcsZArwLdOftuAL6QiVOW8w';
const vin = '1C4SDJET7KC500079';

const vinDetails = `/v1/vin/${vin}`;
const lastKnown = `/v1/vin/${vin}/data/lastknown`;

let urlToFetch = `${adaUrl}${lastKnown}`;

function App() {

  let req = {
    method: 'get',
    url: urlToFetch,
    headers: {
      'Authorization': bearerToken
    }
  }

  axios(req)
  .then((response) => {
    console.log(response.data);
    document.write(JSON.stringify(response.data))
  }, (error) => {
    console.log(error)
  });
}

export default App;
