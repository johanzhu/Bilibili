$(function(){
	/*顶部BLUR区*/
	$('.huayou').hover(
		function(){$('.huayouNote')[0].style.display = 'block'},
		function(){$('.huayouNote')[0].style.display = 'none'}
	)
	$('.youxizhongxin').hover(
		function(){$('.youxizhongxinNote')[0].style.display = 'block'},
		function(){$('.youxizhongxinNote')[0].style.display = 'none'}
	)
	$('.zhiboBlur').hover(
		function(){$('.zhiboNote')[0].style.display = 'block'},
		function(){$('.zhiboNote')[0].style.display = 'none'}
	)
	$('.zhoubian').hover(
		function(){$('.zhoubianNote')[0].style.display = 'block'},
		function(){$('.zhoubianNote')[0].style.display = 'none'}
	)
	$('.BML').hover(
		function(){$('.BMLNote')[0].style.display = 'block'},
		function(){$('.BMLNote')[0].style.display = 'none'}
	)
/*游戏中心框*/	
	$('.youxizhongxin').hover(
		function(){$('.youxizhongxinInner')[0].style.display = 'block'},
	    function(){$('.youxizhongxinInner')[0].style.display = 'none'} 
	)
	$('.fate').hover(function(){$('.gametu')[0].src = 'img/fate吾皇.webp'},function(){$('.gametu')[0].src = ''})
	$('.jianxia').hover(function(){$('.gametu')[0].src = 'img/剑侠世界.webp'},function(){$('.gametu')[0].src = ''})
	$('.shendai').hover(function(){$('.gametu')[0].src = 'img/神代梦华谭.webp'},function(){$('.gametu')[0].src = ''})
	$('.shaonv').hover(function(){$('.gametu')[0].src = 'img/少女咖啡枪.webp'},function(){$('.gametu')[0].src = ''})
	$('.ruguo').hover(function(){$('.gametu')[0].src = 'img/如果的世界.webp'},function(){$('.gametu')[0].src = ''})
	$('.huanyou').hover(function(){$('.gametu')[0].src = 'img/幻游猎人.webp'},function(){$('.gametu')[0].src = ''})
	$('.mofa').hover(function(){$('.gametu')[0].src = 'img/魔法少女小圆.webp'},function(){$('.gametu')[0].src = ''})
/*直播框*/	
	$('.zhiboBlur').hover(
		function(){$('.zhiboInner')[0].style.display = 'block'},
	    function(){$('.zhiboInner')[0].style.display = 'none'} 
	)
/*头像个人中心框*/	
    $('.headportrait').hover(
		function(){
			$('.touxiang img').animate({
				"width" : "63px",
				"height" : "63px",
				"z-index" : "99999",
				 "top" : "25px",
	             "left": "-18px"
			});
			$('#gerenzhongxin').stop(true).slideDown(1000); 
		},
	    function(){
				$('.touxiang img').animate({
				"width" : "23px",
				"height" : "23px",
				"z-index" : "99999",
				"top" : "0",
	            "left": "0"
			});
				$('#gerenzhongxin').stop(true).slideUp(1000);
			
			
			$('#gerenzhongxin').mouseleave(function(){
				$('#gerenzhongxin').stop(true).slideUp(1000);
			});
	    }
	)
/*消息加框*/    
	$('.xiaoxi').hover(
		function(){$('.xiaoxiInner')[0].style.display = 'block'},
	    function(){$('.xiaoxiInner')[0].style.display = 'none'} 
	)
/*动态加框*/	
	$('.trends').hover(
		function(){$('.dongtaiInner')[0].style.display = 'block'},
	    function(){$('.dongtaiInner')[0].style.display = 'none'} 
	)
	$('#dongtaishipin').click(function(){
		$('.dongtaiContent')[0].style.display = 'block';
		$('.zhiboContent')[0].style.display = 'none';
		$('.huayouContent')[0].style.display = 'none';
	})
	$('#dongtaizhibo').click(function(){
		$('.dongtaiContent')[0].style.display = 'none';
		$('.zhiboContent')[0].style.display = 'block';
		$('.huayouContent')[0].style.display = 'none';
	})
	$('#dongtaihuayou').click(function(){
		$('.dongtaiContent')[0].style.display = 'none';
		$('.zhiboContent')[0].style.display = 'none';
		$('.huayouContent')[0].style.display = 'block';
	})
/*收藏夹加框*/	
	$('.shoucang').hover(
		function(){$('.shoucangInner')[0].style.display = 'block'},
	    function(){$('.shoucangInner')[0].style.display = 'none'} 
	)
/*历史加框*/
    $('.lishi').hover(
		function(){$('.lishiInner')[0].style.display = 'block'},
	    function(){$('.lishiInner')[0].style.display = 'none'} 
	)
/*投稿加框*/	
	 $('.submit').hover(
		function(){$('.tougaoInner')[0].style.display = 'block'},
	    function(){$('.tougaoInner')[0].style.display = 'none'} 
	)
	 
/*主导航栏区域下拉框*/	 
	//动画
	$('#donghua').hover(
		function(){$('.donghuaInner')[0].style.display = 'block'},
	    function(){$('.donghuaInner')[0].style.display = 'none'} 
	)
	//番剧
	$('#fanju').hover(
		function(){$('.fanjuInner')[0].style.display = 'block'},
	    function(){$('.fanjuInner')[0].style.display = 'none'} 
	)
	//音乐
	$('#yinyue').hover(
		function(){$('.yinyueInner')[0].style.display = 'block'},
	    function(){$('.yinyueInner')[0].style.display = 'none'} 
	)
	//舞蹈
	$('#wudao').hover(
		function(){$('.wudaoInner')[0].style.display = 'block'},
	    function(){$('.wudaoInner')[0].style.display = 'none'} 
	)
	//游戏
	$('#youxi').hover(
		function(){$('.youxiInner')[0].style.display = 'block'},
	    function(){$('.youxiInner')[0].style.display = 'none'} 
	)
	//科技
	$('#keji').hover(
		function(){$('.kejiInner')[0].style.display = 'block'},
	    function(){$('.kejiInner')[0].style.display = 'none'} 
	)
	//生活
	$('#shenghuo').hover(
		function(){$('.shenghuoInner')[0].style.display = 'block'},
	    function(){$('.shenghuoInner')[0].style.display = 'none'} 
	)
	//鬼畜
	$('#guichu').hover(
		function(){$('.guichuInner')[0].style.display = 'block'},
	    function(){$('.guichuInner')[0].style.display = 'none'} 
	)
	//时尚
	$('#shishang').hover(
		function(){$('.shishangInner')[0].style.display = 'block'},
	    function(){$('.shishangInner')[0].style.display = 'none'} 
	)
	//娱乐
	$('#yule').hover(
		function(){$('.yuleInner')[0].style.display = 'block'},
	    function(){$('.yuleInner')[0].style.display = 'none'} 
	)
	//影视
	$('#yingshi').hover(
		function(){$('.yingshiInner')[0].style.display = 'block'},
	    function(){$('.yingshiInner')[0].style.display = 'none'} 
	)
	//直播
	$('.zhibo').hover(
		function(){$('.zhiboNavInner')[0].style.display = 'block'},
	    function(){$('.zhiboNavInner')[0].style.display = 'none'} 
	)
	//广场
	$('.guangchang').hover(
		function(){$('.guangchangInner')[0].style.display = 'block'},
	    function(){$('.guangchangInner')[0].style.display = 'none'} 
	)
	//手机端
	$('.shoujiduan').hover(
		function(){$('.shoujiduanInner')[0].style.display = 'block'},
	    function(){$('.shoujiduanInner')[0].style.display = 'none'} 
	)
	/*头部标语*/
	$('.headerImg').hover(
		function(){$('.headerNote')[0].style.display = 'block'},
	    function(){$('.headerNote')[0].style.display = 'none'} 
	)
/*header结束*/
/*Banner区*/
   /*轮播图*/
  var count = 0;
  function jiaodiantu(){
  	  $('.jiaodian0').addClass('on');
  	  setInterval(
  	  	function(){
  	  		if(count < 5){
  	  			 $('.jiaodiantu').css({"margin-left" : -440*count+"px"});
  	  			 $('.scrollBar li').removeClass('on');
  	  			 $('.jiaodian'+count).addClass('on');
  	  			count += 1  ;
  	  		}else{ count = 0 }
  	  	},
  	  	4000)/*setinterval结束*/
  }
  jiaodiantu();
function jiaodianClick(){
	$('.jiaodian0').click(
		function(){ 
			$('.scrollBar li').removeClass('on');
			$('.jiaodian0').addClass('on');
			$('.jiaodiantu').css({"margin-left" : 0+"px"});
			}
		)
	$('.jiaodian1').click(
		function(){ 
			$('.scrollBar li').removeClass('on');
			$('.jiaodian1').addClass('on');
			$('.jiaodiantu').css({"margin-left" : -440+"px"});
			}
		)
	$('.jiaodian2').click(
		function(){ 
			$('.scrollBar li').removeClass('on');
			$('.jiaodian2').addClass('on');
			$('.jiaodiantu').css({"margin-left" : -880+"px"});
			}
		)
	$('.jiaodian3').click(
		function(){ 
			$('.scrollBar li').removeClass('on');
			$('.jiaodian3').addClass('on');
			$('.jiaodiantu').css({"margin-left" : -1320+"px"});
			}
		)
	$('.jiaodian4').click(
		function(){ 
			$('.scrollBar li').removeClass('on');
			$('.jiaodian4').addClass('on');
			$('.jiaodiantu').css({"margin-left" : -1760+"px"});
			}
		)
}
jiaodianClick();
  /*焦点图更多*/
   $('.ImgBox').hover(
		function(){$('.jiaodiantuMore')[0].style.display = 'block'},
	    function(){$('.jiaodiantuMore')[0].style.display = 'none'} 
	)
     /*轮播图结束*/
/*Banner右侧区域*/  
   $('.threeDayHistory').hover(
		function(){$('.leftBar')[0].style.display = 'block';$('.rightBar')[0].style.display = 'block'},
	    function(){$('.leftBar')[0].style.display = 'none';$('.rightBar')[0].style.display = 'none'} 
	)
   $('.leftBar').click(function(){
   	       var leftBarText = $('.leftBar span').text();
   	       if(leftBarText == "昨日"){
   	       	$('.leftBar span').text('一周');
   	       	$('.rightBar span').text('三日');
   	       	$('.HistoryScrollBox').css({"margin-top" : "-238px"});
   	       }else if(leftBarText == "一周"){
   	       	$('.leftBar span').text('三日');
   	       	$('.rightBar span').text('昨日');
   	       	$('.HistoryScrollBox').css({"margin-top" : "-476px"});
   	       }else if(leftBarText == "三日"){
   	       	$('.leftBar span').text("昨日");
   	       	$('.rightBar span').text('一周');
   	       	$('.HistoryScrollBox').css({"margin-top" : ""});
   	       }
   })
    $('.rightBar').click(function(){
   	       var rightBarText = $('.rightBar span').text();
   	       if(rightBarText == "一周"){
   	       	$('.rightBar span').text('昨日');
   	       	$('.leftBar span').text('三日');
   	       	$('.HistoryScrollBox').css({"margin-top" : "-476px"});
   	       }else if(rightBarText == "昨日"){
   	       	$('.rightBar span').text('三日');
   	       	$('.leftBar span').text('一周');
   	       	$('.HistoryScrollBox').css({"margin-top" : "-238px"});
   	       }else if(rightBarText == "三日"){
   	       	$('.rightBar span').text("一周");
   	       	$('.leftBar span').text('昨日');
   	       	$('.HistoryScrollBox').css({"margin-top" : ""});
   	       }
   })
    /*翻页按钮*/
    $('.leftBar').bind("selectstart", function () { return false; });
    $('.rightBar').bind("selectstart", function () { return false; });
/*Banner区结束*/
/*动态更新时内部圆圈旋转函数*/
   $('.xindongtai').mouseenter(
   	  function(){
   	  	$('.xindongtaiIcon').css({
   	  	   "animation": "rotate .25s linear",
	       "-webkit-animation": "rotate .25s linear"
   	  	})
   	  }
   	)  
   $('.xindongtai').mouseleave(
      function(){
   		$('.xindongtaiIcon').css({
   	  	   "animation": "Drotate .25s linear",
	       "-webkit-animation": "Drotate .25s linear",
   	  	})
   	  }
    )
 /*推广区翻页效果*/  
   $('.zhibopaihang').click(function(){
   	   $('.container').css({"margin-top":""})
   	   $('.zhibopaihang').css({"color":"#00A1D6","text-decoration":"underline"})
   	   $('.guanzhudezhubo').css({"color":"#000","text-decoration":"none"})
   	   $('.weinituijian').css({"color":"#000","text-decoration":"none"})
   })
   $('.guanzhudezhubo').click(function(){
   	   $('.container').css({"margin-top":"-348px"})
   	   $('.zhibopaihang').css({"color":"#000","text-decoration":"none"})
   	   $('.guanzhudezhubo').css({"color":"#00a1d6","text-decoration":"underline"})
   	   $('.weinituijian').css({"color":"#000","text-decoration":"none"})
   	   
   })
   $('.weinituijian').click(function(){
   	   $('.container').css({"margin-top":"-696px"})
   	   $('.zhibopaihang').css({"color":"#000","text-decoration":"none"})
   	   $('.guanzhudezhubo').css({"color":"#000","text-decoration":"none"})
   	   $('.weinituijian').css({"color":"#00a1d6","text-decoration":"underline"})
   })
   /*有新动态与最新投稿*/
    $('.youxindongtai').click(function(){
    	$('.youxindongtai').css({"color":"#00A1D6","text-decoration":"underline"})
    	$('.zuixintougao2').css({"color":"#000","text-decoration":"none"})
    	$('.container2').css({"margin-top":""})
    })
     $('.zuixintougao2').click(function(){
    	$('.zuixintougao2').css({"color":"#00A1D6","text-decoration":"underline"})
    	$('.youxindongtai').css({"color":"#000","text-decoration":"none"})
    	$('.container2').css({"margin-top":"-348px"})
    })
    /*全部原创*/
    $('.quanbu').hover(
    	function(){
    		$('.quanbu').css({"color":"#00a1d6","text-decoration":"underline"})
    		$('.yuanchuang').css({"color":"#000","text-decoration":"none"})
    		$('.box1').css({"margin-top":""})
    	},
    	function(){
    		return null
    	}
    )
    $('.yuanchuang').hover(
    	function(){
    		$('.quanbu').css({"color":"#000","text-decoration":"none"})
    		$('.yuanchuang').css({"color":"#00a1d6","text-decoration":"underline"})
    		$('.box1').css({"margin-top":"-348px"})
    	},
    	function(){
    		return null
    	}
    )
    var num = 0;
    $('.yizhou').click(function(){
    	    var text2 = $('.yizhou').text();
    	    num += 1;
    	    if( num%2 != 0){
    	    	$('.yizhou').text("三日");
    	    	$('.sanri').text("一周");
    	    	$('.box1').css({"margin-top":"-348px"})
    	    }else{
    	    	$('.yizhou').text("一周");
    	    	$('.sanri').text("三日");/*血一样的教训。。先查代码，再查逻辑！！*/
    	    	$('.box1').css({"margin-top":""})
    	    }
    })
   /*番剧索引区*/
  $('.zuixin').click(function(){
  	$('.zuixin i:eq(0)').addClass('zuixinIcon');
  	$('.zuixin i:eq(1)').addClass('jianjian');
  	$('.zuixin').addClass('pick');
  	$('.weekpick li').not('.zuixin').find('i').attr('class','');
  	$('.weekpick li').not('.zuixin').removeClass('pick');
  	$('.videoBlock .today').css({"display": "block"});
  	$('.videoBlock ul').not('.today').css({"display":"none"});
  })
  $('.zhouyi').click(function(){
  	$('.zhouyi i:eq(0)').addClass('zhouyiIcon');
  	$('.zhouyi i:eq(1)').addClass('jianjian');
  	$('.zhouyi').addClass('pick');
  	$('.weekpick li').not('.zhouyi').find('i').attr('class','');
  	$('.weekpick li').not('.zhouyi').removeClass('pick');
  	$('.videoBlock .monday').css({"display": "block"});
  	$('.videoBlock ul').not('.monday').css({"display":"none"});
  })
  $('.zhouer').click(function(){
  	$('.zhouer i:eq(0)').addClass('zhouerIcon');
  	$('.zhouer i:eq(1)').addClass('jianjian');
  	$('.zhouer').addClass('pick');
  	$('.weekpick li').not('.zhouer').find('i').attr('class','');
  	$('.weekpick li').not('.zhouer').removeClass('pick');
  	$('.videoBlock .tuesday').css({"display": "block"});
  	$('.videoBlock ul').not('.tuesday').css({"display":"none"});
  })
  $('.zhousan').click(function(){
  	$('.zhousan i:eq(0)').addClass('zhousanIcon');
  	$('.zhousan i:eq(1)').addClass('jianjian');
  	$('.zhousan').addClass('pick');
  	$('.weekpick li').not('.zhousan').find('i').attr('class','');
  	$('.weekpick li').not('.zhousan').removeClass('pick');
  	$('.videoBlock .wednsday').css({"display": "block"});
  	$('.videoBlock ul').not('.wednsday').css({"display":"none"});
  })
  $('.zhousi').click(function(){
  	$('.zhousi i:eq(0)').addClass('zhousiIcon');
  	$('.zhousi i:eq(1)').addClass('jianjian');
  	$('.zhousi').addClass('pick');
  	$('.weekpick li').not('.zhousi').find('i').attr('class','');
  	$('.weekpick li').not('.zhousi').removeClass('pick');
  	$('.videoBlock .thursday').css({"display": "block"});
  	$('.videoBlock ul').not('.thursday').css({"display":"none"});
  })
  $('.zhouwu').click(function(){
  	$('.zhouwu i:eq(0)').addClass('zhouwuIcon');
  	$('.zhouwu i:eq(1)').addClass('jianjian');
  	$('.zhouwu').addClass('pick');
  	$('.weekpick li').not('.zhouwu').find('i').attr('class','');
  	$('.weekpick li').not('.zhouwu').removeClass('pick');
  	$('.videoBlock .friday').css({"display": "block"});
  	$('.videoBlock ul').not('.friday').css({"display":"none"});
  })
  $('.zhouliu').click(function(){
  	$('.zhouliu i:eq(0)').addClass('zhouliuIcon');
  	$('.zhouliu i:eq(1)').addClass('jianjian');
  	$('.zhouliu').addClass('pick');
  	$('.weekpick li').not('.zhouliu').find('i').attr('class','');
  	$('.weekpick li').not('.zhouliu').removeClass('pick');
  	$('.videoBlock .saturday').css({"display": "block"});
  	$('.videoBlock ul').not('.saturday').css({"display":"none"});
  })
  $('.zhouri').click(function(){
  	$('.zhouri i:eq(0)').addClass('zhouriIcon');
  	$('.zhouri i:eq(1)').addClass('jianjian');
  	$('.zhouri').addClass('pick');
  	$('.weekpick li').not('.zhouri').find('i').attr('class','');
  	$('.weekpick li').not('.zhouri').removeClass('pick');
  	$('.videoBlock .sunday').css({"display": "block"});
  	$('.videoBlock ul').not('.sunday').css({"display":"none"});
  })
  
  /*动画滑动区域*/
  $('.slideRight').hover(
  	   function(){
  	   	$('.slideRight').addClass('slideTo');
  	   	$('.slideLeft').removeClass('slideTo');
  	   	$('.slideBox').animate({"margin-left":"-260px"})
  	   },
      function(){
           return null      	
      }
  )
   $('.slideLeft').hover(
  	   function(){
  	   	$('.slideLeft').addClass('slideTo');
  	   	$('.slideRight').removeClass('slideTo');
  	   	$('.slideBox').animate({"margin-left":"0px"})
  	   },
      function(){
           return null      	
      }
  )
   /*番剧索引右侧区域自动轮播*/
   function autoSlide(){
   	   var num2 = 0;
   	   setInterval(
   	   	function(){
   	   		if(num2 < 2){
   	   			num2 += 1;
   	   		}else{
   	   			num2 = 0;
   	   		}
   	   		num2 && (function(){
   	   		       	$('.slideRight').addClass('slideTo')
  	   	            $('.slideLeft').removeClass('slideTo')
  	   	            $('.slideBox').animate({"margin-left":   "-260px"});
  	   	             }())
   	   	   !num2 && (function(){
   	   			   $('.slideLeft').addClass('slideTo')
  	   	           $('.slideRight').removeClass('slideTo')
  	   	           $('.slideBox').animate({"margin-left":  "0"});
  	   	            }())
   	   	},
   	   	3000
   	   )
   }
   autoSlide();
   /*自动轮播结束*/
  /*底部特效*/
 $('.shouji').hover(function(){
 	$('.tag1').css({"display":"block"})
 },function(){$('.tag1').css({"display":"none"})})
  $('.weibo').hover(function(){
 	$('.tag2').css({"display":"block"})
 },function(){$('.tag2').css({"display":"none"})})
   $('.weixin').hover(function(){
 	$('.tag3').css({"display":"block"})
 },function(){$('.tag3').css({"display":"none"})})


/*侧边导航条滚动特效*/
  window.onscroll = function(){
  	var distance = document.body.scrollTop || document.documentElement.scrollTop;
  	     if(  distance< 831 ){
  	     	console.log('a');
  	     	$('.aside li').removeClass('picked');
  	     }
  	     else if( distance<1246){
  	     	$('.aside li').removeClass('picked');
  	     	$('.zhiboS').addClass('picked');
  	     }
  	     else if( distance<1769){
  	     	$('.aside li').removeClass('picked');
  	     	$('.donghuaS').addClass('picked');
  	     }
  	     else if( distance<2185){
  	     	$('.aside li').removeClass('picked');
  	     	$('.wudaoS').addClass('picked');
  	     }
  	     else if( distance<2685){
  	     	$('.aside li').removeClass('picked');
  	     	$('.yinyueS').addClass('picked');
  	     }
  	     else if( distance<3110){
  	     	$('.aside li').removeClass('picked');
  	     	$('.kejiS').addClass('picked');
  	     }
  	     else if( distance<3995){
  	     	$('.aside li').removeClass('picked');
  	     	$('.fanjuS').addClass('picked');
  	     }
  	     else if( distance<4384){
  	     	$('.aside li').removeClass('picked');
  	     	$('.youxiS').addClass('picked');
  	     }
  	     else if( distance<5041){
  	     	$('.aside li').removeClass('picked');
  	     	$('.shenghuoS').addClass('picked');
  	     }
  	     else if( distance<5457){
  	     	$('.aside li').removeClass('picked');
  	     	$('.guichuS').addClass('picked');
  	     }
  	     else if( distance<5872){
  	     	$('.aside li').removeClass('picked');
  	     	$('.shishangS').addClass('picked');
  	     }
  	     else if( distance<6301){
  	     	$('.aside li').removeClass('picked');
  	     	$('.guanggaoS').addClass('picked');
  	     }
  	     else if( distance<6717){
  	     	$('.aside li').removeClass('picked');
  	     	$('.yuleS').addClass('picked');
  	     }
  	     else if( distance<7133){
  	     	$('.aside li').removeClass('picked');
  	     	$('.dianyingS').addClass('picked');
  	     }else{
  	     	$('.aside li').removeClass('picked');
  	     	$('.TVjuS').addClass('picked');
  	     }
  	     
         if( distance > 75){
         	$('.aside').css({"top":"0"})
         }else{
         	$('.aside').css({"top":"250px"})
         }
  }
/*底部的帧动画*/
  $('.lastBox').mouseenter(
  	   function(){
  	   	var num3 = 0;
  	   	setInterval(
  	   		function(){
  	   		if( num3 < 16 ){
   	   			$('.lastBox').css({
  	             "background-position":    -80*num3+"px"+" "+"0" 				
  	  			})
   	   			num3 += 1;
  	   		}else{
  	   			//$('.lastBox').addClass('animate');
  	   		}
  	   		}
  	   	,66)
  	   	setTimeout(function(){$('.floatBox').css({"display":"block"})},500)
  	   }
  )
  $('.lastBox').mouseleave(
  	function(){
      	$('.lastBox').removeClass('animate');
  		var num4 = 15;
  			setInterval(
  	   		function(){
  	   		if( num4 >= 0 ){
   	   			$('.lastBox').css({
  	             "background-position":    -80*num4+"px"+" "+"0" 				
  	  			})
   	   			num4 -= 1;
  	   		}
  	   		}
  	   	,66)
  		$('.floatBox').css({"display":"none"})
  	}
  )
  /*滚动条返回效果*/
  $('.fanhui').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:0},500);
  })
  /*滚动条定位特效*/
 $('.zhiboS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:831},500);
       $(this).addClass('picked');
  })
