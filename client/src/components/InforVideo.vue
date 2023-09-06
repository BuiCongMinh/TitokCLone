<template>
    <section class="video_info"> 
        <h1 class = "video_info--title" >{{title}} </h1>
        <p class="video_info--desc">
            {{ description }}
        </p>
    </section>
</template>

<script>
export default{
    props: {
        title:{
            type:String,
            required: true
        },
        description:{
            type:String,
            required: true
        },
    }
}

</script>
