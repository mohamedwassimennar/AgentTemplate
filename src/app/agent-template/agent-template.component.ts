import { Component } from '@angular/core';

@Component({
  selector: 'app-agent-template',
  templateUrl: './agent-template.component.html',
  styleUrls: ['./agent-template.component.css']
})
export class AgentTemplateComponent {

  customer: string = '';
  itFrom: string = '';
  reported: string = '';
  customerReported: string = '';
  currentState: string = '';
  testPerformed: string = '';
  damagedParts: string = '';

  repairType: string = '';
  partSended: string = '';

  depotRepairConfirmed: boolean = false;

  generatedText: string = '';


  generateTemplate(): void {

    const sections: string[] = [];


    if (this.customer.trim() !== '') {

      sections.push(
        `Customer: ${this.customer.trim()}`
      );

    }

    if (this.itFrom.trim() !== '') {

      sections.push(
        `IT from: ${this.itFrom.trim()}`
      );

    }

    if (this.reported.trim() !== '') {

      sections.push(
        `Reported: ${this.reported.trim()}`
      );

    }


    if (this.customerReported.trim() !== '') {

      sections.push(
        `Customer reported that:\n${this.customerReported.trim()}`
      );

    }


    if (this.currentState.trim() !== '') {

      sections.push(
        `The current state of the machine:\n${this.currentState.trim()}`
      );

    }


    if (this.testPerformed.trim() !== '') {

      sections.push(
        `Test performed:\n${this.testPerformed.trim()}`
      );

    }


    if (this.damagedParts.trim() !== '') {

      sections.push(
        `List of damaged parts:\n${this.damagedParts.trim()}`
      );

    }


    if (this.repairType.trim() !== '') {

      sections.push(
        `I set up: ${this.repairType.trim()}`
      );


      if (
        this.repairType === 'An offsite repair' &&
        this.depotRepairConfirmed
      ) {

        sections.push(
          `Even if the warranty allows customers an onsite intervention, Customer opted for a depot repair to perform diagnosis and repair all defective parts!`
        );

      }


      if (
        this.repairType === 'A CSR' &&
        this.partSended.trim() !== ''
      ) {

        sections.push(
          `Part sended:\n${this.partSended.trim()}`
        );

      }

    }


    this.generatedText =
      sections.join('\n\n');

  }


  copyTemplate(): void {

    if (this.generatedText === '') {
      return;
    }

    navigator.clipboard
      .writeText(this.generatedText)

      .then(() => {

        alert('Template copied successfully!');

      })

      .catch(() => {

        alert('Unable to copy the template.');

      });

  }

  clearForm(): void {

    this.customer = '';

    this.itFrom = '';

    this.reported = '';

    this.customerReported = '';

    this.currentState = '';

    this.testPerformed = '';

    this.damagedParts = '';

    this.repairType = '';

    this.partSended = '';

    this.depotRepairConfirmed = false;

    this.generatedText = '';

  }

}