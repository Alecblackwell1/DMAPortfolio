          //Types of Operators
          //  () * / + - =
          //  == < > <= >=  
          //  & || !

          //Global
          let count = 0;
          let triRot = 45
          let GreenArmChange = false;
          let PurpArmChange = false;
          let LBlueHeadChange = false;
          let BlueLegChange = false;
          let OrangeLegChange = false;
          let TriHat = false;
          let tryOne;
          let Conf = [];
          let = cnv;


          function setup() {
            var cnv = createCanvas(800, 800);
            var x = (windowWidth - width) / 2;
            var y = (windowHeight - height) / 0.5;
            cnv.position(x, y);
            angleMode(DEGREES)

            tryOne = new Hat(2, 2, 0)

            for (let i = 0; i <= 50; i++) {
              Conf[i] = new Confetti(random(-width, width), -100, random(20, 100), random(10, 50));
            }
          }

          function draw() {

            background(211, 211, 211);

            text("Click to explore!", width / 2.5, height * 0.9)

            if (GreenArmChange == true) {
              RightGreenArm();
            }

            if (PurpArmChange == true) {
              LeftPurpArm();
            }

            if (LBlueHeadChange == true) {
              LightBlueHead();
            }

            if (BlueLegChange == true) {
              RightBlueLeg();
            }

            if (OrangeLegChange == true) {
              LeftOrangeLeg();
            }

            if (TriHat == true) {
              tryOne.display();
            }

            //Visual Areas to click for the body parts
            function MouseActivationAreas() {
              //   fill(255,0,255) //Purp arm
              //   rect(width*0.5,height*0.05,width*0.35);

              //   fill(0,255,0) //Green arm
              //   rect(width*0,height*0.05, width*0.35);

              //   fill(0,0, 180) //Head
              //   rect(width*0.35,height*0.3, width*0.15);

              //   fill(0,0,255) //Blue Leg
              //   rect(width*0,height*0.5, width*0.4);

              //   fill(255,165,0) //Orange Leg
              //   rect(width*0.45,height*0.5, width*0.4);

              //   fill(255,0,0) //Hat
              //   rect(width*0.35,height*0.15, width*0.15);  
            }

          }

          function mousePressed() {

            //Exodia
            if (PurpArmChange == true &&
              GreenArmChange == true &&
              LBlueHeadChange == true &&
              BlueLegChange == true &&
              OrangeLegChange == true &&
              TriHat == true
            ) {

              background(220);
              RightGreenArm();
              LeftPurpArm();
              LightBlueHead();
              RightBlueLeg();
              LeftOrangeLeg();

              tryOne.display();
              for (let i = 0; i <= 50; i++) {
                Conf[i].display();
                Conf[i].move();
              }
              count = count + 1
              if (count == 20) { //Once clicked 20 times, text will show in console
                console.log("Exodia the Pixeled One");
              }
              noLoop();
            }
            //Purple arm appears
            else if (mouseX > width * 0.5 &&
              mouseX < width * 0.85 &&
              mouseY > height * 0.05 &&
              mouseY < height * 0.35) {
              PurpArmChange = !PurpArmChange;
              console.log("Purple Arm!");
              loop();
            }
            //Green arm appears
            else if (mouseX > width * 0 &&
              mouseX < width * 0.35 &&
              mouseY > height * 0.05 &&
              mouseY < height * 0.4) {
              GreenArmChange = !GreenArmChange;
              console.log("Green Arm!");
              loop();
            }
            //Blue Head appears
            else if (mouseX > width * 0.3 &&
              mouseX < width * 0.55 &&
              mouseY > height * 0.3 &&
              mouseY < height * 0.45) {
              LBlueHeadChange = !LBlueHeadChange;
              console.log("LBlue Head!");
              loop();
            }
            //Green arm appears
            else if (mouseX > width * 0 &&
              mouseX < width * 0.4 &&
              mouseY > height * 0.5 &&
              mouseY < height * 0.85) {
              BlueLegChange = !BlueLegChange;
              console.log("Blue Leg!");
              loop();
            }
            //Orange Leg appears 
            else if (mouseX > width * 0.45 &&
              mouseX < width * 0.85 &&
              mouseY > height * 0.5 &&
              mouseY < height * 0.85) {
              OrangeLegChange = !OrangeLegChange;
              console.log("Orange Leg!");
              loop();
            }
            //Hat appears
            else if (mouseX > width * 0.3 &&
              mouseX < width * 0.55 &&
              mouseY > height * 0.2 &&
              mouseY < height * 0.3) {
              TriHat = !TriHat;
              console.log("TriHat!");
              loop();
            }



          }

          function RightGreenArm() {

            push();
            //Green Squares - Right Arm
            fill(0, 110, 0, 200);
            square(width * 0.35, height * 0.2, width * 0.05);
            square(width * 0.3, height * 0.2, width * 0.05);
            square(width * 0.3, height * 0.25, width * 0.05);
            square(width * 0.3, height * 0.3, width * 0.05);
            square(width * 0.35, height * 0.3, width * 0.05);
            square(width * 0.35, height * 0.35, width * 0.05);
            square(width * 0.4, height * 0.35, width * 0.05);
            square(width * 0.4, height * 0.4, width * 0.05);
            square(width * 0.45, height * 0.4, width * 0.05);
            pop();

          }

          function LeftPurpArm() {
            push();
            //Purple Squares - Left Arm
            fill(124, 12, 94, 200);
            square(width * 0.5, height * 0.4, width * 0.05);
            square(width * 0.5, height * 0.35, width * 0.05);
            square(width * 0.5, height * 0.3, width * 0.05);
            square(width * 0.55, height * 0.3, width * 0.05);
            square(width * 0.6, height * 0.3, width * 0.05);
            square(width * 0.65, height * 0.3, width * 0.05);
            square(width * 0.65, height * 0.25, width * 0.05);
            square(width * 0.7, height * 0.25, width * 0.05);
            square(width * 0.7, height * 0.2, width * 0.05);
            pop();



          }

          function LightBlueHead() {
            push();
            //Light Blue Squares - Head
            fill(0, 70, 200, 200);
            square(width * 0.45, height * 0.4, width * 0.05);
            square(width * 0.4, height * 0.4, width * 0.05);
            square(width * 0.35, height * 0.4, width * 0.05);
            square(width * 0.35, height * 0.35, width * 0.05);
            square(width * 0.35, height * 0.3, width * 0.05);
            square(width * 0.40, height * 0.3, width * 0.05);
            square(width * 0.45, height * 0.3, width * 0.05);
            // square(width * 0.25, height * 0.25, width*0.05);//Rest of the head vv
            // square(width * 0.3, height * 0.25, width*0.05);
            // square(width * 0.3, height * 0.2, width*0.05);
            pop();
          }

          function RightBlueLeg() {
            push();
            //Blue Squares (Right leg)
            fill(0, 0, 150, 200);
            square(width * 0.45, height * 0.45, width * 0.05);
            square(width * 0.45, height * 0.5, width * 0.05);
            square(width * 0.4, height * 0.5, width * 0.05);
            square(width * 0.35, height * 0.5, width * 0.05);
            square(width * 0.30, height * 0.5, width * 0.05);
            square(width * 0.30, height * 0.55, width * 0.05);
            square(width * 0.30, height * 0.6, width * 0.05);
            square(width * 0.30, height * 0.65, width * 0.05);
            square(width * 0.25, height * 0.65, width * 0.05);
            pop();
          }

          function LeftOrangeLeg() {
            push();
            //Orange Squares (Left leg)
            fill(255, 172, 28, 200);
            square(width * 0.45, height * 0.45, width * 0.05);
            square(width * 0.4, height * 0.45, width * 0.05);
            square(width * 0.4, height * 0.5, width * 0.05);
            square(width * 0.4, height * 0.55, width * 0.05);
            square(width * 0.4, height * 0.6, width * 0.05);
            square(width * 0.45, height * 0.6, width * 0.05);
            square(width * 0.5, height * 0.6, width * 0.05);
            square(width * 0.55, height * 0.6, width * 0.05);
            square(width * 0.6, height * 0.6, width * 0.05);
            square(width * 0.6, height * 0.65, width * 0.05);
            square(width * 0.65, height * 0.65, width * 0.05);
            square(width * 0.7, height * 0.65, width * 0.05);
            pop();
          }