var mDataArr = [];
var mSelectId = 0;
var itemLiHtml = _.template($('#template').html());

var mCurrentType = '#/';
var mAll = '#/';
var mActive = '#/active';
var mCompleted = '#/completed';
/*
guodong.liu
	01-todo
*/
$(function(){
	$todoList = $('.todo-list');
	$totalNum = $('.todo-count').children();
	$filters = $('.filters li a');

	onDataToView();
	$('.new-todo').on('keydown',function(e){
		var $this = $(this);

		if (e.keyCode === 13) {
			//拿到输入的内容
			var val = $this.val();

			if (val.trim().length == 0) {
				return;
			}

			mDataArr.push({
				title:val,	
				id: mSelectId++,
				completed:false,
				editing:false
			});
			$this.val('');
			onDataToView();
		}
	});

	$todoList.on('click','li',function(e){
		var $this = $(this);
		
		$this.siblings().removeClass('editing');
		$this.addClass('editing');

		$this.find('.edit').val(getSelectData($this).title);
	});

	$todoList.on('keydown','.edit',function(e){
		var $this = $(this);

		if (e.keyCode === 13) {
			var todoData = getSelectData($this.parents('li'));
			todoData.title = $this.val();
			onDataToView();
		}
	});

	$todoList.on('change','.toggle',function(e){

		var $this = $(this);

		var todoData = getSelectData($this.parents('li'));
		
		todoData.completed = $this.prop('checked');

		onDataToView();

	});

	$todoList.on('click','.destroy',function(e){


		var $this = $(this);

		mDataArr = mDataArr.filter(function(todoData){
			return $this.parents('li').attr('todo-id') != todoData.id;
		});

		onDataToView();

	});

	$filters.on('click',function(e){
		// alert('1');
		var $this = $(this);
		$filters.removeClass('selected');
		$this.addClass('selected');

		mCurrentType = $this.attr('href');

		onDataToView();
		
	});

	$('.clear-completed').on('click',function(e){
		mDataArr = mDataArr.filter(function(todoData){
			return !todoData.completed;
		});
		onDataToView();
	});

});


function onDataToView(){
	var dataArr = [];
	if (mCurrentType == mAll) {
		dataArr = mDataArr;
	}else if (mCurrentType == mActive) {
		dataArr = getActionDatas();
	}else if (mCurrentType == mCompleted) {
		dataArr = getCompleted();
	}
	
	var $html = '';
	dataArr.forEach(function(todoData){
		
		$html += itemLiHtml({
			todo:todoData
		});
	});
	// filter, find, map, forEach
	// find 找第一个返回true的

	$todoList.html($html);

	$totalNum.text(dataArr.length);


}


function getSelectData(li){
	return mDataArr.find(function(todoData){
			return todoData.id == li.attr('todo-id');
		});
}

function getActionDatas(){
	return mDataArr.filter(function(todoData){
				return !todoData.completed;
			});
}

function getCompleted() {
	return mDataArr.filter(function(todoData){
				return todoData.completed;
			});
}



