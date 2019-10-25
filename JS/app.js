 //API
 $(function() {
     $("select").on("change", function() {
         $change = ($(this).val())
        $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$change}.json?api-key=YTMJtmBtB00ippV8QvL3cjmtA9aRZvIf`)
       .done(function(data) {
        // console.log(data.results[0].multimedia[4].url)
        let counter = 0
        
        $.each(data.results, function(key, value) {
            console.log(value)

            if (value.multimedia.length !== 0 && counter < 12) {
                counter ++;
                $(".main").append(`<img src="${value.multimedia[4].url}"/>`)
                $(".main").append(`<li>${value.abstract}</li>`) 
                
                return counter < 12

               
            }
           
           
            
            console.log(value)

            //only show 12
            

        })
        

    })

})






     // Menu function
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
     