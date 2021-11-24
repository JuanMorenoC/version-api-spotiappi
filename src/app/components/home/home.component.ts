
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string = "";
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    });
   }

  ngOnInit(): void {
  }

}
/*
import { HttpClient } from '@angular/common/http';

  paises: any[] = []; 
  constructor(private http:HttpClient) {
    console.log('Constructor del home');
    this.http.get('https://restcountries.com/v2/lang/es').subscribe( (resp: any) => {
      this.paises = resp;
      console.log(resp);
    });
   }
*/