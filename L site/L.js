function yes() {
    var img = document.getElementById("img");
    var p = document.getElementById("p");
    var n = document.getElementById("n");
    var y = document.getElementById("y");
    img.src = "cat-yes.jpg";
    p.innerHTML = "Yayyy!! :3";
    y.style.display = "none";
    n.style.display = "none";
}
var contentArray = [
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry..."
    // Add more content as needed
];
var imgt = [
    "cat.jpg",
    "cat1.jpg",
    "cat2.jpg",
    "cat3.jpg",
    "cat4.jpg",
    "cat5.jpg"
    // Add more content as needed
];

var currentIndex = 0;
var Index = 1;
function no() {
    var img = document.getElementById("img");
    var n = document.getElementById("n");
    var y = document.getElementById("y");

    var currentWidth = y.offsetWidth;
        var currentHeight = y.offsetHeight;

        // Set new width and height (you can customize these values)
        var newWidth = currentWidth + 100; // Increase by 10 pixels
        var newHeight = currentHeight + 50; // Increase by 5 pixels

        // Update the button size
        y.style.width = newWidth + "px";
        y.style.height = newHeight + "px";
    img.src = imgt[Index];

        // Increment the index or reset to 0 if it reaches the end of the array
        Index = (Index + 1) % imgt.length;


        n.innerHTML = contentArray[currentIndex];

        // Increment the index or reset to 0 if it reaches the end of the array
        currentIndex = (currentIndex + 1) % contentArray.length;
}