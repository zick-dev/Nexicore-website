// static/js/typed-init.js

document.addEventListener("DOMContentLoaded", function() {
    const options = {
        strings: ["Welcome to NexiCore"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: false,
    };

    // Directly create a new Typed instance without saving it to a variable
    new Typed("#typed-output", options);
});
