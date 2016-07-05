import { Injectable } from '@angular/core';

@Injectable()
export class ScaleService {
    setScale(scaleName:string, strings:IString[]): IString[] {
        this.clearScale(strings);

        var scale = (scaleName === 'EMaj')
            ? ['E', 'F#/Gb', 'G#/Ab', 'A', 'B', 'C#/Db', 'D#/Eb']
            : ['E', 'F#/Gb', 'G', 'A', 'B', 'C', 'D'];

        strings.forEach((string) => {
            if (scale.indexOf(string.tuning) >= 0) {
                string.isInScale = true;
            }

            string.frets.forEach((fret) => {
                if (scale.indexOf(fret.noteValue) >= 0) {
                    fret.isInScale = true;
                }
            });
        });

        return strings;
    }

    clearScale(strings:IString[]) {
        strings.forEach((string) => {
            string.isInScale = false;
            string.frets.forEach((fret) => {
                fret.isInScale = false;
            });
        });
    }
}