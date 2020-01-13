<template>
    <div class="car">
        <div id="wrapper">
            <div class="wrapper">
                <div class="now_page">
                    Продажа BMW
                </div>
                <div class="head">
                    <div class="title">
                        <h2>BMW 5 серия VI (F10/F11/F07) 528i xDrive</h2>
                        <div class="shows">
                            <span>4 декабря 2019</span>
                            <span><i class="fas fa-eye"></i> 7547 (47 сегодня)</span>
                            <span>№ 101515132</span>
                        </div>
                    </div>
                    <div class="price">
                        <h2>970 000 тг</h2>
                        <a href="#price">от 16 600 тг/мес</a>
                    </div>
                </div>
                <div class="user">
                    <div class="user-info">
                        <div class="user-image">
                            <img src="@/assets/images/ava.png" alt="">
                        </div>
                        <div class="name">
                            <p>Влад</p>
                            <span>Москва, Печатники</span>
                        </div>
                    </div>
                    <div class="message">
                        Написать
                    </div>
                    <div class="phone">
                        <p>+7 985 611-75-84</p>
                        <small>с 9:00 до 21:00</small>
                    </div>
                </div>
                <div class="car-flex">
                    <div class="car-character">
                        <div>
                            <p>Год выпуска</p>
                            <p>Пробег</p>
                            <p>Кузов</p>
                            <p>Цвет</p>
                        </div>
                        <div>
                            <p>2011</p>
                            <p>130 000км</p>
                            <p>Седан</p>
                            <p>Черный</p>
                        </div>
                    </div>
                    <div class="car-info">
                        <div class="image">
                            <img src="@/assets/images/sdfsdfsdf.webp" alt="">
                        </div>
                        <div class="images-grid">
                            <div v-for="item in 12" :key="item.id">
                                <img src="@/assets/images/sdfsdfsdf.webp" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Спецпредложения</h3>
                <div>
                    <min-cars v-for="item in 4" :key="item.id"></min-cars>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MinCars from '@/components/cars/min'
    export default {
        props: {
            id: {
                type: String,
                required: true,
                default: '1', 
            },
        },
        created () {
            this.$store.dispatch('GET_SHOW', [
                {}, {name: 'advert'}, {id: this.id}
            ]);
        },
        components: {
            MinCars,
        },
    }
</script>

<style scoped>
    .wrapper{
        width: 888px;
    }
    .user, .user-info{
        display: flex;
    }
    .user{
        justify-content: space-between;
        margin: 20px 0;
        box-shadow: 0 4px 20px 0 rgba(0,0,0,.12);
        align-items: center;
        border-radius: 7px;
    }
    .user-image img{
        max-width: 30px;
    }
    .user-info{
        width: 60%;
        padding: 20px 0 20px 20px;
        border-right: 1px solid rgba(0,0,0,.12);
    }
    .message{
        width: 15%;
        text-align: center;
        padding: 20px 0;
        line-height: 36px;
        border-right: 1px solid rgba(0,0,0,.12);
    }
    .phone{
        width: 24%;
        text-align: center;
        background: #5b0;
        color: #fff;
        line-height: 33px;
        border-radius: 0 7px 7px 0;
    }
    .name{
        margin-left: 10px;
        font-size: 14px;
    }
    .name p{
        margin: 0;
    }
    .name span{
        color: #ccc;
    }
    .phone p{
        margin: 10px 0 0;
    }
    .car-flex{
        display: flex;
        justify-content: space-between;
    }
    .car-character{
        width: 30%;
        display: flex;
        font-size: 14px;
    }
    .car-character > div:first-child{
        color: rgba(0,0,0,.5);
        width: 40%;
    }
    .car-info{
        width: 68%;
    }
    .car-info .image{
        width: 100%;
        overflow: hidden;
    }
    .car-info .image:hover img{
        transform: scale(1.2);
        transition: all 1s ease;
    }
    .car-info .image img{
        width: 100%;
        max-height: 438px;
        transition: all 1s ease;
    }
    .images-grid{
        display: grid;
        grid-template-columns: repeat(6, minmax(67px, 1fr));
        grid-gap: 1px;
    }
    .images-grid img{
        width: 100%;
    }

</style>