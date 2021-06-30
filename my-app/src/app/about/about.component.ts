import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  feature:any;
  constructor() { }

  ngOnInit(): void {
    this.feature = [
    {
      iconURL: "icon-basic-world",
      header: "Audiences",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quod blanditiis quam molestias ducimus beatae nam minima obcaecati ut reiciendis earum perspiciatis, repudiandae praesentium nemo, veniam a! Tempore, unde error?"
    },
    {
      iconURL: "icon-basic-compass",
      header: "Reporting",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quod blanditiis quam molestias ducimus beatae nam minima obcaecati ut reiciendis earum perspiciatis, repudiandae praesentium nemo, veniam a! Tempore, unde error?"
    },
    {
      iconURL: "icon-basic-heart",
      header: "feature",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quod blanditiis quam molestias ducimus beatae nam minima obcaecati ut reiciendis earum perspiciatis, repudiandae praesentium nemo, veniam a! Tempore, unde error?"
    },
    {
      iconURL: "icon-basic-heart",
      header: "feature",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quod blanditiis quam molestias ducimus beatae nam minima obcaecati ut reiciendis earum perspiciatis, repudiandae praesentium nemo, veniam a! Tempore, unde error?"
    },
    {
      iconURL: "icon-basic-heart",
      header: "feature",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quod blanditiis quam molestias ducimus beatae nam minima obcaecati ut reiciendis earum perspiciatis, repudiandae praesentium nemo, veniam a! Tempore, unde error?"
    },
    {
      iconURL: "icon-basic-heart",
      header: "feature",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quod blanditiis quam molestias ducimus beatae nam minima obcaecati ut reiciendis earum perspiciatis, repudiandae praesentium nemo, veniam a! Tempore, unde error?"
    },
    {
      iconURL: "icon-basic-heart",
      header: "feature",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quod blanditiis quam molestias ducimus beatae nam minima obcaecati ut reiciendis earum perspiciatis, repudiandae praesentium nemo, veniam a! Tempore, unde error?"
    },
    {
      iconURL: "icon-basic-heart",
      header: "feature",
      message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quod blanditiis quam molestias ducimus beatae nam minima obcaecati ut reiciendis earum perspiciatis, repudiandae praesentium nemo, veniam a! Tempore, unde error?"
    }
  ];
  }

}
