<template>
<div>
<div class="imgBox">
 </div>
 <h3>因为要把长图竖向立起来看，所以先要向右转90度，当然这个转向的中心选为左上角，然后再向Y轴向右移动本身的高度100%；  transform: rotate(90deg) translateY(-100%);
</h3>
</div>
</template>
<style>
.imgBox {
        height: 3.75rem;
        width: 6.67rem;
        background-image: url('../images/bigBg.png');
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position-x: 0%;
        background-position-y: 0%;
        transform-origin: 0% 0%;
        transform: rotate(90deg) translateY(-100%);
    }
    
</style>