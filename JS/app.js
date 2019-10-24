 $(function() {
     $("button").on("click", function() {
        $.getJSON('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=YTMJtmBtB00ippV8QvL3cjmtA9aRZvIf')
       .done(function(data) {
        $.each(data.results, function(key, value) {
            $(".posts").append(`img src="....."/>`)
            $(".posts").append(`<li>${value}</li>`)
              console.log(data.results)

        })
    })

     })

     $(function() {
        $('#my-select-menu').on('change', function(event){
            const $selected = $(event.target).val()
            console.log(`You have selected ${$selected}`)
        })
        })
 })


        //     .fail (function() {
        //         $("ul").append(`<li>Sorry, there was a problem, please try again.</li>`)  
        
        //      }) 
        //      .always(function() {
        //      $("ul").before(`<p class="loading">${"Loading..."}</p>`)  
        //   })
     