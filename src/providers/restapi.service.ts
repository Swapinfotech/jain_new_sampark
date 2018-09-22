import { Injectable } from "@angular/core";
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class ApiService {
  loading: any;
   constructor(public http: Http,public loadingCtrl:LoadingController,private httpnative: HTTP) {
        console.log('hello provider'); 
        this.loading = this.loadingCtrl.create({
          content: 'Please Wait...'
        });
       
   }
   apiUrl = 'http://sampark.darshantraavels.com/wp-json/api/v1';
   
    registerUser(data) {
        return new Promise((resolve, reject) => {
           
            this.loading.present();
            let headers = {'Accept':'application/json',
              'Content-Type': 'application/json; charset=utf-8',
              'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
            }
          //  let  data1 =  JSON.stringify(data);
           
          this.httpnative.post(this.apiUrl+'/add_user',data ,headers)
          //  .map(res => res.json())
            .then(res => {
             let resp = JSON.parse(res.data)
              console.log(resp);
              this.loading.dismiss();
              resolve(resp);
            }).catch(err => {
              this.loading.dismiss();
              reject(err);
            });
        });
      }

      loginUser(data) {
        return new Promise((resolve, reject) => {
         
          this.loading.present();
          let headers = {'Accept':'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
          }
            //  let data1 = JSON.stringify(data);
          this.httpnative.post(this.apiUrl+'/authenticate',data ,headers)
          
            //  .map(res => res.json())
            
            .then(res => {
              
             let resp = JSON.parse(res.data)
              console.log(resp);
              this.loading.dismiss();
              resolve(resp);
            }).catch(err => {
              this.loading.dismiss();
              reject(err);
            });
        });
      }
      
      dashboard() {
        return new Promise((resolve, reject) => {
         
          this.loading.present();
          let headers = {'Accept':'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
          }
            this.httpnative.get(this.apiUrl+'/dashboard',{} ,headers)

            // .map(res => res.json())
            .then(res => {
              let resp = JSON.parse(res.data);
              this.loading.dismiss();
              resolve(resp);
            }).catch(err => {
              this.loading.dismiss();
              reject(err);
            });
          
          });
      }
     
      allSearch(data) {
        return new Promise((resolve, reject) => {
          let resp ;
          this.loading.present();
          let headers = {'Accept':'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
        }
            //  let data1 = JSON.stringify(data);
          this.httpnative.post(this.apiUrl+'/search',data ,headers)
            // .map(res => res.json())
            .then(res => {
              let resp = JSON.parse(res.data);
              this.loading.dismiss();
              resolve(resp);
            }).catch(err => {
              this.loading.dismiss();
              reject(err);
            });
        });
      }

      feedback(data) {
        return new Promise((resolve, reject) => {
          let resp ;
          this.loading.present();
          let headers = {'Accept':'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
        }
            //  let data1 = JSON.stringify(data);
            this.httpnative.post(this.apiUrl+'/user_feedback',data,headers)
            // .map(res => res.json())
            .then(res => {
              let resp = JSON.parse(res.data);
              this.loading.dismiss();
              resolve(resp);
            }).catch(err => {
              this.loading.dismiss();
              reject(err);
            });
        });
      }

      update_user(data) {
        return new Promise((resolve, reject) => {
         
          this.loading.present();
          let headers = {'Accept':'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
          }
            //  let data1 = JSON.stringify(data);
            this.httpnative.post(this.apiUrl+'/update_user',data ,headers)
            //.map(res => res.json())
            .then(res => {
              let resp = JSON.parse(res.data);
              this.loading.dismiss();
              resolve(resp);
            }).catch(err => {
              this.loading.dismiss();
              reject(err);
            });
        });
      }

      state(data) {
        return new Promise((resolve, reject) => {
          
          this.loading.present();
          let headers = {'Accept':'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
          }
            //  let data1 = JSON.stringify(data);
            this.httpnative.post(this.apiUrl+'/stateslist',data ,headers)
            // .map(res => res.json())
            .then(res => {
              let resp = JSON.parse(res.data);
              this.loading.dismiss();
              resolve(resp);
            }).catch(err => {
              this.loading.dismiss();
              reject(err);
            });
        });
      }
      country(data) {
        return new Promise((resolve, reject) => {
          
          this.loading.present();
          let headers = {'Accept':'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
          }
            //  let data1 = JSON.stringify(data);
            this.httpnative.post(this.apiUrl+'/countrieslist',data ,headers)
            //.map(res => res.json())
            .then(res => {
              let resp = JSON.parse(res.data);
              this.loading.dismiss();
              resolve(resp);
            }).catch(err => {
              this.loading.dismiss();
              reject(err);
            });
        });
      }

      smsAuth(data) {
        return new Promise((resolve, reject) => {
         
          this.loading.present();
          let headers = {'Accept':'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
          }
            //  let data1 = JSON.stringify(data);
            this.httpnative.post(this.apiUrl+'/sms_authenticate',data ,headers)
            //.map(res => res.json())
            .then(res => {
              let resp = JSON.parse(res.data);
              this.loading.dismiss();
              resolve(resp);
            }).catch(err => {
              this.loading.dismiss();
              reject(err);
            });
        });
      }

      forgotPass(data) {
        return new Promise((resolve, reject) => {
          
          this.loading.present();
          let headers = {'Accept':'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
          }
            //  let data1 = JSON.stringify(data);
            this.httpnative.post(this.apiUrl+'/forgot_password',data ,headers)
           // .map(res => res.json())
           .then(res => {
            let resp = JSON.parse(res.data);
            this.loading.dismiss();
            resolve(resp);
          }).catch(err => {
            this.loading.dismiss();
            reject(err);
          });
        });
      }

      resetPass(data) {
        return new Promise((resolve, reject) => {
         
          this.loading.present();
          let headers = {'Accept':'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
          }
            //  let data1 = JSON.stringify(data);
            this.httpnative.post(this.apiUrl+'/forgot_password',data ,headers)
            //.map(res => res.json())
            .then(res => {
              let resp = JSON.parse(res.data);
              this.loading.dismiss();
              resolve(resp);
            }).catch(err => {
              this.loading.dismiss();
              reject(err);
            });
        });
      }

      eventList() {
        return new Promise((resolve, reject) => {
          
          this.loading.present();
          let headers = {'Accept':'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Api-Key':'39b1cdc8a1099ce2bb9f0000e860ad8c'
          }
            //  let data1 = JSON.stringify(data);
            this.httpnative.get(this.apiUrl+'/event_list',{} ,headers)
            //.map(res => res.json())
            .then(res => {
              let resp = JSON.parse(res.data);
              this.loading.dismiss();
              resolve(resp);
            }).catch(err => {
              this.loading.dismiss();
              reject(err);
            });
        });
      }
    }

  

   
 
