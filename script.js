// Constant
const URL = 'https://digimon-api.vercel.app/api/digimon/name/';

// State

// Cached element references
const $main = $('.main');
const $form = $('form');
const $input = $('input[type="text"]');

// Event listeners
$form.on('submit', handleSubmit);



// Functions

function handleSubmit(event) {
    event && event.preventDefault();
    
    const name = $input.val()

    if(!name) return;

    const promise = $.ajax(`${URL}${name}`);

    promise.then(
        function(data){
            render(data);
            $input.val('');
        },
        function(error){
            alert('Error: ', error);
        }
    )
};

function render(digiData){
    $main.html(`
    <h3>Name: ${digiData[0].name}</h3>
    <p>Level: ${digiData[0].level}</p>
    <img src="${digiData[0].img}">
    `)
}
