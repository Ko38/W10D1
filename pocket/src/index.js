import warmUp from "./warmup";
import Clock from "./clock";
import {attachDogLinks} from "./drop_down";
import toDo from "./todo_list";
import slideScroll from "./slide_scroll";

let clock = new Clock(); 
let clockElement = document.getElementById('clock');
setInterval( () => {
  
  clock.printTime(clockElement);
}, 1000);



