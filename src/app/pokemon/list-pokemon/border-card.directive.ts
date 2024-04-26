import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]',
  standalone: true,
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
    // this.putItInBold('bold');
  }

  @Input('pokemonBorderCard') borderColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
  putItInBold(fontweight: string) {
    this.el.nativeElement.style.fontWeight = fontweight;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = 'solid 4px ' + color;
  }
}
