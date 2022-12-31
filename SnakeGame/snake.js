var score = document.getElementById("score");
val = 0;

function init() {
  canvas = document.getElementById("mycanvas");
  W = H = canvas.width = canvas.height = 700;
  pen = canvas.getContext("2d");
  cs = 46;
  gameover = false;

  food = getRandomFood();

  snake = {
    init_len: 3,
    color: "greenyellow ",
    cells: [],
    direction: "right",
    cs: 50,

    createSnake: function () {
      for (var i = this.init_len; i > 0; i--) {
        this.cells.push({ x: i, y: 0 });
      }
    },

    drawSnake: function () {
      for (var i = 0; i < this.cells.length; i++) {
        pen.fillStyle = this.color;
        pen.fillRect(
          this.cells[i].x * cs,
          this.cells[i].y * cs,
          cs - 2,
          cs - 2
        );
      }
    },

    updateSnake: function () {
      //updating snake according to the direction
      //if snake eaten food incrse len or generate new food
      var headX = this.cells[0].x;
      var headY = this.cells[0].y;

      if (headX == food.x && headY == food.y) {
        console.log("food eaten");
        food = getRandomFood();

        score.innerText = ++val;
      } else {
        this.cells.pop();
      }

      var nextX, nextY;

      if (this.direction == "right") {
        nextX = headX + 1;
        nextY = headY;
      } else if (this.direction == "left") {
        nextX = headX - 1;
        nextY = headY;
      } else if (this.direction == "down") {
        nextX = headX;
        nextY = headY + 1;
      } else {
        nextX = headX;
        nextY = headY - 1;
      }

      this.cells.unshift({ x: nextX, y: nextY });

      //game over logic
      var last_x = Math.round(W / cs);
      var last_y = Math.round(H);

      if (
        this.cells[0].y < 0 ||
        this.cells[0].x < 0 ||
        this.cell[0].x > last_x ||
        this.cells[0].y > last_y
      ) {
        gameover = true;
      }
    },
  };

  snake.createSnake();

  //Add  a event listener in document obj
  function keyPressed(e) {
    if (e.key == "ArrowRight") {
      snake.direction = "right";
    } else if (e.key == "ArrowLeft") {
      snake.direction = "left";
    } else if (e.key == "ArrowDown") {
      snake.direction = "down";
    } else {
      snake.direction = "up";
    }
    console.log(snake.direction);
  }
  document.addEventListener("keydown", keyPressed);
}

function draw() {
  //earsing the old frame
  pen.clearRect(0, 0, W, H);
  snake.drawSnake();
  pen.fillStyle = food.color;
  pen.fillRect(food.x * cs, food.y * cs, cs, cs);
}

function update() {
  snake.updateSnake();
}

function getRandomFood() {
  var foodX = Math.round((Math.random() * (W - cs)) / cs);
  var foodY = Math.round((Math.random() * (H - cs)) / cs);

  var food = {
    x: foodX,
    y: foodY,
    color: "red",
  };

  return food;
}

function gameloop() {
  if (gameover == true) {
    clearInterval(f);
    alert("game over");
  }
  draw();
  update();
}

document.getElementById("start").addEventListener("click", init);

var f = setInterval(gameloop, 200);