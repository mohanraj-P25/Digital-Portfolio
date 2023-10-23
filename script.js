
const toggleButton = document.getElementById("toggleButton");
const profileDescription = document.getElementById("profileDescription");

profileDescription.style.display ="none";

toggleButton.addEventListener("click", () => {
    // Toggle the visibility of the description
    if (profileDescription.style.display==="none") {
        profileDescription.style.display="block";
    } else {
        profileDescription.style.display="none";
    }
});