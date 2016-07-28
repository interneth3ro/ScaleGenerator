import { Injectable } from '@angular/core';

function makeIterable(arr:string[]): any {
  return {
    rotateLeft: function () {
      var t = arr.shift();
      arr.push(t);
      return t;
    },
    rotateRight: function () {
      var t = arr.pop();
      arr.unshift(t);
      return t;
    },
    source: arr
  };
}

@Injectable()
export class ScaleService {
    chromaticScale = [['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab']];
    tunings: any = {
        standard: ['E', 'B', 'G', 'D', 'A', 'E'],
        dropD: ['E', 'B', 'G', 'D', 'A', 'D'],
        dropC: ['D', 'A', 'F', 'C', 'G', 'C'],
        dropA: ['D', 'A', 'F', 'C', 'G', 'A'],
        openC: ['E', 'C', 'G', 'C', 'G', 'C']
    };

    scales: IScale[] = [{
        name: 'C Major',
        root: 'C',
        notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
        accidental: '#',
        modes: [{
            name: 'Ionian',
            root: 'C'
        }, {
            name: 'Dorian',
            root: 'D'
        }, {
            name: 'Phrygian',
            root: 'E'
        }, {
            name: 'Lydian',
            root: 'F'
        }, {
            name: 'Mixolydian',
            root: 'G'
        }, {
            name: 'Aeolian',
            root: 'A'
        }, {
            name: 'Locrian',
            root: 'B'
        }]
    }, {
        name: 'G Major',
        root: 'G',
        notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
        accidental: '#',
        modes: [{
            name: 'Ionian',
            root: 'G'
        }, {
            name: 'Dorian',
            root: 'A'
        }, {
            name: 'Phrygian',
            root: 'B'
        }, {
            name: 'Lydian',
            root: 'C'
        }, {
            name: 'Mixolydian',
            root: 'D'
        }, {
            name: 'Aeolian',
            root: 'E'
        }, {
            name: 'Locrian',
            root: 'F#'
        }]
    }, {
        name: 'D Major',
        root: 'D',
        notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
        accidental: '#',
        modes: [{
            name: 'Ionian',
            root: 'D'
        }, {
            name: 'Dorian',
            root: 'E'
        }, {
            name: 'Phrygian',
            root: 'F#'
        }, {
            name: 'Lydian',
            root: 'G'
        }, {
            name: 'Mixolydian',
            root: 'A'
        }, {
            name: 'Aeolian',
            root: 'B'
        }, {
            name: 'Locrian',
            root: 'C#'
        }]
    }, {
        name: 'A Major',
        root: 'A',
        notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
        accidental: '#',
        modes: [{
            name: 'Ionian',
            root: 'A'
        }, {
            name: 'Dorian',
            root: 'B'
        }, {
            name: 'Phrygian',
            root: 'C#'
        }, {
            name: 'Lydian',
            root: 'D'
        }, {
            name: 'Mixolydian',
            root: 'E'
        }, {
            name: 'Aeolian',
            root: 'F#'
        }, {
            name: 'Locrian',
            root: 'G#'
        }]
    }, {
        name: 'E Major',
        root: 'E',
        notes: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
        accidental: '#',
        modes: [{
            name: 'Ionian',
            root: 'E'
        }, {
            name: 'Dorian',
            root: 'F#'
        }, {
            name: 'Phrygian',
            root: 'G#'
        }, {
            name: 'Lydian',
            root: 'A'
        }, {
            name: 'Mixolydian',
            root: 'B'
        }, {
            name: 'Aeolian',
            root: 'C#'
        }, {
            name: 'Locrian',
            root: 'D#'
        }]
    }, {
        name: 'B Major',
        root: 'B',
        notes: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
        accidental: '#',
        modes: [{
            name: 'Ionian',
            root: 'B'
        }, {
            name: 'Dorian',
            root: 'C#'
        }, {
            name: 'Phrygian',
            root: 'D#'
        }, {
            name: 'Lydian',
            root: 'E'
        }, {
            name: 'Mixolydian',
            root: 'F#'
        }, {
            name: 'Aeolian',
            root: 'G#'
        }, {
            name: 'Locrian',
            root: 'A#'
        }]
    }, {
        name: 'F# Major',
        root: 'F#', 
        notes: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
        accidental: '#',
        modes: [{
            name: 'Ionian',
            root: 'F#'
        }, {
            name: 'Dorian',
            root: 'G#'
        }, {
            name: 'Phrygian',
            root: 'A#'
        }, {
            name: 'Lydian',
            root: 'B'
        }, {
            name: 'Mixolydian',
            root: 'C#'
        }, {
            name: 'Aeolian',
            root: 'D#'
        }, {
            name: 'Locrian',
            root: 'E#'
        }]
    }, {
        name: 'F Major',
        root: 'F',
        notes: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
        accidental: 'b',
        modes: [{
            name: 'Ionian',
            root: 'F'
        }, {
            name: 'Dorian',
            root: 'G'
        }, {
            name: 'Phrygian',
            root: 'A'
        }, {
            name: 'Lydian',
            root: 'Bb'
        }, {
            name: 'Mixolydian',
            root: 'C'
        }, {
            name: 'Aeolian',
            root: 'D'
        }, {
            name: 'Locrian',
            root: 'E'
        }]
    }, {
        name: 'Bb Major',
        root: 'Bb',
        notes: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
        accidental: 'b',
        modes: [{
            name: 'Ionian',
            root: 'Bb'
        }, {
            name: 'Dorian',
            root: 'C'
        }, {
            name: 'Phrygian',
            root: 'D'
        }, {
            name: 'Lydian',
            root: 'Eb'
        }, {
            name: 'Mixolydian',
            root: 'F'
        }, {
            name: 'Aeolian',
            root: 'G'
        }, {
            name: 'Locrian',
            root: 'A'
        }]
    }, {
        name: 'Eb Major',
        root: 'Eb',
        notes: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
        accidental: 'b',
        modes: [{
            name: 'Ionian',
            root: 'Eb'
        }, {
            name: 'Dorian',
            root: 'F'
        }, {
            name: 'Phrygian',
            root: 'G'
        }, {
            name: 'Lydian',
            root: 'Ab'
        }, {
            name: 'Mixolydian',
            root: 'Bb'
        }, {
            name: 'Aeolian',
            root: 'C'
        }, {
            name: 'Locrian',
            root: 'D'
        }]
    }, {
        name: 'Ab Major',
        root: 'Ab', 
        notes: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
        accidental: 'b',
        modes: [{
            name: 'Ionian',
            root: 'Ab'
        }, {
            name: 'Dorian',
            root: 'Bb'
        }, {
            name: 'Phrygian',
            root: 'C'
        }, {
            name: 'Lydian',
            root: 'Db'
        }, {
            name: 'Mixolydian',
            root: 'Eb'
        }, {
            name: 'Aeolian',
            root: 'F'
        }, {
            name: 'Locrian',
            root: 'G'
        }]
    }, {
        name: 'Db Major',
        root: 'Db',
        notes: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
        accidental: 'b',
        modes: [{
            name: 'Ionian',
            root: 'Db'
        }, {
            name: 'Dorian',
            root: 'Eb'
        }, {
            name: 'Phrygian',
            root: 'F'
        }, {
            name: 'Lydian',
            root: 'Gb'
        }, {
            name: 'Mixolydian',
            root: 'Ab'
        }, {
            name: 'Aeolian',
            root: 'Bb'
        }, {
            name: 'Locrian',
            root: 'C'
        }]
    }, {
        name: 'Gb Major',
        root: 'Gb',
        notes: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
        accidental: 'b',
        modes: [{
            name: 'Ionian',
            root: 'Gb'
        }, {
            name: 'Dorian',
            root: 'Ab'
        }, {
            name: 'Phrygian',
            root: 'Bb'
        }, {
            name: 'Lydian',
            root: 'Cb'
        }, {
            name: 'Mixolydian',
            root: 'Db'
        }, {
            name: 'Aeolian',
            root: 'Eb'
        }, {
            name: 'Locrian',
            root: 'F'
        }]
    }];

