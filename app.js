const settings = { 
  video: true
}

navigator.mediaDevices.getUserMedia(settings)
  .then(stream => {
    const video = document.getElementById('video')
    video.srcObject = stream
    video.play()
  })
  .catch(err => {
      console.log(err)
      alert('Não há permissões para acessar a webcam.')
  })
