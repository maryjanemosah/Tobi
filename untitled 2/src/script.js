document.addEventListener("DOMContentLoaded", function () {
    // Typing effect for the message
    const message = document.getElementById("typingMessage");
    message.classList.add("typing-text");

    // Button click functionality to hide text and show "thank you" message
  document.getElementById('toggleButton').addEventListener('click', () => {
  const hiddenElement = document.querySelector('.hidden');
  hiddenElement.style.display = hiddenElement.style.display === 'none' ? 'block' : 'none';
});

   document.querySelector('.hidden').style.display = 'block';
 document.getElementById('forgiveButton').addEventListener('click', () => {
        const content = document.getElementById('content');
        const thankYou = document.getElementById('thankYou');
        
        // Hide the apology content
        content.classList.add('hidden');
        
        // Show the thank you message
        thankYou.classList.remove('hidden');
    });
});
