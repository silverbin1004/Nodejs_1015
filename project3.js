const fs = require('fs');

//3.
// const content = 'Hello, Node.js!'

// fs.writeFile('note.txt', content, (err) => {
//   if(err) throw err;
//   console.log('파일이 저장되었습니다.');
// });

// fs.readFile('note.txt', 'utf-8', (err, data)=>{
//   if(err) throw err;
//   console.log(data);
// });

//4.
// (async()=>{
//   let data = await fs.copyFile('note.txt', 'copy.txt', err=>{
//     if(err) throw err;
//     console.log('파일 복사 완료');
//   });
// })();

//5.
// const path = require('path');

// const filePath = '/home/user/docs/note.txt';
// const parsed = path.parse(filePath);
// console.log(parsed);

// const joinedPath = path.join('/home','user','docs','note.txt');
// console.log(joinedPath);

// const absolutePath = path.resolve('docs','note.txt');
// console.log(absolutePath);

//6
// const readline = require('readline');

// const rl = readline.createInterface({
//   input:process.stdin,
//   output:process.stdout
// });

// rl.on("line", (line)=>{
//   console.log("input: ", line);

//   fs.mkdir(line,{recursive: true}, (err)=>{
//     if(err) throw err;
//     console.log("디렉토리 생성 완료");
//   })
//   rl.close();
// });

// rl.on('close', () =>{
//   process.exit();
// })

//7
// const person = {
//   name : '홍길동',
//   age : 10
// }

// const personJson = JSON.stringify(person);
// fs.writeFileSync('test.json',personJson);
// fs.readFile('test.json', 'utf-8', (err,data) =>{
//   if(err) throw err;
//   console.log(data);
// });

//8
// const EventEmitter = require('events');
// const userRegistered = new EventEmitter();

// userRegistered.on('register', (name) =>{
//   console.log(`${name} 님 환영합니다..`);
// });

// userRegistered.emit('register','홍길동');

//9
