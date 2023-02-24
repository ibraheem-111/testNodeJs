const PDFDocument = require("pdfkit")
const fs = require("fs");

var doc = new PDFDocument;

var stream = doc.pipe(fs.createWriteStream("txt.pdf"))

doc.text("afsadadasda");

doc.end();
