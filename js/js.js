// * search bar clear
const rangeInput = document.querySelectorAll('.range_input input'),
  priceInput = document.querySelectorAll('.filter_price_items input'),
  progress = document.querySelector('.slider .progress')

let priceGap = 100;

priceInput.forEach(input => {
  input.addEventListener('input', e => {
    let minVal = parseInt(priceInput[0].value),
      maxVal = parseInt(priceInput[1].value)

      const filteredValue = domensinfo.filter(items => {
        // return rangeInput[0].value >= 230 && rangeInput[1].value <= 800
        function filterprice(elem, elem2, elem3, elem4, elem5){
          // listsitem1
          if (priceInput[0].value >= domensinfo[0].price && priceInput[1].value <= 500) {
            elem.style.display = 'flex'
          } else {
            elem.style.display = 'none'
          }
          // listsitem1
          // listsitem2
          if (priceInput[0].value >= domensinfo[1].price && priceInput[1].value <= 500) {
            elem2.style.display = 'flex'
          } else {
            elem2.style.display = 'none'
          }
          // listsitem2
          // listsitem3
          if (priceInput[0].value >= domensinfo[2].price && priceInput[1].value <= 500) {
            elem3.style.display = 'flex'
          } else {
            elem3.style.display = 'none'
          }
          // listsitem3
          // listsitem4
          if (priceInput[0].value >= domensinfo[3].price && priceInput[1].value <= 500) {
            elem4.style.display = 'flex'
          } else {
            elem4.style.display = 'none'
          }
          // listsitem4
          // listsitem5
          if (priceInput[0].value >= domensinfo[4].price && priceInput[1].value <= 500) {
            elem5.style.display = 'flex'
          } else {
            elem5.style.display = 'none'
          }
          if (elem.style.display == 'none' && elem2.style.display == 'none' && elem3.style.display == 'none' && elem4.style.display == 'none' && elem5.style.display == 'none') {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'flex'
          } else {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'none'
          }
          // listsitem5
        }
          return filterprice(listsItems1, listsItems2, listsItems3, listsItems4, listsItems5)
      })

    if ((maxVal - minVal >= priceGap) && maxVal <= 501) {
      if (e.target.className === 'filter_min_price') {
        rangeInput[0].value = minVal
        progress.style.left = (minVal / rangeInput[0].max) * 100 + '%'
      } else {
        rangeInput[1].value = maxVal
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
      }
    }
  });
});

rangeInput.forEach(input => {
  input.addEventListener('input', e => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value)
      
    const filteredValue = domensinfo.filter(items => {
      // return rangeInput[0].value >= 230 && rangeInput[1].value <= 800
      function filterprice(elem, elem2, elem3, elem4, elem5){
        // listsitem1
        if (rangeInput[0].value >= domensinfo[0].price && rangeInput[1].value <= 500) {
          elem.style.display = 'flex'
        } else {
          elem.style.display = 'none'
        }
        // listsitem1
        // listsitem2
        if (rangeInput[0].value >= domensinfo[1].price && rangeInput[1].value <= 500) {
          elem2.style.display = 'flex'
        } else {
          elem2.style.display = 'none'
        }
        // listsitem2
        // listsitem3
        if (rangeInput[0].value >= domensinfo[2].price && rangeInput[1].value <= 500) {
          elem3.style.display = 'flex'
        } else {
          elem3.style.display = 'none'
        }
        // listsitem3
        // listsitem4
        if (rangeInput[0].value >= domensinfo[3].price && rangeInput[1].value <= 500) {
          elem4.style.display = 'flex'
        } else {
          elem4.style.display = 'none'
        }
        // listsitem4
        // listsitem5
        if (rangeInput[0].value >= domensinfo[4].price && rangeInput[1].value <= 500) {
          elem5.style.display = 'flex'
        } else {
          elem5.style.display = 'none'
        }
        if (elem.style.display == 'none' && elem2.style.display == 'none' && elem3.style.display == 'none' && elem4.style.display == 'none' && elem5.style.display == 'none') {
          let footer  = document.querySelector('.footer');
          footer.style.display = 'flex'
        } else {
          let footer  = document.querySelector('.footer');
          footer.style.display = 'none'
        }
        // listsitem5
      }
        return filterprice(listsItems1, listsItems2, listsItems3, listsItems4, listsItems5)
    })


    console.log(filteredValue);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === 'range_min') {
        rangeInput[0].value = maxVal - priceGap
      } else {
        rangeInput[1].value = minVal + priceGap
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + '%'
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
    }
  });
});
// * double range input price
const secrangeinput = document.querySelectorAll('.range_input_symbol input'),
  secsymbolinput = document.querySelectorAll('.filter_lenght_items input'),
  secprogress = document.querySelector('.sec_slider .sec_progress')

