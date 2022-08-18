// Constant
const URL = 'https://digimon-api.vercel.app/api/digimon/name/';

// State

// Cached element references
const $main = $('.main');
const $form = $('form');
const $input = $('#name');

// Event listeners
$form.on('submit', handleSubmit);



// Functions
handleSubmit();

function handleSubmit(event) {
    event && event.preventDefault();
    
    const name = $input.val();

    if(!name) return;

    const promise = $.ajax(`${URL}${name}`);

    promise.then(
        function(data){
            render(data);
            $input.val('');
        },
        function(error){
            alert('Error: Could not find Digimon in the database', error);
            $input.val('');
        }
    )
};

function render(digiData){
    $main.html(`
    <p><b>Name:</b> ${digiData[0].name}<p>
    <p><b>Level:</b> ${digiData[0].level}</p>
    <img src="${digiData[0].img}" class="digi-img">
    `)
}
