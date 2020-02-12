<template>
  <div class="home">
    <el-container>
      <el-header><span class="header-active">首页</span><i class="iconfont icon-dayuhao"></i><span>商品详情</span></el-header>
      <div class="nav">
        Sort by: <span>Default</span> Price <i class="iconfont icon-up"></i>
      </div>
      <el-container class="content">
        <el-aside width="200px">
          <h3>PRICE:</h3>
          <div v-for="item of searchPrice" :key="item.id">
            <p @click="handlePrice(item.gt,item.lt)">{{item.gt}}-{{item.lt}}</p>            
          </div>
        </el-aside>
        <el-main>
          <div class="item">
            <div v-for="item of goodsList" :key="item.id">
              <img :src="item.productImage" alt="">
              <p>{{item.productName}}</p>
              <p class="price">￥{{item.salePrice}}</p>
              <button>加入购物车</button>
            </div>
          </div>        
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      searchPrice:[
        {gt:0,lt:100,id:1001},
        {gt:100,lt:500,id:1002},
        {gt:500,lt:1000,id:1003},
        {gt:1000,lt:5000,id:1004},
        {gt:5000,lt:10000,id:1005},
      ],
      goodsList:[]
    }
  },
  mounted(){
    this.$http('goods/list').then(res=>{
     this.goodsList=res.data.result
    })
  },
  methods:{
    handlePrice(gt,lt){
      this.$http({
        url:'/goods/price',
        methods:'get',
        params:{
          gt,lt
        }
      }).then(res=>{
        if(res.data.code==200){
          this.goodsList=res.data.result
        }else{
          this.goodsList=[];
          this.$message({
            duration:2000,
            message:res.data.msg
          });
        }
        
      })
    }
  }
}
</script>
<style scoped>
   .el-header{
     text-align: left;
     padding: 10px 30px;
   }
   .el-header .header-active{
     font-weight: bold;
   }
   img{
     width: 200px;height: 200px;
   }
   .item{
     width: 880px;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
     margin-left: 80px;
   }
   .item>div{
     margin-bottom: 20px;
     background: white;
     padding: 10px 0;
   }
   .el-container{
     background: #eee;
     width: 1400px;
     margin: 20px auto;
   }
   .nav{
     text-align: right;
     line-height: 40px;
     background: white;
     width: 1140px;
     margin-left: 30px;
   }
   .nav span{
     color: orange;
   }
   .nav i{
     font-size: 25px;
   }
   .price{
     text-align: left;
     margin-left: 10px;
     color: orange;
   }
   button{
     border: 1px solid orange;
     background: white;
     color: orange;
     font-size: 12px;
     width: 90%;
     padding:5px;
   }
   .el-aside>div:hover{
     cursor: pointer;
   }
</style>
