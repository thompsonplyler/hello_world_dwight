# Hello Dwight
> If your chair leg breaks, throw it in the garage!

The files above make up a basic webpage. 

A webpage or website is a file that includes instructions that tell your computer how to display whatever is on the site. 

Put another way, YouTube does not really "exist" like an apple or your cat or your family or even a computer exist.

You actually "make" YouTube every time you visit, which is kind of cool to think about. 

When you type `youtube.com` into Microsoft Edge or Google Chrome, you are sending an electronic request out to the internet with an **address** of `youtube.com` (just like your home or school address!). Sometimes the address you give YouTube has extra informaiton, like if you want a specific video or if you want to visit a specific section, but even if you don't see it in the address bar, your request always includes your return address so YouTube knows where to send the information you've asked for. 

The computer at the other end-- this is the computer that lives at youtube.com, remember-- knows that request was sent by your computer, and it sends along a file, called an HTML file, that has special instructions on what your computer needs to do in order to make the website you were looking for. 

There's a lot more to it than that, and there's a lot of material between making the site in the files above and making YouTube... although probably not as much as you might believe! 

The bigger point you should take away is that websites are actually the results of instructions given to your computer about how to make that website, and the most basic version of those instructions is called an HTML file. 

---

## What are those files? 

### `index.html`
The `.html` extension on this file indicates that it is an HTML file. 

This file is the actual file that is displayed when you open a webpage. Modern webpages have a lot more going on than just HTML (short for **HyperText Markup Language**-- hypertext is what we used to call links on webpages), but since HTML always forms the skeleton of websites, it's very important to know about. 

HTML files look like this:
```html
<html>
    <head>
        <title>Webpage Title!</title>
    </head>
    <body>
        <p>Stuff on a web page!</p>
    </body>
</html>
```

You probably notice those weird words like `<p>` and `<body>`. Those are called **HTML Tags**, and the special way they're written is what explains a webpage's structure to your computer. 

Notice that they come in pairs! So we tell a page, "This is our body section!" with a `<body>` tag, and we tell the page, "The body section is over!" with the `</body>` tag, which is called a **closing tag.**

---

### `style.css`
The `.css` extension indicates that this is a CSS file. 

If you were to make an HTML file like `index.html` or even the snippet of HTML code just above and open it in a browser, it would look very different. CSS (short for **Cascading Style Sheets**) are what people use to explain to your computer how an HTML file how it is supposed to look, which we call the "style" of a website. Just like a person's "style" is how they brush their hair or what kind of clothes they wear, a website's "style" includes a background color or images, how big text is, or even how round buttons are.

This CSS would make whatever is inside our HTML "paragraph" (`<p>`) tag have green text and a red background. 
```css
p {
    color: green;
    background-color: red;
}
```

Maybe that could be fun for a Christmas website! 

---

### `main.js`
This is a JavaScript file, indicated by the `.js` file extension. We use JavaScript to handle what happens when we actually interact with the page. 

For instance, on this page, when you click the background color changer button (indicated with a `<button>` tag in HTML), it's JavaScript that listens for you clicking the button, finds the background on the page (part of the `<body>` in HTML), and assigns it a new color (by assigning it a new `style` with CSS.)


JavaScript can be more difficult to understand at first glance than HTML or CSS, but it looks like this:
```javascript

button.addEventListener("click", function(){
    console.log("You have clicked a button!")
})
```

That code looks for a button object and tells it to listen for a click, at which point it will tell us (in a special developer area called the "console") that we have clicked the button.

---

### `README.md`
You're actually reading `README.md` right now! The `.md` extension indicates that this is a Markdown file. Markdown is a little bit like HTML. They both use special symbols to describe how a page will look. While HTML is for writing documents that are meant to be read by computers, Markdown is for writing documents like this, which are intended to be read by other human beings. 

This is what Markdown looks like: 
```markdown
# This is a Mardkown heading. 

This is normal text. 

* This is a list. 
* This is in the same list. 
* This is another item in the same list. 

These first asterisks show text that will be **bold**, and the second show text that will be *italics*. 
```

---

## What is this website? 
This website is called GitHub. It is a place where software developers store their code. We use it to store our code between versions-- sort of like an old save game file where you go back to before you entered the last level.

Eventually you will want to work together with other coders, and it's a virtual certainty that GitHub will play a big role in that collaboration. 