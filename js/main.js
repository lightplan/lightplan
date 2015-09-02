//(function ($) {
//  if ($.browser.mozilla) { //判断是否为火狐浏览器，IE6/7/8会报错
//      $.extend($.fx.step, {
//          backgroundPosition: function (fx) {
//              if (fx.state === 0 && typeof fx.end == 'string') {
//                  var start = $.curCSS(fx.elem, 'backgroundPosition');
//                  start = toArray(start);
//                  fx.start = [start[0], start[2]];
//                  var end = toArray(fx.end);
//                  fx.end = [end[0], end[2]];
//                  fx.unit = [end[1], end[3]];
//              }
//              var nowPosX = [];
//              nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
//              nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
//              fx.elem.style.backgroundPosition = nowPosX[0] + ' ' + nowPosX[1];
//
//              function toArray(strg) {
//                  strg = strg.replace(/left|top/g, '0px');
//                  strg = strg.replace(/right|bottom/g, '100%');
//                  strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
//                  var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
//                  return [parseFloat(res[1], 10), res[2], parseFloat(res[3], 10), res[4]];
//              }
//          }
//      });
//  }
//})(jQuery);//mozilla backgroundposition solution

$(function() {
	var pics = $("#h_wrap>li");
	var dots = $("#select>li");
	var index = 0;
	var timer = null;

	dots.on('mouseover', function() {
		clearInterval(timer);
		var _this = $(this);
		var data_index = _this.attr("data-index");
		change(data_index);
	});

	function change(curindex) {
		if (curindex == 1) {
			$("#wdt").text('O2O免费接入 | 成为防刷大联盟成员 | 订单、交易量获顶级VC认可').css('font-size', '20px');
		} else {
			$("#wdt").text('立足大数据 引领反欺诈').css('font-size', '30px');
		};
		pics.eq(curindex).siblings().stop().animate({
			opacity: 0
		}, 1000, function() {
			$(this).hide();
		});
		pics.eq(curindex).stop().show().animate({
			opacity: 1
		}, 1000);
		dots.removeClass('on').eq(curindex).addClass("on");
		index = curindex;
	};
	//banner 切换动作
	function count() {
			index++;
			if (index >= 5) {
				index = 0;
			};
			change(index);
		}
		//计数

	pics.mouseover(function() {
		clearInterval(timer);
	});
	//鼠标移入停止自动轮播
	pics.mouseout(function() {
		timer = setInterval(count, 4500);
	})
	pics.eq(0).stop().show().css({
		opacity: 1
	});
	timer = setInterval(count, 4500);

	//小屏下不跳转
	var screenW = document.body.clientWidth;
	if (screenW >= 320 && screenW <= 800) {
		clearInterval(timer);
		$("#wdt").text('立足大数据 引领反欺诈').css('font-size', '24px');
	}
	// 图片轮播动画结束
})

$(function() {
	var pin = function() {
		$("#pin").pin({
			containerSelector: ".lianzai",
			minWidth: 940,
			padding: {
				top: -36
			}
		})
	}
	$(window).scroll(function() {
		pin();
	});
	$(window).resize(function() {
		pin();
	});
})