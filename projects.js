document.addEventListener('DOMContentLoaded', () => {
   show()
   show2()
})
function show() {
      let info = document.getElementById('info')
      if(info.style.display === "none") {
         info.style.display = "block"
      } else {
         info.style.display = "none"
      }
   }

function show2() {
      let info2 = document.getElementById('info2')
      if(info2.style.display === "none") {
         info2.style.display = "block"
      } else {
         info2.style.display = "none"
      }
   }













