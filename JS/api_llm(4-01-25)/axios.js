async function getPosts() {
  const response = await axios.get(
    "https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts"
  );
  const data = response.data;
  console.log(data);
  const tweets = data.tweets;
  console.log(tweets);

  const tweetsDivRef = document.querySelector(".tweets");
  tweets.map((tw) => {
    tweetsDivRef.innerHTML =
      tweetsDivRef.innerHTML+
      `<div class="tweet">
          <img src="${tw.tweetImage}" alt="Profile Pic" />
          <h3>${tw.tweetId}</h3>
          <p>${tw.tweetDescription}</p>`;
  });
}

async function updatePost() {
  const tweetIdRef = document.querySelector("input#tweetId");
  const newTweetDescription = document.querySelector("input#tweetDescription");
  const newTweetImage = document.querySelector("input#tweetImage");

  const tweetId = tweetIdRef.value;
  const tweetDescription = newTweetDescription.value;
  const tweetImage = newTweetImage.value;

  const apiBody = {
    tweetId: tweetId,
    tweetImage: tweetImage,
    tweetDescription: tweetDescription,
  };

  const response = await axios.put(
    "https://p2pclouds.up.railway.app/v1/learn/tweet/update",
    apiBody
  );
  const data = response.data;
  console.log(data);
}

async function savePost() {
  const newTweetDescription = document.querySelector(
    "input#newTweetDescription"
  );
  const newTweetImage = document.querySelector("input#newTweetImage");

  const tweetDescription = newTweetDescription.value;
  const tweetImage = newTweetImage.value;

  const apiBody = {
    tweetImage: tweetImage,
    tweetDescription: tweetDescription,
  };

  const response = await axios.post(
    "https://p2pclouds.up.railway.app/v1/learn/tweet/save",
    apiBody
  );
  const data = response.data;
  console.log(data);
}

async function deletePost() {
  const tweetIdToDelete = document.querySelector("input#tweetIdToDelete");
  const response = await axios.delete(
    `https://p2pclouds.up.railway.app/v1/learn/tweet/delete?tweetId=${tweetIdToDelete.value}`
  );
  const data = response.data;
  console.log(data);
}
