<template>
    <div class="min-cars">
        <div class="min-image">
            <img src="@/assets/images/sdfsdfsdf.webp" alt="">
        </div>
        <p>Mitsubishi Outlander</p>
        <span>2014, 87 000 км</span>
        <div class="price">920 000 тг</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .min-cars{
        max-width: 205px;
        font-size: 14px;
    }
    .min-image, .min-image img{
        width: 100%;
    }
    p{
        margin-bottom: 5px;
        transition: all .3s;
    }
    .min-cars:hover p{
        color: red;
    }
    .price{
        margin-top: 10px;
        font-weight: bold;
        font-size: 18px;
    }
</style>