let symbolGap = 3

secsymbolinput.forEach(input => {
  input.addEventListener('input', e => {
    let secminVal = parseInt(secsymbolinput[0].value),
      secmaxVal = parseInt(secsymbolinput[1].value);

      const filteredValue = domensinfo.filter(items => {
        // return rangeInput[0].value >= 230 && rangeInput[1].value <= 800
        function filterprice(elem, elem2, elem3, elem4, elem5){
          // listsitem1
          if (secsymbolinput[0].value >= domensinfo[0].symbol && secsymbolinput[1].value <= 500) {
            elem.style.display = 'flex'
          } else {
            elem.style.display = 'none'
          }
          // listsitem1
          // listsitem2
          if (secsymbolinput[0].value >= domensinfo[1].symbol && secsymbolinput[1].value <= 500) {
            elem2.style.display = 'flex'
          } else {
            elem2.style.display = 'none'
          }
          // listsitem2
          // listsitem3
          if (secsymbolinput[0].value >= domensinfo[2].symbol && secsymbolinput[1].value <= 500) {
            elem3.style.display = 'flex'
          } else {
            elem3.style.display = 'none'
          }
          // listsitem3
          // listsitem4
          if (secsymbolinput[0].value >= domensinfo[3].symbol && secsymbolinput[1].value <= 500) {
            elem4.style.display = 'flex'
          } else {
            elem4.style.display = 'none'
          }
          // listsitem4
          // listsitem5
          if (secsymbolinput[0].value >= domensinfo[4].symbol && secsymbolinput[1].value <= 500) {
            elem5.style.display = 'flex'
          } else {
            elem5.style.display = 'none'
          }
          if (elem.style.display == 'none' && elem2.style.display == 'none' && elem3.style.display == 'none' && elem4.style.display == 'none' && elem5.style.display == 'none') {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'flex'
          } else {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'none'
          }
          // listsitem5
        }
          return filterprice(listsItems1, listsItems2, listsItems3, listsItems4, listsItems5)
      })

    if ((secmaxVal - secminVal >= symbolGap) && secmaxVal <= 27) {
      if (e.target.className === 'filter_min_lenght') {
        secrangeinput[0].value = secminVal;
        secprogress.style.left = (secminVal / secrangeinput[0].max) * 100 + '%'
      } else {
        secrangeinput[1].value = secmaxVal;
        secprogress.style.right = 100 - (secmaxVal / secrangeinput[1].max) * 100 + '%'
      }
    }
  });
});

secrangeinput.forEach(input => {
  input.addEventListener('input', e => {
    let secminVal = parseInt(secrangeinput[0].value),
      secmaxVal = parseInt(secrangeinput[1].value);

      const filteredValue = domensinfo.filter(items => {
        // return rangeInput[0].value >= 230 && rangeInput[1].value <= 800
        function filterprice(elem, elem2, elem3, elem4, elem5){
          // listsitem1
          if (secrangeinput[0].value >= domensinfo[0].symbol && secrangeinput[1].value <= 500) {
            elem.style.display = 'flex'
          } else {
            elem.style.display = 'none'
          }
          // listsitem1
          // listsitem2
          if (secrangeinput[0].value >= domensinfo[1].symbol && secrangeinput[1].value <= 500) {
            elem2.style.display = 'flex'
          } else {
            elem2.style.display = 'none'
          }
          // listsitem2
          // listsitem3
          if (secrangeinput[0].value >= domensinfo[2].symbol && secrangeinput[1].value <= 500) {
            elem3.style.display = 'flex'
          } else {
            elem3.style.display = 'none'
          }
          // listsitem3
          // listsitem4
          if (secrangeinput[0].value >= domensinfo[3].symbol && secrangeinput[1].value <= 500) {
            elem4.style.display = 'flex'
          } else {
            elem4.style.display = 'none'
          }
          // listsitem4
          // listsitem5
          if (secrangeinput[0].value >= domensinfo[4].symbol && secrangeinput[1].value <= 500) {
            elem5.style.display = 'flex'
          } else {
            elem5.style.display = 'none'
          }
          if (elem.style.display == 'none' && elem2.style.display == 'none' && elem3.style.display == 'none' && elem4.style.display == 'none' && elem5.style.display == 'none') {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'flex'
          } else {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'none'
          }
          // listsitem5
        }
          return filterprice(listsItems1, listsItems2, listsItems3, listsItems4, listsItems5)
      })

    if (secmaxVal - secminVal < symbolGap) {
      if (e.target.className === 'range_min_symbol') {
        secrangeinput[0].value = secmaxVal - symbolGap;
      } else {
        secrangeinput[1].value = secminVal + symbolGap;
      }
    } else {
      secsymbolinput[0].value = secminVal;
      secsymbolinput[1].value = secmaxVal;
      secprogress.style.left = (secminVal / secrangeinput[0].max) * 100 + '%'
      secprogress.style.right = 100 - (secmaxVal / secrangeinput[1].max) * 100 + '%'
    }
  });
});

