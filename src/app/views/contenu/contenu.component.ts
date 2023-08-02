import { Component } from '@angular/core';
import { FaIconComponent , FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faInfo, faCheck, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css'],
  providers: [FaIconLibrary],

})
export class ContenuComponent {
  
  steps = [
    {
      label: 'Renseignements',
      icon: faInfo,
      size: 'lg'
    },
    {
      label: 'Choix',
      icon: faCheck,
      size: 'lg'
    },
    {
      label: 'Vos informations utilisateurs',
      icon: faUser,
      size: 'lg'
    },
    {
      label: 'Récapitulatif',
      icon: faClipboardList,
      size: 'lg'
    },
  ];

  squellete:any = "./assets/images/squellete.jpg";

  constructor(library: FaIconLibrary) {
    library.addIcons(faInfo, faCheck, faUser, faClipboardList, faFontAwesome);
  }
  
  getStepClass(index: number) {
    return {
      'stepper__step': true,
      'active': this.activeStep === index,
    };
  }

  activeStep: number = 0;

  setActiveStep(index: number) {
    this.activeStep = index;
  }

    getIconClass(index: number) {
      return `fa-icon-${index}`;
      }
    
  
}
