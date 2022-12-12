const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const date = require(__dirname + "/date.js")
//Item is the mongoose model
const Item = require(__dirname + "/model/toDoSchema.js")

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

// let task = []
// let workTask = []

mongoose.connect("mongodb+srv://abhishekh:Business123@clustertodo.4hus5ks.mongodb.net/toDo_V2", { useNewUrlParser: true })

// mongoose.connect("mongodb+srv://abhishekh:Business123@clustertodo.4hus5ks.mongodb.net/?retryWrites=true&w=majority/toDo_V2", { useNewUrlParser: true })

// mongoose.connect("mongodb://localhost:27017/toDo_V2", { useNewUrlParser: true })

//adding data
// const t1 = new Item({
//   tName: "Mechanics"
// })
// const t2 = new Item({
//   tName: "IT"
// })
// const t3 = new Item({
//   tName: "Web Development"
// })

// const iniItems = [t1, t2, t3]



app.get("/", function (req, res) {
  let day = date.getDate();
  Item.find({}, function (err, results) {

    if (results.length === 0) {
      res.render("list", { kindOfDay: day, newTask: results })
    }
    else {
      console.log("g render");
      res.render("list", { kindOfDay: day, newTask: results })
    }
    // res.redirect("/")

  })
})
// app.get("/work", function (req, res) {

//   let day = date.getDate();
//   res.render("work", { kindOfDay: day, newTask: workTask })

// })

app.post("/", function (req, res) {
  let day = date.getDate();

  const itemName = req.body.taskName
  console.log(req.body.taskName);

  const item = new Item({ tName: itemName })
  item.save()

  res.redirect("/")
  // Item.find({}, function (err, results) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     console.log("found");
  //     if (results.length === 0) {
  //       res.render("list", { kindOfDay: day, newTask: results })
  //       console.log("p render");
  //     }
  //     else {
  //       // res.redirect("/")
  //       res.render("list", { kindOfDay: day, newTask: results })
  //       res.redirect("/")
  //       console.log("p redirect ren");
  //     }
  //   }

})

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox.trim()
  Item.findByIdAndRemove(checkedItemId, function (err) {
    if (err) {
      console.log(err)
    }
    else {
      console.log("deleted successfully");
    }
  })

  res.redirect("/")
})

// if (req.body.button === "work") {
//   workTask.push(itemName)

//   res.redirect("/work")
// }
// else if (req.body.button === "list") {
//   task.push(itemName)

//   res.redirect("/")
//   // console.log(req.body);
// }
// })


app.listen(3000, function () {
  console.log("Server started on port 3000");

})


