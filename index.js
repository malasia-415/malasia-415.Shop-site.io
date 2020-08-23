// color, keyword, material, max_price
function getMasks(color='', keyword='', price, material='') {
  showLoading()
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://openapi.etsy.com";
  const path = `/v2/listings/active?limit=20&keywords=face%20mask&tags=${keyword},${material},${color}&max_price=${price}&includes=Images`;
  const api_key = "&api_key=l3a7mjohsu0hq3fbwq6p7pd3"
  const fetchurl = `${proxyurl}${url}${path}${api_key}`

  fetch(fetchurl)
    .then(response => response.json())
    .then(responseJson => {
      displayMasks(responseJson)
    })
}

function showLoading() {
  let img = `<img width="50%" style="margin:0 auto;display:block;" src="https://cdn.lowgif.com/full/c57c4d0d4333569d-index-of-skin-frontend-sns-amoda-default-images.gif" />`
  $("#items-container").html(img);
}


function displayImages(images) {
  return images.map(img => {
    return `<img class="image" src="${img.url_170x135}" />`
  }).join('')
}