// **************** second filter **************** //
const rangeInputt = document.querySelectorAll('#range_input #input'),
  priceInputt = document.querySelectorAll('#filter_price_items input'),
  progresss = document.querySelector('#slider #progress');

priceInputt.forEach(input => {
  input.addEventListener('input', e => {
    let minVal = parseInt(priceInputt[0].value),
      maxVal = parseInt(priceInputt[1].value)

      const filteredValue = domensinfo.filter(items => {
        // return rangeInputt[0].value >= 230 && rangeInputt[1].value <= 800
        function filterprice(elem, elem2, elem3, elem4, elem5){
          // listsitem1
          if (priceInputt[0].value >= domensinfo[0].price && priceInputt[1].value <= 500) {
            elem.style.display = 'flex'
          } else {
            elem.style.display = 'none'
          }
          // listsitem1
          // listsitem2
          if (priceInputt[0].value >= domensinfo[1].price && priceInputt[1].value <= 500) {
            elem2.style.display = 'flex'
          } else {
            elem2.style.display = 'none'
          }
          // listsitem2
          // listsitem3
          if (priceInputt[0].value >= domensinfo[2].price && priceInputt[1].value <= 500) {
            elem3.style.display = 'flex'
          } else {
            elem3.style.display = 'none'
          }
          // listsitem3
          // listsitem4
          if (priceInputt[0].value >= domensinfo[3].price && priceInputt[1].value <= 500) {
            elem4.style.display = 'flex'
          } else {
            elem4.style.display = 'none'
          }
          // listsitem4
          // listsitem5
          if (priceInputt[0].value >= domensinfo[4].price && priceInputt[1].value <= 500) {
            elem5.style.display = 'flex'
          } else {
            elem5.style.display = 'none'
          }
          if (elem.style.display == 'none' && elem2.style.display == 'none' && elem3.style.display == 'none' && elem4.style.display == 'none' && elem5.style.display == 'none') {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'flex'
          } else {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'none'
          }
          // listsitem5
        }
          return filterprice(listsItems1, listsItems2, listsItems3, listsItems4, listsItems5)
      })

    if ((maxVal - minVal >= priceGap) && maxVal <= 501) {
      if (e.target.className === 'filter_min_price') {
        rangeInputt[0].value = minVal
        progresss.style.left = (minVal / rangeInputt[0].max) * 100 + '%'
      } else {
        rangeInputt[1].value = maxVal
        progresss.style.right = 100 - (maxVal / rangeInputt[1].max) * 100 + '%'
      }
    }
  });
});

