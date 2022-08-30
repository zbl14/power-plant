import { stateControl, storeState, blueFood, feed, hydrate, superWater } from '../src/js/plant';

describe('stateControl', () => {

  let reusableState;

  beforeEach(() => {
    reusableState = { soil: 0, light: 0, water: 0 };
  });

  test('should return current state of the plant', () => {
    expect(stateControl()).toEqual({ soil: 0, light: 0, water: 0 });
  });

  test('should add 1 to soil', () => {

    const newState = stateControl(feed);
    expect(newState.soil).toEqual(1);
  });

  test('should add 5 to soil, soil equals to 6', () => {

    const newState = stateControl(blueFood);
    expect(newState.soil).toEqual(6);
  });

  test('should add 1 to water', () => {

    const newState = stateControl(hydrate);
    expect(newState.water).toEqual(1);
  });

  test('should add 5 to water, water equals to 6', () => {

    const newState = stateControl(superWater);
    expect(newState.water).toEqual(6);
  });
});