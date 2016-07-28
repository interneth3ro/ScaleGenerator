import { Injectable } from '@angular/core';

@Injectable()
export class GuitarService {
    getGuitars(): IGuitar[] {
        return [{
            name: '6 String',
            tunings: [{
                name: 'Standard',
                notes: ['E', 'B', 'G', 'D', 'A', 'E']
            }, {
                name: 'Drop D',
                notes: ['E', 'B', 'G', 'D', 'A', 'D']
            }, {
                name: 'Drop C',
                notes: ['D', 'A', 'F', 'C', 'G', 'C']
            }, {
                name: 'Drop A',
                notes: ['D', 'A', 'F', 'C', 'G', 'A']
            }, {
                name: 'Open C',
                notes: ['E', 'C', 'G', 'C', 'G', 'C']
            }, {
                name: 'C6 Pedal Steel',
                notes: ['E', 'C', 'A', 'G', 'E', 'C']
            }]
        }, {
            name: '7 String',
            tunings: [{
                name: 'Standard',
                notes: ['E', 'B', 'G', 'D', 'A', 'E', 'B']
            }, {
                name: 'Drop A',
                notes: ['E', 'B', 'G', 'D', 'A', 'E', 'A']
            }]
        }];
    }
}