    getScales() {
        return this.scales;
    }

    getStrings(scaleConfig: IScaleConfig): IString[] {
        let strings: IString[] = [];
        let chromatic = this.getChromaticForScale(scaleConfig.scale);
        console.log(chromatic);
        for (let i = 0; i < scaleConfig.tuning.notes.length; i++) {
            let string = this.getString(scaleConfig.scale, scaleConfig.tuning.notes[i], chromatic);
            strings.push(string);
        }

        return strings;
    }

    rotateScaleToNote(noteValue: string, chromaticScale: string[]) {
        let chromatic = makeIterable(chromaticScale);
        let noteIndex = -1;
        for (let i = 0; i < chromaticScale.length; i++) {
            if (chromaticScale[i] === noteValue) {
                noteIndex = i;
                break;
            }
        }

        for (let i = 0; i < noteIndex; i++) {
            chromatic.rotateLeft();
        }

        return chromatic.source;
    }

    getString(scale: IScale, noteValue: string, chromaticScale: string[]) {
        let chromatic = makeIterable(this.rotateScaleToNote(noteValue, chromaticScale));
        let str: IString = {
            isInScale: scale.notes.indexOf(noteValue) >= 0,
            isRoot: scale.root === noteValue,
            tuning: chromatic.rotateLeft(),
            frets: []
        };

        for (let i = 1; i <= 24; i++) {
            let fret: IFret = {
                fretNumber: i,
                noteValue: chromatic.rotateLeft(),
                isInScale: false,
                isRoot: false
            };

            fret.isInScale = scale.notes.indexOf(fret.noteValue) >= 0;
            fret.isRoot = scale.root === fret.noteValue;

            str.frets.push(fret);
        }

        return str;
    }

    getChromaticForScale(scale: IScale): string[] {
        let chromatic = Object.assign([], this.chromaticScale);
        let chromaticScale: string[] = [];
        let noteIndex = -1;
        chromatic.forEach((n: string[]) => {
            if (n.length > 1) {
                let note = (n[0].includes(scale.accidental)) ? n[0] : n[1];
                chromaticScale.push(note);
            } else {
                chromaticScale.push(n[0]);
            }
        });

        for (let i = 0; i < chromaticScale.length; i++) {
            if (chromaticScale[i] === scale.root) {
                noteIndex = i;
                break;
            }
        }

        let cs = makeIterable(chromaticScale);
        for (let i = 0; i < noteIndex; i++) {
            cs.rotateLeft();
        }
        return cs.source;
    }
}
