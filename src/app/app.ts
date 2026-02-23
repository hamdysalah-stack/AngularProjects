import { Account } from './account/account';
import { CourseCard } from './cousre-card/cousre-card';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  computed,
  DoCheck,
  effect,
  EffectRef,
  ElementRef,
  OnInit,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { COURSES } from './Data/db-data';
import { EmployeeServices } from './Services/employee-services';
import { single } from 'rxjs';
import { CounterServices } from './counter-services';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements AfterViewInit, OnInit, DoCheck {
  title: string = 'full demo';

  @ViewChild(CourseCard) card!: CourseCard; //deal with cared compoent can access method and propert
  @ViewChild('cardTwoRef') card2!: CourseCard;
  @ViewChild('refContainer') Container!: ElementRef;
  @ViewChild('cardTwoRef', { read: ElementRef }) card3!: ElementRef; // can access it with htmlelemnt
  @ViewChildren(CourseCard) cards!: QueryList<CourseCard>;
  @ViewChildren(CourseCard, { read: ElementRef }) cardshtml!: QueryList<ElementRef>;
  employeeActivAted: boolean = false;
  effectref: EffectRef;

  Accounts = [
    {
      name: 'MAster Account',
      status: 'Active',
    },
    {
      name: 'Test Account',
      status: 'UnActive',
    },
    {
      name: 'Hidden Account',
      status: 'Unkown',
    },
  ];

  constructor(
    private EmployeeServices: EmployeeServices,
    private cd: ChangeDetectorRef,
    public CounterServices: CounterServices,
  ) {
    // console.log("constructor course card ", this.card)
    // const readOnlySignal = this.counter.asReadonly();

    this.effectref = effect(
      () => {
        const counterValue = this.CounterServices.counter();
        const derivedCounter = this.derviedCounter();
        console.log(`counter vlaue is ${counterValue} the derivied counter id  ${derivedCounter}`);
        localStorage.setItem('counter value', counterValue.toString());
      },
      {
        manualCleanup: true,
      },
    );
  }
  ngDoCheck(): void {
    this.cd.markForCheck();
  }
  ngOnInit(): void {
    this.EmployeeServices.ActivatedEmitter.subscribe((data) => {
      this.employeeActivAted = data;
    });
  }
  ngAfterViewInit(): void {
    // console.log("constructor course card ", this.card)
  }

  // coreCourse1 = COURSES[0]
  // coreCourse2 = COURSES[1]
  // coreCourse3 = COURSES[2]
  Courses = COURSES;
  TotalCourses = this.Courses.length;
  // oncardClicked(){
  //   console.log("cliked card");
  // }

  OncourseSelected(cousre: any) {
    // console.log("card clicked")
    // console.log(  cousre)
    // console.table(cousre);
    // console.log(this.card)
    // console.log(  "card two",this.card2)
    // console.log(  "Container",this.Container)
    // console.log(  "card two",this.card3)
    // console.log(  "cards",this.cards)
    console.log('cards', this.cardshtml);
  }
  onToggleHighlight(state: boolean) {
    console.log('highlight state:', state);
  }

  OnviewbyId(id: number) {
    console.log('ID received from child:', id);

    alert('You selected course with ID: ' + id);
  }

  //#region
  serverElements: any = [{ type: 'server', name: 'Test server', content: 'this is test' }];

  onAddServer(ServerData: { servername: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: ServerData.servername,
      content: ServerData.serverContent,
    });
  }

  onAddblueprint(ServerData: { servername: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: ServerData.servername,
      content: ServerData.serverContent,
    });
  }

  OnchangeFirst() {}
  //#endregion

  //#region Services

  OnAccountAdded(newAccount: { name: string; status: string }) {
    this.Accounts.push(newAccount);
  }

  OnStatusChanged(UpdatedInfo: { id: number; newStatus: string }) {
    this.Accounts[UpdatedInfo.id].status = UpdatedInfo.newStatus;
  }
  //#endregion

  //  .......................................................
  OnEditCourse() {
    //shallow copy
    const course = this.Courses[0];
    const newCourse = { ...course };
    newCourse.description = 'Angular Core Deep Dive wlecome hamdy';
    this.Courses[0] = newCourse;
  }

  //..........................................................
  //signals
  //mutable js value what is mean i can change this property
  // counter: number = 0;
  counter = signal(0);
  multiplier: number = 0;
  //signals depend on another Singals
  derviedCounter = computed(() => {
    //dependency
    const counter = this.CounterServices.counter();
    if (this.multiplier > 10) {
      // const counter = this.counter();
      return counter * 10;
    } else {
      return 0;
    }
  });

  increment() {
    // this.counter++;

    //two mehod to change counter using set api or update Api
    // this.counter.set(this.counter() + 1);
    // this.counter.update((value) => value + 1);
    // this.course().title = 'new Course';
    // this.newCourses().push('new diploma');

    this.CounterServices.increamnt();
    this.course.set({
      id: 1,
      title: 'new Course after Update',
    });
    this.newCourses.update((course) => [...course, 'new Course after Update Array']);
  }
  course = signal({
    id: 1,
    title: 'Full diploma with Hamdy salah',
  });

  newCourses = signal(['Angular baiscs', 'Angular Advanced', 'Angular IntermidSate']);

  MultiplierIncreament() {
    this.multiplier++;
  }
  CleanUp() {
    this.effectref.destroy();
  }
}
