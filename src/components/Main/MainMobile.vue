<template>
<header class="header">
    <div class="logo">
        <img class="logo__site" src="@/assets/Logo.svg" alt="logo">
    </div>
    <div class="header__content">
        <div class="content__left">
            <div class="block atransomas" :class="{active: counter === 1}">
                <h2 class="content__left-title">Хочешь зарабатывать от 10.000$ просто снимая видео?</h2>
                <a class="content__left-link">можно выкладывать что угодно</a>
                <ul class="content__left-list">
                    <li class="content__left-item">Комиссия всего 20%</li>
                    <li class="content__left-item">Бесплатно попадание в «Рекомендации»</li>
                    <li class="content__left-item">Быстрый вывод на любые системы</li>
                </ul>
            </div>
            <div class="block atransomas" :class="{active: counter === 2}">
                <h1 class="content__left-title">Готова ли ты продвигать свою страницу FriendsOnly в своих
                    соц.сетях?</h1>
                <a class="content__left-link">если у тебя есть аккаунты, где 500 подписчиков и более</a>
            </div>
            <div class="block atransomas" :class="{active: counter === 3}">
                <h1 class="content__left-title">Готова ли ты выкладывать эротические видео?</h1>
                <a class="content__left-link">ощутите все преимущества FriendsOnly</a>
                <ul class="content__left-list">
                    <li class="content__left-item">Комиссия всего 20%</li>
                    <li class="content__left-item">Бесплатно попадание в «Рекомендации»</li>
                    <li class="content__left-item">Быстрый вывод на любые системы</li>
                </ul>
            </div>
            <button class="content__left-try" @click="counter += 1">
                <p class="left-try__text">Да, хочу</p>
                <img class="content__left-try-img" src="@/assets/strelka.svg" alt="strelka">
            </button>
        </div>
        <img class="header__img" src="@/assets/image-1-mobail.png" alt="#">
    </div>
</header>
</template>

<script>

export default {
    data: () => ({
        counter: 1,
    }),
    watch: {
        counter: function () {
            if(this.counter === 4){
                this.counter = 3;
                window.location.href='https://friendsonly.me/';
            }
        }
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    background: black;
    position: relative;
    padding: 45px 32px 50px;
    box-sizing: border-box;
    overflow: hidden;
    height: 812px;
}
.logo {
    z-index: 5;
    position: relative;
    max-width: 536px;
    margin: 0 auto;
}
.header__content {
    margin: 80px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.content__left {
    max-width: 536px;
    margin: 0 auto;
    z-index: 3;
    position: relative;
}
.content__left-title {
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 135%;
    color: #FFFFFF;
    margin: 0 0 15px;
}
.content__left-link {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 165%;
    color: #4A67FF;
}
.content__left-list {
    list-style-type: none;
    padding: 0;
    margin: 65px 0 30px;
}
.content__left-item::before {
    margin-right: 15px;
    transform: rotate(45deg);
    content: "";
    width: 8px;
    height: 8px;
    background: #4A67FF;
}
.content__left-item {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 135%;
    color: #FFFFFF;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
}
.content__left-try {
    display: block;
    position: relative;
    background: #4A67FF;
    border-radius: 50px;
    padding: 17px 65px 19px 35px;
    text-decoration: none;
    box-sizing: border-box;
    margin-top: 120px;
    border: none;
}
.content__left-try-img{
    position: absolute;
    top: 18px;
    right: 35px;
}
.left-try__text {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 135%;
    color: #FFFFFF;
    margin: 0;
}

.header__img {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    opacity: .2;
}
.content__left-try:hover {
    cursor: pointer;
    opacity: .5;
}
.block{
    display: none;
}

.active{
    display: block;
    -webkit-animation-name: dvizheniyaRight;
    animation-name: dvizheniyaRight;
}

.atransomas {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

@-webkit-keyframes dvizheniyaRight {
    from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}
@keyframes dvizheniyaRight {
    from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}
</style>