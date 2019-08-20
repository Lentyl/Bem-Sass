 let h2 = document.querySelectorAll('.main__article-header');
 const searchInput = document.querySelector('.header__input');

 h2 = [...h2];


 deletingArticle = () => {

 }



 searchInput.addEventListener('input', (e) => {
     let inputValue = e.target.value

     h2.forEach(h2 => {



         const number = h2.textContent.toLocaleLowerCase().search(inputValue.toLocaleLowerCase())

         if (number === 0) {
             h2.textContent

             console.log(h2.parentNode);
             h2.parentNode.setAttribute('class', 'main__article-container--active');
         }
         if (number === -1) {
             h2.parentNode.setAttribute('class', 'main__article-container');
         }


     })
 })