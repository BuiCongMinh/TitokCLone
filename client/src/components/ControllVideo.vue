<template>
  <nav class="video_control">
    <ul>
      <li>
        <button class="video_control--btn">
          <HeartOutlined style="font-size: 30px;" />
          <span> 330k </span>
        </button>
      </li>
      <li>
        <button class="video_control--btn" >
          <WechatOutlined style="font-size: 30px;"/>
          <span> 330k </span>
        </button>
      </li>
      <li>
        <button class="video_control--btn">
          <ShareAltOutlined style="font-size: 30px;"/>
          <span> 330k </span>
        </button>
      </li>
    </ul>
  </nav>
</template> 

<script>
// import { HeartIcon, ShareIcon, ChatIcon } from "@vue-hero-icons/solid";
import { HeartOutlined, WechatOutlined, ShareAltOutlined} from "@ant-design/icons-vue";

export default {
  name: "ControllVideo",
  components: {
    HeartOutlined,
    WechatOutlined,
    ShareAltOutlined
    // HeartIcon,
    // ChatIcon,
    // ShareIcon,
  },

  setup() {},
};
</script>
