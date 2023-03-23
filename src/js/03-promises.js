const formEl = document.querySelector(".form");

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: {delay, step, amount},
    } = event.currentTarget;

    function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }

   const promise = new Promise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
    // const inputValue = {
    //     delay: `${delay.value}`,
    //     step: `${step.value}`,
    //     amount: `${amount.value}`,
    // };

    // console.log(inputValue);

    formEl.reset();
});
