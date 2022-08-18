const URL2 = 'https://digimon-api.vercel.app/api/digimon/level/'


// Cached element references
const $inputLevel = $('#Level');
const $formLevel = $('.level');
const $owlCarousel = $('.owl-carousel');

// event listeners
$formLevel.on('submit', handleSubmit);



// functions
handleSubmit();


function handleSubmit(event) {
    event && event.preventDefault();
    
    const level = $inputLevel.val() || 'In Training';
    
    if(!level) return;
    
    const promise = $.ajax(`${URL2}${level}`);
    
    promise.then(
        function(data){;
            renderLevel(data);
            console.log(data)
            $inputLevel.val('');
        },
        function(error){
            alert('Error: Could not find Digimon in the database', error);
            $input.val('');
        }
        )
    }
    
    function renderLevel(digiData) {
        for (let i = 0; i < digiData.length; i++) {
            let digimon = digiData[i];
            $owlCarousel.append(`
            <div class="item">
            <p><b>Name:</b> ${digimon.name}</p>
            <p><b>Level</b> : ${digimon.level}</p>
            <img src="${digimon.img}" class="digi-img">
            </div>
            `);
        }
        
        $owlCarousel.trigger('refresh.owl.carousel');
        
        $(document).ready(function(){
            $owlCarousel.owlCarousel({
                nav: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
            });
        })
    }
    
    