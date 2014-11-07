define(function(require, exports, module){
  // var enlarge = require('enlarge/enlarge');
require('enlarge/enlarge');

$('.li').click(function(){
	$(this).enlarge({
		width:800,
		height:600,
	});	
});

});