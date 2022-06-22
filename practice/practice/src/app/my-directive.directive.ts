import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  @HostListener('mouseenter') onMouseEnter(){
    console.log(this.myVar);
    
  }

  constructor(private element: ElementRef) { 
    this.myFunction("Hello");
    this.myVar
  }

  myVar = "cool"

  myFunction(args: string){
    console.log(args);
  }

}
