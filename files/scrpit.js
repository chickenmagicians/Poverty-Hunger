



document.getElementById('find').onclick = ()=>{
    console.log('running')
  navigator.geolocation.getCurrentPosition((location)=>{
    fetch(`https://v3.openstates.org/people.geo?apikey=163156ce-dd8d-43b9-93af-b1df1325bb61&lat=${location.coords.latitude}&lng=${location.coords.longitude}`, {
      method: 'GET',
      }).then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        document.getElementById('output').innerHTML = data.results[0].name+': '+data.results[0].party;
      })
      .catch(error => console.log(error))
  })
  }