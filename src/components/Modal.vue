<template>
<div class="modal">
    <div class="content">
        <img class="content__img" src="@/assets/check.svg">
        <h2 class="content__title">Отлично</h2>
        <p class="content__subtitle">Ваша заявка принята. Ожидайте перехода на сайт</p>
        <a class="content__link">Перейти на сайт</a>
    </div>
</div>
</template>

<style lang="scss" scoped>
.modal{
    width: 100%;
    height: 100vh;
    z-index: 5;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
}
.content{
    width: 361px;
    padding: 70px 0 75px;
    background: #1C1C1E;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .content__title{
        font-family: Gilroy;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 135%;
        text-align: center;
        color: #FFFFFF;
        margin: 45px auto 0;
    }
    .content__subtitle{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 135%;
        text-align: center;
        color: #FFFFFF;
        opacity: 0.3;
        width: 197px;
        margin: 8px auto 35px;
    }
    .content__link{
        display: inline-block;
        min-width: 178px;
        background: #4A67FF;
        border: 2px solid #4A67FF;
        box-sizing: border-box;
        border-radius: 50px;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 135%;
        color: #FFFFFF;
        padding: 17px 35px 18px;
    }
}
</style>