// 创建一个匿名函数
(function(win,doc,$){
	// 匿名函数内创建一个对象
	function CusScrollBar(options){
		this._init(options);
	}

	$.extend(CusScrollBar.prototype,{
		_init:function(){
			console.log("test1");
		}
	})

	win.CusScrollBar=CusScrollBar;

})(window,document,jQuery);

new CusScrollBar();
