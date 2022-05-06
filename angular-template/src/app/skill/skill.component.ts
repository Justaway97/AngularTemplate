import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  // java, html, css, javascript, typescript, python, angular, git, 
  // RESTful APIs, php, mssql, mysql, postgresql, golang, django,
  // machine learning, deep learning, devops
  skills = [
    "java", "python", "django", "RESTful APIs"
    , "html", "css", "typescript", "javascript", "angular"
    , "mssql", "postgresql", "mysql", "machine learning", "deep learning"
    , "git", "php", "golang", "redis", "docker"
  ]
  text = "I am a computer science graduate who major in data science. \
  I start to become a full stacks web developer since 2020 (\
    " + (new Date().getFullYear() - 2020).toString() + ")."

  hobby = [
    'play game',
    'learn latest technology',
    'learn complex logic',
    'build useful tools'
  ]

  url = '/assets/hat.png';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    console.log(event)
  }
}
