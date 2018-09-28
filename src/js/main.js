var HttpClient = function HttpClient() {
  this.get = function (aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function () {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) aCallback(anHttpRequest.responseText);
    };
    anHttpRequest.open("GET", aUrl, true);
    anHttpRequest.send(null);
  };
};

let client = new HttpClient();
let idChannel = 'UCVswRUcKC-M35RzgPRv8qUg';
let part = 'statistics,brandingSettings';
let nameChannel = document.querySelector('#name-channel');
let descChannel = document.querySelector('#description-channel');
let imgChannel = document.querySelector('#img-channel');
let countChannel = document.querySelector('#count');

let showStat = () => {
  client.get(`https://www.googleapis.com/youtube/v3/channels?part=${part}&id=${idChannel}&key=AIzaSyCUrZ8fPXGj3hwPtuZdrrElaUY6g62UhFs`, (response) => {
    let info = JSON.parse(response).items[0];
    console.log(info);
    nameChannel.innerText = info.brandingSettings.channel.title;
    descChannel.innerText = info.brandingSettings.channel.description;
    countChannel.innerText = info.statistics.subscriberCount;
    imgChannel.src = info.brandingSettings.image.bannerImageUrl;
  })
}

showStat();

