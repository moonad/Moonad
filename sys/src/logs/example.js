var client = require("./client.js");
var api = client({
  url: "ws://localhost:7171",
  key: "0x0000000000000000000000000000000000000000000000000000000000000001",
});

// When connected, watches room 0 and makes an example post.
api.on_init(() => {
  var room = "0x000000000000";
  var post = "0x7770000000000000000000000000000000000000000000000000000000000000000000000321";

  // Watches the room
  api.watch_room(room);

  // Posts a 304-bit message to it
  api.send_post(room, post);
});

// When there is a new posts, print all posts we have recorded.
api.on_post((post, Posts) => {
  console.clear();
  console.log(JSON.stringify(Posts, null, 2));
});

