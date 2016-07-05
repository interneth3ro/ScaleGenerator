import { Injectable } from '@angular/core';

@Injectable()
export class StringService {
    tunings:any = {
        standard: ['E', 'B', 'G', 'D', 'A', 'E'],
        dropD: ['E', 'B', 'G', 'D', 'A', 'D'],
        dropC: ['D', 'A', 'F', 'C', 'G', 'C'],
        openC: ['E', 'C', 'G', 'C', 'G', 'C']
    }

    getStrings(tuning:string):IString[] {
        var currentTuning = this.tunings[tuning];
        var strings:IString[] = [];
        for (var i = 0; i < currentTuning.length; i++) {
            strings.push(this.getString(currentTuning[i]));
        }

        return strings;
    }

    getString(tuning:string):IString {
        let notes = this.getNotesForString(tuning);
        
        let string:IString = {
            isInScale: false,
            tuning:notes.rotateLeft(),
            frets:[]
        };

        for (var i = 1; i <=24; i++) {
            string.frets.push({
                fretNumber: i,
                noteValue: notes.rotateLeft(),
                isInScale: false
            });
        }

        return string;
    }

    getNotesForString(note):string[] {
        switch (note) {
            case 'A':
                return ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
            case 'A#':
            case 'Bb':
                return ['A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A'];
            case 'B':
                return ['B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb'];
            case 'C':
                return ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
            case 'C#':
            case 'Db':
                return ['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C'];
            case 'D':
                return ['D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db'];
            case 'D#':
            case 'Eb':
                return ['D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D'];
            case 'E':
                return ['E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb'];
            case 'F':
                return ['F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E'];
            case 'F#':
            case 'Gb':
                return ['F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F'];
            case 'G':
                return ['G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb'];
            case 'G#':
            case 'Ab':
                return ['G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G'];
            default:
                return ['Invalid note'];
        }
    }
}