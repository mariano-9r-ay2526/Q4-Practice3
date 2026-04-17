function getProductCategory() {
    var multiCategory = document.getElementById('categoryEntry').value;

    switch (multiCategory) {
        case "C":
        document.getElementById("showCategory").innerHTML =
        "Category: Clothing";
        break;
   
        case "E":
        document.getElementById("showCategory").innerHTML =
        "Category: Electronics";
        break;

        case "B":
        document.getElementById("showCategory").innerHTML =
        "Category: Books";
        break;

        default:
            window.alert('Invalid Category');
    }
}
