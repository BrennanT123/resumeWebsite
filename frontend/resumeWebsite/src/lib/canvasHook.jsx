import React from "react";
import { useRef, useEffect } from "react";

const maxSpeed = 5;
const maxDistanceBeforeExcited = 200;
const numberOfCircles = 150;
const colorArray = [
  "rgba(15, 194, 192, .75)",
  "rgba(12, 171, 168, .5)",
  "rgba(0, 143, 140, .6)",
  "rgba(2, 53, 53, .3)",
];

export function useCircles(canvasRef, mouseRef, containerRef) {
  const circlesRef = useRef([]);
  const animationRef = useRef();
  const contextRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas) return;
    //setup the canvas
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    contextRef.current = canvas.getContext("2d");

    //initialize function
    function init() {
      let circleArray = [];
      for (let i = 0; i < numberOfCircles; i++) {
        const r = 3;
        const x = Math.random() * (canvas.width - r * 2) + r;
        const dx = (Math.random() - 0.5) * maxSpeed;
        const y = Math.random() * (canvas.height - r * 2) + r;
        const dy = (Math.random() - 0.5) * maxSpeed;
        const color = colorArray[Math.floor(Math.random() * 5)];

        //creates the circles
        const circle = CreateCircle(
          x,
          y,
          dx,
          dy,
          r,
          color,
          false,
          dx,
          dy,
          canvas
        );
        circleArray.push(circle);
      }
      circlesRef.current = circleArray;
    }

    //this function
    // returns all the functions and variables for the circles.
    // Equivalent to the Circles class in vanilla JS version you made.
    function CreateCircle(
      x,
      y,
      dx,
      dy,
      r,
      color,
      isExcited,
      naturaldx,
      naturaldy,
      canvas
    ) {
      return {
        x,
        y,
        dx,
        dy,
        r,
        isExcited,
        naturaldx,
        naturaldy,
        color,
        draw() {
          //this function draws the circles
          contextRef.current.beginPath();
          contextRef.current.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
          contextRef.current.fillStyle = this.color;
          contextRef.current.fill();
        },
        update() {
          //this function updates the circles then calls the draw function.

          //bounces off the walls
          if (this.x > canvas.width - this.r || this.x - this.r < 0) {
            this.dx = -this.dx;
          }

          if (this.y + this.r > canvas.height || this.y - this.r < 0) {
            this.dy = -this.dy;
          }

          //moves
          this.x += this.dx;
          this.y += this.dy;

          //checks how close they are to the mouse
          const distX = mouseRef.current.x - this.x;
          const distY = mouseRef.current.y - this.y;

          const closeX = Math.abs(distX) < maxDistanceBeforeExcited;
          const closeY = Math.abs(distY) < maxDistanceBeforeExcited;

          //have them move away if youre nearby
          if (closeX && closeY) {
            if (!this.isExcited) {
              if (
                Math.abs(mouseRef.current.y - this.y + this.dy) <
                  Math.abs(mouseRef.current.y - this.y - this.dy) &&
                this.isExcited === false
              ) {
                this.dy = -this.dy * 10;
                this.isExcited = true;
              } else {
                this.dy = this.dy * 10;
                this.isExcited = true;
              }
              if (
                Math.abs(mouseRef.current.x - this.x + this.dx) <
                  Math.abs(mouseRef.current.y - this.y - this.dy) &&
                this.isExcited === false
              ) {
                this.dx = -this.dx * 10;
                this.isExcited = true;
              } else {
                this.dx = this.dx * 10;
                this.isExcited = true;
              }
            }
          } else if (this.isExcited === true) {
            this.isExcited = false;
            this.dx = this.naturaldx;
            this.dy = this.naturaldy;
          }

          this.draw();
        },
      };
    }

    //function for connecting the circles with lines
    function drawLineIfClose(circle1, circle2) {
      if (
        circle1.x - circle2.x < maxDistanceBeforeExcited &&
        circle1.x - circle2.x > -maxDistanceBeforeExcited &&
        circle1.y - circle2.y < maxDistanceBeforeExcited &&
        circle1.y - circle2.y > -maxDistanceBeforeExcited
      ) {
        contextRef.current.beginPath();
        contextRef.current.moveTo(circle1.x, circle1.y);
        contextRef.current.lineTo(circle2.x, circle2.y);
        contextRef.current.strokeStyle = circle1.color;
        contextRef.current.stroke();
      }
    }

    //animation setup function
    //this function is recursive
    //it calls itself so the canvas continuously updates.

    function animate() {
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      //runs this update every time the animation function is called
      circlesRef.current.forEach((circle, index) => {
        circle.update();
        for (let i = index + 1; i < circlesRef.current.length; i++) {
          drawLineIfClose(circle, circlesRef.current[i]);
        }
      });

      //animation function calls itself so it runs forever
      requestAnimationFrame(animate);
    }

    //Now here we finally call the init function and the animate function
    //This is what is being ran when the canvas mounts
    init();
    animate();

    //here we handle what happens if the screen is resized
    const handleResize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      init();
    };
    window.addEventListener("resize", handleResize);

    //and on the return (canvas unmounts)
    //it cancels the animation and unmounts the resize event listener
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };

    ///and it is depedent on the mouse changing and the cavasRefchanging.
  }, [mouseRef, canvasRef]);
}
