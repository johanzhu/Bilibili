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
	$('.fate').hover(function(){$('.gametu')[0].src = 'img/fate吾皇.png'},function(){$('.gametu')[0].src = ''})
	$('.jianxia').hover(function(){$('.gametu')[0].src = 'img/剑侠世界.png'},function(){$('.gametu')[0].src = ''})
	$('.shendai').hover(function(){$('.gametu')[0].src = 'img/神代梦华谭.png'},function(){$('.gametu')[0].src = ''})
	$('.shaonv').hover(function(){$('.gametu')[0].src = 'img/少女咖啡枪.png'},function(){$('.gametu')[0].src = ''})
	$('.ruguo').hover(function(){$('.gametu')[0].src = 'img/如果的世界.png'},function(){$('.gametu')[0].src = ''})
	$('.huanyou').hover(function(){$('.gametu')[0].src = 'img/幻游猎人.png'},function(){$('.gametu')[0].src = ''})
	$('.mofa').hover(function(){$('.gametu')[0].src = 'img/魔法少女小圆.png'},function(){$('.gametu')[0].src = ''})
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
    


	
})/*JS结束*/