rangeInputt.forEach(input => {
  input.addEventListener('input', e => {
    let minVal = parseInt(rangeInputt[0].value),
      maxVal = parseInt(rangeInputt[1].value)
      
    const filteredValue = domensinfo.filter(items => {
      // return rangeInputt[0].value >= 230 && rangeInputt[1].value <= 800
      function filterprice(elem, elem2, elem3, elem4, elem5){
        // listsitem1
        if (rangeInputt[0].value >= domensinfo[0].price && rangeInputt[1].value <= 500) {
          elem.style.display = 'flex'
        } else {
          elem.style.display = 'none'
        }
        // listsitem1
        // listsitem2
        if (rangeInputt[0].value >= domensinfo[1].price && rangeInputt[1].value <= 500) {
          elem2.style.display = 'flex'
        } else {
          elem2.style.display = 'none'
        }
        // listsitem2
        // listsitem3
        if (rangeInputt[0].value >= domensinfo[2].price && rangeInputt[1].value <= 500) {
          elem3.style.display = 'flex'
        } else {
          elem3.style.display = 'none'
        }
        // listsitem3
        // listsitem4
        if (rangeInputt[0].value >= domensinfo[3].price && rangeInputt[1].value <= 500) {
          elem4.style.display = 'flex'
        } else {
          elem4.style.display = 'none'
        }
        // listsitem4
        // listsitem5
        if (rangeInputt[0].value >= domensinfo[4].price && rangeInputt[1].value <= 500) {
          elem5.style.display = 'flex'
        } else {
          elem5.style.display = 'none'
        }
        if (elem.style.display == 'none' && elem2.style.display == 'none' && elem3.style.display == 'none' && elem4.style.display == 'none' && elem5.style.display == 'none') {
          let footer  = document.querySelector('.footer');
          footer.style.display = 'flex'
        } else {
          let footer  = document.querySelector('.footer');
          footer.style.display = 'none'
        }
        // listsitem5
      }
        return filterprice(listsItems1, listsItems2, listsItems3, listsItems4, listsItems5)
    })


    console.log(filteredValue);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === 'range_min') {
        rangeInputt[0].value = maxVal - priceGap
      } else {
        rangeInputt[1].value = minVal + priceGap
      }
    } else {
      priceInputt[0].value = minVal;
      priceInputt[1].value = maxVal;
      progresss.style.left = (minVal / rangeInputt[0].max) * 100 + '%'
      progresss.style.right = 100 - (maxVal / rangeInputt[1].max) * 100 + '%'
    }
  });
});
// * double range input price
const secrangeinputt = document.querySelectorAll('#range_input_symbol #input'),
  secsymbolinputt = document.querySelectorAll('#filter_lenght_items #input'),
  secprogresss = document.querySelector('#sec_slider #sec_progress')


secsymbolinputt.forEach(input => {
  input.addEventListener('input', e => {
    let secminVal = parseInt(secsymbolinputt[0].value),
      secmaxVal = parseInt(secsymbolinputt[1].value);

      const filteredValue = domensinfo.filter(items => {
        // return rangeInput[0].value >= 230 && rangeInput[1].value <= 800
        function filterprice(elem, elem2, elem3, elem4, elem5){
          // listsitem1
          if (secsymbolinputt[0].value >= domensinfo[0].symbol && secsymbolinputt[1].value <= 500) {
            elem.style.display = 'flex'
          } else {
            elem.style.display = 'none'
          }
          // listsitem1
          // listsitem2
          if (secsymbolinputt[0].value >= domensinfo[1].symbol && secsymbolinputt[1].value <= 500) {
            elem2.style.display = 'flex'
          } else {
            elem2.style.display = 'none'
          }
          // listsitem2
          // listsitem3
          if (secsymbolinputt[0].value >= domensinfo[2].symbol && secsymbolinputt[1].value <= 500) {
            elem3.style.display = 'flex'
          } else {
            elem3.style.display = 'none'
          }
          // listsitem3
          // listsitem4
          if (secsymbolinputt[0].value >= domensinfo[3].symbol && secsymbolinputt[1].value <= 500) {
            elem4.style.display = 'flex'
          } else {
            elem4.style.display = 'none'
          }
          // listsitem4
          // listsitem5
          if (secsymbolinputt[0].value >= domensinfo[4].symbol && secsymbolinputt[1].value <= 500) {
            elem5.style.display = 'flex'
          } else {
            elem5.style.display = 'none'
          }
          if (elem.style.display == 'none' && elem2.style.display == 'none' && elem3.style.display == 'none' && elem4.style.display == 'none' && elem5.style.display == 'none') {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'flex'
          } else {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'none'
          }
          // listsitem5
        }
          return filterprice(listsItems1, listsItems2, listsItems3, listsItems4, listsItems5)
      })

    if ((secmaxVal - secminVal >= symbolGap) && secmaxVal <= 27) {
      if (e.target.className === 'filter_min_lenght') {
        secrangeinputt[0].value = secminVal;
        secprogresss.style.left = (secminVal / secrangeinputt[0].max) * 100 + '%'
      } else {
        secrangeinputt[1].value = secmaxVal;
        secprogresss.style.right = 100 - (secmaxVal / secrangeinputt[1].max) * 100 + '%'
      }
    }
  });
});

