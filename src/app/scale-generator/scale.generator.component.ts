import {Component} from '@angular/core';
import { NgForm } from '@angular/common';
import { ScaleService } from './scale.service';

@Component({
    selector: 'scale-generator',
    providers: [ScaleService],
    directives: [],
    pipes: [],
    styleUrls: ['./scale.generator.style.css'],
    templateUrl: './scale.generator.template.html'
})
export class ScaleGenerator {
    currentTuning: string = 'standard';
    notes: string[];
    modes: string[];
    strings: IString[] = [];
    model = {
        tuning: 'standard',
        note: 'E',
        mode: 'Major'
    };

    constructor(public scaleService: ScaleService) {
        this.notes = this.scaleService.getChromaticForNote('E');
        this.modes = this.scaleService.getModes();
        this.strings = this.scaleService.getStrings(this.currentTuning);
    }

    onSubmit(form) {
        let scaleName: IScale = {
            name: form.value.note,
            mode: form.value.mode,
            stringTuning: form.value.tuning
        };
        this.strings = this.scaleService.getScale(scaleName);
    }
}