// import buttonClick function from our source file
const buttonClick = require("../button");

beforeEach(() => {
    //fs is a file system hancling module boult into Node that allows us
    // to open read and write files
    let fs = require("fs");
    // use fs to read the content of html and store it in a variable fileContents
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML.toEqual("You clicked"));
    });
    test("h1 should exist", () => {
        // this tag will get all the h1 and store them in an array then
        // the length of array will be one if two h1 exists the length will be 2
        expect(document.getElementByTagName("h1").lenght).toBe(1);

    });
});