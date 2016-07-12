import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { GuitarService} from './guitar.service';
import { ScaleService } from './scale.service';

@Component({
  selector: 'home',
  providers: [ScaleService, GuitarService],
  directives: [],
  pipes: [],
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})
export class Home {
  guitars: IGuitar[];
  tunings: ITuning[];
  selectedGuitar: IGuitar;
  selectedTuning: ITuning;
  currentTuning: string = 'standard';
  notes: string[];
  selectedNote: string;
  modes: string[];
  selectedMode: string;
  strings: IString[] = [];
  scaleConfig: IScaleConfig;
  
  constructor(private _scaleService: ScaleService, private _guitarService: GuitarService) {
    this.guitars = this._guitarService.getGuitars();
    this.selectedGuitar = this.guitars[0];
    this.tunings = this.selectedGuitar.tunings;
    this.selectedTuning = this.tunings[0];

    this.notes = this._scaleService.getChromaticForNote('E');
    this.selectedNote = this.notes[0]
    this.modes = this._scaleService.getModes();
    this.selectedMode = this.modes[0];
    
    this.getStrings();
  }

  getStrings() {
    this.scaleConfig = {
      guitar: this.selectedGuitar,
      tuning: this.selectedTuning,
      note: this.selectedNote,
      mode: this.selectedMode,
    };

    this.strings = this._scaleService.getStrings(this.scaleConfig);
  }

  onGuitarChange(guitar) {
    this.selectedGuitar = guitar;
    this.tunings = this.selectedGuitar.tunings;
    this.selectedTuning = this.tunings[0];
  }

  onTuningChange(tuning) {
    this.selectedTuning = tuning;
  }

  onSubmit(form) {
    this.getStrings();
  }
}
