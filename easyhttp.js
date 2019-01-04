//By Sinmisola Kareem

//Constructor

function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url,callback){
  this.http.open('GET',url,true);// Async

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200){// if good to go
      callback(null,self.http.responseText);
    }
    else{
      callback('Error ' + self.http.status); //Eg Error 404
    }
  }


  this.http.send();
} 
// Make an HTTP POST Request
easyHTTP.prototype.post = function(url,data,callback){
  this.http.open('POST',url,true);
  // set the content type done in http header
  this.http.setRequestHeader('Content-type','application/json');
  
  let self = this;
  this.http.onload = function(){
    callback(null,self.http.responseText);
  }


  //SEND AS JSON STRING
  this.http.send(JSON.stringify(data));
}
// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url,data,callback){
  this.http.open('PUT',url,true);
  // set the content type done in http header
  this.http.setRequestHeader('Content-type','application/json');
  
  let self = this;
  this.http.onload = function(){
    callback(null,self.http.responseText);
  }


  //SEND AS JSON STRING
  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url,callback){
  this.http.open('DELETE',url,true);// Async

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200){// if good to go
      callback(null,'POST DELETED');
    }
    else{
      callback('Error ' + self.http.status); //Eg Error 404
    }
  }


  this.http.send();
} 