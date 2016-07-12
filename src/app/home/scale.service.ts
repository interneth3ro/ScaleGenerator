import { Injectable } from '@angular/core';

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

    getScale(scaleName: IScale): IString[] {
        let strings = this.getStrings(scaleName.stringTuning);
        let scale = this.determineScale(scaleName);
        
        strings.forEach((string: IString) => {
            if (scale.indexOf(string.tuning) >= 0) {
                string.isInScale = true;
            }

            string.frets.forEach((fret: IFret) => {
                if (scale.indexOf(fret.noteValue) >= 0) {
                    fret.isInScale = true;
                }
            });
        });

        return strings;
    }

    determineScale(note: string, mode: string): string[] {
        let notes: string[] = this.getChromaticForNote(note);
        let steps: string[] = this.getStepsForMode(mode).split('-');
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

    getStrings(scaleConfig: IScaleConfig): IString[] {
        let strings: IString[] = [];
        let scale = this.determineScale(scaleConfig.note, scaleConfig.mode);
        console.log(scale);
        for (let i = 0; i < scaleConfig.tuning.notes.length; i++) {
            strings.push(this.getString(scaleConfig.tuning.notes[i], scale));
        }

        return strings;
    }

    getString(noteValue: string, scale: any): IString {
        let notes = this.getChromaticForNote(noteValue);
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
}
