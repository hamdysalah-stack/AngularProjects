import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {
  filterstatus = '';
  AppStatus = new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle('stabel from promise');
    }, 2000);
  });
  servers = [
    {
      instanceType: 'medium',
      name: 'production hamdy',
      status: 'stable',
      started: new Date(2026, 1, 20),
      budget: '2000',
      serverloadingtime: '2.345',
    },
    {
      instanceType: 'large',
      name: 'DB',
      status: 'NOtstable',
      started: new Date(2025, 1, 21),
      budget: '3050',
      serverloadingtime: '2.345',
    },
    {
      instanceType: 'small',
      name: 'c#',
      status: 'offline',
      started: new Date(2024, 1, 24),
      budget: '3035',
      serverloadingtime: '2.345',
    },
    {
      instanceType: 'very large',
      name: 'VS',
      status: 'online',
      started: new Date(2029, 1, 27),
      budget: '30503',
      serverloadingtime: '2.355',
    },
  ];

  GetStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Data;
    budget: string;
    serverloadingtime: string;
  }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'NOtstable',
      'list-group-item-danger': server.status === 'offline',
      'list-group-item-info': server.status === 'online',
    };
  }
  OnAddServer() {
    this.servers.push({
      instanceType: 'very small',
      name: 'server test',
      status: 'stable',
      started: new Date(2026, 1, 27),
      budget: '3065',
      serverloadingtime: '2.3',
    });
  }
}
