const fs = require('fs')

const tmpl = fs.readFileSync('./tmpl.html', 'utf8')
const docsDir = './docs/'
const distDir = './.dist/'
const imgsDir = 'images/'

fs.mkdirSync(distDir)
fs.mkdirSync(distDir + imgsDir)

fs.readdir(docsDir + imgsDir, function(err, files){
  files.forEach(function(file, index, o){
    //fs.createReadStream(docsDir + imgsDir + file).pipe(fs.createWriteStream(distDir + imgsDir + file))
    fs.writeFileSync(distDir + imgsDir + file, fs.readFileSync(docsDir + imgsDir + file));
  })
})

fs.readdir(docsDir, function(a , files){
  files.forEach(function(file, index, o){
    if(file.indexOf('.md') < 0) return
    fs.readFile(docsDir + file, 'utf8', function(a, content){
      fs.writeFileSync(distDir + file.replace('.md', '.html'), tmpl.replace('<!-- markdown content -->', content))
    })
  })
})