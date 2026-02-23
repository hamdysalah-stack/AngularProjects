import {
  AfterContentInit,
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  contentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Icourse } from '../../Interface/course';
import { required } from '@angular/forms/signals';
import { CourseImage } from '../course-image/course-image';

@Component({
  selector: 'app-cousre-card',
  standalone: false,
  templateUrl: './cousre-card.html',
  styleUrl: './cousre-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCard implements AfterViewInit, AfterContentInit {
  //  @Input({required:true}) title!:string;
  // @Input({required:true}) course!:Icourse
  @Input() course!: Icourse;
  @Output() courselected = new EventEmitter<Icourse>();
  // @ContentChild('courseImg') image:any;
  @ContentChild(CourseImage) Image: any;
  @ContentChildren(CourseImage) Imagesany: any;
  @ContentChildren(CourseImage) Images!: QueryList<CourseImage>; // read as compoent
  @ContentChildren(CourseImage, { read: ElementRef }) Imageref!: QueryList<ElementRef>; // read as htmlelement

  @Input() noImagetemplate!: TemplateRef<any>;

  constructor(@Attribute('level') private level: string) {
    console.log('level', level);
  }

  ngAfterViewInit(): void {
    //  console.log('course image', this.image)
    console.log('course image', this.Image);
  }

  ngAfterContentInit(): void {
    console.log('course imageany', this.Imagesany);
    console.log('course imagequertlist', this.Images);
    console.log('course imagequertlistref', this.Imageref);
  }
  Oncourseviewed() {
    console.log('button course viewd clicked');
    this.courselected.emit(this.course);
  }

  @Output() courseIDselected = new EventEmitter<number>();
  Onviewdbyid() {
    console.log('clicked course by id');
    this.courseIDselected.emit(this.course.id);
  }

  //change dectections
  Ontitlechanged(newtitle: string) {
    this.course.description = newtitle;
  }
}
