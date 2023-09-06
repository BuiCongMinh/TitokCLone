<template>
  <div id="modal_login" 
    v-if="isActived"
  >
    <div class="modal_form">
      <h2>Join our communtity now !</h2>
      <form @submit.prevent="onSubmit">
        <label for="">
          <p>username:</p>
          <input
            type="text"
            placeholder="please fill username !"
            v-model="username"
          />
        </label>
        <label for="">
          <p>password:</p>
          <input
            type="password"
            placeholder="please fill password !"
            v-model="password"
          />
        </label>
        <button>GET STARTED !</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";
export default {
  emits:['onPlayVideo'],
  name: "LoginComponent",
  setup(props, context) {
    const username = ref("");
    const password = ref("");
    const isActived = ref(false);

    const { onLogin } = useLogin();

    async function onSubmit() {
      const result = await onLogin({
        username: username.value,
        password: password.value,
      });
    
      if (!result) {
        return alert(`Moi ban dang nhap lai !`)
      }
      
      isActived.value = false;
      context.emit('onPlayVideo')

      return 
    }



    return {
      onSubmit,
      isActived,
      username,
      password
    };
  },
};
</script>


