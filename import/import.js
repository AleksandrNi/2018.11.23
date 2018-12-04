export class Import {

httpGet(url) {

  return new Promise(function(resolve, reject) {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
      	let object = JSON.parse(xhr.responseText);
        resolve(object);
      } else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Some Error"));
    };

    xhr.send();
  });

}
}