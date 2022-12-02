import axios from "axios";

const options = {
method: 'GET',
url: 'https://youtube-v31.p.rapidapi.com/captions',
params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
headers: {
'X-RapidAPI-Key': '8421f2a262msh389d998acd14d1dp1711b8jsn8c9b2d8b979e',
'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}
};

axios.request(options).then(function (response) {
console.log(response.data);
}).catch(function (error) {
console.error(error);
});
