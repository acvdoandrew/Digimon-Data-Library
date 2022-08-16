const URL2 = 'https://digimon-api.vercel.app/api/digimon/level/'


// Cached element references
// const $main = $('.main');
// const $form = $('form');
// const $input = $('#name');
const $inputLevel = $('#Level')
const $formLevel = $('.level')

// event listeners
$formLevel.on('submit', handleSubmit)



// functions

handleSubmit();

function handleSubmit(event) {
    event && event.preventDefault();
    
    const level = $inputLevel.val() || 'Rookie';

    if(!level) return;

    const promise = $.ajax(`${URL2}${level}`);

    promise.then(
        function(data){
            console.log(data);
            // render(data);
            $input.val('');
        },
        function(error){
            alert('Error: Could not find Digimon in the database', error);
            $input.val('');
        }
    )
};

// function render(digiData){
//     $main.html(`
//     <p><b>Name:</b> ${digiData[0].name}<p>
//     <p><b>Level:</b> ${digiData[0].level}</p>
//     <img src="${digiData[0].img}" class="digi-img">
//     `)
// }