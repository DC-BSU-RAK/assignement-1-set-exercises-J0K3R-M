// Select all elements with the class 'sample-button'
document.querySelectorAll('.sample-button').forEach(button => {
    // Add a click event listener to each button
    button.addEventListener('click', () => {
        // Create a new Audio object using the data-audio attribute of the clicked button
        const audio = new Audio(`Exercises/Audio Sampler/${button.dataset.audio}`);
        // Play the audio file associated with the button
        audio.play();
    });
});
