<template>
    <div class="home">
        <div id="wrapper">
            <form class="search">
                <input type="text" placeholder="Поиск по объявлениям">
                <button @click="searching()" type="submit"><i class="fas fa-search"></i></button>
            </form>

            <div class="cars">
                <div v-for="item in ADVERTS.data" :key="item.id">
                    <full-cars :car="item"></full-cars>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullCars from '@/components/cars/full'
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                search: '',

            }
        },
        computed: {
            ...mapGetters([
                'ADVERTS'
            ])
        },
        methods: {
            searching() {
                console.log(this.search)
            }
        },
        components: {
            FullCars,
        },
    }
</script>

<style>
    .search{
        width: 100%;
        margin-top: 20px;
    }
    input{
        width: 880px;
        padding: 15px 10px 14px 25px;
        border-radius: 5px 0 0 5px;
    }
    button{
        font-size: 16px;
        border: none;
        padding: 14px 25px;
        border-radius: 0 5px 5px 0;
        background: skyblue;
        color: #fff;
    }
    .cars{
        margin-top: 20px;
    }
</style>