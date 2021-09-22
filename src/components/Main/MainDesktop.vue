<template>
<header class="header">
    <div class="container logo">
        <img class="logo__site" src="@/assets/Logo.svg" alt="logo">
    </div>
    <div class="header__content">
        <div class="content__left">
                <div class="block atransomas" :class="{active: counter === 1}">
                    <h1 class="content__left-title">Хочешь зарабатывать от 10.000$ просто снимая видео?</h1>
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
                <span class="left-try__text">Да, хочу</span>
                <img class="content__left-try-img" src="@/assets/strelka.svg" alt="strelka">
            </button>
            <a class="content__link-help" :class="{content__link_help_active: counter === 2 }">Нет, мне нужна помощь</a>
        </div>
    </div>
    <img class="header__img" src="@/assets/image1.png" alt="#">
    <img class="header__img2" src="@/assets/image2.png" alt="#">
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
    padding: 0 0 ;
    background: #0D0D11;
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 1020px;
}
.logo {
    padding-top: 77px;
    padding-bottom: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 1350px;
    display: flex;
}

.header__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
    padding-top: 105px;
    padding-bottom: 0;
    width: 100%;
    max-width: 1350px;
}
.content__left {
    max-width: 613px;
    z-index: 5;
    position: relative;
}
.content__left-title {
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    line-height: 135%;
    color: #FFFFFF;
    margin: 0 0 20px;
}
.content__left-link {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 135%;
    color: #4A67FF;
}
.content__left-list {
    list-style-type: none;
    padding: 0;
    margin: 45px 0 0;
}
.content__left-item::before {
    color: #4A67FF;
    content: "▪";
    padding-right: 15px;
    transform: rotate(90deg);
}
.content__left-item {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 135%;
    color: #FFFFFF;
    padding-bottom: 30px;
}
.content__left-try {
    display: block;
    position: relative;
    background: #4A67FF;
    border-radius: 50px;
    padding: 23px 93px 24px 50px;
    text-decoration: none;
    box-sizing: border-box;
    margin-top: 120px;
    border: none;
    cursor: pointer;
    transition: 500ms ease-out;
}
.content__link-help{
    display: none;
    padding: 23px 93px 24px 50px;
    border: 2.5px solid #4A67FF;
    box-sizing: border-box;
    border-radius: 50px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 135%;
    color: #4A67FF;
    margin-top: 25px;
}
.content__link_help_active{
    transition: 500ms ease-out;
    display: inline-block;
}
.left-try__text {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 135%;
    color: #FFFFFF;
    margin: 0;

}
.content__left-try-img{
    position: absolute;
    top: 28px;
    right: 50px;
}

.header__img {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 2;

}
.header__img2 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;

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

@media (min-width: 1220px) {
    .content__left-try:hover {
        cursor: pointer;
        opacity: .5;
        transition: 10ms ease-in-out;
    }
    .content__link-help{
        cursor: pointer;
        opacity: .5;
        transition: 10ms ease-in-out;
    }
}

@media screen and (max-width: 1220px) {
    .header__content {
        flex-direction: column;
    }
    .header__img {
        right: -620px;
        top: -135px;
    }
    .header__img2 {
        left: 0;
        width: 100%;
        height: 1040px;
        object-fit: cover;
        background: linear-gradient(180deg, #0D0D11 0%, rgba(13, 13, 17, 0.85) 68.23%, rgba(13, 13, 17, 0.7) 100%);
    }
    .content__left {
        margin-left: 55px;
        margin-bottom: 200px;
    }
    .content__right {
        margin: 70px auto 0;
    }
}
</style>