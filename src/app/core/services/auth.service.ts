import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
    
  private apiUrl = 'https://apissiloam.cyclic.app';
// private apiUrl='http://localhost:8080';
 //private apiUrl='https://apissiloam.cyclic.app/';
  updatedaata: any;

  constructor(private http: HttpClient,private router:Router) {}

  login(obj:any) {
    console.log(obj)
   
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`,
        obj
      )
      .pipe(
        tap((response) => {
          //console.log(response)
          localStorage.setItem('token', response.token);
        })
      );
  }
  
  updatedata(obj:any) {
   
    const id = obj.id;
    return this.http.put<{ token: string }>(`${this.apiUrl}/api/update/${id}`,obj).pipe(
        tap((response) => {
          //console.log(response)
          console.log(response)


        })
      );
  }
  delete(obj:any)
  {

    const id=obj;
    console.log(obj)
    return this.http.delete(`${this.apiUrl}/api/delete/${id}`,obj).pipe(
      tap((response) => {
        //console.log(response)
        console.log(response)


      })
    );

  }

  

  getbaptised():Observable<any[]> {
    
    const url = `${this.apiUrl}/api/baptised`; // Replace with your API endpoint
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }

  reporrt():Observable<any[]> {
    
    const url = `${this.apiUrl}/api/report`; // Replace with your API endpoint
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }

  getprofile():Observable<any[]> {
    
    const url = `${this.apiUrl}/api/profile`; // Replace with your API endpoint
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }

  gettracking():Observable<any[]> {
    
    const url = `${this.apiUrl}/api/tracking`; // Replace with your API endpoint
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }


//  youtube():Observable<any[]> {
    
//     const url = `${this.apiUrl}/api/youtube`; // Replace with your API endpoint
//     const token = localStorage.getItem('token');


//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Authorization': 'Bearer ' + token
//       })
//     };
//     return this.http.get<any[]>(url, httpOptions);
//   }

  getnotbaptised():Observable<any[]> {
    
    const url = `${this.apiUrl}/api/notbaptised`; // Replace with your API endpoint
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }

  getmaledata():Observable<any[]> {
    
    const url = `${this.apiUrl}/api/male`; // Replace with your API endpoint
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }
  getfemlaedata():Observable<any[]> {
    
    const url = `${this.apiUrl}/api/female`; // Replace with your API endpoint
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }
  getData():Observable<any[]> {
    
    const url = `${this.apiUrl}/api/getdata`; // Replace with your API endpoint
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }

  getlatestdata(obj:any):Observable<any[]> {
    const url = `${this.apiUrl}/api/latest`;
    const token = localStorage.getItem('token');

    const httpOptions={
      headers: new HttpHeaders({
        'Authorization':'Bearer' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions)
  }

  getsms():Observable<any[]>{
    const url = `${this.apiUrl}/api/sms`; // Replace with your API endpoint
    return this.http.get<any[]>(url);

  }
  youtube():Observable<any[]>{
    const url = `${this.apiUrl}/api/youtube`; // Replace with your API endpoint
    return this.http.get<any[]>(url);

  }
  getusers(obj: any): Observable<any[]> {
    const url = `${this.apiUrl}/api/users`;
    return this.http.post<any[]>(url, obj);
  }
  sendotp(obj:any):Observable<any[]>{
    const url = `${this.apiUrl}/api/sendotp`;
    return this.http.post<any[]>(url,obj);
  }
  verifyotp(obj:any):Observable<any[]>{
    const url = `${this.apiUrl}/api/verifyotp`;
    return this.http.post<any[]>(url,obj)
  }


  getlatest():Observable<any[]>{
    const url=`${this.apiUrl}/api/latest`;
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }

  gettotallatest():Observable<any[]>{
    const url=`${this.apiUrl}/api/totalcount`;
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }
  
  
  updateage():Observable<any[]>{
    const url=`${this.apiUrl}/api/updateage`;
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }
  
  spiritualage():Observable<any[]>{
    const url=`${this.apiUrl}/api/spiritualages`;
    const token = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }
  
  getYouTubeData(): Observable<YouTubeResponse>{
    
    const youtubeKey = 'AIzaSyDyhcnZK94ljdZpoM38H9q4_TiH3AdNTeY';
    const youtubeUser = 'UC__IiFy2HyylYLp3ecJ9MBw';
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`;
    return this.http.get<YouTubeResponse>(url);
}
logout()
{
  
  localStorage.removeItem("token");
  localStorage.removeItem("logindetails");
  localStorage.removeItem("otpdetails");
  this.finalcheck()
}
finalcheck()
{
  if(localStorage.getItem('token') === null)
  {
    this.router.navigate(['/']);
  }
}

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }
  
}
interface YouTubeResponse {
    items: any[];
  }
  
