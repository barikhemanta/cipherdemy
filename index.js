const lis = document.querySelectorAll("#my-list li:not(:first-child)");

lis.forEach((li) => {
    li.addEventListener("click", () => {
        // Remove the "active" class from all list items
        lis.forEach((li) => li.classList.remove("active"));
        // Add the "active" class to the clicked list item
        li.classList.add("active");
    });
});
