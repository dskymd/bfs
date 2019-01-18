'use strict'

const fs = require('fs')
const jsdom = require("jsdom");
const {
  JSDOM
} = jsdom;

fs.readFile('bluelug.html', 'utf8', (err, data) => {
  // console.log(data)
  const dom = new JSDOM(data)
  console.log( typeof dom)
  // const div = document.createElement('div')
  const win = dom.window
  const doc = win.document

  // for (let item of win) {
  //   console.log(item)
  // }
  console.log(dom, win, win.CSS(), dom.window.document)
})

// function main(input) {
// 	console.log(input)
// }

// main(require('fs').readFileSync('bluelug.html', 'utf8'))

// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'bluelug.html')
// xhr.addEventListener('load', e => {

//   console.log(e)

// })

// xhr.send()