var tasksTmpl = [
  "<% _.each(tasks, function(element, index, list) { %>",
  ///creates div for each task

  "<div data-taskid=\"<%= element._id %>\" class=\"taskbox\">",

  "<p><img src=\"images/check.png\" class=\"check\"><span><%= element.taskTitle %></span><input type=\"text\" style=\"display:none;\" class=\"taskEdit\" name=\"taskTitle\" placeholder=\"<%= element.taskTitle%>\"><img src=\"images/delete.png\" class=\"delete\"></p>",



  ///ends div for each task
  "</div>",
"<% }); %>"
].join("\n");
