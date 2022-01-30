const buttonClick=document.getElementById('click')
const image=document.createElement('img')
const url1='https://pixy.org/src/20/thumbs350/201310.jpg'
const url2='https://img.xcitefun.net/users/2014/07/360840,xcitefun-jiuzhaigou-national-park-1.jpeg'
const url3='https://img.xcitefun.net/users/2014/07/360832,xcitefun-jiuzhaigou-national-park-10.jpg'
const arr=[url1,url2,url3]
buttonClick.addEventListener('click',()=>{
  const randomImage=arr[Math.floor(Math.random()*arr.length)]
image.src=randomImage

document.body.appendChild(image)
})


//test 3
function fetchData(){
  fetch('https://reqres.in/api/users').then(res=>res.json())
  .then(res=>{
    for(let i=0;i<3;i++){
     console.log( res.data[i].first_name);
    }
  })
}
fetchData()

/test 4