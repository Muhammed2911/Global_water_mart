let prevButton       = document.querySelector('button[data-action="prevButton"]'),
    nextButton       = document.querySelector('button[data-action="nextButton"]'),
    submitButton     = document.querySelector('[data-action="submitForm"]');

nextButton.addEventListener('click', function(){

    let detectactivestep    = document.querySelector('.step_wrapper.active').getAttribute('data-id');

    if( detectactivestep == 'step_1' ) {
        document.querySelector('[data-id="step_1"]').classList.add('d-none');
        document.querySelector('[data-id="step_1"]').classList.remove('active');
        document.querySelector('[data-id="step_2"]').classList.remove('d-none');
        document.querySelector('[data-id="step_2"]').classList.add('active');
        prevButton.disabled = false;
    } else if (detectactivestep == 'step_2') {
        document.querySelector('[data-id="step_2"]').classList.add('d-none');
        document.querySelector('[data-id="step_2"]').classList.remove('active');
        document.querySelector('[data-id="step_3"]').classList.remove('d-none');
        document.querySelector('[data-id="step_3"]').classList.add('active');
    } else if (detectactivestep == 'step_3') {
        document.querySelector('[data-id="step_3"]').classList.add('d-none');
        document.querySelector('[data-id="step_3"]').classList.remove('active');
        document.querySelector('[data-id="step_4"]').classList.remove('d-none');
        document.querySelector('[data-id="step_4"]').classList.add('active');
        nextButton.classList.add('d-none');
        submitButton.classList.remove('d-none');
    }

});

prevButton.addEventListener('click', function(){

    let detectactivestep    = document.querySelector('.step_wrapper.active').getAttribute('data-id');

    if( detectactivestep == 'step_2' ) {
        document.querySelector('[data-id="step_1"]').classList.remove('d-none');
        document.querySelector('[data-id="step_1"]').classList.add('active');
        document.querySelector('[data-id="step_2"]').classList.add('d-none');
        document.querySelector('[data-id="step_2"]').classList.remove('active');
        prevButton.disabled = true;
    } else if (detectactivestep == 'step_3') {
        document.querySelector('[data-id="step_2"]').classList.remove('d-none');
        document.querySelector('[data-id="step_2"]').classList.add('active');
        document.querySelector('[data-id="step_3"]').classList.add('d-none');
        document.querySelector('[data-id="step_3"]').classList.remove('active');
        
    } else if (detectactivestep == 'step_4') {
        document.querySelector('[data-id="step_3"]').classList.remove('d-none');
        document.querySelector('[data-id="step_3"]').classList.add('active');
        document.querySelector('[data-id="step_4"]').classList.add('d-none');
        document.querySelector('[data-id="step_4"]').classList.remove('active');
        nextButton.classList.remove('d-none');
        submitButton.classList.add('d-none');
    }
});