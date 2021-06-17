import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-web-viewer',
  templateUrl: './web-viewer.component.html',
  styleUrls: ['./web-viewer.component.css']
})
export class WebViewerComponent implements AfterViewInit {

  @ViewChild('viewer') viewerRef: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../assets/lib',
      //initialDoc:'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
      initialDoc: 'assets/files/pranali.pdf'
    }, this.viewerRef.nativeElement).then(instance => {
    }); 
  }
}
