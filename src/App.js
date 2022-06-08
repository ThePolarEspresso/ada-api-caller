import axios from 'axios';

const adaUrl = 'https://api.dev.alldataapp.com';
const bearerToken = 'Bearer eyJraWQiOiJaYmJJZXZIQ3F4RmdhV0Rva2RVQ1ZUTUhcL1N3U1dMaHlpR0hwdnJzVGdiMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMWMxNDVhYi03ZTVhLTQwMGYtYjg5Ny05MmIzMWMyMGM5MDAiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTJfeWc3cXp6S3pUX0dvb2dsZSIsImFkbWluLWV1IiwiYWRtaW4tbmEiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfeWc3cXp6S3pUIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiM2Y2cGw4b3V0N2tmamRncTFobmIxMzJrbDYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU0NTI1OTk0LCJleHAiOjE2NTQ2MTIzOTQsImlhdCI6MTY1NDUyNTk5NCwianRpIjoiMGY5Y2JmYWMtZTAyZi00MjdmLTkwMWMtMjJmMGZmMjI1NGI2IiwidXNlcm5hbWUiOiJHb29nbGVfMTA0OTQyMTc3ODMzOTU1NzAyMjg4In0.JedX6cZCvYHHWkPD9i8ydInTLeCJEAgBcAklnOGfB7cKgdnEZfHOp1Ghg1uiwGtx1iS7ODWPJbRcVvSgq5gcDlzr-DJfxDYuOkT0BsQOATfkug1QZhSTR0bmDT5Qjl1dQ3HZy2rRlfbNPeBskjY6OHIqcQgIWeYnk4dxZjQ7C9q4tz25nH4HP1TiAGh9T8fIyqWP6sYgSkT5EasgAnc8iGJrhQOi2MR-ui8Jj4bp3i8B6md1x_t-wocXah_ABmlDp-6H-LdDuAjDJjWbuXZgHm7AiK4xYvSKzkXjliV1LrNxZkDUJ0ln70L80pgk2XI2BdvoTYDE9iS4xFQY3OEjbw';
const vin = '1C4SDJET7KC500079';

const vinDetails = `/v1/vin/${vin}`;
const lastKnown = `/v1/vin/${vin}/data/lastknown`;

let urlToFetch = `${adaUrl}${vinDetails}`;

function App() {

  let req = {
    method: 'get',
    url: urlToFetch,
    headers: {
      'Authorization': bearerToken
    },
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
