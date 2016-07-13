import {
    beforeEachProviders,
    inject,
    injectAsync,
    it
} from '@angular/core/testing';

import { ScaleService } from './scale.service';

describe('ScaleService', () => {
    beforeEachProviders(() => [ScaleService]);

    it('should return proper steps for Major scale', inject([ScaleService], (scaleService) => {
        let steps = scaleService.getStepsForMode('Major');
        expect(steps).toEqual(['W', 'W', 'H', 'W', 'W', 'W', 'H']);
    }));

    it('should return proper steps for Minor scale', inject([ScaleService], (scaleService) => {
        let steps = scaleService.getStepsForMode('Minor');
        expect(steps).toEqual(['W', 'H', 'W', 'W', 'H', 'W', 'W']);
    }));

    it('should return default steps for invalid value', inject([ScaleService], (scaleService) => {
        let steps = scaleService.getStepsForMode('Invalid');
        expect(steps).toEqual(['W', 'W', 'H', 'W', 'W', 'W', 'H']);
    }));

    it('should return the chromatic scale starting on E', inject([ScaleService], (scaleService) => {
        let chromatic = scaleService.getChromaticForNote('E');

        expect(chromatic).toEqual(['E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb']);
    }));

    it('should return the chromatic scale starting on Bb', inject([ScaleService], (scaleService) => {
        let chromatic = scaleService.getChromaticForNote('Bb');

        expect(chromatic).toEqual(['A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A']);
    }));

    it('should return the chromatic scale starting on C#', inject([ScaleService], (scaleService) => {
        let chromatic = scaleService.getChromaticForNote('C#');

        expect(chromatic).toEqual(['C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C']);
    }));

    it('should return the E Major scale', inject([ScaleService], (scaleService) => {
        let scale = scaleService.determineScale('E', 'Major');
        expect(scale).toEqual(['E', 'F#/Gb', 'G#/Ab', 'A', 'B', 'C#/Db', 'D#/Eb']);
    }));

    it('should return the F# Lydian scale', inject([ScaleService], (scaleService) => {
        let scale = scaleService.determineScale('F#', 'Lydian');
        expect(scale).toEqual(['F#/Gb', 'G#/Ab', 'A#/Bb', 'C', 'C#/Db', 'D#/Eb', 'F']);
    }));

    it('should return the Db Minor scale', inject([ScaleService], (scaleService) => {
        let scale = scaleService.determineScale('Db', 'Minor');
        expect(scale).toEqual(['C#/Db', 'D#/Eb', 'E', 'F#/Gb', 'G#/Ab', 'A', 'B']);
    }));
});
