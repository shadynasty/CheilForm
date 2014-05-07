$('.select-button').click ->
  openSelect($(this))

$('.select-button + ul > li').click ->
  itemSelected($(this))

openSelect = (item) ->
  if not item.hasClass("active")
    item.addClass("active")
    item.next("ul").show()
  else
    item.removeClass("active")
    item.next("ul").hide()

itemSelected = (item) ->
  sv = item.text()
  item.parent().prev(".select").css("border", "3px solid red")
  item.parent().hide().prev().removeClass("active").prev().val(sv);


formSubmit = ->
  console.log "LOG"
  console.log $('#demo_box_1').prop("checked")
  false
