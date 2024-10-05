const category = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${category.length}`);


category.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const element = item.querySelectorAll("ul li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${element}`);
});





    







