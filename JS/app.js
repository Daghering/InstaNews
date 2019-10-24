 $(function() {
     $("button").on("click", function() {
        $.getJSON('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=YTMJtmBtB00ippV8QvL3cjmtA9aRZvIf')
       .done(function(data) {
        $.each(data, function(key, value) {
              $("ul").append(`<li>${value.name}</li>`)
              console.log(data)

        })
    })

     })
 })

        //     .fail (function() {
        //         $("ul").append(`<li>Sorry, there was a problem, please try again.</li>`)  
        
        //      }) 
        //      .always(function() {
        //      $("ul").before(`<p class="loading">${"Loading..."}</p>`)  
        //   })
     