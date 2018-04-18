<template lang="html">
  <div class="page-container w">
    <p v-show="!isShowProduct" class="err-tip">很抱歉，实在找不到您要的商品。</p>
    <div v-show="isShowProduct">
      <div class="intro-wrap">
        <div class="main-img-con">
          <img class="main-img" v-lazy="mainImage" alt="name"/>
        </div>
        <div class="p-info-con">
          <h1 class="p-name">{{product.name}}标题</h1>
          <p class="p-subtitle">{{product.subtitle}}描述</p>
          <div class="p-info-item p-price-con">
            <span class="label">价格:</span>
            <span class="info">￥ {{product.price | formatMoney}}</span>
          </div>
          <div class="p-info-item">
            <span class="label">库存:</span>
            <span class="info">{{product.stock}}</span>
          </div>
          <div class="p-info-item p-count-con">
            <span class="label">数量:</span>
            <input class="p-count" :value="buyCount" readonly=""/>
            <span class="p-count-btn plus" @click="changeBuyCount('plus')">+</span>
            <span class="p-count-btn minus" @click="changeBuyCount('minus')">-</span>
          </div>
          <div class="p-info-item btn-cart-add">
            <a class="btn cart-add" @click="addCart">加入购物车</a>
          </div>
        </div>
      </div>
      <div class="detail-wrap desc">
        <div class="detail-tab-con">
          <ul class="tab-list">
            <li class="tab-item active">详细描述</li>
          </ul>
        </div>
        <div class="detail-con">
          <p>这是一段描述</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isShowProduct: true,
      buyCount: 1,
      product: {},
      mainImage: '',
      subImages: []
    };
  },
  created() {
  },
  methods: {
    addCart() {
      let userCart = {};
      console.info('this.product', this.product);
      let productId = this.product.id;
      this.$store.dispatch('check_product', {productId});
      if (this.$store.getters.getCurIndex !== -1) {
        this.$store.dispatch('plus_count');
      } else {
        userCart.productId = this.product.id;
        userCart.quantity = this.buyCount;
        userCart.productName = this.product.name;
        userCart.productPrice = this.product.price;
        userCart.mainImage = this.product.mainImage;
        userCart.checked = 1;
        this.$store.dispatch('push_cart', {userCart});
      }
      this.loadPage('oper-result', {'type': 'user-cart'});
    },
    changeMainImg(img) {
      this.mainImage = img;
    },
    changeBuyCount(type) {
      if (!type) {
        alert('操作错误');
      }
      if (type === 'minus') {
        this.buyCount !== 1 ? this.buyCount-- : this.buyCount = 1;
      }
      if (type === 'plus') {
        this.buyCount !== this.product.stock ? this.buyCount++ : this.buyCount = this.product.stock;
      }
    },
  },
  components: {}
};
</script>

<style lang="css">
.page-container{
  height: 100%;
  width: 100%;
  margin: 0;
}

.intro-wrap{
  width: 84%;
  margin-left: 8%;
  height: 450px;
  margin-bottom: 10px;
}

.main-img-con{
  margin-top: 30px;
  height: 400px;
  width: 420px;
  border: 1px solid #D1D1D1;
  float: left;
}
.main-img-con img{
  height: 100%;
  width: 100%;
}

.p-info-con{
  margin-left: 10px;
  height: 420px;
  width: 640px;
  float: left;
  padding-left: 10px;
}

.p-subtitle{
  color:#c60023;
}

.p-info-item{
  padding: 10px;
}
.p-price-con{
  background-color: #eee;
}
.p-price-con .info{
  color:#c60023;
}

.p-count-con{
  height: 55px;
}
.p-count-con .label{
  display: block;
  float: left;
  margin-right: 10px;
  line-height: 35px;

}
.p-count{
  height: 36px;
  width: 45px;
  text-align: center;
  float: left;
}

.p-count-btn{
  display: block;
  border: 1px solid #aaa;
  height: 15px;
  width: 20px;
  float: left;
  text-align: center;
  line-height: 15px;
  margin-right: 400px;
  margin-left: 10px;
  margin-bottom: 6px;
}

.btn-cart-add{
  width: 125px;
  height: 40px;
  font-size: 23px;
  line-height: 40px;
  text-align: center;
  background-color: #c60023;
  color: #fff;
}

/* .desc{
  width: 22%;
  margin-left: 9%;
  height: 200px;
} */

.detail-tab-con{
  list-style:none;
  background: #c60023;
  color: #fff;
  margin-left: 9%;
  margin-right: 9%;
  /* height: 50px; */
  line-height: 50px;
  font-size: 20px;
}

.detail-con{
  margin-left: 9%;
  margin-top: 1%;
}
</style>
