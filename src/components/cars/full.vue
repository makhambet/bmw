<template>
    <div @click="open()" class="full-cars">
        <div class="image">
            <img src="@/assets/images/sdfsdfsdf.webp" alt="">
        </div>
        <div class="info">
            <h3>{{car.first_name}} {{car.last_name}}</h3>
            <div class="character">
                <span v-for="item in 5" :key="item.id">
                    Полный
                </span>
            </div>
            <div class="lisence">
                <span>проверен</span>
                <span>проверен</span>
            </div>
            <small>Алматы</small>
        </div>
        <div class="price">
            <p>{{car.balance}} тг</p><br>
            <router-link to="/">
                от 27 350 тг/мес
            </router-link>
        </div>
        <p>{{car.code}}</p>
        <p>31 200 км</p>
        <div class="action">
            <div><i class="far fa-heart"></i></div>
            <div><i class="far fa-copy"></i></div>
            <div><i class="far fa-edit"></i></div>
            <div><i class="fas fa-times"></i></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            car: {
                type: Object,
                required: true
            },
        },
        methods: {
            open() {
                this.$router.push({name: 'car', params: {id: '1'}});
            }
        },
    }
</script>

<style scoped>
    .full-cars{
        display: flex;
        justify-content: space-between;
        max-width: 920px;
        padding: 15px 16px;
        border-top: 1px solid #eee;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
    }
    .full-cars:hover{
        box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);
    }
    .image{
        width: 25%;
    }
    .image img{
        width: 100%;
    }
    .info{
        width: 30%;
    }
    .price{
        width: 15%;
    }
    .full-cars > p{
        max-width: 9%;
        font-size: 16px;
    }
    .action{
        width: 5%;
        text-align: right;
    }
    .character{
        display: flex;
        flex-wrap: wrap;
        color: rgba(0,0,0,.5);
    }
    .character > span{
        width: 50%;
    }
    .lisence{
        display: flex;
        margin-top: 10px;
    }
    .lisence > span{
        color: #5b0;
        background: rgba(85,187,0,.08);
        margin-right: 5px;
        padding: 0 5px;
        border-radius: 3px;
    }
    .price p{
        margin: 0;
        padding: 4px 8px;
        background: #5b0;
        display: inline-block;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
    }
    .price a{
        color: #157ee1;
    }
    .action{
        opacity: 0;
        visibility: hidden;
    }
    .full-cars:hover .action{
        opacity: 1;
        visibility: visible;
    }
</style>