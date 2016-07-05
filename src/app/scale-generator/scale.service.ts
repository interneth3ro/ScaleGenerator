import { Injectable } from '@angular/core';

@Injectable()
export class ScaleService {
    chromaticScale = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
    tunings: any = {
        standard: ['E', 'B', 'G', 'D', 'A', 'E'],
        dropD: ['E', 'B', 'G', 'D', 'A', 'D'],
        dropC: ['D', 'A', 'F', 'C', 'G', 'C'],
        openC: ['E', 'C', 'G', 'C', 'G', 'C']
    };

    getScale(scaleName: IScale): IString[] {
        let strings = this.getStrings(scaleName.stringTuning);
        let scale = this.determineScale(scaleName);
        
        strings.forEach((string: IString) => {
            if (scale.indexOf(string.tuning)) {
                string.isInScale = true;
            }

            string.frets.forEach((fret: IFret) => {
                if (scale.indexOf(fret.noteValue)) {
                    fret.isInScale = true;
                }
            });
        });

        return strings;
    }

    determineScale(scaleName: IScale): string[] {
        let notes: string[] = this.getChromaticForNote(scaleName.name);
        let steps: string[] = this.getStepsForMode(scaleName.mode).split('-');
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
    
    getStepsForMode(mode): string {
        switch (mode) {
            case 'Major':
                return 'W-W-H-W-W-W-H';
            case 'Minor':
                return 'W-H-W-W-H-W-W';
            case 'Dorian':
                return 'W-H-W-W-W-H-W';
            case 'Phrygian':
                return 'H-W-W-W-H-W-W';
            case 'Lydian':
                return 'W-W-W-H-W-W-H';
            case 'Mixolydian':
                return 'W-W-H-W-W-H-W';
            case 'Locrian':
                return 'H-W-W-H-W-W-W';
            default:
                return 'W-W-H-W-W-W-H';
        }
    }

    getStrings(stringTuning: string): IString[] {
        let strings: IString[] = [];
        let tuning = this.tunings[stringTuning];
        for (let i = 0; i < tuning.length; i++) {
            strings.push(this.getString(tuning[i]));
        }

        return strings;
    }

    getString(noteValue: string): IString {
        let notes = this.getChromaticForNote(noteValue);
        let str: IString = {
            isInScale: false,
            tuning: notes.rotateLeft(),
            frets:[]
        };

        for (let i = 1; i <= 24; i++) {
            str.frets.push({
                fretNumber: i,
                noteValue: notes.rotateLeft(),
                isInScale: false
            });
        }
        
        return str;
    }

    // This simply shifts the master chromatic scale so that it starts
    // on the note of our open string
    getChromaticForNote(noteValue: string): string[] {
        let chromatic: string[] = Object.assign([], this.chromaticScale);
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

        for (let i = 0; i < noteIndex; i++) {
            chromatic.rotateLeft();
        }
        return chromatic;
    }

    getModes(): string[] {
        return ['Major', 'Minor', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Locrian'];
    }

    clearScale(strings: IString[]): IString[] {
        strings.forEach((string: IString) => {
            string.isInScale = false;

            string.frets.forEach((fret: IFret) => {
                fret.isInScale = false;
            });
        });

        return strings;
    }
}
