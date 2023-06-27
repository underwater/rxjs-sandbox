import readline from 'readline';
import * as Rx from 'rxjs';

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        // Exit the process on Ctrl+C
        process.exit();
    } else if (key.name === 'space') {
        console.log('starting work');
        ObsExample();
        console
    }
});

console.log('Press space to print "Hello World", or Ctrl+C to exit.');




function ObsExample() {
    const numbers$ = Rx.Observable.create((observer: Rx.Observer<number>) => {
        let count = 0;
        const interval = setInterval(() => {
            observer.next(count++);
        }, 1000);

        return () => clearInterval(interval);
    }
    );

    numbers$.subscribe((value: number) => {
        console.log(`value: ${value}`);
    }
    );


    numbers$.subscribe((value: number) => {
        console.log(`2 x value: ${2* value}`);
    })

}

