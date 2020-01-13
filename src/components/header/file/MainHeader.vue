<template>
    <div class="main-header">
        <div id="wrapper">
            <div class="logo">
                <router-link to="/">
                    AUTO.RU
                </router-link>
            </div>
            <nav>
                <ul>
                    <li><a>Легковые</a></li>
                    <li><a>Детали</a></li>
                    <li><a>Зап. части</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><a>Форумы</a></li>
                    <li><a>Дилеры</a></li>
                    <li><a>Войти</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .main-header{
        background: red;
        color: #fff;
        font-size: 16px;
    }
    .main-header a{
        color: #fff;
    }
    .main-header > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    nav > ul{
        display: flex;
    }
    nav > ul li:not(:last-child){
        margin-right: 20px;
    }
    nav > ul li a{
        font-weight: bold;
    }
</style>