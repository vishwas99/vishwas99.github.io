import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // This page is for the home page of the portfolio website
  // It will contain a brief introduction to the website and the creator
  // It will also contain a list of the projects that the creator has worked on
  // It will also contain a list of the skills that the creator has

  // Variables
  name: string = "K.H.Vishwas";
  dob: string  = "16/05/1999";
  email: string = "vishwasravali@gmail.com";
  linkedIn: string = "https://www.linkedin.com/in/vishwas-k-h-bb6a98189/";
  gitHub: string = "https://github.com/vishwas99";
  twitter: string = "https://x.com/khvat99"
  projects: string[] = ["Project 1", "Project 2", "Project 3"];
  skills: string[] = ["Skill 1", "Skill 2", "Skill 3"];

  @ViewChild('skillSet') skillSetRef!: ElementRef;
  @ViewChild('projects') projectsRef!: ElementRef;
  @ViewChild('experience') experienceRef!: ElementRef;
  @ViewChild('letsconnect') letsconnectRef!: ElementRef;
  @ViewChild('home') homeRef!: ElementRef;




  constructor() {
    this.skillSetRef = new ElementRef(null);
  }

  ngOnInit() {
  }

  scrollToDiv(divName: string): void {
    console.log("Scrolling to div", this.skillSetRef);
    if(divName === 'skillSet'){
      this.skillSetRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else if(divName === 'projects'){
      console.log("Scrolling to project set");
      this.projectsRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else if(divName === 'experience'){
      this.experienceRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else if(divName === 'letsconnect'){
      this.letsconnectRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else if(divName === 'home'){
      this.homeRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }

  redirect(link: string){
    if(link == "linkedin"){
      // Open linkedin in new tab
      window.open(this.linkedIn, "_blank");
    }else if(link == "gitHub"){
      // Open github in new tab
      window.open(this.gitHub, "_blank");
    }else if(link == "mail"){
      // Open email in new tab
      window.open("mailto:"+this.email, "_blank");
    }else if(link == "discord"){
      // Open discord in new tab
      window.open("https://discord.com/channels/@me", "_blank");
    }else if(link == "Insta"){
      // Open instagram in new tab
      window.open("https://www.instagram.com/", "_blank");
    }else if(link == "twitter"){
      // Open twitter in new tab
      window.open("https://twitter.com/", "_blank");
    }
  }

}