secrangeinputt.forEach(input => {
  input.addEventListener('input', e => {
    let secminVal = parseInt(secrangeinputt[0].value),
      secmaxVal = parseInt(secrangeinputt[1].value);

      const filteredValue = domensinfo.filter(items => {
        // return rangeInput[0].value >= 230 && rangeInput[1].value <= 800
        function filterprice(elem, elem2, elem3, elem4, elem5){
          // listsitem1
          if (secrangeinputt[0].value >= domensinfo[0].symbol && secrangeinputt[1].value <= 500) {
            elem.style.display = 'flex'
          } else {
            elem.style.display = 'none'
          }
          // listsitem1
          // listsitem2
          if (secrangeinputt[0].value >= domensinfo[1].symbol && secrangeinputt[1].value <= 500) {
            elem2.style.display = 'flex'
          } else {
            elem2.style.display = 'none'
          }
          // listsitem2
          // listsitem3
          if (secrangeinputt[0].value >= domensinfo[2].symbol && secrangeinputt[1].value <= 500) {
            elem3.style.display = 'flex'
          } else {
            elem3.style.display = 'none'
          }
          // listsitem3
          // listsitem4
          if (secrangeinputt[0].value >= domensinfo[3].symbol && secrangeinputt[1].value <= 500) {
            elem4.style.display = 'flex'
          } else {
            elem4.style.display = 'none'
          }
          // listsitem4
          // listsitem5
          if (secrangeinputt[0].value >= domensinfo[4].symbol && secrangeinputt[1].value <= 500) {
            elem5.style.display = 'flex'
          } else {
            elem5.style.display = 'none'
          }
          if (elem.style.display == 'none' && elem2.style.display == 'none' && elem3.style.display == 'none' && elem4.style.display == 'none' && elem5.style.display == 'none') {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'flex'
          } else {
            let footer  = document.querySelector('.footer');
            footer.style.display = 'none'
          }
          // listsitem5
        }
          return filterprice(listsItems1, listsItems2, listsItems3, listsItems4, listsItems5)
      })

    if (secmaxVal - secminVal < symbolGap) {
      if (e.target.className === 'range_min_symbol') {
        secrangeinputt[0].value = secmaxVal - symbolGap;
      } else {
        secrangeinputt[1].value = secminVal + symbolGap;
      }
    } else {
      secsymbolinputt[0].value = secminVal;
      secsymbolinputt[1].value = secmaxVal;
      secprogresss.style.left = (secminVal / secrangeinputt[0].max) * 100 + '%'
      secprogresss.style.right = 100 - (secmaxVal / secrangeinputt[1].max) * 100 + '%'
    }
  });
});
// **************** second filter **************** //
// * double range input symbols
// * buy function
let Buybutton1 = document.querySelectorAll('.list_buy')[0],
  listsPrice1 = document.querySelectorAll('.lists_price')[0],
  listsBought1 = document.querySelectorAll('.lists_bought')[0];

let Buybutton2 = document.querySelectorAll('.list_buy')[1],
  listsPrice2 = document.querySelectorAll('.lists_price')[1],
  listsBought2 = document.querySelectorAll('.lists_bought')[1];

let Buybutton3 = document.querySelectorAll('.list_buy')[2],
  listsPrice3 = document.querySelectorAll('.lists_price')[2],
  listsBought3 = document.querySelectorAll('.lists_bought')[2];

let Buybutton4 = document.querySelectorAll('.list_buy')[3],
  listsPrice4 = document.querySelectorAll('.lists_price')[3],
  listsBought4 = document.querySelectorAll('.lists_bought')[3];

let Buybutton5 = document.querySelectorAll('.list_buy')[4],
  listsPrice5 = document.querySelectorAll('.lists_price')[4],
  listsBought5 = document.querySelectorAll('.lists_bought')[4];
  
  // let Buybutton = document.querySelectorAll('.list_buy'),
  listsPrice = document.querySelectorAll('.lists_price'),
  listsBought = document.querySelectorAll('.lists_bought');

listsBuyLenght = document.querySelector('.shopp .shop');
// * variables

let c = 0

Buybutton1.addEventListener('click', () => {
  listsPrice1.style.display = 'none';
  listsBought1.style.display = 'flex';
  listsBuyLenght.style.display = 'flex';
  
  listsBuyLenght.setAttribute('data-value', c)
  c++;
  listsBuyLenght.innerHTML = c;
});

Buybutton2.addEventListener('click', () => {
  listsPrice2.style.display = 'none';
  listsBought2.style.display = 'flex';
  listsBuyLenght.style.display = 'flex';
  c++;

  listsBuyLenght.setAttribute('data-value', c)
  listsBuyLenght.innerHTML = c;
});

