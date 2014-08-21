$(document).ready(function () {
  toDo.init();
////end ready
});

var toDo = {
  init: function () {
    this.initStyling();
    this.initEvents();
  },

  initStyling: function () {
    toDo.getTasks();
  },

  initEvents: function () {

    $("form").on("submit", function (event) {
      event.preventDefault();
      var newTask = {
        taskTitle: $(".taskTitle").val(),
      };
      toDo.createTask(newTask);
    });

    $(".container").on("click", ".delete", function (event) {
      var taskId = $(this).parent('p').closest('div').data("taskid");
      console.log(taskId);
      toDo.deleteTask(taskId);
    });
      ////LINETHROUGH WHEN CLICK CHECK
    $(".container").on("click", ".check", function (event) {
      console.log("click check")
      $(this).parent('p').closest('div').toggleClass("lineThru");
    });
        ////on dblClick, hide span and show input
    $(".container").on("dblclick", ".taskbox", function (event) {
      console.log("dbl click check")
      $(this).children('p').children('.taskEdit').show();
      $(this).children('p').children('span').hide()
    });

    },

  render: function (template, data, $element) {
    var html = _.template(template, data);
    $element.html(html);
  },

  url:"http://tiy-fee-rest.herokuapp.com/collections/charlesdata",
  getTasks: function () {

    $.ajax ({
      url: toDo.url,
      type:"GET",
      success: function (response) {
      var tasks = window.tasks = response;

        console.log("getting?")
        toDo.render(tasksTmpl, tasks, $("#placeHere"));
      }

    });


  },

  createTask: function (newTask) {

    $.ajax ({
      url: toDo.url,
      data: newTask,
      type: "POST",
      success: function (response) {
        console.log("Posted")
        toDo.getTasks();
      }
    });
  },

  deleteTask: function (taskId) {
    $.ajax ({
      url: toDo.url + "/" + taskId,
      type: "DELETE",
      success: function () {
        toDo.getTasks();
      }
    })
  },

  updatePost: function (taskId, updatedTask) {

    $.ajax({
      url: myBlog.url + "/" + taskId,
      type: "PUT",
      data: updatedTask,
      success: function (response) {
        console.log(response);
        toDo.getTasks();
      }
    });

  }


////end var toDo
}
