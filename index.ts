import readline from 'readline';
import { NumberExamples as NumberExamples } from './Examples/number-examples';
import { SwitchExamples } from './Examples/switch-examples';
import { TakeExamples } from './Examples/take-examples';

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        // Exit the process on Ctrl+C
        process.exit();
    } else if (key.name === 'space') {
        console.log('starting examples');

        // NumberExamples();
         SwitchExamples();
        // TakeExamples();
        
        console
    }
});

console.log('Press space to start examples, or Ctrl+C to exit.');





