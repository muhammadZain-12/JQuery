console.log($)
$(document).ready(function () {
  $('div #expandDiv').hide()

  $('#extendText').click(function () {
    $('#extendedDiv').fadeOut(1000)
    $('#expandDiv').fadeIn(1500)
  })

  $('#expandText').click(function () {
    $('#expandDiv').fadeOut(1000)
    $('#extendedDiv').fadeIn(2000)
  })

  // $("#toggleButton").click(function(){
  //     console.log("buttonClicked")
  //     $("#togglePara").fadeToggle(1000)
  // })

  $('#toggleButton').click(function () {
    $('#togglePara').css({ opacity: 1 })
    $('#togglePara').fadeTo(2000, 0.4)
  })

  $('#togglePara').mouseenter(function () {
    console.log('hello')
    $('#togglePara').css({ opacity: 1 })
    $('#togglePara').fadeTo(1000, 1)
  })

  $('#slideButton').click(function () {
    $('#slideHead').slideToggle(1000)
  })

  $('#animatePara').css({ opacity: 0.2 })

  $('#animateButtonHide').hide()

  $('#animateButton').click(function () {
    $('#animatePara').animate(
      { opacity: 1, marginTop: 20, marginLeft: 100 },
      1000,
    )
    $('#animatePara').css({ backgroundColor: 'orange', color: 'white' })
    $('#animateButtonHide').show()
    $('#animateButton').hide()
  })

  $('#animateButtonHide').click(function () {
    $('#animatePara').animate(
      { opacity: 0.2, marginTop: 0, marginLeft: 0 },
      1000,
    )
    $('#animatePara').css({ backgroundColor: 'white', color: 'black' })

    $('#animateButtonHide').hide()
    $('#animateButton').show()
  })

  $('.show').click(function () {
    if ($('#helloToggle').hasClass('show')) {
      $('#classPara')
        .text(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quo ducimus praesentium architecto ea minus       dicta  accusantium ratione itaque nisi et at in veniam fugit, debitis id quibusdam, sint illo.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tempore consectetur optio saepe inventore commodi labore! Veniam cumque animi veritatis consequuntur fugit magnam laudantium ipsum quasi expedita. Quibusdam, expedita provident.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet non rem nisi, praesentium ratione vero vel atque provident molestiae error necessitatibus iste nostrum officiis sed beatae fugiat ut nobis.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nam voluptas quia aut totam consectetur veniam pariatur, assumenda maxime nobis, facere sunt, amet dignissimos quisquam rerum tempore? Esse, saepe aliquid.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ipsum impedit atque numquam. Provident sunt omnis nihil quae recusandae! Quod ducimus a hic. Modi voluptatem laudantium neque iure, quos aliquid?`)

      $('#helloToggle').text('Hide Button')
      $('#helloToggle').addClass('hide')
      $('#helloToggle').removeClass('show')
    } else {
      $('#classPara').text(
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quo ducimus praesentium architecto ea minus       dicta  accusantium ratione itaque nisi et at in veniam fugit, debitis id quibusdam.....`,
      )

      $('#helloToggle').text('Show Button')
      $('#helloToggle').addClass('show')
      $('#helloToggle').removeClass('hide')
    }
  })

  //   $("#listButton").click(function(){
  //     console.log("hello")
  //     $(".list:nth-child(4)").hide()
  //   })

  //   $("#listButton").click(function(){
  //     console.log("hello")
  //     $("#listDiv #unorderList1 .list:nth-child(4)").hide()
  //   })

  //   $("#listButton").click(function(){

  //     $("#listDiv ul li:nth-child(2)").hide()
  //   })

  //   $("#listButton").click(function(){
  //     //Work as index number
  //     $(".list:even").hide()

  // })

  // $("#listButton").click(function(){
  //     //Work as index number
  //     $(".list:odd").hide()
  // })

  //Jquery Events

  //Mouse Events

  //click
  //dblclick
  //mouseenter
  //mouseleave

  //Keyboard Events

  //keypress
  //keydown
  //keyup

  //Form Events

  //submit
  //change
  //focus
  //blur

  //Document / Windows Events

  //load
  //resize
  //scroll
  //unload

  //click

  // $("#listButton").click(function(){
  //     $("li:first").fadeToggle(2000)
  // })

  //Double Click

  // $("#listButton").dblclick(function(){
  //     console.log("myworld")
  //     $("li:nth-child(2)").fadeToggle()
  // })

  //mouse Enter

  // $("li").mouseenter(function(){
  //     console.log("mouseEntered")
  //     $(this).hide()
  // })

  //Mouse Leave

  // $("li").mouseleave(function(){
  //     console.log("mouseEntered")
  //     $(this).show()
  // })

  //Mouse Down

  // $("li").mousedown(function(){
  //     console.log("mouse down")
  //     $(this).hide()
  // })

  // //mouse Up

  // $("li").mouseup(function(){
  //     console.log("mouse up")
  //     $(this).show(2000)
  // })

  //mouse hover
  //it takes two function first it execute mouse enter and then mouse leave

  // $("li").hover(function(){
  //     $(this).hide()
  // },
  //     function(){
  //         $(this).show()
  //     }
  // )

  //Form Events

  //focus

//   $('#input1').focus(function () {
//     $('#input1').css({ backgroundColor: 'black', color: 'white' })
//   })

//   //blur

//   $('#input1').blur(function () {
//     $('#input1').css({ backgroundColor: 'white', color: 'black' })
//   })


//on method

//   $('#image1').on({
//     click: function () {
//       alert('You clicked the image')
//     },
//     mouseenter: function () {
//       document
//         .getElementById('image1')
//         .setAttribute('src', './images/logoTodo.jpg')
//     },

//     mouseleave: function () {
//       document
//         .getElementById('image1')
//         .setAttribute('src', './images/todoImage.jpg')
//     },
//   })




//stop effects



$("#animateParas").hide()

$("#start").click(function(){
    $("#animateParas").slideToggle(5000)
})

$("#end").click(function(){
    $("#animateParas").stop()
})




//Get 

//text  //can get text

// $("#animatePara").text()


//html

// $("#animatePara").html()

//val  for forms

// $("#input1").val()


//attr

// $("#image1").attr("src")

//Set


//setText

// $("#animateParas").text("Hello World")


//setHtmlMarkUp

// $("#animateParas").html("<h1>Hello World</h1>")

//setInputVal

// $("#input1").val("Nothing is easy")



//setAttribute

$("#image1").on({
    click:function(){
        alert("You clicked on picture")    
    },
    mouseenter:function(){
        $("#image1").attr("src","./images/logoTodo.jpg")
    },
    mouseleave:function(){
        
        $("#image1").attr("src","./images/todoImage.jpg")
    }
})


//ADD

//append()

//add content at the end of the selected element


$("#addPara").append(" My father name is Shakeel")


//prepend()

//add content at the beginning of the selected element

$("#addPara").prepend("Hello ")


let text1 = $("<p></p>").text("Hello World")  //create element through jquery
let text2 = $("<h1></h1>").text("Hello World Heading")


$("#addDiv").prepend(text1,text2)


//after()

$("#addPara").after("<h1 id='addInPara' >What do you want to do</h1>")


//before()


$("#addInPara").before("<h4>I have added myself</h4>")



//REMOVE
//EMPTY

// remove element

// $("#ul li:nth-child(1)").remove()

//remove child of selected element

// $("#ul").empty()


//filter the element to be removed

// $("li").remove("#list1")
$("li").remove("#list1,#list2")


//CLASSES

//addClass()
//removeClass()
//toggleClass()


//ADD CLASS


//Toggle Class

$("#blueButton").click(function(){
    console.log("blue")
    $("#classHead").removeClass("orange green")
    $("#classHead").toggleClass("blue")
})

//ADD & REMOVE CLASS

$("#greenButton").click(function(){
    $("#classHead").removeClass("orange blue")
    console.log("green")
    $("#classHead").addClass("green")
})

//ADD & REMOVE CLASS

$("#orangeButton").click(function(){
    $("#classHead").removeClass("blue green")
    console.log("orange")
    $("#classHead").addClass("orange")
})



$("p").css({
    "background-color":"yellow",
    "color" : "red",
    "font-size":"20px"
})


//Dimension

//set Height & Width of the selected element

// $("p").width("100%")
// $("div").height("200")
// $("div").width("800")



//div element


//Height

//$("div").height() (height of element without padding,border,margin)
//$("div").innerHeight() (height of element with padding excluding border & margin)
//$("div").outerHeight() (height of element with padding & border excluding margin)
//$("div").outerHeight(true) (height of element with padding,border,margin)

//width

//$("div").width() (width of element without padding,border,margin)
//$("div").innerWidth() (width of element with padding excluding border & margin)
//$("div").outerWidth() (width of element with padding & border excluding margin)
//$("div").outerWidth(true) (width of element with padding,border,margin)



//Ancestors


//.parent() return the direct parent element

// $(".li").parent().attr("class","orange")



//parents() return the all parents of the selected elements

// $(".li").parents("div").attr("class","myDiv")
// $(".li").parents("#inner-container").attr("class","blue")

//parentsUntill return the all ancestors element between two elements

// $(".li").parentsUntil("#container").attr("class","blue")


//DESCENDANTS

//children    //return the all child of selected element


// $("#uoList1").children().text("Hello World")
// $("#uoList1").children("#hello").text("Hello")


//Find


$("#container1").find("li").text("I dont want you")
$("#container1").find("li").css("color","white")
$("#container1").find("div").attr("class","blue")



//Sibling

//Return all siblings of the selected elements

// $("#hello").siblings().text("You are my siblings")
// $("#hello").siblings("#hello1").text("You are my first siblings")

//next()


//Return the next sibling of the selected element

// $("#hello2").next().css({"color":"pink","fontSize":"25px"})
// $("#hello1").next().css({"color":"lightblue","fontSize":"25px"})


//nextAll

//Return the all next siblings of the selected element


// $("#hello1").nextAll().addClass("blue")


//nextUntil

//Return the all sibling between selected element and the until element


// $("#hello").nextUntil("#hello3").addClass("blue")


//prev
//Return the previous sibling of the selected element

// $("#hello3").prev().css("fontSize","20px")

//prevAll
//Return the all previous siblings of the selected elements

// $("#hello3").prevAll().css("fontSize","20px")

//PrevUntil
//Return the sibling between selected element and until element

// $("#hello3").prevUntil("#hello").css("fontSize","20px")


//first()

//   $(".li").first().css({"fontSize":"30px"})
  
  
//last()

//   $(".li").last().css({"fontSize":"30px"})

//eq()

// $(".li").eq(1).css({"color":"black","fontSize":"30px"})

//filter

 $("li").filter("#hello").fadeTo(2000,0.5)









})













































































