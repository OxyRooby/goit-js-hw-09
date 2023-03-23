const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (e) => { 
  e.preventDefault();

  const elements = e.target.elements;

  const delay = +elements.delay.value;
  const step = +elements.step.value;
  const amount = +elements.amount.value;


  for (let i = 0; i < amount; i++) {
    const delayStep = delay + step * i;
    createPromise(i, delayStep)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}


