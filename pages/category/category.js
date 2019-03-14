const app = getApp()

Page({
  data: {
    curNav: 1,
    curIndex: 0,
    cateItems: [{
        cate_id: 1,
        cate_name: "水果",
        ishaveChild: true,
        children: [{
          id: "1",
          title: "春甜沙糖桔1盒500g",
          img: "http://att3.citysbs.com/no/haodian/2015/01/22/11/middle_800x800-110625_v2_13701421895985563_6392c9019fa4fcdc2dbb5a5349fb3bd7.jpg",
          imgs: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552482387943&di=7637edfd4345c2907fd97f18ae5bcf04&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F3ac79f3df8dcd1003cb8ff1b798b4710b9122fe7.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552482387933&di=8c95abe8a4eda11ccbab06c43f9ef406&imgtype=0&src=http%3A%2F%2Fztd00.photos.bdimg.com%2Fztd%2Fw%3D700%3Bq%3D50%2Fsign%3D1305bf3433f33a879e6d021af6676105%2F1ad5ad6eddc451da47f730efbffd5266d01632b4.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552482456512&di=7226f54c2a1b96f346f8ab8d468a3776&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161222%2F76e9032873b74686b4303b3714218827_th.jpeg",
          price: "9.9",
        }, {
          id: "2",
          title: "广西百香果热带水果新鲜西番莲鸡蛋果现摘5斤精装大红果酸爽香甜",
          img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4549682,2015832962&fm=26&gp=0.jpg",
          imgs: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552485441283&di=901d2d8deaf6b5f6d4740ec6a1f9991f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180205%2Ff794ce9762b946d3b7e21f5113029ab5.jpeg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552485441280&di=1e8b13e1438caf5c91cdb5d3f91750fe&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FuhBohzXU4O158ZSYr70KA7sXR%3DmwQNiLH5LX2F8BdvFsZ1542165681463.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552485441410&di=c35b6eef75f2eb07d30520eef05d6112&imgtype=0&src=http%3A%2F%2Fimages.123haitao.com%2Fquestions%2F20170613%2F57d074ba881e0263b0b56bac22c17820.jpg",
          price: "32.5",
        },
		{
        id: 3,
        title: '鲜脐橙500g',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552546530303&di=162133ab00068a3e0aa0420f72316aef&imgtype=0&src=http%3A%2F%2Fabc.2008php.com%2F2018_Website_appreciate%2F2018-11-03%2F20181103234822.jpg',
        imgs: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552546530303&di=162133ab00068a3e0aa0420f72316aef&imgtype=0&src=http%3A%2F%2Fabc.2008php.com%2F2018_Website_appreciate%2F2018-11-03%2F20181103234822.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552547628509&di=9073db67cd48a1e2ff74a417618cd646&imgtype=0&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2015%2F04%2F30%2FFnW_co7hk-5U3xD2T7MQtgUVe-wP.jpg%2521580x580.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553142370&di=4927b05de04f6e4bf8423218b237524d&imgtype=jpg&er=1&src=http%3A%2F%2Fxianyu.chinaxiaokang.com%2Fuploads%2Fimage%2F20170929%2F1506648574262197.jpg',
        price: '10.5'
      },
      {
        id: 4,
        title: '新鲜草莓500g',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552546574459&di=3ae1316d60e9711b272fa9bfb98ee12c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F011f7059e55f83a8012044630ca0ba.jpg%403000w_1l_2o_100sh.jpg',
        imgs: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552546574459&di=3ae1316d60e9711b272fa9bfb98ee12c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F011f7059e55f83a8012044630ca0ba.jpg%403000w_1l_2o_100sh.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553142497&di=40e251ec79e8441afc564a543e8ea2d2&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0160e05850196ea801219c7756ea26.jpg%403000w_1l_0o_100sh.jpg',
        price: '20.9'
      },
      {
        id: 5,
        title: '新鲜蓝莓500g',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553141316&di=71e1c5d44e06c3227635c1d2f8df7aa4&imgtype=jpg&er=1&src=http%3A%2F%2Fabc.2008php.com%2F2014_Website_appreciate%2F2015-01-22%2F20150122002220.jpg',
        imgs: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553141316&di=71e1c5d44e06c3227635c1d2f8df7aa4&imgtype=jpg&er=1&src=http%3A%2F%2Fabc.2008php.com%2F2014_Website_appreciate%2F2015-01-22%2F20150122002220.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553142621&di=c38bd59cec84bfa30496630dde109cd9&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F599bd8e648a9f.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552547902867&di=82458487096be37115cacc59ea9c6ecc&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c99259400912a8012193a3af2f6d.jpg%401280w_1l_2o_100sh.jpg',
        price: '40.9'
      },
      {
        id: 6,
        title: '新鲜青柠500g',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553141343&di=ffe972372b61b27e360ea002a558dd6c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F584a5f3f4763c.jpg',
        imgs: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553141343&di=ffe972372b61b27e360ea002a558dd6c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F584a5f3f4763c.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553142723&di=79126ec2178c67002a7cd6d084f13363&imgtype=jpg&er=1&src=http%3A%2F%2Fold.bz55.com%2Fuploads%2Fallimg%2F161209%2F140-161209161F3.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553142736&di=754d765e0445c9cfa7c6067e72a13be9&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201304%2F10%2F20130410085335_fumHw.thumb.700_0.jpeg',
        price: '11.9'
      },]
      },
      {
        cate_id: 2,
        cate_name: "蔬菜",
        ishaveChild: true,
        children: [{
          id: "2",
          title: "云南春菜250g",
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553075602&di=05c0eed373ca6159ed8185984e302489&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.whtv.com.cn%2Fzt%2F2015%2Fcfen%2Fq%2F201603%2FW020160316593701715914.jpg",
          imgs: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553075545&di=c28715d589c16ef97e626c58245b9d79&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.whtv.com.cn%2Fzt%2F2015%2Fcfen%2Fq%2F201603%2FW020160316593701715914.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552480827919&di=587c53db162d9a5b3931b659d60b0149&imgtype=0&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2015%2F04%2F23%2FFojEEncso8C-TdxR08GShvHWepLd.jpg%2521730x0.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552480869757&di=2b234017f7eda1b51be295137a26c433&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fd31b0ef41bd5ad6e43fa699d81cb39dbb6fd3c41.jpg",
          price: "1.9"
        }, {
          id: "4",
          title: "精选金针菇200g",
          img: "http://img.39yst.com/uploads/2015/0714/1436864900948.jpg",
          imgs: "http://img.39yst.com/uploads/2015/0714/1436864900948.jpg,http://photo.16pic.com/00/22/35/16pic_2235519_b.jpg,http://img.mp.sohu.com/q_mini,c_zoom,",
          price: "2.5",
        }]
      },
      {
        cate_id: 3,
        cate_name: "肉类",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 4,
        cate_name: "水产",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 5,
        cate_name: "乳品",
        ishaveChild: true,
        children: [{
          id: "5",
          title: "6盒维他柠檬茶250ml",
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553076220&di=4df990b5e82ca2226480fb1f15b0c986&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.yamibuy.com%2Fimages%2F201510%2Fsource_img%2F3723_G_1445295980929.jpg",
          imgs: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553076092&di=09100fe159934876f238813e0c7d31dc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160726%2Fb28164906f424e0481145a77309381d8_th.png,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552481374741&di=5467ccbb84fe9b9d34db9ccd4116c48d&imgtype=0&src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20160907%2F13394474546_940x448.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553076166&di=ee31a2986dc48cafe6829c4bd5b1dc84&imgtype=jpg&er=1&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20167_26_0%2Fa52hlv7943219966362.jpg",
          price: "18.9"
        }, {
          id: "6",
          title: "卡士时尚鲜酪乳100g*3",
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552481628599&di=2f5b4f4866e801532f0a12f6f2a0b266&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi1%2FTB2kwXMamtYBeNjSspkXXbU8VXa_%2521%2521138088672.jpg_400x400.jpg",
          imgs: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553076369&di=f256de4e934fed71186652dc6067e041&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F07%2F05%2FFkIzX6Cp7P3mAfs5FQEjQg6ab1Kx.jpg%3FimageView2%2F2%2Fw%2F580%2Fh%2F580%2Fq%2F75%2Fformat%2Fjpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552481678746&di=9c38082f25bcab8df29c2a6774cd8fce&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1484965270%2C1847412884%26fm%3D214%26gp%3D0.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552481650845&di=709f5913870f014403a88810acd9e52d&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F07%2F04%2F146757586534780542.JPEG",
          price: "10.9",
        }, ]
      },
      {
        cate_id: 6,
        cate_name: "零食",
        ishaveChild: true,
        children: [{
          id: "3",
          title: "焦糖瓜子108g",
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553075773&di=840a2c69b970c73fb6d870ef43c0bd9c&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.lkhs.cn%2FUserFile%2FProductMain%2F201706141442190bf9.jpg",
          imgs: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553075745&di=3ec7b6e53040970c97695186c590de02&imgtype=jpg&er=1&src=http%3A%2F%2Fimgs.xymvip.com%2Fgroup1%2FM00%2F03%2FDD%2FeSkaf1dNAsGAEXyeAAJqy02wzeY982.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553075689&di=23fa4738a287729b64a9664a6058b0a8&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.99114.com%2Fgroup10%2FM00%2FBC%2FF6%2FrBADs1oNA5aAXZEaAAMxdlL4fdE023.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552480970622&di=954dae589adb503ba2e7ab032966bdce&imgtype=0&src=http%3A%2F%2Fp0.so.qhmsg.com%2Ft015ad81591ddc53c6f.jpg",
          price: "10.8",
        }, {
          id: "1",
          title: "友臣肉松饼整箱休闲小吃糕点特产美食营养早餐食品网红零食面包",
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553079859&di=8f7e37863ac37288f3fc91b85683b4ae&imgtype=jpg&er=1&src=http%3A%2F%2Fimg011.hc360.cn%2Fm2%2FM05%2F10%2F34%2FwKhQclRFGK6EJfIRAAAAAKjI6Eg643.jpg",
          imgs: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553079886&di=97b919c8b5cd5a6d07ae86f8f165e8c7&imgtype=jpg&er=1&src=http%3A%2F%2Fd6.yihaodianimg.com%2FN04%2FM0A%2F44%2F46%2FCgQDr1PDiBiASPHzAAHzJ9YK83I64101.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552485168756&di=f6ac60023083602c7d26be63713e8ed2&imgtype=0&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2015%2F03%2F10%2FFovo_JIZBNklJC3a4XhGoTf2RXGq.jpg%2521580x580.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552485168745&di=fbd6545586d2725aafa982e51824d9d0&imgtype=0&src=http%3A%2F%2Fwww.momhui.com%2Fdata%2Fupload%2Fpost%2F1801%2F08%2F5a52bdcf8dcee.jpg",
          price: "42.8",
        }]
      },
      {
        cate_id: 7,
        cate_name: "酒饮",
        ishaveChild: false,
        children: []
      }, {
        cate_id: 8,
        cate_name: "速食",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 9,
        cate_name: "粮油",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 10,
        cate_name: "百用",
        ishaveChild: true,
        children: [{
          id: "4",
          title: "维达超韧抽纸6包130抽",
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553075860&di=b8da02ba443a5e9328e5bc6bf6347dea&imgtype=jpg&er=1&src=http%3A%2F%2Fimage1.suning.cn%2Fb2c%2Fcatentries%2F000000000123345264_4_800x800.jpg",
          imgs: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553075891&di=89e388781caa221621a9ae1a6e0f52cb&imgtype=jpg&er=1&src=http%3A%2F%2Fd6.yihaodianimg.com%2FN05%2FM03%2FFC%2F4F%2FCgQI0ldXhlKAHDVMAAFy0u5LVdo540.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552481200989&di=e4dc3e2eef198561169a1d210dba99d7&imgtype=0&src=http%3A%2F%2Fimg001.hc360.cn%2Fhb%2FMTQ3NDg0ODM5MDY0NzM5MjQ3ODI0Nw%3D%3D.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553075941&di=fcee8c20929d4fe057769985ec0ded1f&imgtype=jpg&er=1&src=http%3A%2F%2Fimage4.suning.cn%2Fuimg%2Fb2c%2Fnewcatentries%2F0070204058-000000010274573279_1_800x800.jpg",
          price: "16.9",
        }]
      }
    ],
  },

  onLoad: function(options) {
    if (options.id != null) {
      this.setData({
        curNav: options.id,
        curIndex: options.id - 1
      })
    }
  },
  onShow: function(options) {

  },
  togoodInfo: function (e) {
    var item = e.currentTarget.dataset.item;
    var imgs = encodeURIComponent(item.imgs);
    var img = encodeURIComponent(item.img);
    var price = item.price;
    var title = item.title;
    var id = item.id;
    wx.navigateTo({
      url: '../goodInfo/goodInfo?imgs=' + imgs + '&img=' + img + '&title=' + title + '&price=' + price + '&id=' + id
    })
  },
  //事件处理函数  
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})