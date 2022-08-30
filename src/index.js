import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { stateControl, blueFood, feed, hydrate, superWater, light, wonderfulLight} from './js/plant';

$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
  
  $('#blueFood').click(function() {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#soil').click(function() {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#water').click(function() {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#superWater').click(function() {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#light').click(function() {
    const newState = stateControl(light);
    $('#light-value').text(`Light: ${newState.light}`);
  });

  $('#wonderfulLight').click(function() {
    const newState = stateControl(wonderfulLight);
    $('#light-value').text(`Light: ${newState.light}`);
  });
    
  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#show-state').text(`Soil: ${currentState.soil}, Water: ${currentState.water}, Light: ${currentState.light}`);
  });
});