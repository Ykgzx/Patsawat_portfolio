// projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Noveltale - Mannga Reading Platform',
      description: 'เว็บแอพสำหรับอ่านมังงะออนไลน์',
      image: '/noveltale.png',
      techStack: ['Next.js', 'Tailwind CSS', 'Cloudinary', 'MongoDB', 'Prisma'],
      sourceUrl: 'https://github.com/Ykgzx/noveltale'
    },
    {
      title: 'Brain-Bang Exhibition',
      description: 'เว็บแอพสำหรับลงทะเบียนเข้าร่วมงานนิทรรศการ Brain-Bang และเล่นกิจกรรมสะสมคะแนน ภายในงาน',
      image: '/bb.png',
      techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Vercel', 'Prisma'],
      demoUrl: 'https://notesync.example.com',
      sourceUrl: 'https://github.com/9OAT0/CG-Work'
    },
    {
      title: 'Vinshop',
      description: 'เว็บแอพสำหรับร้านค้าออนไลน์',
      image: '/vin.png',
      techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Prisma'],
      demoUrl: 'https://dashboard.example.com',
      sourceUrl: 'https://github.com/9OAT0/vin_shop'
    },
    {
      title: 'Real-time Chat',
      description: 'เว็บแอพสำหรับแชทแบบเรียลไทม์',
      image: '/realtimechat.png',
      techStack: ['Next.js', 'Socket.io', 'SQLite', 'Tailwind CSS', 'Prisma'],
      demoUrl: 'https://weather-app.example.com',
      sourceUrl: 'https://github.com/Ykgzx/realtime-chat'
    }
  ];
}