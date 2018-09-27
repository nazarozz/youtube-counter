"use strict";

var HttpClient = function HttpClient() {
  this.get = function (aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function () {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) aCallback(anHttpRequest.responseText);
    };
    anHttpRequest.open("GET", aUrt, true);
    anHttpRequest.send(null);
  };
};

var client = new HttpClient();

var showStat = function showStat() {
  client.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyCUrZ8fPXGj3hwPtuZdrrElaUY6g62UhFs', function (Response) {
    console.log(JSON.parse(response).items[0].statistics.subscriberCount);
  });
};

showStat();