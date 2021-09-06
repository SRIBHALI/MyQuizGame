class Question {

  constructor() {
    this.title = createElement('h1')
   // this.input1 = createInput("Enter Your Name Here....");
   this.input1= createInput("").attribute("placeholder", "Enter your name");

   //Create a input box to enter the number
   this.title = createElement('h1')
   this.input2= createInput("").attribute("placeholder", "Enter your answer");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    
    this.answer = createElement("h4");
    this.answer2 = createElement("h4");
    this.answer3 = createElement("h4");
    this.answer4 = createElement("h4");


    this.message = createElement("h3")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

     
    //Create html() and position() for each question, input and answers.
    this.question.html("QUESTION:-Which gas is known as “Laughing gas” ?");
     this.question.position(130,80);

     this.answer.html("1: Helium");
     this.answer.position(130,110);

     this.answer2.html("2: Oxygen");
     this.answer2.position(130,140)

     this.answer3.html("3: Nitrous Oxide");
     this.answer3.position(130,170)

     this.answer4.html("4: Carbon Dioxide");
     this.answer4.position(130,200)


    this.input1.position(150, 270);
    this.button.position(325, 300);
    this.input2.position(380,270);

    this.message.position(550,300);
 

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      var message = `
      Hello ${this.input1.value()}
      </br>The correct answer is-Nitrous Oxide...
     </br> Thanks for playing`;
      this.message.html(message);
      
    })


  }
}
