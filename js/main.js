
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.header`)
sr.reveal(`.main`,{interval: 100})
sr.reveal(`.footer`,{origin: 'bottom'})
