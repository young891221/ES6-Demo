/**
 * Created by KimYJ on 2017-03-04.
 */
import hello from  './hello';
import developer from  './developer';

let main = {hello: hello};
//main.word = world;

let dev = new developer('hansung', 'dell', 'es6', [1,2,3,4]);
main.dev = dev.getDeveloperItem();

document.write(`${hello}`);
document.write(main.dev);
document.write('set 이전의 project = '+dev.project);
dev.project = 'SpringBoot-Webpack';
document.write('set 이후의 project = '+dev.project);

console.log('reduce result = ' + dev.reduceArrayProject());
console.log('generator result = ' + dev.doGenerator());

export default main.dev;