import {Component} from '@angular/core';
import { NgForm } from '@angular/common';
import { StringService } from './string.service';
import { ScaleService } from './scale.service';

@Component({
    selector: 'scale-generator',
    providers: [StringService, ScaleService],
    directives: [],
    pipes: [],
    styleUrls: ['./scale.generator.style.css'],
    templateUrl: './scale.generator.template.html'
})
export class ScaleGenerator {
    currentTuning:string = 'standard';
    strings:IString[] = [];
    model = {
        tuning: 'standard',
        scale: 'EMaj'
    };

    constructor(public stringService: StringService, public scaleService: ScaleService) {
        this.strings = this.stringService.getStrings(this.currentTuning);
    }

    onSubmit(form) {
        this.strings = this.stringService.getStrings(form.value.tuning);
        this.strings = this.scaleService.setScale(form.value.scale, this.strings);
    }
}