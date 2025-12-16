function shakeMagic8Ball () {
  const question = prompt('Ask the Magic 8-Ball a question:')
  if (question === null) {
   
    document.getElementById('response-text').innerText =
      'Please ask a question!'
    document.getElementById('response-text').classList = 'lead text-warning'
    document.getElementById('response-image').src = 'default-image.jpg'
    return
  }

  if (!question.trim()) {
   
    alert('Please enter a valid question!')
    return
  }

  const randomNumber = Math.floor(Math.random() * 8)
  let answer, image, color

  switch (randomNumber) {
    case 0:
      answer = 'Yeahhh'
      image = "twin.jpg"
      color = 'text-success'
      break
    case 1:
      answer = 'Nahh'
      image ='Sadhapmter.jpg'
      color = 'text-danger'
      break
    case 2:
      answer = 'I guess if u want'
      image = 'kitty.jpg'
      color = 'text-warning'
      break
    case 3:
      answer = 'go away bum'
      image = 'Drake.jpg'
      color = 'text-secondary'
      break
    case 4:
      answer = 'Dont rlly feel like answering'
      image = 'smonge.jpg'
      color = 'text-muted'
      break
    case 5:
      answer = "NAHH give up while ur ahead"
      image = 'Blue.jpg'
      color = 'text-danger'
      break
    case 6:
      answer = 'Yes, out of everything I have ever predicted this is the most certain I have ever been in my 1000 years of predictions'
      image = 'Smile.jpg'
      color = 'text-success'
      break
    case 7:
      answer = 'You wish'
      image = 'Bunny.jpg'
      color = 'text-danger'
      break
    default:
      break
  }

  const responseText = document.getElementById('response-text')
  responseText.innerText = answer
  responseText.classList = `display-4 ${color}`
  document.getElementById('response-image').src = image

}
