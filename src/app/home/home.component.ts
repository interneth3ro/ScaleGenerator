import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { GuitarService} from './guitar.service';
import { ScaleService } from './scale.service';
import { makeIterable } from './makeIterable';
import * as _ from 'underscore'; 

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
  scales: IScale[];
  selectedScale: string;
  modes: IMode[];
  selectedMode: IMode;
  scalePositions: IScalePosition[];
  selectedScalePosition: IScalePosition = { name: '', scalePositionStrings: [] };
  strings: IString[] = [];
  scaleConfig: IScaleConfig;
  displayScale: any;
  
  constructor(private _scaleService: ScaleService, private _guitarService: GuitarService) {
    this.guitars = this._guitarService.getGuitars();
    this.selectedGuitar = this.guitars[0];
    this.tunings = this.selectedGuitar.tunings;
    this.selectedTuning = this.tunings[0];
    this.scales = this._scaleService.getScales();
    this.selectedScale = this.scales[0].name;
    this.modes = this.scales[0].modes;
    this.selectedMode = this.modes[0];
    this.scalePositions = this.scales[0].scalePositions;
    this.scaleConfig = {
      guitar: this.selectedGuitar,
      tuning: this.selectedTuning,
      scale: this.scales.find(scale => {
        return scale.name === this.selectedScale
      })
    };

    this.getStrings();
  }

  getStrings() {
    this.scaleConfig = {
      guitar: this.selectedGuitar,
      tuning: this.selectedTuning,
      scale: this.scales.find(scale => {
        return scale.name === this.selectedScale;
      })
    };
    this.scaleConfig.scale.root = this.selectedMode.root;

    this.displayScale = makeIterable(this._scaleService.rotateScaleToNote(this.selectedMode.root, this.scaleConfig.scale.notes));
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

  selectMode(mode) {
    this.selectedMode = mode;
    this.getStrings();
  }

  selectScalePosition(scalePosition) {
    this.selectedScalePosition = scalePosition;
    this.getScalePosition();
  }

  getScalePosition(): void {
    this.clearFrets();
    for (let i = 0; i < this.selectedScalePosition.scalePositionStrings.length; i++) {
      var spString = this.selectedScalePosition.scalePositionStrings[i];
      var str = this.strings[i];
      spString.scalePositionFrets.forEach((spFret: IScalePositionFret) => {
        var fret = _.findWhere(str.frets, { fretNumber: spFret.fret });
        fret.isInScale = true;
        fret.isRoot = spFret.note === this.scaleConfig.scale.root;
      });
    }
  }

  clearFrets(): void {
    this.strings.forEach((str: IString) => {
      str.frets.forEach((fret: IFret) => {
        fret.isInScale = false;
        fret.isRoot = false;
      });
    });
  }

  onSubmit() {
    let scale = this.scales.find(scale => {
      return scale.name === this.selectedScale;
    });

    this.modes = scale.modes;
    this.selectedMode = this.modes[0];

    this.getStrings();
  }
}
