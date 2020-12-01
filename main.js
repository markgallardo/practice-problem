$.ajax({
  method:"GET",
  url:"https://opentdb.com/api.php?amount=1&difficulty=easy",

  success: genrateData,
  error: function(){
    console.log("error")}
})

function genrateData(data){
  console.log(data)
  }


$.ajax({
  method: "GET",
  url: "https://rickandmortyapi.com/api/character/?name=rick&status=alive",
  success: genrateData,
  error: function () {
    console.log("error")
  }
})

function genrateData(data) {
  console.log(data)
}
