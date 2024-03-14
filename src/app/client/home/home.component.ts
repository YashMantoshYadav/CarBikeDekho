import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  activeImageIndex = 0;
  images: string[] = [
    'assets/image/car7.png',
    'assets/image/car8.png',
    'assets/image/car9.png',
    'assets/image/car10.png',
    'assets/image/car11.png',
    'assets/image/car12.png',
    'assets/image/car13.png',
    'assets/image/car14.png',
  ];

  ngOnInit(): void {
    this.showImage(this.activeImageIndex);
  }


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const elements = document.querySelectorAll<HTMLElement>('.home-parallax');
    elements.forEach((element: HTMLElement) => {
      let speed = element.getAttribute('data-speed');
      let x = (window.innerWidth - event.pageX * Number(speed)) / 90;
      let y = (window.innerHeight - event.pageY * Number(speed)) / 90;
      element.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    const elements = document.querySelectorAll<HTMLElement>('.home-parallax');
    elements.forEach((element: HTMLElement) => {
      element.style.transform = `translateX(0px) translateY(0px)`;
    });
  }

  slides = [
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { img: "https://images.unsplash.com/photo-1692181415175-c1f7ecc826ae?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false, // Add this line for autoplay
    autoplaySpeed: 2000, // Adjust autoplay speed as needed
    arrows: true,
    dots: true,
    infinite: true,
    fade: false,
    touchMove: true
  };

  showImage(index: number): void {
    if (index >= 0 && index < this.images.length) {
      this.activeImageIndex = index;
      console.log(this.activeImageIndex )
    }
  }

  
  nextImage(): void {
    this.activeImageIndex = (this.activeImageIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.activeImageIndex = (this.activeImageIndex - 1 + this.images.length) % this.images.length;
  }

}
