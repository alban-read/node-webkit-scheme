 //
 const { execFile } = require('child_process');
 
const child = execFile('SchemeWebView.exe', (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
 window.open("http://localhost:8087/editor.html")