function sendData() {
  let mail = document.getElementById('mail').value;
  let msg = document.getElementById('msg').value;

  let userdata = {
    mail,
    msg
  }
  console.log(userdata);

  fetch('http://localhost:3000/form',{
    method:'GET',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userdata)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // document.getElementById('root').innerHTML = `${data.message} ${data.user}`
  })
  .catch(e => console.log(e))
}
