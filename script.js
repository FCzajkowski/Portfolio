document.addEventListener("DOMContentLoaded", () => {
    const dynamicTexts = ["Frontend Developer", "Backend Developer", "Software Developer", "UI Designer", "Database Administrator"];
    const dynamicTextElement = document.querySelector("#dynamic-text");
    let textIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < dynamicTexts[textIndex].length) {
            dynamicTextElement.textContent += dynamicTexts[textIndex].charAt(charIndex); // Add dynamic text
            charIndex++;
            setTimeout(typeEffect, 100); // Typing speed
        } else {
            setTimeout(deleteEffect, 1000); // Wait before deleting
        }
    }

    function deleteEffect() {
        if (charIndex > 0) {
            dynamicTextElement.textContent = dynamicTextElement.textContent.slice(0, -1); // Remove dynamic text
            charIndex--;
            setTimeout(deleteEffect, 50); // Deleting speed
        } else {
            textIndex = (textIndex + 1) % dynamicTexts.length; // Move to the next text
            setTimeout(typeEffect, 500); // Wait before typing next text
        }
    }

    typeEffect();

    // Theme change functionality
    const changeThemeButton = document.getElementById("change__button");
    changeThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
    });
});
