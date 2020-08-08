package TicTacToeGUI;

import processing.core.PApplet;

public class Box {
    private final PApplet p;
    private final int boxNumber;
    private final int topCornerX;
    private final int topCornerY;
    private final int boxSize;
    private final CenterPoint centerPoint;
    private final float centerX;
    private final float centerY;
    private GamePiece boxPiece;
    public boolean available;
    private int r;
    private int g;
    private int b;

    public Box(PApplet p, int boxNumber, int topCornerX, int topCornerY, int boxSize, Integer xo) {
        this.p = p;
        this.boxNumber = boxNumber;
        this.topCornerX = topCornerX;
        this.topCornerY = topCornerY;
        this.boxSize = boxSize;
        centerPoint = new CenterPoint(p, topCornerX, topCornerY, boxSize);
        centerX = centerPoint.getCenterX();
        centerY = centerPoint.getCenterY();
        available = true;
    }

    public boolean mouseInBox() {
        return (p.mouseX >= topCornerX && p.mouseX < topCornerX + boxSize && p.mouseY >= topCornerY && p.mouseY < topCornerY + boxSize);
    }

    public void draw(int r, int g, int b) {
        this.r = r;
        this.g = g;
        this.b = b;
        if (!available)
            boxPiece.draw(r, g, b);
    }

    public void mouseClickedInBox(int currentPlayer) {
        if (available) {
            layDownFixedGamePiece(currentPlayer);
            makeBoxNotAvailable();
        } else {
            System.out.println("Box already filled.  Please select a different box.");
        }
    }

        private void layDownFixedGamePiece(int currentPlayer) {
            if (currentPlayer == 1)
                boxPiece = new GamePiece(p, centerX, centerY, 1);
            else {
                boxPiece = new GamePiece(p, centerX, centerY, 2);
            }
        }

        private void makeBoxNotAvailable() {
            available = false;
        }

        public int getBoxNumber() {
            return boxNumber;
        }
}
