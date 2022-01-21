import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Coding Challenge';
  num1!: number;
  num2!: number;
  num3!: number;
  num4!: number;
  num5!: number;
  maxValue!: number;
  minValue!: number;
  msg!: string;
  e!: any;
  dred = 'The lowest number will be displayed in red';
  dgreen = 'The highest number will be displayed in green';

  clickEvent(e: { preventDefault: () => void }) {
    this.msg = 'Please wait 10 seconds, currently sorting numbers';

    setTimeout(() => {
      this.msg = '';
      //alle eingaben in einem Array speichern
      const total = [this.num1, this.num2, this.num3, this.num4, this.num5];
      
      //Min&Max berechnen
      const calcMin = Math.min(...total);
      const calcMax = Math.max(...total);

      //Min&Max-Stelle im total-array herausfinden
      const minIndex = total.indexOf(calcMin);
      const maxIndex = total.indexOf(calcMax);

      //kleinste Zahl rot einfärben
      if (minIndex === 0)
        document.getElementById(`number1`)!.style.backgroundColor = 'red';
      else
        document.getElementById(
          `number${minIndex + 1}`
        )!.style.backgroundColor = 'red';

      //größte Zahl grün einfärben
      if (maxIndex === 0)
        document.getElementById(`number1`)!.style.backgroundColor = 'green';
      else {
        document.getElementById(
          `number${maxIndex + 1}`
        )!.style.backgroundColor = 'green';
      }

      //text anpassen
      this.dred = 'The lowest number is displayed in red';
      this.dgreen = 'The highest number is displayed in red';
    }, 10000);
  }
}
