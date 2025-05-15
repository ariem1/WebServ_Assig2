import { FetchWrapper } from "./fetchWrapper.js"; //* THIS

//document.addEventListener("DOMContentLoaded", init);

// Fetches the no. of shows and displays the count
window.onload = function () {
  // fetchCount();
  fetchShows();
};

/*
document.addEventListener("DOMContentLoaded", ()=>{
    // We initialize and configure your app.
    // call other functions.
});

*/

function init() {
  // We initialize and configure your app.
  console.log("Initializing the app...");

  //   const btnShows = document.getElementById("btn-fetch-shows");
  //   btnShows.addEventListener("click", fetchShows);
}

async function fetchCount() {
  console.log("Fetching show count....");
  // try {
  // // Implement the HTTP client using the Fetch API.
  const uri = "https://api.tvmaze.com/shows";
  // // 1) Send the HTTP request
  const response = await fetch(uri);
  console.log(response);
  console.log("Hello!!");

  // // 2) Validate the response
  if (!response.ok) {
    // Check the ok property
    throw new Error(
      `An error occurred: request was no bueno! Status: ${response.status}`
    );
  }
  // // 3) Process the response
  // // 3.a) Retrieve the response payload as JSON
  // const shows = await response.json();
  // console.log(shows);
  // To show the no. of shows
  //   renderCount(shows);

  //   const btnShows = document.getElementById("btn-fetch-shows");
  //   btnShows.addEventListener("click", fetchShows);
  // } catch (error) {
  //   console.log(error.message);
  // }

  fetchShows();
}

//Retrieves the shows from the API and displays them in a table
async function fetchShows() {
  try {
    const uri = "https://api.tvmaze.com/shows";
    const fetchWrapper = new FetchWrapper();
    const shows = await fetchWrapper.sendRequest(uri);
    // fetchWrapper.sendRequest();
    renderShows(shows);
    console.log("feching shows");
  } catch (error) {
    console.log(error.message);
    console.log(error.details);

    //TODO: show the error messages using Bootstrap alert component

    //throw error;
  }
}

function renderShows(shows) {
  let rows = "";
  const showsTable = document.getElementById("tbl-shows");
  shows.forEach((show) => {
    //console.log(show.language);
    rows += `<tr>
                <td>${show.id}</td>
                <td>${show.name}</td>
                <td>${show.language}</td>
                <td>${show.genres.join(",")}</td>
                <td>${show.status}</td>
                <td>${show.premiered}</td>
                <td>${show.averageRuntime}</td>
                <td>${show.ended}</td>
                <td>${show.rating.average}</td>
                <td>
                <img src="${show.image.medium}" >
                </td>
              </tr>`;
  });
  showsTable.innerHTML = rows;
}
function renderCount(shows) {
  count = 0;

  //let rows = "";
  const showCount = document.getElementById("shows-count");
  shows.forEach((show) => {
    count++;
  });
  showCount.innerText = count;
  //showCount.innerHTML = rows;
}
