$(function(){



  $("#submit").click(function(event) {
    const COUNTTO = $("#countTo").val();
    const COUNTBY = $("#countBy").val();
    if (COUNTTO === "" || COUNTBY === "") {
      $("#answer").empty();
      $("#notify").text("Please enter values")
    } else if (Number(COUNTTO) === 0 || Number(COUNTTO) === undefined || Number(COUNTBY) === 0 || Number(COUNTBY) === undefined) {
      $("#answer").empty();
      $("#notify").text("Please enter non zero values")
    } else {
      $("#answer").empty();
      let countTo = Math.abs(Number($("#countTo").val()));
      let countBy = Math.abs(Number($("#countBy").val()));
      for(let index = 0; index <= countTo; index += countBy) {
          $("#answer").append(`<li>${index}</li>`);
      };
    };
    event.preventDefault();
  });
});
