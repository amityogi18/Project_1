import { trigger, state, style, transition, animate, group, AnimationTriggerMetadata } from '@angular/animations';

/**
 * The SlideInOutAnimation
 *
 * Animation for the sidebar.
 * TODO: Currently this is not hooked up. Either delete, or use as a referece for animations.
 */
export const SlideInOutAnimation: AnimationTriggerMetadata = trigger('slideInOut', [
      state('in', style({
          'width': '100%'
      })),
      state('out', style({
          'width': '0px',
      })),
      transition('in => out', [group([
          animate('400ms ease-in-out', style({
          'width': '0px',
          }))
      ]
      )]),
      transition('out => in', [group([
          animate('400ms ease-in-out', style({
              'width': '100%'
          }))
      ]
      )])
  ]);
