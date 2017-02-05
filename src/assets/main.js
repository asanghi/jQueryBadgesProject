$(function() {

  $.ajax({url: "https://www.codeschool.com/users/asanghi.json",
          method: "GET",
          dataType: "jsonp",
          success: function(response){
            $.each(response.courses.completed,function(index){
              $("#badges").append("<div class='course'><h3>"+this.title+"</h3><img src='"+this.badge+"'/><a target='_blank' href='"+this.url+"' class='btn btn-primary'>See Course</a></div>");
            });
          }
        });
});
