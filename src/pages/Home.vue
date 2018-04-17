<template>
<div class="home-container">
  <List @goCdetail='goCdetail'></List>
</div>
</template>

<script>
import Head from '@/components/Head'
import Search from '@/components/Search'
import Content from '@/components/Content'
import List from '@/components/List'
import axios from 'axios'
import data from "../../data.json"

export default {
  components: {
    Head,
    Content,
    List,
    Search
  },

　data() { 　　　　　
      　return{　clothinfo: {
      "clist": [
        {
          "cImg": 2,
          "cStatus": false,
          "cTitle": "qwtr",
          "cType": "deoik",
          "clothNum": 10019,
          "clothPrice": 1037
        },
        {
          "cImg": 4,
          "cStatus": true,
          "cTitle": "cuvutgrn",
          "cType": "bixghbhvy",
          "clothNum": 10020,
          "clothPrice": 263
        },
        {
          "cImg": 9,
          "cStatus": true,
          "cTitle": "yqodiu",
          "cType": "elkq",
          "clothNum": 10021,
          "clothPrice": 1074
        },
        {
          "cImg": 5,
          "cStatus": false,
          "cTitle": "ttsscaho",
          "cType": "vhtqc",
          "clothNum": 10022,
          "clothPrice": 365
        },
        {
          "cImg": 2,
          "cStatus": false,
          "cTitle": "ffgosi",
          "cType": "xlwyskbcv",
          "clothNum": 10023,
          "clothPrice": 567
        },
        {
          "cImg": 9,
          "cStatus": false,
          "cTitle": "qjpsebgred",
          "cType": "mbcqstw",
          "clothNum": 10024,
          "clothPrice": 272
        },
        {
          "cImg": 3,
          "cStatus": true,
          "cTitle": "biybedyci",
          "cType": "pewhxnkhjx",
          "clothNum": 10025,
          "clothPrice": 4
        },
        {
          "cImg": 7,
          "cStatus": true,
          "cTitle": "wlogk",
          "cType": "ppnhws",
          "clothNum": 10026,
          "clothPrice": 381
        },
        {
          "cImg": 18,
          "cStatus": true,
          "cTitle": "nwqranex",
          "cType": "efqjghjlu",
          "clothNum": 10027,
          "clothPrice": 973
        },
        {
          "cImg": 15,
          "cStatus": true,
          "cTitle": "jticrfikf",
          "cType": "jpgbggcr",
          "clothNum": 10028,
          "clothPrice": 1061
        },
        {
          "cImg": 1,
          "cStatus": true,
          "cTitle": "ofywv",
          "cType": "tboyi",
          "clothNum": 10029,
          "clothPrice": 34
        },
        {
          "cImg": 12,
          "cStatus": true,
          "cTitle": "lyml",
          "cType": "kcqhbsj",
          "clothNum": 10030,
          "clothPrice": 1063
        },
        {
          "cImg": 8,
          "cStatus": true,
          "cTitle": "mkhcqdvfn",
          "cType": "astftoibm",
          "clothNum": 10031,
          "clothPrice": 389
        },
        {
          "cImg": 15,
          "cStatus": false,
          "cTitle": "brcridg",
          "cType": "gzhfbujvcr",
          "clothNum": 10032,
          "clothPrice": 331
        },
        {
          "cImg": 14,
          "cStatus": true,
          "cTitle": "totjwee",
          "cType": "bnly",
          "clothNum": 10033,
          "clothPrice": 80
        },
        {
          "cImg": 19,
          "cStatus": true,
          "cTitle": "ccieewei",
          "cType": "jmytgqmpc",
          "clothNum": 10034,
          "clothPrice": 1089
        },
        {
          "cImg": 9,
          "cStatus": false,
          "cTitle": "bmyeptkg",
          "cType": "mxoqi",
          "clothNum": 10035,
          "clothPrice": 449
        },
        {
          "cImg": 16,
          "cStatus": false,
          "cTitle": "olhvacshh",
          "cType": "wzxwwgif",
          "clothNum": 10036,
          "clothPrice": 439
        },
        {
          "cImg": 1,
          "cStatus": false,
          "cTitle": "tqw",
          "cType": "xlebeykfl",
          "clothNum": 10037,
          "clothPrice": 103
        },
        {
          "cImg": 18,
          "cStatus": true,
          "cTitle": "otkloejc",
          "cType": "mpstths",
          "clothNum": 10038,
          "clothPrice": 725
        },
        {
          "cImg": 4,
          "cStatus": false,
          "cTitle": "hwfyzwzvsy",
          "cType": "ryfshc",
          "clothNum": 10039,
          "clothPrice": 956
        },
        {
          "cImg": 14,
          "cStatus": false,
          "cTitle": "zimub",
          "cType": "wypvkcpon",
          "clothNum": 10040,
          "clothPrice": 689
        },
        {
          "cImg": 5,
          "cStatus": true,
          "cTitle": "nsu",
          "cType": "jgiuxmldp",
          "clothNum": 10041,
          "clothPrice": 22
        },
        {
          "cImg": 5,
          "cStatus": false,
          "cTitle": "udgllz",
          "cType": "smlemlyqno",
          "clothNum": 10042,
          "clothPrice": 1077
        },
        {
          "cImg": 5,
          "cStatus": true,
          "cTitle": "lagtd",
          "cType": "krtvb",
          "clothNum": 10043,
          "clothPrice": 1001
        },
        {
          "cImg": 4,
          "cStatus": false,
          "cTitle": "jqmuabqmk",
          "cType": "jwovvctyux",
          "clothNum": 10044,
          "clothPrice": 10
        },
        {
          "cImg": 4,
          "cStatus": true,
          "cTitle": "mdp",
          "cType": "rpocodfvuo",
          "clothNum": 10045,
          "clothPrice": 339
        }
      ]
           }}
  　　　},

  methods: {
     showdata() {
       console.log(clothinfos);
     },

     goCdetail() {
       this.$router.push({ name: 'Cdetail', params: { clothinfo: this.clothinfo } });
     }
  }
}
</script>

<style>
.home-container {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
