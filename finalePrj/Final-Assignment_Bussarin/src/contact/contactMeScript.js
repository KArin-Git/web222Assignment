document.addEventListener('DOMContentLoaded', () => {
    const otherTopicInput = document.getElementById('other-topic');
    const topicRadios = document.querySelectorAll('input[name="topic"]');
    
    topicRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'Other') {
                otherTopicInput.style.display = 'block';
                otherTopicInput.setAttribute('required', 'required');
            } else {
                otherTopicInput.style.display = 'none';
                otherTopicInput.removeAttribute('required');
            }
        });
    });
});
