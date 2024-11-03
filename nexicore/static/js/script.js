const text = "Welcome to NexiCore!";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust speed here
    }
}

type();
