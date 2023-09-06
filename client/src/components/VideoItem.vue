<template>
  <div ref="videoRef" class="video" @click="onTogelVideo">
    <!-- <TopVideo /> -->
    <video class="video_element" 
      src= "../../public/video4.mp4"
      volume = "0.3" 
      loop >
    </video>
    <div class="video_bottom">
      <InforVideo 
       
      />
      <ControllVideo />
    </div>
  </div>
</template>isPlaying.value = !isPlaying.value

<script>
import { onMounted, onBeforeUnmount, ref } from "vue";
// import TopVideo from "./TopVideo.vue";
import InforVideo from "./InforVideo.vue";
import ControllVideo from "./ControllVideo.vue";

export default {
  name: "VideoItem",
  props: {
    video: {
      type: Object
    }
  },
  components: {
    // TopVideo,
    InforVideo,
    ControllVideo,
  },
  setup() {
    const videoRef = ref(null);
    const isPlaying = ref(false);

    // console.log('>>> checkTitle:',this.video);

    function relCalVideoSize() {
      videoRef.value.style.height = window.innerHeight + "px";
      videoRef.value.style.width = (window.innerHeight * 9) / 16 + "px";
    }

    const onTogelVideo = () => {
      const videoElement = videoRef.value.querySelector(".video_element");
      if (isPlaying.value) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      isPlaying.value = !isPlaying.value;
    };

    onMounted(() => {
      window.addEventListener("resize", relCalVideoSize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", relCalVideoSize);
    });

    return {
      videoRef,
      onTogelVideo,
    };
  },
};
</script>


