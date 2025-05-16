//usiing js instead of ts as not supported
// currently use excel, reqork logic when using sql 

const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const excelPath = path.join(__dirname, '../public/TouchLynkData.xlsx'); 
const outputDir = path.join(__dirname, '../data');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const workbook = XLSX.readFile(excelPath);
const sheetNames = workbook.SheetNames;

sheetNames.forEach((sheetName) => {
  const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  const outputFile = path.join(outputDir, `${sheetName}.json`);
  fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));
  console.log(`✅ Saved: ${outputFile}`);
});
