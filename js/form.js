var itemSelected, openSelect;

$('.select-button').click(function() {
  return openSelect($(this));
});

$('.select-button + ul > li').click(function() {
  return itemSelected($(this));
});

openSelect = function(item) {
  if (!item.hasClass("active")) {
    item.addClass("active");
    return item.next("ul").show();
  } else {
    item.removeClass("active");
    return item.next("ul").hide();
  }
};

itemSelected = function(item) {
  var sv;
  sv = item.text();
  item.parent().prev(".select").css("border", "3px solid red");
  return console.log(item.parent().hide().prev().removeClass("active").prev().val(sv));
};
