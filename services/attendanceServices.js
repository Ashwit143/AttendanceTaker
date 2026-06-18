const XLSX = require("xlsx"); 
const fs = require("fs");


function markPresent(studentName, rollNo, studentExcelPath) {
  const today = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  // Example: "26-Aug"

  if (!fs.existsSync(studentExcelPath)) {
    console.log("Student list file not found!");
    return false;
  }

  let workbook = XLSX.readFile(studentExcelPath);
  let worksheet = workbook.Sheets[workbook.SheetNames[0]];
  let data = XLSX.utils.sheet_to_json(worksheet, { defval: "" }); // keep empty cells as ""

  // If no data, create headers
  if (data.length === 0) {
    data.push({ RollNo: "RollNo", Name: "Name" });
  }

  // Get header keys (columns)
  let headers = Object.keys(data[0]);
  if (!headers.includes(today)) {
    // Add today's column if missing
    data = data.map(row => {
      row[today] = "";
      return row;
    });
  }

  const studentNameTrim = studentName.trim().replace(/\s+/g, " ");
  const rollNumber = Number(rollNo);
  const roll = "2025BTech" + rollNumber;

  let studentFound = false;

  data = data.map((row) => {
    if (
      row.Name &&
      row.RollNo &&
      row.Name.trim().replace(/\s+/g, " ").toLowerCase() === studentNameTrim.toLowerCase() &&
      row.RollNo === roll
    ) {
      row[today] = "P"; // Mark present for today
      studentFound = true;
    }
    return row;
  });

  if (!studentFound) {
    console.log(`Student ${studentName} with RollNo ${rollNo} not found!`);
    return false;
  }

  // Convert JSON back to sheet
  const newSheet = XLSX.utils.json_to_sheet(data);
  workbook.Sheets[workbook.SheetNames[0]] = newSheet;
  XLSX.writeFile(workbook, studentExcelPath);

  return true;
}

module.exports = {markPresent};