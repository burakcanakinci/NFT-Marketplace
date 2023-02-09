import { Component, Directive, ElementRef, HostListener, Pipe, PipeTransform, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements AfterViewInit {
  @ViewChild('value') value!: ElementRef
  color: string = '#ffffff';
  message: string = 'message';
  transformedMessage: string = this.message;

  constructor(private route: Router, private common: CommonService) {}

  addData() {
    let randomize = Array.from({length: 5}, () => Math.floor(Math.random() * 21));
    this.common.addData(randomize); 
  }

  ngAfterViewInit(): any {
    
  }

  @ViewChild('clickedButton') clickedButton!: ElementRef
  // @HostListener('click', ['$event'])
  onClick(e: MouseEvent): void {
    console.log('clicked', this.clickedButton.nativeElement);
  }
  @HostListener('focus', ['$event'])
  onFocus(e: FocusEvent): void {
    console.log('focused', e);
  }
  
  transform() {
    this.transformedMessage = this.message.split('').reverse().join('');
  }
  reset() {
    this.transformedMessage = this.message;
  }
  
}

// custom pipes

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
@Pipe({
  name: 'hexToRgb'
})
export class HexToRgbPipe implements PipeTransform {
  transform(value: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : value;
  }
}

// custom directives

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
