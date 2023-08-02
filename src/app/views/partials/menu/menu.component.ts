import { Component, OnInit, Input } from '@angular/core';
import { faInfo, faCheck, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [FaIconLibrary]
})

export class MenuComponent  {

  activeStep: number = 0;
  @Input() steps: any[] = [
    {
      label: 'Renseignements',
      icon: faInfo,
    },
    {
      label: 'Choix',
      icon: faCheck,
    },
    {
      label: 'Vos informations utilisateurs',
      icon: faUser,
    },
    {
      label: 'Récapitulatif',
      icon: faClipboardList,
    },
  ];

  constructor() { }

  handleStepClick(stepIndex: number): void {
    this.activeStep = stepIndex;
  }

  getStepClass(index: number) {
    return {
      'stepper__step': true,
      'active': this.activeStep === index,
    };
  }

  setActiveStep(index: number) {
    this.activeStep = index;
  }

    getIconClass(index: number) {
      return `fa-icon-${index}`;
      }
}
