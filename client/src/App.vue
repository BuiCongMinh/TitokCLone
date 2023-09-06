<template>
  <div>
    <TopVideo />
    <div id="video_inner">
      <!-- <video src="../public/"></video> -->
      <!-- <VideoItem 
        v-for="(video,index) in videoList" 
        :key="index" 
        :video="video" 
      /> -->
      <VideoItem/>
      <VideoItem/>
      <VideoItem/>
      <VideoItem/>
      <VideoItem/>
    </div>
    <LoginModal @onPlayVideo="activeFirtVideo"/>
   </div>
</template>


<script >
import { onMounted, ref } from "vue";
import TopVideo from "./components/TopVideo.vue";
import VideoItem from "./components/VideoItem.vue";
import LoginModal from './components/LoginModal.vue';

// import other logic from outside 
import useVideo from './composables/useVideo'


export default {
  name: "App",
  components: {
    VideoItem,
    TopVideo,
    LoginModal
   },
  setup() {
    const observerForScroll = ref(null);
    const {videoList, fetchVideos } =  useVideo()

    // fetchVideos()

    const activeFirtVideo = () => {
      let targets = document.querySelectorAll('#video_inner .video');
      targets[0].querySelector('.video_element').play();
    };

    onMounted(() => {
      const options = {
        root: document.querySelector("#video_inner"),
        rootMargin: "0px",
        threshold: 1.0,
      };
      let currentVideoElement = null
      
      observerForScroll.value = new IntersectionObserver((entries) => {
        console.log(56,entries);
        if (entries && entries.length === 1 && entries[0].isIntersecting) {
          if(currentVideoElement){
            currentVideoElement.pause();
            currentVideoElement.currentTime = 0;
          }
          // console.log(50,entries[0].target);

          currentVideoElement = entries[0].target.querySelector(".video_element");
          entries[0].target.querySelector(".video_element").play();
        }
      }, options);

      let targets = document.querySelectorAll("#video_inner .video");
      targets.forEach((target) => {
        observerForScroll.value.observe(target);
      });
    });

    return {
      activeFirtVideo, videoList
    };
  },
};
</script>

<style >
#app {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
</style>
