//API

$(document).ready(function() {
  $(".loader").hide();
  $(".posts").on("change", function(event) {
    $("ul").empty();
    $(".loader").show();
    $change = $(this).val();
    $.getJSON(
      `https://api.nytimes.com/svc/topstories/v2/${$change}.json?api-key=YTMJtmBtB00ippV8QvL3cjmtA9aRZvIf`
    ).done(function(data) {
      let counter = 0;

      $.each(data.results, function(key, value) {
        console.log(value);
        let multimedia = value.multimedia;
        if (multimedia.length === 0) {
          return;
        }
        let description = value.abstract;
        let articleURL = value.url;
        $.each(multimedia, (key, value) => {
          if (value.format === "superJumbo") {
            let imageURL = value.url;
            let listItem = `<li><a href = "${articleURL}" target="_blank">
                    <img src = "${imageURL}"><p>${description}</p></a></li>`;

            $("ul").append(listItem);
            $("footer").css({"position":"relative", "padding-bottom": "30px"});
            // $(".posts").css("margin-bottom", "60px")
            $("header").css("padding-top", "35px")

            $(".loader").hide();
          } else {
            return;
          }
        });
        counter++;

        return counter !== 12;


    })
// .fail (function() {
//             $("ul").append(`<li>Sorry, there was a problem, please try again.</li>`)
//       });
    });
  });
});










//  $(function() {
//     $(".loader").hide();
//      $("select").on("change", function() {
//         $(".main").empty();
//         $(".loader").show();
//          $change = ($(this).val())
//         $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$change}.json?api-key=YTMJtmBtB00ippV8QvL3cjmtA9aRZvIf`)
//        .done(function(data) {
// console.log(data.results[0].multimedia[4].url)
// let counter = 0;
// $.each(data.results, function(key, value) {
//     console.log(value)
//     let multimedia = value.multimedia;
//     if (multimedia.length === 0) {
//         return
//     }
//     let description = value.abstract;
//     let articleURL = value.url;
//     $.each(multimedia, (key,value) =>{
//          if (value.format === 'superJumbo') {
//              let imageURL = value.url;
//              let listItem = `<li><a href = "${articleURL}" target="_blank">
//              <img src = "${imageURL}"><p>${description}</p></a></li>`;
//              $('ul').append(listItem);
//          }
//          else {
//              return
//          }
// let description = value.abstract;
// let articleURL = value.url;

// $.each(data.results, function(key, value) {
//     let imageURL = value.url;
//     let listItem = `<li><a href = "${articleURL}" target="_blank">
//     <img src = "${imageURL}"><p>${description}</p></a></li>`;
//     $('ul').append(listItem);

// console.log(value)
//  if (value.multimedia.length !== 0 && counter < 12) {
//         counter ++;
//         $(".loader").hide();

//         return counter <

//     }
// $(".main").append(`<img src="${value.multimedia[4].url}"/>`)
// $(".main").append(`<li>${value.abstract}</li>`)

// console.log(value)

// }

// })

// $('#body').css('min-height', '100%');
// $('#body').css('min-height', screen.height);

// })

// FIXED FOOTER

// Menu function
$(function() {
  $("#my-select-menu").on("change", function(event) {
    const $selected = $(event.target).val();
    console.log(`You have selected ${$selected}`);
  });
});
//  })

//     .fail (function() {
//         $("ul").append(`<li>Sorry, there was a problem, please try again.</li>`)

//      })
//      .always(function() {
//      $("ul").before(`<p class="loading">${"Loading..."}</p>`)
//   })
// })
//  })
