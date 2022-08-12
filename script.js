// Constant
const URL = 'https://digimon-api.vercel.app/api/digimon/name/';

// State

// Cached element references
const $main = $('main');
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
            console.log('Data: ', data);
        },
        function(error){
            console.log('Error: ', error);
        }
    )
}