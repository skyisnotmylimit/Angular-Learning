import { ChangeDetectionStrategy, Component,input } from '@angular/core';
import { OnChanges,OnDestroy,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-methods',
  imports: [],
  templateUrl: './lifecycle-methods.html',
  styleUrls: ['./lifecycle-methods.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifecycleMethods implements OnChanges, OnDestroy, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  inputFromParent = input.required<string>();
  constructor() {
    console.log('Constructor called');
  }
  ngOnChanges() {
    console.log('ngOnChanges called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
}
