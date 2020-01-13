<template>
    <div class="navbar-header">
        <div id="wrapper">
            <nav>
                <ul>
                    <li><a>Объявления</a></li>
                    <li><a>Дилеры</a></li>
                    <li><a>Каталог</a></li>
                    <li><a>Отзывы</a></li>
                    <li><a>Видео</a></li>
                    <li><a>Статистика цен</a></li>
                    <li><a>Отзывные кампании</a></li>
                </ul>
            </nav>            
            <nav>
                <ul>
                    <li><a>Любой регион</a></li>
                    <li><a>Избранное</a></li>
                    <li><a>Сравнение</a></li>
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
    .navbar-header{
        font-size: 14px;
        border-bottom: 1px solid #eee;
    }
    .navbar-header > div{
        display: flex;
        justify-content: space-between;
    }
    nav > ul{
        display: flex;
    }
    nav > ul li:not(:last-child){
        margin-right: 20px;
    }
    nav > ul li a:hover{
        color: red;
    }
</style>