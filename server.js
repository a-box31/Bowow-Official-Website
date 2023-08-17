const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5050;

// register the view engine and location
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));




// Send the Static Files in public
app.use( express.static( path.join(__dirname, "public") ) );


app.use( (req, res, next) => {
  console.log("New Request is Made:");
  console.log("-".repeat(20))
  console.log("hostname: " + req.hostname);
  console.log("path:" + req.path );
  console.log("method:" + req.method);
  console.log("\n")
  next();
})


// Routing
app.get("/", (req, res) => {  
  fs.readFile(path.join(__dirname, "songs.json"), "utf8", (err, data) => {
    if (err) throw err;
    const songs = JSON.parse(data)
    if( songs.length >= 4 ){
      latest_songs = songs.slice(0, 4);
      res.render("index", { latest_songs });
    }else{
      res.render("404")
    }
  })
});

app.get("/Discography", (req, res) => {
  fs.readFile(path.join(__dirname, "songs.json"), "utf8", (err, data) => {
    if (err) throw err;
    const songs = JSON.parse(data);
    if (songs.length > 0) {
      res.render("discography", { songs });
    } else {
      res.render("404");
    }
  });
});

app.get("/Discography/Cocktail_Beach", (req, res) => {
  res.render("song", {
    title: "Cocktail Beach",
    image: "/Assets/Covers/cocktail_beach.png",
    song: "/Songs/Cocktail_Beach.mp3"
  });
});

app.get("/Discography/Swamped", (req, res) => {
  res.render("song", {
    title: "Swamped",
    image: "/Assets/Covers/Swamped.jpg",
    song: "/Songs/Swamp.mp3"
  });
});

app.get("/Discography/8-Bit", (req, res) => {
  res.render("song", {
    title: "8-Bit",
    image: "/Assets/Covers/8bit.png",
    song: "/Songs/8bit.mp3"
  });
});

app.get("/Discography/Space_Dust", (req, res) => {
  res.render("song", {
    title: "Space_Dust",
    image: "/Assets/Covers/space-dust.png",
    song: "/Songs/space_dust.wav"
  });
});

app.get("/Discography/Heart_Soul", (req, res) => {
  res.render("song", {
    title: "Heart & Soul",
    image: "/Assets/Covers/H_S.png",
    song: "/Songs/h_s.wav",
  });
});

app.get("/Discography/Raybeam", (req, res) => {
  res.render("song", {
    title: "Raybeam",
    image: "/Assets/Covers/raybeam.png",
    song: "/Songs/raybeam.wav",
  });
});

app.get("/Discography/Speed_Way", (req, res) => {
  res.render("song", {
    title: "Speed Way",
    image: "/Assets/Covers/speed_way.png",
    song: "/Songs/Speed_Way.mp3",
  });
});

app.get("/Discography/From", (req, res) => {
  res.render("song", {
    title: "From",
    image: "/Assets/Covers/From.png",
    song: "/Songs/From.wav",
  });
});

app.get("/Discography/Stellar_Affection", (req, res) => {
  res.render("song", {
    title: "Stellar Affection",
    image: "/Assets/Covers/stellar-affection.jpg",
    song: "/Songs/Stellar_Affection.mp3",
  });
});

app.get("/Discography/Summer_Drip", (req, res) => {
  res.render("song", {
    title: "Summer Drip",
    image: "/Assets/Covers/summer_drip.png",
    song: "/Songs/Summer_Drip.mp3",
  });
});

app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.redirect("/");
});




// Start up the Server
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server at http://localhost:${PORT}`);
});
