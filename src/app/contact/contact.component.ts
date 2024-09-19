import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment'; 


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  constructor() {}

  onSubmit() {
    let templateParams = {
      from_name: this.contact.name,
      from_email: this.contact.email,
      message: this.contact.message
    };
    // Envoi du formulaire avec EmailJS en utilisant les identifiants stockés dans l'objet environment
    emailjs.send(environment.emailjsServiceId, environment.emailjsTemplateId, templateParams, environment.emailjsUserId)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Votre message a été envoyé avec succès !');
    }, (err) => {
      console.log('FAILED...', err);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    });
  }
}


