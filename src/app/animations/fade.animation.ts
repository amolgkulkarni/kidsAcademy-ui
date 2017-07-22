//import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
 
export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [
      transition('void => *', [style({opacity: '0.2'}), animate('500ms ease-in')]),
    ]);