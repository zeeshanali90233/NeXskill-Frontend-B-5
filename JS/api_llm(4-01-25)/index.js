async function getPosts() {
  const response = await fetch(
    "https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts"
  );
  const data = await response.json();
  console.log(data);
  const tweets = data.tweets;
  console.log(tweets);

  const tweetsDivRef = document.querySelector(".tweets");
  //   tweetsDivRef.innerHTML = `
  //   <div>
  // ${tweets.map((tw) => {
  //   return `
  //   <div class="tweet">
  //       <img src="${tw.tweetImage}" alt="Profile Pic" />
  //       <h3>${tw.tweetId}</h3>
  //       <p>${tw.tweetDescription}</p>`;
  // })}
  //    </div>   `;

  tweets.map((tw) => {
    tweetsDivRef.innerHTML =
      tweetsDivRef.innerHTML +
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

  const response = await fetch(
    "https://p2pclouds.up.railway.app/v1/learn/tweet/update",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiBody),
    }
  );
  if (response.ok === false) {
    alert("Error while updating post");
    return;
  }
  const data = await response.json();
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

  const response = await fetch(
    "https://p2pclouds.up.railway.app/v1/learn/tweet/save",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiBody),
    }
  );

  if (response.ok === false) {
    alert("Error while saving post");
    return;
  }
  const data = await response.json();
  console.log(data);
}

async function deletePost() {
  const tweetIdToDelete = document.querySelector("input#tweetIdToDelete");
  const response = await fetch(
    `https://p2pclouds.up.railway.app/v1/learn/tweet/delete?tweetId=${tweetIdToDelete.value}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.ok === false) {
    alert("Error while saving post");
    return;
  }
  const data = await response.json();
  console.log(data);
}
