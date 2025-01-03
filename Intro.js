// const{chromium} = require('playwright');

// (async () => {
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
//     page.goto("https://www.facebook.com/")
// })();

// const{chromium}= require('playwright');   
// (async () => {
//     const browser = await chromium.launch({headless:true});
//     const page = await browser.newPage();
//     page.goto("https://www.facebook.com/")
// })();

// const{chromium} = require("playwright");
// (async () => {
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
//     page.goto("http://www.facebook.com")
//     page
// })();

// const {firefox}= require('playwright');
// (async()=>{
//     const browser= await firefox.launch({headless:false});
//     const page= await browser.newPage();
//     page.goto("http://www.facebook.com")
// }

// )();

// const {chromium }= require('playwright');
// (async()=>{
//     const browser= await chromium.launch({headless:false});
//     const page = await browser.newPage();
//     page.goto("http://www.amazon.com")
// }

// )();

const {firefox}= require('playwright') ;
(async()=>{
const browser = await firefox.launch({headless:false});
const page= await browser.newPage();
page.goto("https://www.amazon.in/")

}
)();

const {chromium} = require ('playwright');
(async()=> {

    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    page.goto("https://www.flipkart.com/")
}

)();