Buybutton3.addEventListener('click', () => {
  listsPrice3.style.display = 'none';
  listsBought3.style.display = 'flex';
  listsBuyLenght.style.display = 'flex';
  c++;

  listsBuyLenght.setAttribute('data-value', c)
  listsBuyLenght.innerHTML = c;
});

Buybutton4.addEventListener('click', () => {
  listsPrice4.style.display = 'none';
  listsBought4.style.display = 'flex';
  listsBuyLenght.style.display = 'flex';
  c++;

  listsBuyLenght.setAttribute('data-value', c)
  listsBuyLenght.innerHTML = c;
});

Buybutton5.addEventListener('click', () => {
  listsPrice5.style.display = 'none';
  listsBought5.style.display = 'flex';
  listsBuyLenght.style.display = 'flex';
  c++;

  listsBuyLenght.setAttribute('data-value', c)
  listsBuyLenght.innerHTML = c;
});
// * buy function
// * filter function


let domensinfo = [
  { domanName: '.ge', price: 100, symbol: 11, categories: { realestate: 'უძრავი ქონება', bisnes: 'ბიზნესი' } },
  { domanName: '.com', price: 290, symbol: 15, categories: { bisnes: 'ბიზნესი', medea: 'მედია' } },
  { domanName: '.net', price: 240, symbol: 12, categories: { bisnes: 'ბიზნესი' } },
  { domanName: '.org', price: 320, symbol: 12, categories: { medea: 'მედია' } },
  { domanName: '.edu', price: 160, symbol: 12, categories: { realestate: 'უძრავი ქონება', medea: 'მედია' } }
]

let listsItems1 = document.querySelectorAll('.lists_items')[0];
// let listsItems1 = [{ domanName: '.ge', price: 100, categories: { realestate: 'უძრავი ქონება', bisnes: 'ბიზნესი' } }];

let listsItems2 = document.querySelectorAll('.lists_items')[1];
// listsItems2 = domensinfo[1];

let listsItems3 = document.querySelectorAll('.lists_items')[2];
// listsItems3 = domensinfo[2];

let listsItems4 = document.querySelectorAll('.lists_items')[3];
// listsItems4 = domensinfo[3];

let listsItems5 = document.querySelectorAll('.lists_items')[4];
// listsItems5 = domensinfo[4];

// * domenis zona
function change() {
  var checkboxes = document.getElementsByClassName('flex');
  var chekboxInputs = Array.from(checkboxes).map(a => a.querySelector('input'));
  var allAreUnselected = chekboxInputs.every(function (elem) {
    return !elem.checked;
  });
  if (allAreUnselected) {
    chekboxInputs.forEach(function (input) {
      Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function (item) {
        item.style.display = 'flex';
      });
    });
  }
  else {
    chekboxInputs.forEach(function (input) {
      Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function (item) {
        item.style.display = input.checked ? 'flex' : 'none';
      });
    });
  }
}
change();
// * domenis zona
// * categories
function check() {
  var checkboxes = document.getElementsByClassName('cate');
  var chekboxInputs = Array.from(checkboxes).map(a => a.querySelector('input'));
  var allAreUnselected = chekboxInputs.every(function (elem) {
    return !elem.checked;
  });
  if (allAreUnselected) {
    chekboxInputs.forEach(function (input) {
      Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function (item) {
        item.style.display = 'flex';
      });
    });
  }
  else {
    chekboxInputs.forEach(function (input) {
      Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function (item) {
        item.style.display = input.checked ? 'flex' : 'none';
      });
    });
  }
}
check();
// * categories
// * filter function
// * responsive functions
function openfilter(){
  let filterlist = document.querySelector('.sss .filter')
  filterlist.classList.add('active')
}
function closefilter(){
  let filterlist = document.querySelector('.sss .filter')
  filterlist.classList.remove('active')
}

function opensotireba(){
  let filterlist2 = document.querySelector('.top_filter_menu_mob')
  filterlist2.classList.remove('none')
}
function closesotireba(){
  let filterlist2 = document.querySelector('.top_filter_menu_mob')
  filterlist2.classList.add('none')
}

function openmenu(){
  let menu = document.querySelector('.mob')
  menu.classList.remove('none')
}
function closemenu(){
  let menu = document.querySelector('.mob')
  menu.classList.add('none')
}
// * responsive functions