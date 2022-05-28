<template>
<div>
     <h1>利用@media修改css样式，详情见代码</h1>
</div>
<!-- <此处引入相关图片/> -->
</template>
<style>
    *{
    margin: 0;
    padding: 0;
}

/*适应PC端 宽度大于1000px*/
@media screen and (min-width: 1000px) {
    #content{
        width: 960px;
        margin:0 auto;
    }

    #header{
        width: 100%;
        line-height: 100px;
        float: left;
        background: #333;
        color: #fff;
        text-align: center;
        font-size: 30px;
        margin-bottom: 10px;
    }

    #left{
        width: 200px;
        line-height: 400px;
        text-align: center;
        background: #333;
        float: left;
        font-size: 30px;
        color: #fff;
        margin-right: 10px;
    }

    #center{
        width: 540px;
        line-height: 400px;
        text-align: center;
        background: #333;
        float: left;
        font-size: 30px;
        color: #fff;
    }

    #right{
        width: 200px;
        line-height: 400px;
        text-align: center;
        background: #333;
        float: right;
        font-size: 30px;
        color: #fff;
    }

    #footer{
        width: 960px;
        height: 200px;
        background: #333;
        color: #fff;
        line-height: 200px;
        font-size: 30px;
        text-align: center;
        float: left;
        margin-top: 10px;
    }
}


/*适应pad端 宽度在640-1000之间*/
@media screen and (min-width: 640px) and (max-width: 1000px) {
    #content{
        width: 600px;
        margin:0 auto;
    }

    #header{
        width: 100%;
        line-height: 100px;
        float: left;
        background: #333;
        color: #fff;
        text-align: center;
        font-size: 30px;
        margin-bottom: 10px;
    }

    #left{
        width: 200px;
        line-height: 400px;
        text-align: center;
        background: #333;
        float: left;
        font-size: 30px;
        color: #fff;
        margin-right: 10px;
    }

    #center{
        width: 390px;
        line-height: 400px;
        text-align: center;
        background: #333;
        float: left;
        font-size: 30px;
        color: #fff;
    }

    #right{
        width: 600px;
        line-height: 300px;
        text-align: center;
        background: #333;
        float: left;
        font-size: 30px;
        color: #fff;
        margin-top: 10px;
    }

    #footer{
        width: 600px;
        height: 200px;
        background: #333;
        color: #fff;
        line-height: 200px;
        font-size: 30px;
        text-align: center;
        float: left;
        margin-top: 10px;
    }
}


/*适应移动端 宽度小于640*/
@media screen and (max-width: 639px){
    #content{
        width: 400px;
        margin:0 auto;
    }

    #header{
        width: 100%;
        line-height: 100px;
        float: left;
        background: #333;
        color: #fff;
        text-align: center;
        font-size: 30px;
        margin-bottom: 10px;
    }

    #left{
        width: 100%;
        line-height: 150px;
        text-align: center;
        background: #333;
        float: left;
        font-size: 30px;
        color: #fff;
        margin-bottom: 10px;
    }

    #center{
        width: 100%;
        line-height: 300px;
        text-align: center;
        background: #333;
        float: left;
        font-size: 30px;
        color: #fff;
    }

    #right{
        width: 100%;
        line-height: 150px;
        text-align: center;
        background: #333;
        float: left;
        font-size: 30px;
        color: #fff;
        margin-top: 10px;
    }

    #footer{
        width: 100%;
        height: 200px;
        background: #333;
        color: #fff;
        line-height: 200px;
        font-size: 30px;
        text-align: center;
        float: left;
        margin-top: 10px;
    }
}
    </style>