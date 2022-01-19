

$(document).ready(function () {

  $("a").click(function () {
  var movimiento = this.hash

  $ ("html, body").animate(
  {
    scrollTop: $(movimiento).offset().top -70
  },
1500
)

  })

  $('.card-title').click(function () {
  $('.card-text').toggle();
  })

  })



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})





