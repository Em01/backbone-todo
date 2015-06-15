$(document).ready(function(){
	var todoItems = new TodoItems([
		new TodoItem({ description: "TodoItem 1" }),
		new TodoItem({ description: "TodoItem 2" })
		]);
	//collection

	var todoItemsView = new TodoItemsView({ model: todoItems });
	//passed to a view
	$("body").append(todoItemsView.render().$el);
	//render
});