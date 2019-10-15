var fs = require('fs');
 



rmDir = function(dirPath) {
    try { var files = fs.readdirSync(dirPath); }
    catch(e) { console.log(e); return; }
    if (files.length > 0)
      for (var i = 0; i < files.length; i++) {
        var filePath = dirPath + '/' + files[i]; 

        if (files[i] === 'ar.js' || files[i] === 'en-gb.js'){continue;}//exclude required locales

        if (fs.statSync(filePath).isFile())
          fs.unlinkSync(filePath);
        else
          rmDir(filePath);
      }
    //fs.rmdirSync(dirPath);
  };


rmDir("node_modules/moment/locale");
