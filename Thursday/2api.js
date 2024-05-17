const users = [
  {
    id: 1,
    name: "John",
    location: "New York",
    friends: [2, 3, 4],
    posts: [
      { content: "Great day at Central Park!", timestamp: "2024-05-10T12:00:00", likes: 15 },
      { content: "Loving the vibes in NYC!", timestamp: "2024-05-15T08:30:00", likes: 8 },
      { content: "Visited the Statue of Liberty today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
    ]
  },
  {
    id: 2,
    name: "Alice",
    location: "San Francisco",
    friends: [1, 3],
    posts: [
      { content: "Hiking in the Bay Area!", timestamp: "2024-05-12T14:20:00", likes: 12 },
      { content: "Enjoying the sunny weather!", timestamp: "2024-05-14T11:10:00", likes: 6 }
    ]
  },
  {
    id: 3,
    name: "Emily",
    location: "Los Angeles",
    friends: [1, 2, 4],
    posts: [
      { content: "Beach day in LA!", timestamp: "2024-05-08T09:45:00", likes: 25 },
      { content: "Exploring Hollywood!", timestamp: "2024-05-16T16:55:00", likes: 5 }
    ]
  },
  {
    id: 4,
    name: "David",
    location: "Chicago",
    friends: [2],
    posts: [
      { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
      { content: "Trying out a new jazz club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
    ]
  },
  {
    id: 5,
    name: "Sarah",
    location: "Seattle",
    friends: [3, 1],
    posts: [
      { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-05-09T15:15:00", likes: 9 },
      { content: "Exploring the Olympic National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
    ]
  }
];
function analyzeUserActivity(users) {
// Function to check the difference in days
function dayDifference(timestamp) {
  let userTimestamp = new Date(timestamp);
  let currentDate = new Date();
  let difference = currentDate - userTimestamp;
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const differenceInDays = Math.floor(difference / millisecondsPerDay);
  return differenceInDays;
}

// Get the user id and their timestamps
const userTimestamps = users.map((user) => {
  return user.posts.map((post) => {
    return { userId: user.id, timestamp: post.timestamp };
  });
});

// Flatten the array of user timestamps
const flattenedUserTimestamps = userTimestamps.reduce(
  (acc, current) => acc.concat(current),
  []
);

// Calculate the day difference for each timestamp
const userDayDifferences = flattenedUserTimestamps.map((entry) => {
  return {
    userId: entry.userId,
    dayDifference: dayDifference(entry.timestamp),
  };
});

// Use filter to check if dayDifference is less than 7
const filteredUsers = userDayDifferences.filter(
  (entry) => entry.dayDifference < 7
);

// Extract the user IDs from the filtered array
const filteredUserIds = filteredUsers.map((entry) => entry.userId);

// Clean the array to remove duplicates
const cleanedArr = filteredUserIds.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

// Check if id in the user array is present in our cleaned array
const filteredCleanedUsers = users.filter((user) =>
  cleanedArr.includes(user.id)
);

// Extract popular posts
const popularPosts = filteredCleanedUsers.map(function (myuser) {
  return myuser.posts.map(function (like) {
    return { userId: myuser.id, like: like.likes };
  });
});

// Flatten the array of user timestamps
const flattenedUserLikes = popularPosts.reduce(
  (pp, current) => pp.concat(current),
  []
);

// Filter likes to find popular posts
const filteredLikes = flattenedUserLikes.filter((entry) => entry.like >= 10);

// Extract the user IDs from the filtered array
const filteredUserIdsLikes = filteredLikes.map((entry) => entry.userId);

// Clean the array to remove duplicates
const cleanedArrLikes = filteredUserIdsLikes.reduce(
  (accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  },
  []
);

// Check if id in the user array is present in our cleaned array
const filteredCleanedUsersLikes = users.filter((user) =>
  cleanedArrLikes.includes(user.id)
);

// Calculate Average Likes per User
const averageLikesPerUser = filteredCleanedUsersLikes.map((user) => {
  const totalLikes = user.posts.reduce(
    (total, post) => total + post.likes,
    0
  );
  const averageLikes = Math.floor(totalLikes / user.posts.length);
  return { userId: user.id, averageLikes };
});

// The total number of active Users
let numberOfActiveUsers = cleanedArr.length;

// The total number of popular posts
let numberOfPopularPosts = filteredLikes.length;

// Return an object containing all the calculated values
return {
  activeUsers: filteredCleanedUsers,
  popularPosts: filteredCleanedUsersLikes,
  averageLikesPerUser: averageLikesPerUser,
  numberOfActiveUsers: numberOfActiveUsers,
  numberOfPopularPosts: numberOfPopularPosts,
};
}

// Example usage:
const analysisResult = analyzeUserActivity(users);
console.log("The analysed result of users: ", analysisResult);
