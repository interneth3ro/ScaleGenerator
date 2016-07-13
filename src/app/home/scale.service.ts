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
    chromaticScale = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
    tunings: any = {
        standard: ['E', 'B', 'G', 'D', 'A', 'E'],
        dropD: ['E', 'B', 'G', 'D', 'A', 'D'],
        dropC: ['D', 'A', 'F', 'C', 'G', 'C'],
        dropA: ['D', 'A', 'F', 'C', 'G', 'A'],
        openC: ['E', 'C', 'G', 'C', 'G', 'C']
    };

    determineScale(note: string, mode: string): string[] {
        let notes = makeIterable(this.getChromaticForNote(note));
        let steps: string[] = this.getStepsForMode(mode);
        let scale: string[] = [notes.rotateLeft()];
        for (let i = 0; i < steps.length; i++) {
            let step = steps[i];
            let note = notes.rotateLeft();
            if (step === 'W') {
                note = notes.rotateLeft();
            } else if (step === 'WH') {
                note = notes.rotateLeft();
            }

            scale.push(note);
        }

        // The result will include the octave, which we don't need
        return scale.slice(0, -1);
    }
    
    getStepsForMode(mode): string[] {
        switch (mode) {
            case 'Major':
                return 'W-W-H-W-W-W-H'.split('-');
            case 'Minor':
                return 'W-H-W-W-H-W-W'.split('-');
            case 'Dorian':
                return 'W-H-W-W-W-H-W'.split('-');
            case 'Phrygian':
                return 'H-W-W-W-H-W-W'.split('-');
            case 'Lydian':
                return 'W-W-W-H-W-W-H'.split('-');
            case 'Mixolydian':
                return 'W-W-H-W-W-H-W'.split('-');
            case 'Locrian':
                return 'H-W-W-H-W-W-W'.split('-');
            default:
                return 'W-W-H-W-W-W-H'.split('-');
        }
    }

    getStrings(scaleConfig: IScaleConfig): IString[] {
        let strings: IString[] = [];
        let scale = this.determineScale(scaleConfig.note, scaleConfig.mode);
        for (let i = 0; i < scaleConfig.tuning.notes.length; i++) {
            strings.push(this.getString(scaleConfig.tuning.notes[i], scale));
        }

        return strings;
    }

    getString(noteValue: string, scale: any): IString {
        let notes = makeIterable(this.getChromaticForNote(noteValue));
        let str: IString = {
            isInScale: scale.indexOf(noteValue) >= 0,
            tuning: notes.rotateLeft(),
            frets:[]
        };

        for (let i = 1; i <= 24; i++) {
            let fret: IFret = {
                fretNumber: i,
                noteValue: notes.rotateLeft(),
                isInScale: false
            };

            fret.isInScale = scale.indexOf(fret.noteValue) >= 0;
            str.frets.push(fret);
        }
        
        return str;
    }

    // This simply shifts the master chromatic scale so that it starts
    // on the note of our open string
    getChromaticForNote(noteValue: string): string[] {
        let chromatic = Object.assign([], this.chromaticScale);
        let noteIndex: number = -1;
        for (let i = 0; i < chromatic.length; i++) {
            if (chromatic[i].indexOf('/') > 0) {
                let notes = chromatic[i].split('/');
                if (notes[0] === noteValue || notes[1] === noteValue) {
                    noteIndex = i;
                    break;
                }
            } else {
                if (chromatic[i] === noteValue) {
                    noteIndex = i;
                    break;
                }
            }
        }

        chromatic = makeIterable(chromatic);
        for (let i = 0; i < noteIndex; i++) {
            chromatic.rotateLeft();
        }
        return chromatic.source;
    }

    getModes(): string[] {
        return ['Major', 'Minor', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Locrian'];
    }
}
