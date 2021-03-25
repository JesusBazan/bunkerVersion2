import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bunkerApp2';

ngOnInit()  {
  (function(d, m){
      var kommunicateSettings = 
          {"appId":"1afe0d1d185655ed609a98fd6aeeaf72b","popupWidget":true,"automaticChatOpenOnNavigation":true};
          var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
          s.src = "https://api.kommunicate.io/v2/kommunicate.app";
          var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
          (window as any).kommunicate = m; m._globals = kommunicateSettings;
        })(document, (window as any).kommunicate || {});
}

}
