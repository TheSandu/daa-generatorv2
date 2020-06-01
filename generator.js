var fetchUrl = require("fetch").fetchUrl;

for (let i = 0; i < 10000; i++) {
    var kw = Math.floor(Math.random() * 100);
    var pret = kw * 2;
    console.log( `Generator: ${ kw }: ${ pret }` );
    fetchUrl(`http://daa-balancer-2015045468.us-east-2.elb.amazonaws.com:3000/api/save?userName=Generator&contor=${ kw }&price=${ pret }`, () => {});
}