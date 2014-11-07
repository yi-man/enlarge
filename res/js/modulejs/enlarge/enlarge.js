//start_x,start_y起始坐标位置,end_x,ey最后的最表位置,duration持续时间,step分多少步完成,end_width,eh目标矩形宽和高
define(function(require, exports, module) {

	// var popup = function(start_x, start_y, end_x, end_y, duration, step, end_width, end_height) {
	// 	var step_x = (end_x - start_x) / step,
	// 		step_y = (end_y - start_y) / step,
	// 		now_x = start_x,
	// 		now_y = start_y,
	// 		now_w = 0,
	// 		now_h = 0,
	// 		i = 0,
	// 		every_w = end_width / step,
	// 		every_h = end_height / step,
	// 		time = duration / step;

	// 	var c = setInterval(function() {
	// 		if (i < step) {
	// 			now_x = now_x + step_x;
	// 			now_y = now_y + step_y;
	// 			now_h += (end_height / step);
	// 			now_w += (end_width / step);
	// 			$('#pre').css({
	// 				'top': now_y,
	// 				'left': now_x,
	// 				'width': now_w,
	// 				'height': now_h
	// 			});
	// 			i++;
	// 		} else {
	// 			clearInterval(c);
	// 		}
	// 	}, time);
	// };

	// exports.popup = popup;

	(function($){
		var opt ={
			duration:200,
			width:400,
			height:300
		};

		function createBox(){
			if($('#xxoverlay').length===0){
				var overlay = document.createElement('div');
				overlay.setAttribute("id","xxoverlay");
				var xxbox = document.createElement('div');
				xxbox.setAttribute("id","xxbox");
				overlay.appendChild(xxbox);
				$("body").append(overlay);
			}
		}

		$.fn.enlarge = function(options){
			var $this = this;		
			
			options = options || {};
			$.extend(opt,options);

			var window_h = window.innerHeight;
			var window_w = window.innerWidth;

			var height=$this.height();
			var width=$this.width();
			var start_x=$this.offset().left+width/2;
			var start_y=$this.offset().top+height/2;
			var end_x=(window_w-opt.width)/2;
			var end_y=100;
			var step=20;

			var step_x = (end_x - start_x) / step,
			step_y = (end_y - start_y) / step,
			now_x = start_x,
			now_y = start_y,
			now_w = 0,
			now_h = 0,
			i = 0,
			every_w = opt.width / step,
			every_h = opt.height / step,
			time = opt.duration / step;

			createBox();

			var c = setInterval(function() {
				if (i < step) {
					now_x = now_x + step_x;
					now_y = now_y + step_y;
					now_h += every_h;
					now_w += every_w;
					$('#xxbox').css({
						'top': now_y,
						'left': now_x,
						'width': now_w,
						'height': now_h
					});
					i++;
				} else {
					clearInterval(c);
				}
			}, time);
		};
	})(jQuery);
});