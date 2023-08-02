import { Component } from '@angular/core';
import { FaIconComponent , FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faInfo, faCheck, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  // scanner:any = "../../../assets/images/scanner.jpg";
  // echographie:any = "../../../assets/images/echographie.jpg";
  // IRM:any = "../../../assets/images/IRM.jpg";
  // consultation:any = "../../../assets/images/consultation.jpg";
  // radiographie:any = "../../../assets/images/radiographie.jpg";
  // mammographie:any = "../../../assets/images/Mammographie.jpg";
  scanner: any = "./assets/images/scanner.jpg";
  echographie: any = "./assets/images/echographie.jpg";
  IRM: any = "./assets/images/IRM.jpg";
  consultation: any = "./assets/images/consultation.jpg";
  radiographie: any = "./assets/images/radiographie.jpg";
  mammographie: any = "./assets/images/Mammographie.jpg";
  
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

  squellete:any = "../../../assets/images/squellete.jpg"

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
