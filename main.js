import project1PdfUrl from "./pdffile/Scicreme/Sci-Cream.pdf";
import project2PdfUrl from "./pdffile/EasyPay/KMITL-Easy-Pay-App.pdf";
import project3PdfUrl from "./pdffile/Pharmakub/Pharmakub.pdf";
import project4PdfUrl from "./pdffile/IhavePet/IHavePET.pdf";
import './src/test.js'
import './src/style.css'
import './src/box1.css'
import './src/box1_right.css'
import './src/box1_left.css'
import './src/box1_name.css'
import './src/box2.css'
import './src/box3.css'
import './src/box3_right.css'
import './src/box3_left.css'
import './src/box4.css'
import './src/box4_left.css'
import './src/box4_right.css'

console.log("Hi")

const linkProject1 = document.querySelector(".project1 a")
const linkProject2 = document.querySelector(".project2 a")
const linkProject3 = document.querySelector(".project3 a")
const linkProject4 = document.querySelector(".project4 a")
linkProject1.href = project1PdfUrl
linkProject2.href = project2PdfUrl
linkProject3.href = project3PdfUrl
linkProject4.href = project4PdfUrl
