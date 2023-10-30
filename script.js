function totalAmount() {
  var studentName = document.getElementById("nameBox").value;

  var coursesTaken = parseInt(document.getElementById("courses").value);

  var perCourseFee = coursesTaken * 18000;

  //   document.getElementById("Output").innerText =
  //     "Your Total Bill :" + perCourseFee;
  document.getElementById(
    "Output"
  ).innerHTML = `Student Name: <span class="resultColor"> ${studentName} </span>  <br> <br>      Total courses taken: <span class="resultColor"> ${coursesTaken} </span> <br>
                 <h4> Total Payable Amount: <span class="resultColor"> ${perCourseFee} </span></h4>`;
}