$('.donghuaS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:1246},500);
       $(this).addClass('picked');
  })
$('.wudaoS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:1769},500);
       $(this).addClass('picked');
  })
$('.yinyueS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:2185},500);
       $(this).addClass('picked');
  })
$('.kejiS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:2685},500);
       $(this).addClass('picked');
  })
$('.fanjuS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:3110},500);
       $(this).addClass('picked');
  })
$('.youxiS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:3955},500);
       $(this).addClass('picked');
  })
$('.shenghuoS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:4384},500);
       $(this).addClass('picked');
  })
$('.guichuS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:5041},500);
       $(this).addClass('picked');
  })
$('.shishangS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:5457},500);
       $(this).addClass('picked');
  })
$('.guanggaoS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:5872},500);
       $(this).addClass('picked');
  })
$('.yuleS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:6301},500);
       $(this).addClass('picked');
  })
$('.dianyingS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:6717},500);
       $(this).addClass('picked');
  })
$('.TVjuS').click(function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:7133},500);
       $(this).addClass('picked');
  })










})/*Jquery结束*/
 /*刷新时判断scrollTop的位置*/
 window.onload = function(){
  	 var distance = document.body.scrollTop || document.documentElement.scrollTop;	
         if( distance > 75){
         	$('.aside').css({"top":"0"})
         }else{
         	$('.aside').css({"top":"250px"})
         }
    
    $('.aside').css({
    	      	"left" :  "87%"
    	      })
    
    var WIDTH = document.body.offsetWidth;
    if( WIDTH < 1330){
    	      $('.aside').css({
    	      	"left" :  (WIDTH - 50)+"px"
    	      })
    	}
         
  }
/*刷新时判断距离左侧的位置*/ 
window.onresize = function(){
	var WIDTH = document.body.offsetWidth;
	var t = window.screen.availWidth;
    	if( WIDTH < 1330){
    	      $('.aside').css({
    	      	"left" :  (WIDTH - 50)+"px"
    	      })
    	}else{
    		$('.aside').css({
    	      	"left" :  "87%"
    	      })
    	}
}

