const fs = require('fs');
const printer = require('@thiagoelg/node-printer')

const listOfPrinters = printer.getPrinters().map(item => item.name)
console.log('\navailable printers', listOfPrinters)
console.log('\n*****************************\n')
const job = printer.getJob("Canon_iR_C3226", 2)
console.log("\nJOB",job)
console.log('\n*****************************\n')

// 🚨 ALERT : please check you have correct path here
const __filePath = "/image.png"

if(process.platform != 'win32') {
  printer.printFile({
    filename: __filePath,
    printer: 'Canon_iR_C3226', 
    success:function(jobID){
      console.log("sent to printer with ID: "+jobID);
    },
    error:function(err){
      console.log(err);
    }
  });
} else {
  // not yet implemented, use printDirect and text
  printer.printDirect({
    data: fs.readFileSync(__filePath),
    printer: process.env[3], // printer name, if missing then will print to default printer
    success:function(jobID){
      console.log("sent to printer with ID: "+jobID);
    },
    error:function(err){
      console.log(err);
    }
  });
}

