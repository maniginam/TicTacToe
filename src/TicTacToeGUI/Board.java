package TicTacToeGUI;

import processing.core.PApplet;

public class Board {
    private final PApplet p;
    private final int width;
    private final int height;
    private final int boxCount;
    private final int boxSize;
    private int turnCount;
    private GamePiece[] gamePieces;
    private int currentPlayer;
    private int playing;
    private float xPosition;
    private float yPosition;
    private Box[] boxes;
    private int boxOne;
    private int boxTwo;
    private int boxThree;

    public Board(PApplet p, int width, int height) {
        this.p = p;
        this.width = width;
        this.height = height;
        boxCount = 9;
        boxSize = width / 3;
        playing = 0;
        turnCount = 0;
        boxes = new Box[boxCount];
        gamePieces = new GamePiece[boxCount];
        createBoxes();
    }

        private void createBoxes() {
            int topCornerX = 50;
            int topCornerY = 50;

            for (int boxNumber = 0; boxNumber < boxCount; boxNumber++) {
                //            is it better to put the boxes[boxNumber] after the if as it is
                //            or flip it around and eliminate the if (boxNumber == 0)
                if (boxNumber == 0) {
                    topCornerX = 50;
                    topCornerY = 50;
                } else if (boxNumber == 3 | boxNumber == 6) {
                    topCornerX = 50;
                    topCornerY = topCornerY + boxSize;
                } else {
                    topCornerX = topCornerX + boxSize;
                }
                boxes[boxNumber] = new Box(p, boxNumber, topCornerX, topCornerY, boxSize, null);
            }
        }

    public void newGame() {
        playing = 1;
        currentPlayer = 1;
        gamePieces[turnCount] = new GamePiece(p, xPosition, yPosition, currentPlayer);
    }

    public void update() {
        xPosition = p.mouseX;
        yPosition = p.mouseY;

        if (playing == 1)
            gamePieces[turnCount].update(xPosition, yPosition);

    }

    public void draw() {
        drawTicTacToeBoard();
        drawConsoleBoarder();

        if (playing == 1 && mouseOnBoard())
            gamePieces[turnCount].draw(0, 0, 0);

        for (Box b : boxes) {
            b.draw(0, 0, 0);
        }

        if (playing == 0 && turnCount > 0) {
            boxes[boxOne].draw(0, 255, 0);
            boxes[boxTwo].draw(0, 255, 0);
            boxes[boxThree].draw(0, 255, 0);
        }

    }

        public boolean mouseOnBoard() {
            return (p.mouseY < height + 100);
        }

        private void drawTicTacToeBoard() {
            p.stroke(0, 0, 0);
            p.strokeWeight(3);
            p.fill(255, 255, 255);
            p.rect(0, 0, 700, 700);
            p.line(50 + boxSize, 50, boxSize + 50, height + 50);
            p.line(boxSize * 2 + 50, 50, boxSize * 2 + 50, height + 50);
            p.line(50, boxSize + 50, width + 50, boxSize + 50);
            p.line(50, boxSize * 2 + 50, width + 50, boxSize * 2 + 50);
        }
        private void drawConsoleBoarder() {
            p.strokeWeight(0);
            p.fill(200, 200, 200);
            p.rect(0, 701, 700, 800);
        }

    public Box[] getBoxes() {
        return boxes;
    }

    public void updateGameStats(int playing, int turnCount, int currentPlayer) {
        this.playing = playing;
        this.turnCount = turnCount;
        this.currentPlayer = currentPlayer;
        gamePieces[turnCount] = new GamePiece(p, xPosition, yPosition, currentPlayer);
    }
    public void showWinningTriple(int boxOne, int boxTwo, int boxThree) {
        this.boxOne = boxOne;
        this.boxTwo = boxTwo;
        this.boxThree = boxThree;
    }
}
