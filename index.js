


$(".btn-outline-info").click(function(){
    $(".btn-outline-info").html("");
    $(".btn-outline-info").addClass("spinner-border text-light");
  setTimeout(function(){
    $(".btn-outline-info").removeClass("spinner-border text-light");
    $(".btn-outline-info").html("Safety measures");
    $(".para1").html("<ul class=\"list-group\"><li class=\"list-group-item\">👉 put seat-belt while driving.</li><li class=\"list-group-item\">👉 don't take alcohol while driving.</li><li class=\"list-group-item\">👉 take enough rest before driving.</li></ul>");
    $("#measures").toggle(".para1");
  //  $(".para1").html("<ul class=\"list-group\"><li class=\"list-group-item\">👉 put sheat-belt while driving.</li><li class=\"list-group-item\">👉 don't take alcohol while driving.</li><li class=\"list-group-item\">👉 take enough rest before driving.</li></ul>");
      },2000);

});

$(".submit").click(function()
{
  $(".fa-check-circle").css("color","#79d70f");
});
$(".reset").click(function()
{
  $(".fa-check-circle").css("color","#fff");
});


$(".selection").click(function(){
  var id=this.id;
  document.getElementById("txtSearch").value = id;
});
