//main_page javaScript

        
let authors = [{
    author: 'J.K. Rowling',
    numOfBooks: '10 Books',
    img: 'Media/Authors/rowling.JPG'
  },
  {
    author: 'Stephen King',
    numOfBooks: '61 Books',
    img: 'Media/Authors/king.JPG'
  },
  {
    author: 'Danielle Steel',
    numOfBooks: '179 Books',
    img: 'Media/Authors/danielle.JPG'
  }];
  
  
  
  function renderAuthors(){
    document.getElementById('authorImg1').src = authors[0].img;
    document.getElementById('authorName1').innerHTML = authors[0].author;
    document.getElementById('numOfBooks1').innerHTML = authors[0].numOfBooks;
  
    document.getElementById('authorImg2').src = authors[1].img;
    document.getElementById('authorName2').innerHTML = authors[1].author;
    document.getElementById('numOfBooks2').innerHTML = authors[1].numOfBooks;
  
    document.getElementById('authorImg3').src = authors[2].img;
    document.getElementById('authorName3').innerHTML = authors[2].author;
    document.getElementById('numOfBooks3').innerHTML = authors[2].numOfBooks;
  }
  renderAuthors();


  let booksRead = [
    {
        bookImageSrc: 'Media/Books/harrypotter.PNG',
        nameOfBook: 'Harry Potter And The Sorceres Stone',
        details: '193 page - Chapter 13 - Last Read',
    },
    {
        bookImageSrc: 'Media/Books/waterDancer.PNG',
        nameOfBook: 'TA Mehisi Goates The water Dancer',
        details: 'New Purchase - Yet to Read',
    },
    {
        bookImageSrc: './Media/Books/father.JPG',
        nameOfBook: 'The Life Of Father and Son',
        details: '125 page - 6 chapter - last read',
    },
    
  ];
  
  
  function renderbooksRead(){
    document.getElementById('bookread1img').src = booksRead[0].bookImageSrc;
    document.getElementById('BookName1').innerHTML = booksRead[0].nameOfBook;
    document.getElementById('details1').innerHTML = booksRead[0].details;
  
    document.getElementById('bookread2img').src = booksRead[1].bookImageSrc;
    document.getElementById('BookName2').innerHTML = booksRead[1].nameOfBook;
    document.getElementById('details2').innerHTML = booksRead[1].details;
  
    document.getElementById('bookread3img').src = booksRead[2].bookImageSrc;
    document.getElementById('BookName3').innerHTML = booksRead[2].nameOfBook;
    document.getElementById('details3').innerHTML = booksRead[2].details;
  
  
   
  }
  renderbooksRead();
  
  let newBooks = [
    {    img: 'Media/Books/glassHotel.JPG',
        bookname: 'The Glss Hotel',
        author: 'Emily St.John',
        category: "Mystery"
    },
    {
        img: 'Media/Books/loggings.JPG',
        bookname: 'The Book of Logings',
        author: 'Sue Monk',
        category: 'Fiction'
    },
    {
        img: 'Media/Books/darling.JPG',
        bookname: 'Darling Rose Gold',
        author: 'Stephanie Wrobel',
        category: 'Thriller'
    },
    {
        img: 'Media/Books/darkvaennsa.JPG',
        bookname: 'My Dark Vanessa',
        author: 'My Dark vanessa',
        category: 'Mystery'
    },
    {
        img: 'Media/Books/weather.JPG',
        bookname: 'Weather',
        author: 'Jenny Offil',
        category: 'Mystery'
    },
  ];
  
  
  function renderNewBooks()
  {
  
    document.getElementById('bookImg1').src = newBooks[0].img;
    document.getElementById('bookName1').innerHTML = newBooks[0].bookname;
    document.getElementById('nameOfAuthor1').innerHTML = newBooks[0].author;
    document.getElementById('Category1').innerHTML = newBooks[0].category;
  
    document.getElementById('bookImg2').src = newBooks[1].img;
    document.getElementById('bookName2').innerHTML = newBooks[1].bookname;
    document.getElementById('nameOfAuthor2').innerHTML = newBooks[1].author;
    document.getElementById('Category2').innerHTML = newBooks[1].category;
  
    document.getElementById('bookImg3').src = newBooks[2].img;
    document.getElementById('bookName3').innerHTML = newBooks[2].bookname;
    document.getElementById('nameOfAuthor3').innerHTML = newBooks[2].author;
    document.getElementById('Category3').innerHTML = newBooks[2].category;
  
    document.getElementById('bookImg4').src = newBooks[3].img;
    document.getElementById('bookName4').innerHTML = newBooks[3].bookname;
    document.getElementById('nameOfAuthor4').innerHTML = newBooks[3].author;
    document.getElementById('Category4').innerHTML = newBooks[3].category;
  
    document.getElementById('bookImg5').src = newBooks[4].img;
    document.getElementById('bookName5').innerHTML = newBooks[4].bookname;
    document.getElementById('nameOfAuthor5').innerHTML = newBooks[4].author;
    document.getElementById('Category5').innerHTML = newBooks[4].category;
  }
  renderNewBooks();
  
 
  
  