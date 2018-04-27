<template>
    <div class="shop-list">
        <h4>购物车信息</h4>
        <table class="table table-hover table-shop">
            <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>总价</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='(cart,index) in cartList'>
                    <td>{{cart.id}}</td>
                    <td>{{cart.name}}</td>
                    <td>{{cart.price}}</td>
                    <td>{{cart.num}}</td>
                    <td>{{cart.price*cart.num}}</td>
                    <td>
                        <div @click='action_cart(index,"add_db")' class="btn btn-info">+</div>
                        <div @click='action_cart(index,"reduce_db")' class="btn btn-warning">-</div>
                        <div @click='action_cart(index,"delete_db")' class="btn btn-danger" title='删除'>x</div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="cart-info">
       <div>
           <div class='item'>总数：<strong>{{cartInfos.total_nums}}</strong></span></div>
           <div class='item'>总价：<strong>{{cartInfos.total_price}}</strong></span></div>

           <div class="item pull-right btn btn-danger" @click='clear_db'>清空购物车</div>
       </div>
   </div>
    </div>
</template>
<script>
    export default { name: 'cart-list',
    computed: {
        cartList() {
            // console.log('cart.vue computed cartlist');
            // console.log(this.$store.getters.getCartList);

            return this.$store.getters.getCartList
        },
        cartInfos() {
            return this.$store.getters.getInfos;
        }
    },

    methods: {
        /**
         * 购物车加减删操作
         * @param  {number} index 当前操作的索引
         * @param  {string} type  对应的mutations值
         * @param  {string} type=add_db  增加
         * @param  {string} type=reduce_db  减少
         * @param  {string} type=delete_db  删除
         */
        action_cart(index, type) {
            //先更新当前索引
            this.$store.dispatch('update_cur_shop_status', {
                index
            });

            //执行更新state动作
            this.$store.dispatch(type);
        },
        clear_db() {
            this.$store.dispatch('clear_local');
        }
    },
    mounted() {

    }};
</script>
<style >
    .table-shop th{
      text-align: center;
    }
    .cart-info{
        font-size: 20px;
        text-align: left;
    }
    .cart-info .item{
        display: inline-block;
        margin-right: 20px;
    }
</style>
