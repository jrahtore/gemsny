import { Directive, Output, EventEmitter, ElementRef, HostListener } from "@angular/core";
import { Subject } from 'rxjs';

@Directive({
  'selector': '[clickOutside]'
})

export class ClickOutsideDirective {
  @Output() clickOutside = new Subject;
  constructor(private elementRef: ElementRef) { }
  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {

      this.clickOutside.next(event);
    }
  }
}
