import * as React from "react";
import * as styles from "./arduino.module.scss";
<<<<<<< HEAD
=======
import Header from "../components/header";
>>>>>>> 5703f3bee852214e8cf07a5b34290b7fc79b74e3

const Arduino = () => {
  //   const urlAPI = "https://www.youtube.com/iframe_api";
  //   fetch(urlAPI).then((response) =>
  //     response.json().then((data) => console.log("this is my data", data))
  //   );
  //   const [ytVideo, setYtVideo] = useState("");

  //   axios.get(urlAPI).then((e) => {
  //     setYtVideo(e.target.value);
  //   });

  //   var firstScriptTag = document.getElementsByTagName("script")[0];
  //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  //   var player;
  //   function onYouTubeIframeAPIReady() {
  //     player = new YT.Player("player", {
  //       height: "210",
  //       width: "340",
  //       videoId: "D77wXvwChtU",
  //     });
  //   }
  //   function setCurrentTime(slideNum) {
  //     var object = [60, 120];
  //     player.seekTo(object[slideNum]);
  //   }

  return (
    <>
<<<<<<< HEAD
      <p className={styles.title}>Experience page</p>
=======
      {/* <YouTube videoId="ckShHgV9GRY"></YouTube> */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ckShHgV9GRY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
>>>>>>> 5703f3bee852214e8cf07a5b34290b7fc79b74e3
    </>
  );
};

export default Arduino;
