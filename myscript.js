
function searchItem() {
  $.ajax({
    url: "http://157.230.17.132:3020/todos/",
    method: "GET",
    success: function(data) {
      printItems(data);

    },
    error: function() {
      alert("errore nel caricamento attività")
    }
  });
}
function printItems(items) {
  var target = $("#item_wrap");
  var source = $("#item-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
  console.log(items);
    var context = {
      id: item.id,
      text: item.text
    }
    console.log(context);
    var html = template(context);
    target.append(html);
  }
}
function itemCreate() {
  var input = $("#text_item");
  var text = input.val();

  $.ajax ({
    url: "http://157.230.17.132:3020/todos/",
    method: "POST",
    data: {
      text: text
    },
    success: function() {
      searchItem();
    },
    error: function() {
      alert("non posso creare")
    }
  });
}
function init() {
  console.log("siamo qui");
  searchItem();
  $("#new_item").click(itemCreate);
}
$(document).ready(init);
