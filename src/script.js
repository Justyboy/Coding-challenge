// Get the modal
const modal = document.querySelector("#myModal");

// Get the title
const title = document.querySelector("#title");

// Get the button(s) that opens the modal
const btn = document.querySelectorAll(".btn");

// Get the <span> element that closes the modal
const closeModal = document.getElementsByClassName("close")[0];

// Loop through each button and add a click event listener
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    // When a button is clicked, display the modal with a fade-in transition

    // Use setTimeout to ensure the transition starts after setting the initial opacity
    setTimeout(() => {
      modal.style.display = "block";
      modal.classList.add("animate-fade-up");
      title.style.display = "none";
    }, 200);
  });
}

// When the user clicks on the close button (x), close the modal with a fade-out transition
closeModal.onclick = function () {
  closeModalFunction();
};

// Close the modal when clicking outside of it

document.addEventListener("click", function(event) {
  // If user clicks inside the element, do nothing
  if (event.target.closest("#myModal")) return;
  // If user clicks outside the element, hide it!
  closeModalFunction();
});


function closeModalFunction() {
  modal.style.display = "none";
  title.style.display = "block";
}
    